
<template>
        <div class=" h-screen min-w-[16rem] bg-gray-800 p-4 z-50 sidebar-menu transition-opacity ease-in-out delay-150 duration-300 transition-transform">
            <a href="#" class="flex items-center pb-4 border-b border-b-gray-800">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="" class="w-8 h-8 rounded object-cover">
                <span class="text-lg font-bold text-white ml-3">Admin Panel</span>
            </a>
            <ul class="mt-4">
                <li v-for="menu in menus" :key="menu.title" class="mb-1 group">
                    <router-link :to="menu.link" @click="emitTitleChange(menu.title)" class="flex items-center  py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                        <i :class="menu.icon" class="mr-3 text-lg"></i>
                        <span class="text-lg">{{menu.title}}</span>
                    </router-link>
                </li>
                <li>
                    <div @click="logout" class="flex items-center  py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                        <i class="mr-3 text-lg ri-logout-box-line"></i>
                        <span class="text-lg">Çıkış</span>
                    </div>
                </li>
            </ul>
        </div>

</template>
<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const logout = () => {
  store.dispatch('logout');
  router.push('/'); // Redirect to login page after logout
};
const emit = defineEmits(['titleChange']);

// Function to emit the title change event
function emitTitleChange(title) {
    emit('titleChange', title);
}
let menus = [
    {
        title: 'Ana Sayfa',
        icon: 'ri-home-2-line',
        link: '/home'
    },
    {
        title: 'Online Görüşmeler',
        icon: 'ri-video-on-line',
        link: '/online-meetings'
    },
    {
        title: 'Blog Yönetimi',
        icon: 'ri-article-line',
        link: '/blog-management'
    },
    {
        title: 'Avukatlar',
        icon: 'ri-team-line',
        link: '/lawyers'
    },
    {
        title: 'Ayarlar',
        icon: 'ri-settings-2-line',
        link: '/settings'
    },
    ]
</script>