<template>
  <div class="py-2 px-6 bg-white flex items-center shadow-md sticky top-0 left-0 z-30 justify-between">
    <div class="flex items-center">
        <button @click="$emit('toggleSidebar')" class="text-lg text-gray-600 sidebar-toggle">
            <i class="ri-menu-line"></i>
        </button>
        <ul class="flex items-center text-sm ml-4">
            <li class="mr-2">
                <a href="#" class="text-gray-500 hover:text-gray-800 font-medium">Ana Sayfa</a>
            </li>
        </ul>
    </div>
    <div class="flex items-center">
        <NotificationDropdown />
        <ProfileDropdown />
    </div>
</div>

</template>

<script setup>
import NotificationDropdown from './NotificationDropdown.vue';
import ProfileDropdown from './ProfileDropdown.vue';
</script>

<style scoped>
/* Scoped CSS for Navbar */
</style>
