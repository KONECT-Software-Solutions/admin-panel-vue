<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 z-50"></div>

  <!-- Loading Modal -->
  <div
    v-if="modalState.showLoadingModal"
    class="font-medium text-sm fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div class="bg-white rounded-lg p-4 max-w-sm w-full">
      <div class="mt-1">
        <Loading
          v-if="modalState.showLoadingModal"
          text="Blog Yazısı Güncelleniyor..." />
      </div>
    </div>
  </div>

  <!-- Success Modal -->
  <div
    v-if="modalState.showSuccessModal"
    class="font-medium text-sm fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div class="bg-white rounded-lg p-4 max-w-sm w-full">
      <div class="mt-1">Blog yazısı başarıyla güncellendi.</div>
      <div class="flex justify-end">
        <Button
          @click="modalState.showSuccessModal = false"
          color="blue"
          :wFull="false"
          text="Kapat">
        </Button>
      </div>
    </div>
  </div>

  <!-- Error Modal -->
  <div
    v-if="modalState.showErrorModal"
    class="font-medium text-sm fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div class="bg-white rounded-lg p-4 max-w-sm w-full">
      <div class="mt-1 text-red-500">
        {{ modalState.errorMessage }}
      </div>
      <div class="flex justify-end">
        <Button
          @click="modalState.showErrorModal = false"
          color="blue"
          :wFull="false"
          text="Tekrar Dene">
        </Button>
      </div>
    </div>
  </div>

  <!-- Main Modal -->
  <div
    id="add-blog-modal"
    tabindex="-1"
    aria-hidden="true"
    v-if="show"
    class="fixed inset-0 flex items-center justify-center z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-4xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 class="text-lg font-semibold text-gray-900">
            Blog Yazısını Güncelle
          </h3>
          <button
            type="button"
            @click="$emit('close')"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form
          @submit.prevent="handleSubmit(blogDataToUpdate)"
          class="p-4 md:p-5">
          <div class="grid gap-4 mb-4 grid-cols-2">
            <div class="col-span-2">
              <label
                for="title"
                class="block mb-2 text-sm font-medium text-gray-900"></label>
              <input
                v-model="blogDataToUpdate.title"
                type="text"
                name="title"
                id="title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Blog yazısı başlığını girin"
                required="" />
            </div>
            <div class="col-span-2">
              <label
                for="category"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Kategori</label
              >
              <select
                v-model="blogDataToUpdate.category"
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
                  v-model:content="blogDataToUpdate.content"
                  contentType="html"
                  id="content"
                  toolbar="essential"
                  theme="snow"
                  class="h-64" />
              </div>
            </div>
          </div>
          <Button type="submit" color="blue" :wFull="false" text="Kaydet">
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import Loading from "./Loading.vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import Button from "./Button.vue";

const emits = defineEmits(["close", "updateBlog"]);
const props = defineProps({
  show: Boolean,
  blogDataToUpdate: Object,
});

// Reactive state for modals
const modalState = reactive({
  showLoadingModal: false, // For loading state
  showSuccessModal: false, // For success modal
  showErrorModal: false, // For error modal
  errorMessage: "", // Error message to display if failed
});

// Function to handle blog submission
const handleSubmit = async (blogDataToUpdate) => {
  emits("close");
  modalState.showLoadingModal = true; // Show loading modal

  try {
    // Simulate an async operation like saving the blog
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
    // If success
    modalState.showLoadingModal = false;
    modalState.showSuccessModal = true; // Show success modal
    emits("updateBlog", blogDataToUpdate);
  } catch (error) {
    // If error occurs during the blog update
    modalState.showLoadingModal = false;
    modalState.showErrorModal = true;
    modalState.errorMessage =
      "Blog güncellenirken bir hata oluştu. Lütfen tekrar deneyin."; // Error message
  }
};
</script>

<style></style>
