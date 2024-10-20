<template>
  <button
    type="submit"
    class="text-white inline-flex items-center justify-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    :class="[colorClass, wFull ? 'w-full' : 'w-auto']"
    :disabled="isLoading"
  >
    <template v-if="isLoading">
      <!-- Loading spinner -->
      <svg class="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.372 0 0 5.372 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.937l3-2.646z"></path>
      </svg>
      {{ loadingText }}
    </template>
    <template v-else>
      {{ text }}
    </template>
  </button>
</template>

<script setup>
import { stringify } from 'postcss';
import { defineProps, computed } from 'vue';

const props = defineProps({
  text: String,
  loadingText: String, 
  color: String,
  wFull: Boolean,
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const colorClass = computed(() => {
  switch (props.color) {
    case 'blue':
      return 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300';
    case 'green':
      return 'bg-green-700 hover:bg-green-800 focus:ring-green-300';
    case 'red':
      return 'bg-red-700 hover:bg-red-800 focus:ring-red-300';
    case 'yellow':
      return 'bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300';
    default:
      return 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'; // Default color
  }
});
</script>
