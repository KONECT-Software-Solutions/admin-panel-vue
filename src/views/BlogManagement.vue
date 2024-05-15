<template>
  <BlogModalAdd
    :show="showBlogModal"
    @close="showBlogModal = false" 
    @addBlog="handleAddBlog"
  />
  <DeleteModal
    :show="showDeleteModal"
    @close="showDeleteModal = false"
    @delete="handleDelete"
  />
  <BlogModalEdit
    :show="showEditModal"
    @close="showEditModal = false"
    @updateBlog="handleUpdate"
    :editBlogData="editBlogData"
  />

  <AnalyticsCardTotal :length="blogDataLength" />

  <shadow-box class="p-6">
    <div class="flex justify-between mb-4 items-start">
      <h1 class="font-medium">Blog Yönetimi</h1>
      <button
        @click="showBlogModal = true"
        class="bg-green-700 text-white px-4 py-1 font-medium rounded"
      >
        + Ekle
      </button>
    </div>
    <form action="" class="flex items-center mb-4">
      <div class="relative w-full mr-2">
        <input
          v-model="searchTerm"
          type="text"
          class="py-2 pr-4 pl-10 bg-gray-100 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
          placeholder="Başlığa göre ara..."
        />
        <i
          class="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
        ></i>
      </div>
    </form>
    <table v-if="blogData?.length" class="w-full bg-gray-100 mt-6">
      <thead>
        <tr>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md"
          >
            Başlık
          </th>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left"
          >
            Yazar
          </th>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left"
          >
            Yaratılma Tarihi
          </th>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left"
          >
            Kategori
          </th>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left"
          >
            Değiştirilme  Tarihi
          </th>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left"
          >
            Aksiyonlar
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="blog in paginatedItems" :key="blog.id">
          <td class="py-2 px-4 border-b border-b-gray-50">
            <div class="flex items-center">
              <a
                href="#"
                class="text-gray-600 text-sm font-medium hover:text-blue-500 truncate"
                >    {{ (blog.title && blog.title.length > 27) ? blog.title.substring(0, 27) + '...' : blog.title || "" }}
              </a>
            </div>
          </td>
          <td class="py-2 px-4 border-b border-b-gray-50">
            <span class="text-[13px] font-medium text-gray-600">{{
              blog.author || ""
            }}</span>
          </td>
          <td class="py-2 px-4 border-b border-b-gray-50">
            <span class="text-[13px] font-medium text-gray-600">{{
              blog.created_date
            }}</span>
          </td>
          <td class="py-2 px-4 border-b border-b-gray-50">
            <div class="flex space-x-5">
              <span class="text-[13px] font-medium text-gray-600">{{blog.category}}</span>
            </div>
          </td>
          <td class="py-2 px-4 border-b border-b-gray-50">
            <div class="flex space-x-5">
              <span class="text-[13px] font-medium text-gray-600">{{ blog.updated_date }}</span>
            </div>
          </td>
          <td class="py-2 px-4 border-b border-b-gray-50 flex justify-between">
            <div class="button-container relative flex flex-row gap-1">
              <button
                @click="toggleEdit(blog)"
                class="ri-edit-line text-lg bg-orange-400 hover:bg-gray-900 text-white font-bold px-2 rounded"
              ></button>
              <button
                @click="openURL(blog.url)"
                class="ri-eye-line text-lg bg-green-700 hover:bg-gray-900 text-white font-bold px-2 rounded"
              ></button>
              <button
                @click="confirmDelete(blog.id)"
                id="delete-blog-modal-button"
                class="ri-delete-bin-6-line text-lg bg-red-700 hover:bg-gray-900 text-white font-bold px-2 rounded"
              ></button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination-container flex justify-end mt-4 w-full">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="ri-arrow-left-fill h-8 px-4 m-2 text-l text-white transition-colors duration-150 bg-gray-800 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      ></button>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="ri-arrow-right-fill h-8 px-4 m-2 text-l text-white transition-colors duration-150 bg-gray-800 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      ></button>
    </div>
  </shadow-box>
