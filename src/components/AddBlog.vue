<template>
  <div>
    <div
      v-if="showLoadingModal"
      class="font-medium text-sm fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div class="bg-white rounded-lg p-4 max-w-sm w-full">
        <div class="mt-1">
          <Loading v-if="showLoading" text="Blog Yazısı Yükleniyor..." />
          {{ showLoading ? "" : "Blog yazısı yüklendi." }}
        </div>
        <div class="flex justify-end">
          <button
            v-if="!showLoading"
            @click="emits('goBlogManagement')"
            class="bg-green-600 text-white px-4 py-1 font-medium rounded mb-2">
            Geri Dön
          </button>
        </div>
      </div>
    </div>

    <div class="relative bg-white rounded-lg shadow border border-gray-200">
      <div
        class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
        <h3 class="text-lg font-semibold text-gray-900">Yeni Blog Yazısı</h3>
        <button
          @click="emits('goBlogManagement')"
          class="bg-green-600 text-white px-4 py-1 font-medium rounded mb-4">
          Geri Dön
        </button>
      </div>
      <form @submit.prevent="handleSubmit" class="p-4 md:p-5">
        <div class="grid gap-4 mb-4 grid-cols-2">
          <div class="col-span-2">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            <input
              v-model="title"
              type="text"
              name="title"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Blog yazısı başlığını girin"
              required="" />
          </div>
          <div class="col-span-2 sm:col-span-1">
            <label
              for="file-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Fotoğraf Seç</label
            >
            <input
              type="file"
              id="file_input"
              ref="fileInput"
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
              accept="image/jpeg"
              @change="handlePhotoUpload"
              required />
          </div>

          <div class="col-span-2 sm:col-span-1">
            <label
              for="category"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Kategori</label
            >
            <select
              v-model="category"
              id="category"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option value="Hukuk">Hukuk</option>
              <option value="Haberler">Haberler</option>
              <option value="Son Dakika">Son Dakika</option>
              <option value="Blog Yazısı">Blog Yazısı</option>
            </select>
          </div>
          <div class="col-span-2">
            <label
              for="content"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Yazı İçeriği</label
            >
            <div class="bg-gray-100">
              <QuillEditor
                v-model:content="content"
                contentType="html"
                toolbar="essential"
                theme="snow"
                class="h-[30rem]"
                placeholder="Yazı içeriği girin..."
                required />
            </div>
          </div>
        </div>
        <button
          type="submit"
          :disabled="showLoading"
          class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-600">
          Blog Yazısı Ekle
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import {
  getStorage,
  ref as firebaseStorageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import Loading from "./Loading.vue";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const emits = defineEmits(["goBlogManagement", "addBlog"]);

const showLoading = ref(false);
const showLoadingModal = ref(false);

// Data for blog fields
const title = ref("");
const content = ref("");
const category = ref("Blog Yazısı"); // Default category
const fileInput = ref(null);
const selectedFile = ref(null);
const selectedFileName = ref(null);

const handlePhotoUpload = (event) => {
  const file = event.target.files[0];
  if (file && file.type === "image/jpeg") {
    selectedFile.value = file;
    selectedFileName.value = file.name;
  } else {
    selectedFileName.value = null;
    console.error("Please select a JPEG file.");
  }
};

const handleSubmit = async () => {
  showLoading.value = true;
  showLoadingModal.value = true;

  if (!selectedFile.value) {
    console.error("Please select an image file.");
    return;
  }

  const storage = getStorage();
  const fileRef = firebaseStorageRef(
    storage,
    `images/${selectedFile.value.name}`
  );

  try {
    console.log("Uploading file...");
    await uploadBytes(fileRef, selectedFile.value);
    const downloadURL = await getDownloadURL(fileRef);
    console.log("File uploaded:", downloadURL);

    // Gather blog data
    const blogData = {
      author: "admin",
      created_date: new Date(),
      updated_date: new Date(),
      url: "https://konect-software-solutions.github.io/tiryaki-hukuk-web-project/blog-single.html",
      title: title.value,
      image: downloadURL, // Add the image URL
      content: content.value,
      category: category.value,
    };

    // call addBlog' function with the blog data
    console.log("Adding blog post:", blogData);
    emits("addBlog", blogData);

    // Clear form fields
    title.value = "";
    content.value = "";
    category.value = "Blog Yazısı";
    selectedFile.value = null;
    selectedFileName.value = null;
  } catch (error) {
    console.error("Error uploading file or saving blog post:", error);
  } finally {
    showLoading.value = false;
  }
};
</script>
