<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg p-6 shadow-lg w-[32rem]">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <h3 class="text-lg font-semibold text-gray-900 ml-2">Başarıyla Kaydedildi</h3>
          </div>
          <div class="pl-4">
            <button type="button" @click="$emit('close')"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
              <svg class="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>

          </div>
        </div>
        <p class="mt-4 text-gray-700">{{ contentText }}</p>
        <button @click="$emit('close')" class="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg w-full">
          OK
        </button>
      </div>
    </div>
</template>

<script setup>

const props = defineProps({
    contentText: String,
})
const emits = defineEmits(['close']);

</script>
