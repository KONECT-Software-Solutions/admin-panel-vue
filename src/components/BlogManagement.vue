<template>
	<div>
		<DeleteModal
			:show="showDeleteModal"
			@close="showDeleteModal = false"
			@delete="handleDelete" />
		<BlogModalEdit
			:show="showEditModal"
			@close="showEditModal = false"
			@updateBlog="handleUpdate"
			:editBlogData="editBlogData" />

		<BlogCards
			:totalBlogs="totalBlogs"
			:totalBlogView="totalBlogView"
			:blogsCategorySummary="blogsCategorySummary" />

		<shadow-box class="p-6">
			<div class="flex justify-between mb-4 items-start">
				<h1 class="font-medium">Blog Yönetimi</h1>
				<button
					@click="emits('goAddBlog')"
					class="bg-green-600 text-white px-4 py-1 font-medium rounded">
					+ Ekle
				</button>
			</div>
			<form action="" class="flex items-center mb-4">
				<div class="relative w-full mr-2">
					<input
						v-model="searchTerm"
						type="text"
						class="py-2 pr-4 pl-10 bg-gray-100 w-full shadow-md shadow-black/5 outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
						placeholder="Başlığa göre ara..." />
					<i
						class="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>
				</div>
			</form>
			<table
				v-if="blogsData?.length"
				class="w-full mt-4 table-fixed">
				<thead>
					<tr>
						<th
							class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-black px-4 py-2  bg-gray-100 text-left ">
							Başlık
						</th>
						<th
							class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-black px-4 py-2   bg-gray-100 text-left">
							Yazar
						</th>
						<th
							class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-black px-4 py-2  bg-gray-100 text-left">
							Yaratılma Tarihi
						</th>
						<th
							class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-black px-4 py-2  bg-gray-100 text-left">
							Kategori
						</th>
						<th
							class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-black px-4 py-2  bg-gray-100 text-left">
							Değiştirilme Tarihi
						</th>
						<th
							class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-black px-4 py-2  bg-gray-100 text-left">
							Aksiyonlar
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="blog in paginatedItems" :key="blog.id">
						<td class="py-4 px-4 border-b border-b-gray-200">
							<div class="flex items-center">
								<a
									href="#"
									class="text-gray-600 text-sm font-medium hover:text-blue-500 truncate">
									{{
										blog.title && blog.title.length > 27
											? blog.title.substring(0, 27) + "..."
											: blog.title || ""
									}}
								</a>
							</div>
						</td>
						<td class="py-4 px-4 border-b border-b-gray-200">
							<span class="text-[13px] font-medium text-gray-600">{{
								blog.author || ""
							}}</span>
						</td>
						<td class="py-4 px-4 border-b border-b-gray-200">
							<span class="text-[13px] font-medium text-gray-600">{{
								blog.created_date
							}}</span>
						</td>
						<td class="py-4 px-4 border-b border-b-gray-200">
							<div class="flex space-x-5">
								<span class="text-[13px] font-medium text-gray-600">{{
									blog.category
								}}</span>
							</div>
						</td>
						<td class="py-4 px-4 border-b border-b-gray-200">
							<div class="flex space-x-5">
								<span class="text-[13px] font-medium text-gray-600">{{
									blog.updated_date
								}}</span>
							</div>
						</td>
						<td
							class="py-4 px-4 border-b border-b-gray-200 flex justify-between">
							<div class="button-container relative flex flex-row gap-1">
								<button
									@click="toggleEdit(blog)"
									class="ri-edit-line text-lg bg-orange-400 hover:bg-gray-900 text-white font-bold px-2 rounded"></button>
								<button
									@click="openURL(blog.url)"
									class="ri-eye-line text-lg bg-green-500 hover:bg-gray-900 text-white font-bold px-2 rounded"></button>
								<button
									@click="confirmDelete(blog.id)"
									id="delete-blog-modal-button"
									class="ri-delete-bin-6-line text-lg bg-red-700 hover:bg-gray-900 text-white font-bold px-2 rounded"></button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="pagination-container flex justify-end mt-4 w-full">
				<button
					@click="prevPage"
					:disabled="currentPage === 1"
					class="ri-arrow-left-fill h-8 px-4 m-2 text-l text-white transition-colors duration-150 bg-gray-800 rounded-lg focus:shadow-outline hover:bg-indigo-800"></button>
				<button
					@click="nextPage"
					:disabled="currentPage === totalPages"
					class="ri-arrow-right-fill h-8 px-4 m-2 text-l text-white transition-colors duration-150 bg-gray-800 rounded-lg focus:shadow-outline hover:bg-indigo-800"></button>
			</div>
		</shadow-box>
	</div>
