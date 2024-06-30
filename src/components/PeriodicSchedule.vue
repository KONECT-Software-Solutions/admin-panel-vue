<template>
  <div class="bg-white rounded-lg border border-gray-200 p-6 ">
    <div class="max-w mx-auto bg-white rounded-lg p-4">
      <div>
        <div v-for="(day, index) in schedule.days" :key="index">
          <div class="flex items-center mb-3 w-[54rem] p-2">
            <span class="w-24">{{ day.name }}</span>
            <div class="flex-grow flex justify-between items-center">
              <div class="relative w-[36rem] h-10 bg-gray-200 rounded-lg grid grid-cols-24">
                <!-- Time interval block -->
                <div v-for="(interval, index) in day.intervals" :key="index"
                  class="bg-blue-500 rounded-lg flex items-center justify-center"
                  :style="{ width: calculateWidth(interval.length) }" :class="calculateStartColumn(interval.start)">
                  <span class="text-white text-[0.875rem]">{{ interval.start }} - {{ interval.end }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUpdated } from 'vue';

const calculateWidth = (length) => `${length * 3}rem`;

// fix here the calculation is wrong
const calculateStartColumn = (start) => {
  const [hour, minute] = start.split(":").map(Number);
  const column = (hour - 6) * 2 + (minute === 30 ? 1 : 0) + 1;
  return `col-start-${column}`;
};

// mock data for schedule
const schedule = {
  days: [
    {
      name: "Pazartesi",
      intervals: [
        { start: "07:30", end: "12:30", length: 5 },
        { start: "14:00", end: "17:00", length: 3 },
      ],
    },
    {
      name: "Salı",
      intervals: [
        { start: "08:00", end: "12:30", length: 4.5 },
        { start: "14:00", end: "16:00", length: 2 },
      ],
    },
    {
      name: "Çarşamba",
      intervals: [
        { start: "08:30", end: "11:30", length: 3 },
        { start: "13:30", end: "16:30", length: 3 },
      ],
    },
    {
      name: "Perşembe",
      intervals: [
        { start: "09:30", end: "12:30", length: 3 },
        { start: "13:00", end: "15:00", length: 2 },
      ],
    },
    {
      name: "Cuma",
      intervals: [
        { start: "09:00", end: "12:00", length: 3 },
        { start: "13:00", end: "15:00", length: 2 },
      ],
    },
  ],
};

</script>