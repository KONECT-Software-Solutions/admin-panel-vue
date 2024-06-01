<template>

    <OnlineMeetingsMenu 
        v-if="userRole === 'admin' && showMenu"
        @optionSelected="handleOptionClick" />
    <OnlineMeetingsManagement 
      v-else
      :showAll="selectedOption === 'showAll'"
      :uid="selectedOption"
      @goBack="showMenu = true"
    />



</template>

<script setup>
import OnlineMeetingsMenu from '../components/OnlineMeetingsMenu.vue';
import OnlineMeetingsManagement from '../components/OnlineMeetingsManagement.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ref } from 'vue';

const showMenu = ref(true);

// Access the Vuex store
const store = useStore();

// Create computed properties for the user role and UID
const userRole = computed(() => store.getters.userRole);
const userUid = computed(() => store.getters.user ? store.getters.user.uid : null);

const selectedOption = ref(""); // Can be 'showAll', 'attorney1', 'attorney2', or a specific UID

if (userRole.value !== 'admin') {
  selectedOption.value = userUid.value;
  showMenu.value = false;
}

const handleOptionClick = (option) => {
  selectedOption.value = option;
  showMenu.value = false;
};
</script>



<style>

</style>