</template>

<script setup>
import DeleteModal from "../components/DeleteModal.vue";
import BlogModalEdit from "../components/BlogModalEdit.vue";
import BlogCards from "../components/BlogCards.vue";

import {
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	updateDoc,
	doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { onMounted, ref, computed, watch } from "vue";
import ShadowBox from "../components/container/ShadowBox.vue";
import { defineEmits } from "vue";
import { customSortByDate } from "../utils";

const showEditModal = ref(false);
const showDeleteModal = ref(false);
let blogIdToDelete = null;
const editBlogData = ref(null);

const emits = defineEmits(["goAddBlog"]);

function toggleEdit(blog) {
	showEditModal.value = true;
	editBlogData.value = blog;
	console.log(editBlogData.value.created_date);
	console.log("blog id to edit", blog.id);
}

function confirmDelete(blogId) {
	blogIdToDelete = blogId;
	showDeleteModal.value = true;
}

const blogRef = collection(db, "blogs");
const blogsData = ref([]);

const totalBlogs = computed(() => blogsData.value.length);
const totalBlogView = ref(324);
const currentPage = ref(1);
const itemsPerPage = ref(10);

const searchTerm = ref("");

// Computed property to filter blogs based on the search term
const filteredBlogs = computed(() => {
	if (!searchTerm.value) {
		return blogsData.value;
	} else {
		return blogsData.value.filter((blog) =>
			blog.title.toLowerCase().includes(searchTerm.value.toLowerCase())
		);
	}
});

// log the filtered blogs every time the searchTerm changes
// watch(searchTerm, (newVal) => {
//  console.log("Filtered blogs:", filteredBlogs.value);
// });

// Computed property to calculate the start index of the current page
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);

const paginatedItems = computed(() => {
	if (filteredBlogs.value.length === 0) {
		const start = startIndex.value;
		const end = start + itemsPerPage.value;
		return blogsData.value.slice(start, end);
	} else {
		return filteredBlogs.value.slice(
			startIndex.value,
			startIndex.value + itemsPerPage.value
		);
	}
});

// Computed property to calculate the total number of pages
const totalPages = computed(() => {
	if (filteredBlogs.value.length === 0) {
		return Math.ceil(blogsData.value.length / itemsPerPage.value);
	} else {
		return Math.ceil(filteredBlogs.value.length / itemsPerPage.value);
	}
});

const blogsCategorySummary = computed(() => {
	const category = {};
	blogsData.value.forEach((blog) => {
		if (category[blog.category]) {
			category[blog.category]++;
		} else {
			category[blog.category] = 1;
		}
	});
	return category;
});

// Method to go to the previous page
const prevPage = () => {
	if (currentPage.value > 1) {
		currentPage.value--;
	}
};

// Method to go to the next page
const nextPage = () => {
	if (currentPage.value < totalPages.value) {
		currentPage.value++;
	}
};

// Utility function to load blogs data
async function fetchBlogs() {
	let blogs = [];
	const querySnapshot = await getDocs(blogRef);
	for (const doc of querySnapshot.docs) {
		let docData = doc.data();
		docData.id = doc.id;
		const commentsRef = collection(db, "blogs", doc.id, "comments");
		const commentData = [];
		const commentsSnapshot = await getDocs(commentsRef);
		commentsSnapshot.docs.forEach((commentDoc) => {
			commentData.push(commentDoc.data());
		});
		docData.comments = commentData;
		blogs.push(docData);
	}
	// for each blog created_date = formatDate(blog.created_date)
	blogs = blogs.map((blog) => {
		return {
			...blog,
			created_date: formatDate(blog.created_date),
			updated_date: formatDate(blog.updated_date),
		};
	});
	return blogs;
}

