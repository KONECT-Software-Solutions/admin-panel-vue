<template>
    <div class="relative">
        <button @click="toggleDropdown" class="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100">
            <i class="ri-shield-user-fill ri-2x"></i>
        </button>
        <div v-show="isOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md border border-gray-300 shadow-xl z-50">
    <ul class="py-1">
        <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300">Profile</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300">Settings</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300">Logout</a>
        </li>
    </ul>
</div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

function toggleDropdown() {
    isOpen.value = !isOpen.value;
}
</script>

<style scoped>
/* Optional: Styles specific to the dropdown */
</style>
