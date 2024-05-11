<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
    <div id="add-blog-modal" tabindex="-1" aria-hidden="true" v-if="show" class="fixed inset-0 flex items-center justify-center z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-4xl max-h-full">
            <!-- Modal content -->
            <div class="relative  bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Yeni Blog Yazısı Ekle
                    </h3>
                    <button type="button" @click="$emit('close')" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="add-blog-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <form @submit.prevent="handleSubmit" class="p-4 md:p-5">
                    <div class="grid gap-4 mb-4 grid-cols-2">
                        <div class="col-span-2">
                            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                            <input v-model="title" type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Blog yazısı başlığını girin" required="">
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <label for="photo-upload" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fotoğraf Seç</label>
                            <input
                                type="file"
                                id="photo-upload"
                                ref="fileInput"
                                style="display: none;"
                                accept="image/jpeg"
                                @change="handlePhotoUpload"
                            />
                            <button @click="openFilePicker" type="button" id="photo-upload" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <i class="ri-download-2-line"></i> 
                                {{ buttonText }}
                            </button>
                        </div>
                        
                        <div class="col-span-2 sm:col-span-1">
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategori</label>
                            <select v-model="category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="TV">Hukuk</option>
                                <option value="PC">Haberler</option>
                                <option value="GA">Son Dakika</option>
                                <option selected= "" value="PH">Blog Yazısı</option>
                            </select>
                        </div>
                        <div class="col-span-2">
                            <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Yazı İçeriği</label>
                            <textarea v-model="content" id="content" rows="4" class="block p-2.5 w-full h-64 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ana içeriğinizi buraya yazınız."></textarea>                    
                        </div>
                    </div>
                    <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Ekle</button>
                </form>
            </div>
        </div>
    </div> 
  
</template>

<script setup>

import { ref, computed} from 'vue'

const emits = defineEmits(['close', 'addBlog']);
const props = defineProps({
  show: Boolean
})

// Data for blog fields
const title = ref('');
const content = ref('');
const category = ref('Blog Yazısı'); // Default category

const fileInput = ref(null);
const selectedFileName = ref(null);

const openFilePicker = () => {
  // Click the hidden file input element
  fileInput.value.click();
};

const handlePhotoUpload = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile && selectedFile.type === 'image/jpeg') {
    selectedFileName.value = selectedFile.name;
  } else {
    selectedFileName.value = null;
    // Optionally show an error message for invalid file type
    console.error('Please select a JPEG file.');
  }
};

const buttonText = computed(() => {
  if (selectedFileName.value) {
    const maxLength = 20; // Maximum length before truncation
    const fileName = selectedFileName.value;
    
    if (fileName.length <= maxLength) {
      return fileName; // Return full filename if within maximum length
    } else {
      const firstPart = fileName.substring(0, 10);
      const lastPart = fileName.substring(fileName.length - 10);
      const truncatedFileName = `${firstPart}...${lastPart}`;
      return truncatedFileName;
    }
  }  else {
    return `Dosya Seçilmedi`;
  }
});

const handleSubmit = () => {

    // Gather blog data
    const blogData = {
        author: "admin",
        created_date: new Date(),
        updated_date: new Date(),
        url: "https://konect-software-solutions.github.io/tiryaki-hukuk-web-project/blog-single.html",
        title: title.value,
        image: "img link here", // Replace with dynamic data if necessary
        content: content.value,
        category: category.value
        // Add more fields as needed
    };

    // Emit the 'addBlog' event with the blog data
    emits('addBlog', blogData);

    // Clear form fields or perform any other necessary actions
    title.value = '';
    content.value = '';
    category.value = 'Blog Yazısı';

    emits('close');
};



</script>

<style>

</style>