<template>
    <div class="h-screen min-w-[16rem] bg-gray-800 p-4 z-50 sidebar-menu ease-in-out delay-150 duration-300 transition-transform">
        <a href="#" class="flex items-center pb-4 border-b border-b-gray-800">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="" class="w-8 h-8 rounded object-cover">
            <span class="text-lg font-bold text-white ml-3">Admin Panel</span>
        </a>
        <ul class="mt-4">
            <li v-for="menu in filteredMenus" :key="menu.title" class="mb-1 group">
                <router-link :to="menu.link" @click="emitTitleChange(menu.title)" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                    <i :class="menu.icon" class="mr-3 text-lg"></i>
                    <span class="text-lg">{{ menu.title }}</span>
                </router-link>
            </li>
            <li>
                <div @click="logout" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
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
import { computed } from 'vue';

const store = useStore();
const router = useRouter();

const userRole = computed(() => store.getters.userRole);
const userUid = computed(() => store.getters.user ? store.getters.user.uid : null);

const logout = () => {
    store.dispatch('logout');
    router.push('/'); // Redirect to login page after logout
};

const emit = defineEmits(['titleChange']);

// Function to emit the title change event
function emitTitleChange(title) {
    emit('titleChange', title);
    
}

const adminMenus = [
   // { title: 'Ana Sayfa', icon: 'ri-home-2-line', link: '/home' },
    { title: 'Online Görüşmeler', icon: 'ri-video-on-line', link: '/online-meetings' },
    { title: 'Blog Yönetimi', icon: 'ri-article-line', link: '/blogs' },
   //{ title: 'Avukatlar', icon: 'ri-team-line', link: '/lawyers' },
    { title: 'Ayarlar', icon: 'ri-settings-2-line', link: '/settings' }
];

const attorneyMenus = [
    //{ title: 'Ana Sayfa', icon: 'ri-home-2-line', link: '/home' },
    { title: 'Online Görüşmelerim', icon: 'ri-video-on-line', link: '/online-meetings' },
    { title: 'Randevu Saatlerim', icon: 'ri-settings-2-line', link: '/settings' }
];


const filteredMenus = computed(() => {
    if (userRole.value === 'admin') {
        return adminMenus;
    } else if (userRole.value === 'attorney') {
        return attorneyMenus.map(menu => ({
            ...menu,
            link: `${menu.link}/${userUid.value}`
        }));
    }
    return [];
});

</script>
