<template>
    <div class="p-4">
      <!-- Weekly Schedule Section -->
      <div class="mb-6">
        <h2 class="text-xl font-bold mb-2">Weekly Schedule</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="day in schedule.days" :key="day.name" class="p-4 border rounded">
            <h3 class="font-semibold">{{ day.name }}</h3>
            <div v-if="day.enabled">
              <ul>
                <li v-for="interval in day.intervals" :key="interval.startTime">
                  {{ interval.startTime }} - {{ interval.endTime }}
                </li>
              </ul>
            </div>
            <div v-else class="text-gray-500">Disabled</div>
          </div>
        </div>
      </div>
  
      <!-- Exceptional Hours Section -->
      <div>
        <h2 class="text-xl font-bold mb-2">Exceptional Hours</h2>
        <ul>
          <li v-for="exception in exceptions" :key="exception.date" class="p-4 border rounded mb-2">
            <div>
              <span class="font-semibold">Date:</span> {{ exception.date }}
            </div>
            <div>
              <span class="font-semibold">Time:</span> {{ exception.startTime }} - {{ exception.endTime }}
            </div>
            <div>
              <span class="font-semibold">Repeats:</span> {{ exception.repeat ? 'Yes' : 'No' }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    schedule: {
      type: Object,
 
    },
    exceptions: {
      type: Array,

    },
  })
  </script>
  
  <style scoped>
  /* Add any scoped styles if necessary */
  </style>
  