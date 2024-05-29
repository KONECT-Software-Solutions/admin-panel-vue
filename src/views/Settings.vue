<template>
    <h1 class="font-bold text-4xl">Ayarlar</h1>
    <p v-if="uid">Attorney UID: {{ uid }}</p>
    <p v-else>Welcome Admin</p>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const uid = route.params.uid;

</script>
