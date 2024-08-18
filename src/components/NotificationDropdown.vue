<template>
    <div class="relative">
        <button @click="toggleDropdown" class="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-50">
            <i class="ri-notification-4-fill ri-2x"></i>
        </button>
        <div v-show="isOpen" class="absolute right-0 mt-2 w-64 border border-gray-300 shadow-xl bg-white rounded-md z-50">
            <ul class="max-h-64 overflow-auto">
                <li v-for="notification in notifications" :key="notification.id" class="border-b last:border-b-0">
                    <a :href="notification.url" class="block hover:bg-gray-300 p-4">
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
    { id: 1, title: "New order test", message: "You have received a new order.", url: "#" },
    { id: 2, title: "Payment received", message: "Your latest billing statement is ready.", url: "#" },
    { id: 3, title: "System Update", message: "System updates will be performed tonight.", url: "#" },
    { id: 4, title: "New Feature", message: "A new feature has been added to your dashboard.", url: "#" },
    { id: 5, title: "Maintenance Scheduled", message: "Scheduled maintenance will occur this weekend.", url: "#" }
]);

function toggleDropdown() {
    isOpen.value = !isOpen.value;
}
</script>

<style scoped>
/* Optional: Styles specific to the dropdown */
</style>
