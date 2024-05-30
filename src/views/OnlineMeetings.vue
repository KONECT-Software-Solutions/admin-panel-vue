<template>
  <OnlineMeetingsMenu 
    v-if="userRole === 'admin'"
  />
  <OnlineMeetingsManagement 
    v-else-if="userRole === 'attorney'"
    :userRole="userRole"
    :userUid="userUid"
  />


</template>

<script setup>
import OnlineMeetingsMenu from '../components/OnlineMeetingsMenu.vue';
import OnlineMeetingsManagement from '../components/OnlineMeetingsManagement.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
// Access the Vuex store
const store = useStore();

// Create computed properties for the user role and UID
const userRole = computed(() => store.getters.userRole);
const userUid = computed(() => store.getters.user ? store.getters.user.uid : null);
</script>



<style>

</style>