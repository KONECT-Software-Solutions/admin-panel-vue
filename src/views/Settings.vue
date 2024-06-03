<template>
    <Loading
        class="text-blue-500"
        v-if="showLoading"
        text="Yükleniyor..."
    />
    <!-- <PeriodicSchedule />-->
   

</template>

<script setup>
import { useRoute } from 'vue-router';
import PeriodicSchedule from '../components/PeriodicSchedule.vue';
import AddBlog from '../components/AddBlog.vue';
import Loading from '../components/Loading.vue';
import { ref } from 'vue';

const route = useRoute();
const showLoading = ref(true);

const uid = route.params.uid;

</script>
