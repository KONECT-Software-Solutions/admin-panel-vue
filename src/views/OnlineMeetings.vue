<template>
  <OnlineMeetingsMenu 
    v-if="userRole === 'admin' && !showAll"
    @toggle-show-all="handleToggleShowAll"

  />
  <OnlineMeetingsManagement 
    v-else-if="userRole === 'attorney' || showAll"
    :userRole="userRole"
    :userUid="userUid"
  />


</template>

<script setup>
import OnlineMeetingsMenu from '../components/OnlineMeetingsMenu.vue';
import OnlineMeetingsManagement from '../components/OnlineMeetingsManagement.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ref } from 'vue';

const showAll = ref(false);

// Access the Vuex store
const store = useStore();

// Create computed properties for the user role and UID
const userRole = computed(() => store.getters.userRole);
const userUid = computed(() => store.getters.user ? store.getters.user.uid : null);

const handleToggleShowAll = () => {
  showAll.value = !showAll.value;
};
</script>



<style>

</style>