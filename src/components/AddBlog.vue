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
          <Button
            v-if="!showLoading"
            text="Geri Dön"
            color="blue"
            :wFull="false"
            @click="emits('goBlogManagement')">
          </Button>
        </div>
      </div>
    </div>

    <div class="relative bg-white rounded-lg shadow border border-gray-200">
      <div
        class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
        <h3 class="text-lg font-semibold text-gray-900">Yeni Blog Yazısı</h3>
        <Button
            text="Geri Dön"
            color="blue"
            :wFull="false"
            @click="emits('goBlogManagement')">
          </Button>
      </div>
      <form @submit.prevent="handleSubmit" class="p-4 md:p-5">
        <div class="grid gap-4 mb-4 grid-cols-2">
          <div class="col-span-2">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Başlık</label
            >
            <input
              v-model="title"
              type="text"
              name="title"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Blog yazısı başlığını girin"
              required="" />
          </div>

          <div class="col-span-2">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900">
              Açıklama
            </label>
            <textarea
              v-model="description"
              name="description"
              id="description"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Blog yazısı açıklamasını girin"
              required
              rows="3"></textarea>
          </div>
          <div class="col-span-2">
            <label
              for="tags"
              class="block mb-2 text-sm font-medium text-gray-900">
              Etiketler
            </label>
            <div
              class="flex flex-wrap items-center border border-gray p-2 rounded-lg">
              <span
                v-for="(tag, index) in tags"
                :key="index"
                class="flex items-center bg-gray-100 text-sm border border-gray-300 hover:bg-gray-300 text-gray-900 px-3 py-1 rounded-full mr-2 mb-2">
                {{ tag }}
                <button
                  @click="removeTag(index)"
                  class="ml-2 focus:outline-none">
                  <svg
                    class="w-4 h-4 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 10-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </span>
              <input
                v-model="newTag"
                name="tags"
                @keydown.enter.prevent="addTag"
                placeholder="Yazdıktan sonra Enter tuşuna basarak etiketi ekleyin."
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
            </div>
            <p class="mt-2 text-gray-600">
              {{ remainingTags }} etiket daha ekleyebilirsiniz.
            </p>
          </div>
          <div class="col-span-2 sm:col-span-1">
            <label
              for="file-input"
              class="block mb-2 text-sm font-medium text-gray-900"
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
              class="block mb-2 text-sm font-medium text-gray-900"
              >Kategori</label
            >
            <select
              v-model="category"
              id="category"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
              <option value="hukuk">Hukuk</option>
              <option value="haberler">Haberler</option>
              <option value="son-dakika">Son Dakika</option>
              <option value="blog">Blog Yazısı</option>
            </select>
          </div>
          <div class="col-span-2">
            <label
              for="content"
              class="block mb-2 text-sm font-medium text-gray-900"
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
        <Button
            v-if="!showLoading"
            :disabled="showLoading"
            type="submit"
            text="Blog Yazısı Ekle"
            color="blue"
            :wFull="false">
          </Button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import {
  ref as firebaseStorageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import Loading from "./Loading.vue";
import Button from "./Button.vue";
import { slugify } from "../utils";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import imageCompression from "browser-image-compression";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";

const emits = defineEmits(["goBlogManagement", "addBlog"]);

const showLoading = ref(false);
const showLoadingModal = ref(false);
const tags = ref(["Hukuk", "Haber", "Ceza Hukuku", "TCK"]);
const maxTags = 10;
const newTag = ref("");

// Data for blog fields
const title = ref("");
const description = ref("");
const content = ref("");
const category = ref("blog"); // Default category
const fileInput = ref(null);
const selectedFile = ref(null);
const selectedFileName = ref(null);

const addTag = () => {
  if (newTag.value.trim() && !tags.value.includes(newTag.value.trim())) {
    tags.value.push(newTag.value.trim());
    newTag.value = "";
  }
};

const removeTag = (index) => {
  tags.value.splice(index, 1);
};

const remainingTags = computed(() => maxTags - tags.value.length);

const handlePhotoUpload = async (event) => {
  const file = event.target.files[0];
  if (file && file.type === "image/jpeg") {
    try {
      // Resize and convert the image to WebP
      const options = {
        maxSizeMB: 1, // Maximum file size
        maxWidthOrHeight: 1400, // Resize to max 1200px
        useWebWorker: true,
        fileType: "image/webp", // Convert to WebP
      };
      const compressedFile = await imageCompression(file, options);
      selectedFile.value = compressedFile;
      selectedFileName.value = file.name.replace(/\.[^/.]+$/, "") + ".webp"; // Rename file to .webp extension
    } catch (error) {
      console.error("Error compressing the image:", error);
    }
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

  const imageId = uuidv4();
  console.log("imageId is:", imageId);
  const fileRef = firebaseStorageRef(storage, `images/${imageId}`);

  console.log(imageId);
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
      title: title.value,
      tags: tags.value,
      description: description.value,
      slug: slugify(title.value),
      image: downloadURL,
      content: content.value,
      category: category.value,
      view_count: 0,
      image_id: imageId,
    };

    // call addBlog' function with the blog data
    console.log("Adding blog post:", blogData);
    emits("addBlog", blogData);

    // Clear form fields
    title.value = "";
    content.value = "";
    description.value = "";
    category.value = "Blog Yazısı";
    selectedFile.value = null;
    selectedFileName.value = null;
  } catch (error) {
    console.error("Error uploading file or saving blog post:", error);
  } finally {
    showLoading.value = false;
  }
};
onMounted(() => {
  console.log("new date test", new Date());
});
</script>
