<template>
    <div class="flex flex-grow">
        <Sidebar v-if="isSidebarOpen" @toggleSidebar="toggleSidebar" @titleChange="handleTitleChange" class="hidden lg:block" />
        <main class="w-full h-screen overflow-y-scroll">
            <Navbar @toggleSidebar="toggleSidebar" :current-tab="currentTab"/>
            <ContentContainer>
                <transition name="fade">
                    <RouterView />
                </transition>
            </ContentContainer>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Sidebar from '../components/layout/Sidebar.vue';
import Navbar from '../components/layout/Navbar.vue';
import ContentContainer from '../components/layout/ContentContainer.vue';
import { useStore } from "vuex"

const store = useStore()
const isSidebarOpen = ref(true);
const isMobileSidebarOpen = ref(false);

const currentTab = ref(localStorage.getItem('currentTab') || '');

function handleTitleChange(newTitle) {
    currentTab.value = newTitle;
    localStorage.setItem('currentTab', newTitle);
}

function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;
}

onMounted( async () => {
    currentTab.value = localStorage.getItem('currentTab') || '';
    await store.dispatch("fetchNotifications")
});
</script>

<style scoped>
/* Scoped CSS specific to MainPage */

/* Fade transition CSS */
.fade-enter-active, .fade-leave-active {
    transition: opacity 1.2s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>