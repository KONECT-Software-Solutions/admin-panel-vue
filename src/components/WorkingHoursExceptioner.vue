<template>
    <!-- List of Exceptions -->
    <div v-if="exceptions.length" class="mb-4 mt-4">
        <div v-for="(exception, index) in exceptions" :key="index"
            class="p-4 mb-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div class="flex justify-between items-center">
                <div>
                    <p class="text-sm font-medium text-gray-900 dark:text-white">
                        Tarih: {{ exception.date }}
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        Başlangıç: {{ exception.startTime }}
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        Bitiş: {{ exception.endTime }}
                    </p>
                </div>
                <div>
                    <button v-if="exception.repeat"
                        class="inline-flex items-center ml-2 p-1.5 text-sm font-medium text-center text-gray-500 rounded-lg focus:outline-none ">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M6 4H21C21.5523 4 22 4.44772 22 5V12H20V6H6V9L1 5L6 1V4ZM18 20H3C2.44772 20 2 19.5523 2 19V12H4V18H18V15L23 19L18 23V20Z">
                            </path>
                        </svg>
                    </button>
                    <button @click="removeException(index)"
                        class="inline-flex items-center ml-2 p-1.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded-lg focus:outline-none">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>

                    
                </div>
            </div>
        </div>
    </div>

    <!-- Add Exception Button -->
    <button @click="showExceptionModal = true" type="button"
        class="inline-flex items-center justify-center w-full py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <svg class="w-4 h-4 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 12h14m-7 7V5" />
        </svg>
        Ekle
    </button>

      <!-- Modal Component -->
      <WorkingHoursExceptionModal v-if="showExceptionModal" @close="showExceptionModal = false"
        @save-exception="addException" />
</template>

<script setup>
import WorkingHoursExceptionModal from "../components/WorkingHoursExceptionModal.vue";
import { ref } from "vue";
const showExceptionModal = ref(false);

const props = defineProps({
  exceptions: Array,
});

const emits = defineEmits(["add-exception", "remove-exception"]);

const addException = (exception) => {
  emits("add-exception", exception);
};
const removeException = (index) => {
  emits("remove-exception", index);
};

</script>

<style scoped>
/* Your component specific styles go here */
</style>