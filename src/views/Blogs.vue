<template>

  <BlogManagement
      v-if="showBlogs"
      @goAddBlog="showBlogs = false"
      />  
    <AddBlog
      v-else
      @goBlogManagement="showBlogs = true"
       />      
</template>

<script setup>
import { ref } from 'vue';
import BlogManagement from '../components/BlogManagement.vue';
import AddBlog from '../components/AddBlog.vue';

const showBlogs = ref(true);
</script>
