<template>
  <BlogModal :show="showBlogModal" @close="showBlogModal = false" @addBlog="handleAddBlog"/>
  <DeleteModal :show="showDeleteModal" @close="showDeleteModal = false" @delete="handleDelete"/>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
    <div class="bg-gray-200 rounded-md border border-gray-300 p-6 shadow-md shadow-black/5">
      <div class="flex justify-between mb-6">
        <div>
          <div class="text-3xl font-semibold mb-1">
                10<span class="pl-2 font-medium text-gray-400">Blog Yazısı</span>
          </div>
        </div>
    </div>
      <div class="flex items-center">
        <div class="w-full bg-gray-100 rounded-full h-4">
          <div class="h-full bg-blue-500 rounded-full p-1" style="width: 60%">
            <div class="w-2 h-2 rounded-full bg-white ml-auto"></div>
          </div>
        </div>
        <span class="text-sm font-medium text-gray-600 ml-4">60%</span>
      </div>
    </div>

    <div
      class="bg-gray-200 rounded-md border border-gray-300 p-6 shadow-md shadow-black/5">
      <div class="flex justify-between mb-4">
        <div>
          <div class="flex items-center mb-1">
            <div class="text-2xl font-semibold">324</div>
            <div
              class="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
              +30%
            </div>
          </div>
          <div class="text-sm font-medium text-gray-400">Ziyaretçi</div>
        </div>
      </div>
      <div class="flex items-center">
        <img
          src="https://placehold.co/32x32"
          alt=""
          class="w-8 h-8 rounded-full object-cover block" />
        <img
          src="https://placehold.co/32x32"
          alt=""
          class="w-8 h-8 rounded-full object-cover block -ml-3" />
        <img
          src="https://placehold.co/32x32"
          alt=""
          class="w-8 h-8 rounded-full object-cover block -ml-3" />
        <img
          src="https://placehold.co/32x32"
          alt=""
          class="w-8 h-8 rounded-full object-cover block -ml-3" />
        <img
          src="https://placehold.co/32x32"
          alt=""
          class="w-8 h-8 rounded-full object-cover block -ml-3" />
      </div>
    </div>
    <div
      class="bg-gray-200 rounded-md border border-gray-300 p-6 shadow-md shadow-black/5">
      <div class="flex justify-between mb-6">
        <div>
          <div class="text-2xl font-semibold mb-1">45</div>
          <div class="text-sm font-medium text-gray-400">Yorumlar</div>
        </div>
      </div>
      <a href="#" class="text-blue-500 font-medium text-sm hover:text-blue-600"
        >Detayları gör.</a
      >
    </div>
  </div>
  <shadow-box class="p-6">
    <div class="flex justify-between mb-4 items-start">
      <h1 class="font-medium">Blog Yönetimi</h1>
      <button
        @click="showBlogModal = true"
        class="bg-green-700 text-white px-4 py-1 font-medium rounded">
        + Ekle
      </button>   
    </div>
    <form action="" class="flex items-center mb-4">
      <div class="relative w-full mr-2">
        <input
          type="text"
          class="py-2 pr-4 pl-10 bg-gray-100 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
          placeholder="Ara..." />
        <i
          class="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>
      </div>
    </form>
    <table v-if="blogData?.length" class="w-full bg-gray-100 mt-6">
      <thead>
        <tr>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
            Başlık
          </th>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left">
            Yazar
          </th>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left">
            Yaratılma Tarihi
          </th>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left">
            Column
          </th>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left">
            Column
          </th>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left">
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
                >{{ blog.title || "" }}</a
              >
            </div>
          </td>
          <td class="py-2 px-4 border-b border-b-gray-50">
            <span class="text-[13px] font-medium text-gray-600">{{
              blog.author || ""
            }}</span>
          </td>
          <td class="py-2 px-4 border-b border-b-gray-50">
            <span class="text-[13px] font-medium text-gray-600">{{
              formatDate(blog.created_date)
            }}</span>
          </td>
          <td class="py-2 px-4 border-b border-b-gray-50">
            <div class="flex space-x-5">
              <span class="text-[13px] font-medium text-gray-600">Data</span>
            </div>
          </td>
          <td class="py-2 px-4 border-b border-b-gray-50">
            <div class="flex space-x-5">
              <span class="text-[13px] font-medium text-gray-600">Data</span>
            </div>
          </td>
          <td class="py-2 px-4 border-b border-b-gray-50 flex justify-between">
            <div class="button-container relative flex flex-row gap-1">
              <button
                class="ri-edit-line text-lg bg-orange-400 hover:bg-gray-900 text-white font-bold px-2 rounded"></button>
              <button
                class="ri-eye-line text-lg bg-green-700 hover:bg-gray-900 text-white font-bold px-2 rounded"></button>
              <button
                @click="confirmDelete(blog.id)"
                id="delete-blog-modal-button"
                class="ri-delete-bin-6-line text-lg bg-red-700 hover:bg-gray-900 text-white font-bold px-2 rounded">
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination-container flex justify-end mt-4 w-full">
      <button 
        @click="prevPage" :disabled="currentPage === 1"
        class="ri-arrow-left-fill h-8 px-4 m-2 text-l text-white transition-colors duration-150 bg-gray-800 rounded-lg focus:shadow-outline hover:bg-indigo-800">
      </button>
      <button 
        @click="nextPage" :disabled="currentPage === totalPages"
        class="ri-arrow-right-fill h-8 px-4 m-2 text-l text-white transition-colors duration-150 bg-gray-800 rounded-lg focus:shadow-outline hover:bg-indigo-800">
        
      </button>
    </div>
  </shadow-box>

