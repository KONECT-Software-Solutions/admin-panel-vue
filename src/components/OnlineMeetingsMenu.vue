<template>
    <section class="min-h-[88vh] flex items-center justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <button 
            @click="toggleShowAll"
            class="bg-white rounded-lg border w-64 h-64 border-gray-200 shadow-lg flex items-center justify-center">
                <div class="flex flex-col items-center">
                    <div class="text-[1.6rem] font-medium text-gray-500">Tüm Görüşmeleri</div>
                    <div class="text-[1.6rem] font-medium text-gray-500">Gör</div>
                </div>
            </button>
            <button class="bg-white rounded-lg border w-64 h-64 border-gray-200 shadow-lg flex items-center justify-center">
                <div class="flex flex-col items-center">
                    <div class="text-[1.6rem] font-medium text-gray-500">Tüm Görüşmeleri</div>
                    <div class="text-[1.6rem] font-medium text-gray-500">Gör</div>
                </div>
            </button>
            <button class="bg-white rounded-lg border w-64 h-64 border-gray-200 shadow-lg flex items-center justify-center">
                <div class="flex flex-col items-center">
                    <div class="text-[1.6rem] font-medium text-gray-500">Tüm Görüşmeleri</div>
                    <div class="text-[1.6rem] font-medium text-gray-500">Gör</div>
                </div>
            </button>
            <button class="bg-white rounded-lg border w-64 h-64 border-gray-200 shadow-lg flex items-center justify-center">
                <div class="flex flex-col items-center">
                    <div class="text-[1.6rem] font-medium text-gray-500">Tüm Görüşmeleri</div>
                    <div class="text-[1.6rem] font-medium text-gray-500">Gör</div>
                </div>
            </button>
            <button class="bg-white rounded-lg border w-64 h-64 border-gray-200 shadow-lg flex items-center justify-center">
                <div class="flex flex-col items-center">
                    <div class="text-[1.6rem] font-medium text-gray-500">Tüm Görüşmeleri</div>
                    <div class="text-[1.6rem] font-medium text-gray-500">Gör</div>
                </div>
            </button>
        </div>
    </section>
</template>

<script setup>

import { defineEmits } from 'vue';

const emit = defineEmits(['toggle-show-all']);

const toggleShowAll = () => {
  emit('toggle-show-all');
};

</script>

<style scoped>
</style>