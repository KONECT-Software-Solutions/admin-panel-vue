<template>

  <BlogManagement
      v-if="showBlogs"
      @goAddBlog="showBlogs = false"
      />  
    <AddBlog
      v-else
      @goBlogManagement="showBlogs = true" @addBlog="handleAddBlog"
       />      
</template>

<script setup>
import { ref } from 'vue';
import BlogManagement from '../components/BlogManagement.vue';
import AddBlog from '../components/AddBlog.vue';

const showBlogs = ref(true);

const handleAddBlog = (blogData) => {
  console.log(blogData);
};
</script>
