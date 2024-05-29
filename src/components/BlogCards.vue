<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
        <div class="flex justify-between items-center mb-4">
          <div>
            <div class="text-4xl font-bold text-gray-800">{{ totalBlogs }}</div>
            <div class="text-lg font-medium text-gray-500">Toplam Blog Yazısı</div>
          </div>
          <div class="text-gray-400">
            <i class="ri-group-line text-4xl"></i>
          </div>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div class="h-full bg-blue-600" :style="{ width: blogProgress + '%' }"></div>
        </div>
        <div class="text-right text-sm font-medium text-gray-600 mt-2">{{ blogProgress }}%</div>
      </div>
  
      <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
        <div class="flex justify-between items-center mb-4">
          <div>
            <div class="flex items-center mb-1">
              <div class="text-4xl font-bold text-gray-800">{{ totalBlogView }}</div>
              <div class="ml-2 p-1 rounded bg-emerald-100 text-emerald-700 text-sm font-semibold">
                +{{ viewPercentage }}%
              </div>
            </div>
            <div class="text-lg font-medium text-gray-500">Toplam Görüntülenme</div>
          </div>
          <div class="text-gray-400">
            <i class="ri-eye-line text-4xl"></i>
          </div>
        </div>
        <div class="text-gray-600 font-medium">Güncel Durum:</div>
        <div class="mt-2 flex flex-wrap">
          <span v-for="(count, category) in blogsCategorySummary" :key="category" :class="categoryColors[category]" class="text-xs font-semibold mr-2 px-2 py-1 rounded-lg mb-1">
            {{ getCategoryText(category) }}: {{ count }}
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed, defineProps } from "vue";
  
  // props
  const props = defineProps({
    totalBlogs: Number,
    totalBlogView: Number,
    blogsCategorySummary: Object,
  });
  
  const categoryColors = {
    "Blog Yazısı": 'bg-blue-100 text-blue-700',
    "Hukuk": 'bg-green-100 text-green-700',
    "Son Dakika": 'bg-gray-100 text-gray-700',
    "Haberler": 'bg-red-100 text-red-700',
  };
  
  
  const getCategoryText = (category) => {
    switch (category) {
      case "Blog Yazısı": return 'Blog Yazısı';
      case "Hukuk": return 'Hukuk';
      case "Son Dakika": return 'Son Dakika';
      case "Haberler": return 'Haberler';
      default: return 'Unknown';
    }
  };
  
  // computed properties
  const viewPercentage = computed(() => {
    if (props.totalBlogs === 0) return 0;
    return ((props.totalBlogView / props.totalBlogs) * 100).toFixed(2);
  });
  
  const blogProgress = computed(() => {
    if (props.totalBlogs === 0) return 0;
    return ((props.totalBlogs / 100) * 100).toFixed(2);
  });
  </script>
  