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
			:blogDataToUpdate="blogDataToUpdate" />

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
										blog.title
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
								formatDate(blog.created_date)
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
									formatDate(blog.updated_date)
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
									@click="openURL(blog.slug, blog.id)"
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
					class="ri-arrow-left-fill border border-gray-800 h-8 px-2 m-2 text-xl text-black transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-gray-800 hover:text-white"></button>
					<button
					@click="nextPage"
					:disabled="currentPage === totalPages"
					class="ri-arrow-right-fill border border-gray-800 h-8 px-2 m-2 text-xl text-black transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-gray-800 hover:text-white"></button>
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
import { onMounted, ref, computed, watch, onUpdated } from "vue";
import ShadowBox from "../components/container/ShadowBox.vue";

const showEditModal = ref(false);
const showDeleteModal = ref(false);
let blogIdToDelete = null;
const blogDataToUpdate = ref(null);

const props = defineProps({
  blogsData: {
    type: Object,
    required: true
  },
  blogRef: {
	type: Object,
	required: true
  }
});
const blogRef = props.blogRef;

const emits = defineEmits(["goAddBlog", "deleteBlog", "updateBlog"]);

function formatDate(timestamp) {
  let date;
  
  // Handle Firestore Timestamp or JavaScript Date object
  if (timestamp && timestamp.seconds) {
    // Convert Firestore Timestamp to JavaScript Date object
    date = new Date(timestamp.seconds * 1000);
  } else if (timestamp instanceof Date) {
    date = timestamp;
  } else {
    return ""; // Return empty string if timestamp is invalid
  }

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function toggleEdit(blog) {
	showEditModal.value = true;
	blogDataToUpdate.value = blog;
	console.log(blogDataToUpdate.value.created_date);
	console.log("blog id to edit", blog.id);
}

function confirmDelete(blogId) {
	blogIdToDelete = blogId;
	showDeleteModal.value = true;
}

function handleDelete() {
	emits('deleteBlog', blogIdToDelete)
	showDeleteModal.value = false;
}

function handleUpdate(blogData) {
	emits('updateBlog', blogData);
	showEditModal.value = false;
}

const totalBlogs = computed(() => props.blogsData.length);
const totalBlogView = ref(324);
const currentPage = ref(1);
const itemsPerPage = ref(10);

const searchTerm = ref("");

// Computed property to filter blogs based on the search term
const filteredBlogs = computed(() => {
	if (!searchTerm.value) {
		return props.blogsData;
	} else {
		return props.blogsData.filter((blog) =>
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
		return props.blogsData.slice(start, end);
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
		return Math.ceil(props.blogsData.length / itemsPerPage.value);
	} else {
		return Math.ceil(filteredBlogs.value.length / itemsPerPage.value);
	}
});

const blogsCategorySummary = computed(() => {
	const category = {};
	props.blogsData.forEach((blog) => {
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

// Method to open the blog URL
const openURL = (slug, id) => {
	console.log("Opening blog URL:", slug, id);
	// http://localhost:5173/blog/:slug/:id

	window.open(`http://localhost:5173/blog/${slug}/${id}`, "_blank");
};

onMounted(async () => {
	console.log("Blogs data:", props.blogsData);
});

</script>
