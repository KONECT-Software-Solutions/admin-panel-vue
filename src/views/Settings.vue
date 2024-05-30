<template>
    <h1 class="font-bold text-4xl">Ayarlar</h1>
    <p v-if="uid">Attorney UID: {{ uid }}</p>
    <p v-else>Welcome Admin</p>

    <PeriodicSchedule />

</template>

<script setup>
import { useRoute } from 'vue-router';
import PeriodicSchedule from '../components/PeriodicSchedule.vue';

const route = useRoute();

const uid = route.params.uid;

</script>
