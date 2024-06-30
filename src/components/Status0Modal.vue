<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
  <div class="fixed inset-0 flex items-center justify-center z-50 w-full h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-[32rem] max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 border-b rounded-t">
          <h3 class="text-lg font-semibold text-black">
            Yeni Randevu İsteği
          </h3>
          <button type="button" @click="$emit('close')"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
            <svg class="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="px-6 py-4 w-full mx-auto bg-white rounded-xl space-y-4">
          <div class="flex items-center justify-center space-x-4">
            <div class="bg-gray-600 text-white rounded-lg w-20 h-24 flex flex-col items-center justify-center">
              <div class="text-sm">{{ formattedDate.month }}</div>
              <div class="text-4xl font-bold">{{ formattedDate.dayNumber }}</div>
              <div class="text-sm">{{ formattedDate.dayName }}</div>
            </div>
            <div class="p-2">
              <h2 class="text-xl font-bold">Onaylıyor musun?</h2>
              <div class="flex items-center text-gray-500 space-x-2">
                <i class="ri-time-line text-lg"></i>
                <span>{{ formattedDate.time }} -</span>
                <span>{{ formattedDate.meetingTimeEnd }}</span>
              </div>
              <div class="flex space-x-2 mt-2">
                <span
                  class="bg-gray-100 hover:bg-gray-200 ring-0 ring-gray-400 hover:ring-1 text-gray-700 text-sm px-3 py-1 rounded-full">{{
                    meetingData.attorney_name }}</span>
                <span
                  class="bg-gray-100 hover:bg-gray-200 ring-0 ring-gray-400 hover:ring-1 text-gray-700 text-sm px-3 py-1 rounded-full">{{
                    meetingData.customer_name }}</span>
              </div>
            </div>
          </div>
          <div>
            <!-- Success message for meeting creation -->
            <div v-if="isMeetingSet" class="bg-green-100 mb-4 border border-gray-200 rounded-lg p-4 flex items-center">
              <p class="text-sm text-gray-500 font-normal">
                Online görüşme başarıyla oluşturuldu.
              </p>
            </div>

            <!-- Success message for meeting rejection -->
            <div v-if="isMeetingRejected"
              class="bg-red-100 mb-4 border border-gray-200 rounded-lg p-4 flex items-center">
              <p class="text-sm text-gray-500 font-normal">
                Randevu başarıyla reddedildi.
              </p>
            </div>

            <!-- Initial info and buttons -->
            <div v-if="!isMeetingSet && !isMeetingRejected && !isRejecting"
              class="bg-gray-50 mb-4 border border-gray-200 rounded-lg p-4 flex items-center">
              <p class="text-sm text-gray-500 font-normal">
                Randevuyu onaylarsanız, online görüşme oluşturulup ilgili avukat ve müvekkil mail bilgilendirilecektir.
              </p>
            </div>
            <div v-if="!isMeetingSet && !isMeetingRejected && !isRejecting"
              class="flex items-center justify-center space-x-4 mt-2">
              <button @click="handleSetMeeting" class="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md">
                <Loading v-if="showLoading" text="Oluşturuluyor" />
                <span v-else>Evet</span>
              </button>
              <button @click="isRejecting = true" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
                Hayır
              </button>
            </div>

            <!-- Reject reason area -->
            <div v-if="isRejecting" class="mb-2 rounded-lg">
              <label for="reason" class="block text-sm font-medium text-gray-700">Reddetme sebebi</label>
              <textarea id="reason" v-model="rejectReason" rows="3"
                class="block w-full h-32 bg-gray-100 rounded-md border-gray-300 shadow-sm"></textarea>
              <div class="flex items-center justify-center space-x-4 mt-4">
                <button @click="handleRejectMeeting"
                  class="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md">
                  <Loading v-if="showLoading" text="Kaydediliyor" />
                  <span v-else>Kaydet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { onMounted, ref, computed } from "vue";
import Loading from './Loading.vue';

const showLoading = ref(false);
const isMeetingSet = ref(false);
const isMeetingRejected = ref(false);
const isRejecting = ref(false);
const rejectReason = ref("");

const props = defineProps({
  meetingData: {
    type: Object,
    required: true,
  },
  formattedDate: {
    type: Object,
    required: true,
  },
});


const emits = defineEmits(["close", "set-meeting", "reject-meeting"]);

const handleSetMeeting = () => {
  showLoading.value = true;
  setTimeout(() => {
    showLoading.value = false;
    isMeetingSet.value = true;
    setTimeout(() => {
      emits("set-meeting");
    }, 700);
  }, 2000);
};

const handleRejectMeeting = () => {
  showLoading.value = true;
  setTimeout(() => {
    showLoading.value = false;
    isRejecting.value = false;
    isMeetingRejected.value = true;
    setTimeout(() => {
      emits("reject-meeting", rejectReason.value);
    }, 700);
  }, 2000);
};

onMounted(() => {
  console.log("status 0 modal mounted");
});
</script>

<style></style>