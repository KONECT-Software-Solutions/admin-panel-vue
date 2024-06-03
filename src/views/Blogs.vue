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
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import BlogManagement from '../components/BlogManagement.vue';
import AddBlog from '../components/AddBlog.vue';

const route = useRoute();
const showBlogs = ref(true);

const uid = route.params.uid;

</script>
