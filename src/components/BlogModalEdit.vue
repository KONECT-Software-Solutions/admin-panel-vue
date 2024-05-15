<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
    <div id="add-blog-modal" tabindex="-1" aria-hidden="true" v-if="show" class="fixed inset-0 flex items-center justify-center z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-4xl max-h-full">
            <!-- Modal content -->
            <div class="relative  bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Blog Yazısını Güncelle
                    </h3>
                    <button type="button" @click="$emit('close')" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="add-blog-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <form @submit.prevent="handleSubmit(editBlogData)" class="p-4 md:p-5">
                    <div class="grid gap-4 mb-4 grid-cols-2">
                        <div class="col-span-2">
                            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                            <input v-model="editBlogData.title" type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Blog yazısı başlığını girin" required="">
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <label for="photo-upload" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seçili Fotoğraf</label>
                            <button @click="redirectToUrl" type="button" id="photo-upload" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <i class="ri-download-2-line"></i> 
                                {{ truncatedUrl }}
                            </button>
                        </div>
                        
                        <div class="col-span-2 sm:col-span-1">
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategori</label>
                            <select v-model="editBlogData.category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="Hukuk">Hukuk</option>
                                <option value="Haberler">Haberler</option>
                                <option value="Son Dakika">Son Dakika</option>
                                <option value="Blog Yazısı">Blog Yazısı</option>
                            </select>
                        </div>
                        <div class="col-span-2">
                            <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Yazı İçeriği</label>
                            <div class="bg-gray-200">
                              <QuillEditor v-model:content="editBlogData.content" contentType="html" toolbar="essential" theme="snow" v-model="content" class="h-64"/>                 
                            </div>                        </div>
                    </div>
                    <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Kaydet</button>
                    
                </form>
            </div>
        </div>
    </div> 
  
</template>

<script setup>

import { ref, computed, watch, reactive} from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const emits = defineEmits(['close', 'updateBlog']);
const props = defineProps({
  show: Boolean,
  editBlogData: Object
});

const truncatedUrl = computed(() => {
  const maxLength = 20;
  const url = props.editBlogData.image;
  if (url.length <= maxLength) {
    return url;
  } else {
    return `${url.substring(0, 10)}...${url.substring(url.length - 10)}`;
  }
});

const redirectToUrl = () => {
  window.open(props.editBlogData.image, '_blank');
};

const handleSubmit = (editBlogData) => {
    editBlogData.updated_date = new Date();

    emits('updateBlog', editBlogData);

    emits('close');
};


</script>

<style>

</style>