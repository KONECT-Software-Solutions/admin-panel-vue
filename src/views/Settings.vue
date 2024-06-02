<template>

    <PeriodicSchedule />
   

</template>

<script setup>
import { useRoute } from 'vue-router';
import PeriodicSchedule from '../components/PeriodicSchedule.vue';
import AddBlog from '../components/AddBlog.vue';

const route = useRoute();

const uid = route.params.uid;

</script>
