<template>
  <div class="bg-white">
    <form @submit.prevent="saveSchedule">
      <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 mb-6">
        <div class="flex justify-between items-center mb-3">
          <span class="text-gray-900 text-base font-medium"
            >Çalışma Saatleri</span
          >
          <label class="inline-flex items-center cursor-pointer">
            <input
              v-model="isWorkingHoursEnabled"
              type="checkbox"
              class="sr-only peer" />
            <div
              class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="sr-only">Çalışma Saatleri</span>
          </label>
        </div>
        <div class="flex items-center">
          <p class="text-sm text-gray-500 font-normal">
            Tüm haftalık çalışma günleri için iş çalışma saatlerini etkinleştir
            veya devre dışı bırak
          </p>
        </div>
      </div>

      <div v-for="day in days" :key="day.name" class="mb-6 pr-16 pl-6">
        <div class="flex items-center justify-center">
          <div class="flex items-center w-24">
            <label class="inline-flex items-center cursor-pointer">
              <input
                v-model="day.enabled"
                type="checkbox"
                :id="day.name"
                class="sr-only peer" />
              <div
                class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <label
              :for="day.name"
              class="ml-2 text-sm font-medium text-gray-900"
              >{{ day.label }}</label
            >
          </div>

          <div>
            <div
              v-for="(interval, index) in day.intervals"
              :key="index"
              class="flex ml-8 mb-2">
              <div class="w-full max-w-[7rem] mr-6">
                <input
                  v-model="interval.startTime"
                  type="time"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                  required />
              </div>
              <div class="w-full max-w-[7rem]">
                <input
                  v-model="interval.endTime"
                  type="time"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                  required />
              </div>
              <button
                @click="removeInterval(day.name, index)"
                type="button"
                class="inline-flex items-center ml-6 p-1.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                    clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Delete</span>
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <button
            @click="addInterval(day.name)"
            type="button"
            class="inline-flex items-center justify-center w-72 h-6 py-2.5 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
            <svg
              class="w-4 h-4 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14m-7 7V5" />
            </svg>
            Aralık Ekle
          </button>
        </div>
      </div>

      <button
        type="submit"
        class="text-white w-full inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Kaydet
      </button>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";

const emit = defineEmits(["save-schedule"]);

const isWorkingHoursEnabled = ref(true);
const days = ref([
  {
    name: "monday",
    label: "Pazartesi",
    enabled: true,
    intervals: [
      { startTime: "09:00", endTime: "12:00" },
      { startTime: "13:00", endTime: "17:00" },
    ],
  },
  {
    name: "tuesday",
    label: "Salı",
    enabled: true,
    intervals: [
      { startTime: "09:00", endTime: "12:00" },
      { startTime: "13:00", endTime: "17:00" },
    ],
  },
  {
    name: "wednesday",
    label: "Çarşamba",
    enabled: true,
    intervals: [
      { startTime: "09:00", endTime: "12:00" },
      { startTime: "13:00", endTime: "17:00" },
    ],
  },
  {
    name: "thursday",
    label: "Perşembe",
    enabled: true,
    intervals: [
      { startTime: "09:00", endTime: "12:00" },
      { startTime: "13:00", endTime: "17:00" },
    ],
  },
  {
    name: "friday",
    label: "Cuma",
    enabled: true,
    intervals: [
      { startTime: "09:00", endTime: "12:00" },
      { startTime: "13:00", endTime: "17:00" },
    ],
  },
]);

const addInterval = (dayName) => {
  const day = days.value.find((d) => d.name === dayName);
  if (day) {
    day.intervals.push({ startTime: "", endTime: "" });
  }
};

const removeInterval = (dayName, index) => {
  const day = days.value.find((d) => d.name === dayName);
  if (day) {
    day.intervals.splice(index, 1);
  }
};

const saveSchedule = () => {
  const schedule = {
    isWorkingHoursEnabled: isWorkingHoursEnabled.value,
    days: days.value.map((day) => ({
      name: day.name,
      enabled: day.enabled,
      intervals: day.intervals,
    })),
  };
  emit("save-schedule", schedule);
  // Handle the schedule saving logic here (e.g., send it to a server)
};

onMounted(() => {
  initFlowbite();
});
</script>
