<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
  <div class="fixed inset-0 flex items-center justify-center z-50 w-full h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-[30rem] max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 border-b rounded-t">
          <h3 class="text-lg font-semibold text-gray-900">
            Uygun Olmayan Tarih ve Saat Aralığını Seç
          </h3>
          <button @click="$emit('close')" type="button"
            class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center">
            <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" aria-hidden="true">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form @submit.prevent="saveUnavailableTime" class="p-4">
          <div class="grid gap-4 mb-4 grid-cols-2">
            <div class="col-span-2">
              <label for="date" class="block mb-2 text-sm font-medium text-gray-900">Tarih</label>
              <VueDatePicker v-model="date" name="date" class="form-input" :enable-time-picker="false" required />
            </div>
            <div class="col-span-1">
              <label for="start-time" class="block mb-2 ml-1 text-sm font-medium text-gray-900">Başlangıç</label>
              <select v-model="startTime" required id="start-time"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 mr-2">
                <option v-for="time in times" :key="time" :value="time">
                  {{ time }}
                </option>
              </select>
            </div>
            <div class="col-span-1">
              <label for="end-time" class="block mb-2 ml-1 text-sm font-medium text-gray-900">Bitiş</label>
              <select v-model="endTime" required id="end-time"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 mr-2">
                <option v-for="time in times" :key="time" :value="time">
                  {{ time }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-span-2">
            <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 mb-4 mt-4">
              <div class="flex justify-between items-center mb-3">
                <span class="text-gray-900 text-base font-medium">Tekrarla</span>
                <label class="inline-flex items-center cursor-pointer">
                  <input v-model="isRepeatEnabled" type="checkbox" class="sr-only peer" />
                  <div
                    class="relative w-11 h-5 bg-gray-200 rounded-full ring-[0.18rem] peer peer-focus:ring-blue-300 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-[1.12rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                  </div>
                </label>
              </div>
              <div class="flex items-center">
                <p class="text-sm text-gray-500 font-normal">
                  Eğer seçiliyse, bu tarih ve saat aralığı haftalık olarak tekrarlanacaktır.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <button type="submit"
              class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";
import { format } from "date-fns";

const date = ref(new Date());
const startTime = ref("12:00");
const endTime = ref("13:00");
const isRepeatEnabled = ref(false);
const emit = defineEmits(["close", "save-exception"]);

const times = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
];

const saveUnavailableTime = () => {
  const formattedDate = date.value
    ? format(new Date(date.value), "dd/MM/yy")
    : "";
  const exception = {
    date: formattedDate,
    startTime: startTime.value,
    endTime: endTime.value,
    repeat: isRepeatEnabled.value,
  };
  emit("save-exception", exception);
  emit("close");
};
</script>

<style></style>
