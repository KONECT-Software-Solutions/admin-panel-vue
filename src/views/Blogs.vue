<template>
  <div>
    <transition name="fade">
      <BlogManagement
        v-if="showBlogs && !showAddBlog"
        @goAddBlog="showAddBlog = true"
        @deleteBlog="handleDeleteBlog"
        @updateBlog="handleUpdateBlog"
        :blogsData="blogsData"
        :blogRef="blogRef" />
    </transition>
    <div
      v-if="!showBlogs"
      class="flex items-center justify-center min-h-screen">
      <Loading text="Blog Yazısı Yükleniyor..." />
    </div>
    <transition name="fade">
      <AddBlog
        v-if="showAddBlog"
        @goBlogManagement="showAddBlog = false"
        @addBlog="handleAddBlog" />
    </transition>
  </div>
</template>

<script setup>
import BlogManagement from "../components/BlogManagement.vue";
import AddBlog from "../components/AddBlog.vue";
import Loading from "../components/Loading.vue";
import { ref, onMounted, onBeforeMount, onUpdated } from "vue";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { slugify } from "../utils";

const showBlogs = ref(false);
const showAddBlog = ref(false);

const blogRef = collection(db, "blogs");
const blogsData = ref([]);

function handleAddBlog(blogData) {
  addBlog(blogData);
}

function handleDeleteBlog(blogIdToDelete) {
  deleteBlog(blogIdToDelete);
}

function handleUpdateBlog(blogData) {
  updateBlog(blogData);
}

// Utility function to load blogs data
async function fetchBlogs() {
  let blogs = [];
  const querySnapshot = await getDocs(blogRef);
  querySnapshot.forEach((doc) => {
    blogs.push({ id: doc.id, ...doc.data() });
  });
  return blogs;
}

// Checking and setting local storage
async function getAllBlogs() {
  try {
    // Check if data exists and is not expired
    const cachedBlogs = localStorage.getItem("cachedBlogs");
    const cachedTimeBlogs = localStorage.getItem("cachedTimeBlogs");
    const expiryTime = 0 * 60 * 1000; // 30 minutes expiration time

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
    };
    // Update local blogsData with the new blog including the ID
    blogsData.value = [newBlogWithId, ...blogsData.value];

    // Update cachedBlogs in local storage
    localStorage.setItem("cachedBlogs", JSON.stringify(blogsData.value));
  } catch (error) {
    console.error("Error adding document:", error);
  }
}

// Function to delete a blog by ID
async function deleteBlog(blogIdToDelete) {
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

async function updateBlog(blogDataToUpdate) {
  console.log("Received updated blog data:", blogDataToUpdate);
  blogDataToUpdate.updated_date = new Date();
  blogDataToUpdate.slug = slugify(blogDataToUpdate.title);

  try {
    await updateDoc(doc(db, "blogs", blogDataToUpdate.id), blogDataToUpdate); // Ensure updateDoc is awaited
    const updatedBlog = {
      ...blogDataToUpdate,
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
function sortBlogsByDate(blogs) {
  return blogs.sort((a, b) => b.created_date - a.created_date);
}

onMounted(async () => {
  let data = await getAllBlogs();
  data = sortBlogsByDate(data);
  blogsData.value = data;
  showBlogs.value = true;

});
</script>

<style scoped>
/* Scoped CSS specific to MainPage */

/* Fade transition CSS */
.fade-enter-active {
  transition: opacity 1.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