// Checking and setting local storage
async function getAllBlogs() {
	try {
		// Check if data exists and is not expired
		const cachedBlogs = localStorage.getItem("cachedBlogs");
		const cachedTimeBlogs = localStorage.getItem("cachedTimeBlogs");
		const expiryTime = 30 * 60 * 1000; // 30 minutes expiration time

		if (
			cachedBlogs &&
			cachedTimeBlogs &&
			new Date() - new Date(parseInt(cachedTimeBlogs)) < expiryTime
		) {
			return JSON.parse(cachedBlogs);
		} else {
			const blogs = await fetchBlogs();
			localStorage.setItem("cachedBlogs", JSON.stringify(blogs));
			localStorage.setItem("cachedTimeBlogs", new Date().getTime().toString());
			return blogs;
		}
	} catch (error) {
		console.error("Error getting blogs with comments:", error);
		return [];
	}
}
function formatDate(timestamp) {
	if (!timestamp) return "";
	if (timestamp.seconds) {
		// Firestore timestamp
		const date = new Date(timestamp.seconds * 1000);
		return date.toLocaleDateString("tr-TR");
	}
	if (typeof timestamp === "string") {
		// Already formatted string
		return timestamp;
	}
	const date = new Date(timestamp); // Fallback for any other case
	return date.toLocaleDateString("tr-TR");
}

// Function to delete a blog by ID
async function handleDelete() {
	showDeleteModal.value = false;
	if (blogIdToDelete) {
		try {
			// Remove the blog from Firestore
			await deleteDoc(doc(db, "blogs", blogIdToDelete));

			// Update local blogsData by filtering out the deleted blog
			blogsData.value = blogsData.value.filter(
				(blog) => blog.id !== blogIdToDelete
			);

			// Update cachedBlogs in local storage
			localStorage.setItem("cachedBlogs", JSON.stringify(blogsData.value));

			console.log(`Blog with ID ${blogIdToDelete} deleted successfully.`);
		} catch (error) {
			console.error("Error deleting blog:", error);
		}
	}
}

async function addBlog(blogDataToAdd) {
	console.log("Received new blog data:", blogDataToAdd);

	// Perform actions with the received blog data, e.g., send to backend, update state, etc.
	// Calling the function to add the new blog post
	try {
		const docRef = await addDoc(blogRef, blogDataToAdd); // Ensure addDoc is awaited

		// Include the ID in the local copy of the blog data
		const newBlogWithId = {
			...blogDataToAdd,
			id: docRef.id,
			created_date: formatDate(blogDataToAdd.created_date), // This line formats the created_date
			updated_date: formatDate(blogDataToAdd.updated_date), // This line formats the updated_date
		};
		// Update local blogsData with the new blog including the ID
		blogsData.value = [newBlogWithId, ...blogsData.value];

		// Update cachedBlogs in local storage
		localStorage.setItem("cachedBlogs", JSON.stringify(blogsData.value));
	} catch (error) {
		console.error("Error adding document:", error);
	}
}

async function handleUpdate(blogDataToUpdate) {
	console.log("Received updated blog data:", blogDataToUpdate);

	try {
		await updateDoc(doc(db, "blogs", blogDataToUpdate.id), blogDataToUpdate); // Ensure updateDoc is awaited
		const updatedBlog = {
			...blogDataToUpdate,
			created_date: formatDate(blogDataToUpdate.created_date), // This line formats the created_date
			updated_date: formatDate(blogDataToUpdate.updated_date), // This line formats the updated_date
		};

		// Update local blogsData with the updated blog
		blogsData.value = blogsData.value.map((blog) => {
			if (blog.id === blogDataToUpdate.id) {
				return updatedBlog;
			} else {
				return blog;
			}
		});

		// Update cachedBlogs in local storage
		localStorage.setItem("cachedBlogs", JSON.stringify(blogsData.value));
	} catch (error) {
		console.error("Error updating document:", error);
	}
}

onMounted(async () => {
	getAllBlogs().then((data) => {
		data.sort(customSortByDate);
		blogsData.value = data;
	});
});
</script>