</template>
<script setup>
import BlogModalAdd from "../components/layout/BlogModalAdd.vue";
import DeleteModal from "../components/layout/DeleteModal.vue";
import BlogModalEdit from "../components/layout/BlogModalEdit.vue";
import AnalyticsCardTotal from "../components/layout/AnalyticsCardTotal.vue";

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

const showBlogModal = ref(false);
const showEditModal = ref(false);
const showDeleteModal = ref(false);
let blogIdToDelete = null;
const editBlogData = ref(null);

function toggleEdit(blog) {
  showEditModal.value = true;
  editBlogData.value = blog;
  console.log(editBlogData.value.created_date)
  console.log("blog id to edit", blog.id);
}

function openURL(url) {
  window.open(url, "_blank");
}

function confirmDelete(blogId) {
  blogIdToDelete = blogId;
  showDeleteModal.value = true;
}

const blogRef = collection(db, "blogs");
const blogData = ref([]);
const blogDataLength = computed(() => blogData.value.length);
const currentPage = ref(1);
const itemsPerPage = ref(10);

const searchTerm = ref("");

// Computed property to filter blogs based on the search term
const filteredBlogs = computed(() => {
  if (!searchTerm.value) {
    return blogData.value;
  } else {
    return blogData.value.filter((blog) =>
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
    return blogData.value.slice(start, end);
  }
  else {
    return filteredBlogs.value.slice(startIndex.value, startIndex.value + itemsPerPage.value);
  }
  
});



// Computed property to calculate the total number of pages
const totalPages = computed(() => {
  if (filteredBlogs.value.length === 0) {
    return Math.ceil(blogData.value.length / itemsPerPage.value);
  }
  else {
    return Math.ceil(filteredBlogs.value.length / itemsPerPage.value);
  }
});

// Method to go to the next page
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// Method to go to the previous page
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
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
    const cachedTime = localStorage.getItem("cachedTime");
    const expiryTime = 30 * 60 * 1000; // 30 minutes expiration time

    if (
      cachedBlogs &&
      cachedTime &&
      new Date() - new Date(parseInt(cachedTime)) < expiryTime
    ) {
      return JSON.parse(cachedBlogs);
    } else {
      const blogs = await fetchBlogs();
      localStorage.setItem("cachedBlogs", JSON.stringify(blogs));
      localStorage.setItem("cachedTime", new Date().getTime().toString());
      return blogs;
    }
  } catch (error) {
    console.error("Error getting blogs with comments:", error);
    return [];
  }
}
function formatDate(timestamp) {
  if (!timestamp) return '';
  if (timestamp.seconds) { // Firestore timestamp
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString("tr-TR");
  }
  if (typeof timestamp === 'string') { // Already formatted string
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

      // Update local blogData by filtering out the deleted blog
      blogData.value = blogData.value.filter(
        (blog) => blog.id !== blogIdToDelete
      );

      // Update cachedBlogs in local storage
      localStorage.setItem("cachedBlogs", JSON.stringify(blogData.value));

      console.log(`Blog with ID ${blogIdToDelete} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  }
}

async function handleAddBlog(blogDataToAdd) {
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
    // Update local blogData with the new blog including the ID
    blogData.value = [newBlogWithId, ...blogData.value];

    // Update cachedBlogs in local storage
    localStorage.setItem("cachedBlogs", JSON.stringify(blogData.value));
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

    // Update local blogData with the updated blog
    blogData.value = blogData.value.map((blog) => {
      if (blog.id === blogDataToUpdate.id) {
        return updatedBlog;
      } else {
        return blog;
      }
    });

    // Update cachedBlogs in local storage
    localStorage.setItem("cachedBlogs", JSON.stringify(blogData.value));
  } catch (error) {
    console.error("Error updating document:", error);
  }
}

// Custom sorting function
function customSortByDate(a, b) {
  // Convert date strings to Date objects for comparison
  var dateA = new Date(a.created_date.split('.').reverse().join('.'));
  var dateB = new Date(b.created_date.split('.').reverse().join('.'));
  
  // Compare the dates
  return dateB - dateA; // Sort in descending order
}

onMounted(async () => {
  getAllBlogs().then((data) => {
    // Sort the blog data by date in descending order
    data.sort(customSortByDate);
    blogData.value = data;
    blogDataLength.value = data.length;
  });
});
</script>
