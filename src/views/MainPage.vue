<template>
    <div class="flex flex-grow">
        <Sidebar v-if="isSidebarOpen" @toggleSidebar="toggleSidebar"/>
        <main class="w-full max-h-screen overflow-scroll">
            <Navbar @toggleSidebar="toggleSidebar" />
            <ContentContainer>
                <RouterView />
            </ContentContainer>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from '../components/layout/Sidebar.vue';
import Navbar from '../components/layout/Navbar.vue';
import ContentContainer from '../components/layout/ContentContainer.vue';

const isSidebarOpen = ref(true);

function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<style scoped>
/* Scoped CSS specific to MainPage */
</style>
