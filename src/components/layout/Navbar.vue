<template>
  <div class="py-2 px-6 bg-white flex items-center shadow-md sticky top-0 left-0 z-40 justify-between">
    <div class="flex items-center">
        <button @click="$emit('toggleSidebar')" class="text-lg text-gray-600 sidebar-toggle">
            <i class="ri-menu-line"></i>
        </button>
        <ul class="flex items-center text-sm ml-4">
            <li class="mr-2">
                <a href="#" class="text-gray-500 hover:text-gray-800 font-medium">{{ currentTab }}</a>
            </li>
        </ul>
    </div>
    <div v-if="userRole === 'admin'" 
    class="flex items-center">
        <NotificationDropdown />
    </div>
</div>

</template>

<script setup>
import NotificationDropdown from '../NotificationDropdown.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const userRole = computed(() => store.getters.userRole);

// Accept currentTab as a prop
const props = defineProps({
    currentTab: String
});

</script>

<style scoped>
/* Scoped CSS for Navbar */
</style>