</template>
<script setup>
import BlogModal from "../components/layout/BlogModal.vue";
import DeleteModal from "../components/layout/DeleteModal.vue";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { onMounted, ref, computed } from "vue";
import ShadowBox from "../components/container/ShadowBox.vue";

const showBlogModal = ref(false);
const showDeleteModal = ref(false);
let blogIdToDelete = null;
 
function confirmDelete(blogId) {
  blogIdToDelete = blogId;
  showDeleteModal.value = true;
  
}

const blogRef = collection(db, "blogs");
const blogData = ref([]);
const currentPage = ref(1);
const itemsPerPage = ref(10);

// Computed property to calculate the start index of the current page
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);

const paginatedItems = computed(() => {
  const start = startIndex.value;
  const end = start + itemsPerPage.value;
  return blogData.value.slice(start, end);
});
// Computed property to calculate the total number of pages
const totalPages = computed(() => Math.ceil(blogData.value.length / itemsPerPage.value));

// Method to go to the next page
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    console.log(currentPage.value);
    console.log(totalPages.value);
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
    commentsSnapshot.docs.forEach(commentDoc => {
      commentData.push(commentDoc.data());
    });
    docData.comments = commentData;
    blogs.push(docData);
  }
  return blogs;
}

// Checking and setting local storage
async function getAllBlogs() {
  try {
    // Check if data exists and is not expired
    const cachedBlogs = localStorage.getItem("cachedBlogs");
    const cachedTime = localStorage.getItem("cachedTime");
    const expiryTime = 30 * 60 * 1000; // 30 minutes expiration time

    if (cachedBlogs && cachedTime && (new Date() - new Date(parseInt(cachedTime)) < expiryTime)) {
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
  const date = new Date(timestamp.seconds * 1000);
  return date.toLocaleDateString("en-US");
}
// Function to delete a blog by ID
async function handleDelete() {
  showDeleteModal.value = false;
  if (blogIdToDelete) {
    try {
    // Remove the blog from Firestore
    await deleteDoc(doc(db, "blogs", blogIdToDelete));
    
    // Update local blogData by filtering out the deleted blog
    blogData.value = blogData.value.filter(blog => blog.id !== blogIdToDelete);
    
    // Update cachedBlogs in local storage
    localStorage.setItem("cachedBlogs", JSON.stringify(blogData.value));
    
    console.log(`Blog with ID ${blogIdToDelete} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting blog:", error);
  }
}
}

async function handleAddBlog(blogDataToAdd){
    console.log('Received new blog data:', blogDataToAdd);
    // Perform actions with the received blog data, e.g., send to backend, update state, etc.
      // Calling the function to add the new blog post
    try {
      await addDoc(blogRef, blogDataToAdd); // Ensure addDoc is awaited

      // Update local blogData with the new blog
      blogData.value = [blogDataToAdd, ...blogData.value];

      // Update cachedBlogs in local storage
      localStorage.setItem("cachedBlogs", JSON.stringify(blogData.value));

    } catch (error) {
      console.error("Error adding document:", error);
    }
};

onMounted(async () => {
  getAllBlogs().then((data) => {
    blogData.value = data;
    console.log(new Date())
  });
});

</script>
