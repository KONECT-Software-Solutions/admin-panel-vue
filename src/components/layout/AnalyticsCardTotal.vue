<template>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9 mb-6">
    <div class="bg-gray-200 rounded-md border border-gray-300 p-6 shadow-md shadow-black/5">
      <div class="flex justify-between mb-6">
        <div>
          <div class="text-3xl font-semibold mb-1">
                {{totalBlogCount}}<span class="pl-2 font-medium text-gray-400">Blog Yazısı</span>
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
</template>

<script setup>

import { ref, onMounted} from 'vue';

// computed total blog count
const totalBlogCount = ref(0);


// props
const props = defineProps({
  length: Number
});

// lifecycle hooks
onMounted(() => {
  totalBlogCount.value = props.length;
});
</script>

<style>

</style>