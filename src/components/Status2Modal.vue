<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
  <div
    tabindex="-1"
    class="fixed inset-0 flex items-center justify-center z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 class="text-lg font-semibold text-black">Geri Dönüt</h3>
          <button
            type="button"
            @click="$emit('close')"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
            <svg
              class="w-3 h-3"
              aria-hidden="true"
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
        <div class="grid gap-4 mb-4 p-4 pb-6 grid-cols-2">
          <div class="col-span-2">
            <p
              type="text"
              name="text"
              id="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Blog yazısı başlığını girin"
              required="">
              Görüşme sonucunu seçip, görüşme olduysa sonucunu olmadıysa
              nedenini belirtiniz.
            </p>
          </div>
          <div class="col-span-2 space-y-4">
            <select
              id="meeting-result"
              name="meeting-result"
              v-model="meetingResult"
              class="mt-1 block w-full shadow-sm focus:ring-primary-600 focus:border-primary-600 sm:text-sm border-gray-300 rounded-md">
              <option value="1">Görüşme Yapıldı</option>
              <option value="2">Görüşme Yapılmadı</option>
            </select>
            <textarea
              id="meeting-result-text"
              name="meeting-result-text"
              v-model="meetingResultText"
              rows="3"
              class="block w-full shadow-sm focus:ring-primary-600 focus:border-primary-600 sm:text-sm border-gray-300 rounded-md"
              placeholder="Görüşme sorunsuz tamamlandı."></textarea>
              <Button @click="handleSaveResult"     :isLoading="showLoading"
              loadingText="Kaydediliyor" text="Kaydet" :wFull="true" color="blue" />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue';
import { defineProps, defineEmits, ref } from "vue";
const props = defineProps({
  meetingData: {
    type: Object,
    required: true,
  },
});


const showLoading = ref(false);
const meetingResult = ref(props.meetingData.result);
const meetingResultText = ref(props.meetingData.result_text);

const emits = defineEmits(["close", "save-result"]);

const handleSaveResult = () => {
  showLoading.value = true;
  emits("save-result", meetingResult.value, meetingResultText.value);
  setTimeout(() => {
    showLoading.value = false;
  }, 4000);
};
</script>

<style></style>
