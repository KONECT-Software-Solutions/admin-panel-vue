<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <div class="flex items-center space-x-2">
          <div
            class="px-2 text-gray-800 text-4xl font-bold">
            {{ totalBlogs }}
          </div>
          <div class="text-lg font-medium text-gray-500">
            Toplam Blog Yazısı
          </div>
        </div>
        <div class="text-gray-400">
          <i class="ri-group-line text-4xl"></i>
        </div>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          class="h-full bg-blue-600"
          :style="{ width: blogProgress + '%' }"></div>
      </div>
      <div class="text-right text-sm font-medium text-gray-600 mt-2">
        {{ blogProgress }}%
      </div>
    </div>

    <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <div class="flex items-center space-x-2">
          <div
            class="px-2 rounded bg-emerald-100 text-emerald-700 text-4xl font-semibold">
            {{ totalBlogView }}
          </div>
          <div class="text-lg font-medium text-gray-500">
            Toplam Görüntülenme
          </div>
        </div>
        <div class="text-gray-400">
          <i class="ri-eye-line text-4xl"></i>
        </div>
      </div>
      <div class="text-gray-600 font-medium">Güncel Durum:</div>
      <div class="mt-2 flex flex-wrap">
        <span
          v-for="(count, category) in blogsCategorySummary"
          :key="category"
          :class="categoryColors[category]"
          class="text-xs font-semibold mr-2 px-2 py-1 rounded-lg mb-1">
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
  blog: "bg-blue-100 text-blue-700",
  hukuk: "bg-green-100 text-green-700",
  "son-dakika": "bg-gray-100 text-gray-700",
  haberler: "bg-red-100 text-red-700",
};

const getCategoryText = (category) => {
  switch (category) {
    case "blog":
      return "Blog Yazısı";
    case "hukuk":
      return "Hukuk";
    case "son-dakika":
      return "Son Dakika";
    case "haberler":
      return "Haberler";
    default:
      return "Unknown";
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
