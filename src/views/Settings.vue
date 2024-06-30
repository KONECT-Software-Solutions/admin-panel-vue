<template>
  <div>


    <div v-if="userRole === 'attorney'">

      avukat ayarları

    </div>
    <div v-else>admin ayarları değiştirildi feat-10 </div>
  </div>
  <!-- -->
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';


// Access the Vuex store
const store = useStore();


const userRole = computed(() => store.getters.userRole);
const userUid = computed(() => store.getters.user ? store.getters.user.uid : null);

</script>
