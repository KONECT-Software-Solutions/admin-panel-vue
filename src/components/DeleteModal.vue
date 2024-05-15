<template>
      <div v-if="show" id="deleteModal" class=" font-medium text-sm fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div class="bg-white rounded-lg p-4 max-w-sm w-full">
            <div class="mb-4">
                <p class="text-gray-800 text-sm">Bu blog yazısını silmek istediğinize emin misiniz?</p>
            </div>
            <div class="flex justify-end">
                <button @click="$emit('close')" id="cancelDelete" class="bg-gray-300 text-gray-800 rounded px-4 py-2 mr-2">Hayır</button>
                <button @click="$emit('delete')"  id="confirmDelete" class="bg-red-600 text-white rounded px-4 py-2">Evet</button>
            </div>
        </div>
    </div>
  
</template>

<script setup>

const props = defineProps({
  show: Boolean
})


</script>

<style>

</style>