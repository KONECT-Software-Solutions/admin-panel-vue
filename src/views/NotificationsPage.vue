<template>
  <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg relative">
    <div
      v-if="isLoading"
      class="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-65">
      <LoadingSpinner :text="''" />
    </div>
    <h3 class="text-lg font-semibold pb-4 text-gray-900 border-b mb-4 border-gray-300 rounded-t">
      <span class="mb-2">Bildirimler</span>
    </h3>
    
    <!-- Display Notifications from Firestore -->
    <div v-for="notification in notifications" :key="notification.id">
      <NotificationMessage
      :notificationType="notification.type"
        :data="notification"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import NotificationMessage from "../components/NotificationMessage.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import { useStore } from "vuex"

const store = useStore();

const isLoading = ref(false);

const notifications = computed( () => store.getters.notifications)


onMounted(async() => {
  
  if (notifications.value.length > 0){
    console.log("notifications already fetched")
  }
  else {
    await store.dispatch("fetchNotifications")
  }




});
</script>
