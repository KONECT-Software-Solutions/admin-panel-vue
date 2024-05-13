<template>
    <div class="relative">
        <button @click="toggleDropdown" class="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-50">
            <i class="ri-notification-4-fill ri-2x"></i>
        </button>
        <div v-show="isOpen" class="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50">
            <ul class="max-h-64 overflow-auto">
                <li v-for="notification in notifications" :key="notification.id" class="border-b last:border-b-0">
                    <a :href="notification.url" class="block hover:bg-gray-100 p-4">
                        <p class="text-sm font-medium text-gray-800">{{ notification.title }}</p>
                        <p class="text-xs text-gray-600">{{ notification.message }}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const notifications = ref([
    { id: 1, title: "New order", message: "You have received a new order.", url: "#" },
    { id: 2, title: "Payment received", message: "Your latest billing statement is ready.", url: "#" }
]);

function toggleDropdown() {
    isOpen.value = !isOpen.value;
}
</script>

<style scoped>
/* Optional: Styles specific to the dropdown */
</style>
