<template>
  <div
    class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg relative">
    <div
      v-if="isLoading"
      class="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-65">
      <LoadingSpinner :text="''" />
    </div>
    <h3
      class="text-lg font-semibold pb-4 text-gray-900 border-b mb-4 border-gray-300 rounded-t">
      <span class="mb-2">Bildirimler</span>
    </h3>

    <!-- Display Notifications from Firestore -->
    <div v-for="notification in paginatedNotifications" :key="notification.id">
      <NotificationMessage
        :notificationType="notification.type"
        :data="notification" />
    </div>

    <!-- Pagination Controls -->
    <div class="mt-4 flex justify-between items-center">
      <button
        :disabled="currentPage === 1"
        @click="prevPage"
        class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">
        <i class="ri-arrow-left-double-line text-xxl"></i>
      </button>
      <span>{{ currentPage }}/{{ totalPages }}</span>
      <button
        :disabled="currentPage === totalPages"
        @click="nextPage"
        class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">
        <i class="ri-arrow-right-double-line text-xxl"></i>
      </button>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import NotificationMessage from "../components/NotificationMessage.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import { useStore } from "vuex";

const store = useStore();

const isLoading = ref(false);
const currentPage = ref(1);
const itemsPerPage = ref(10); // Adjust based on your requirement

// Get notifications from the store
const notifications = computed(() => store.getters.notifications);

// Calculate total number of pages
const totalPages = computed(() => {
  return Math.ceil(notifications.value.length / itemsPerPage.value);
});

// Slice notifications based on current page
const paginatedNotifications = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return notifications.value.slice(start, end);
});

// Pagination controls
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

onMounted(async () => {
  if (notifications.value.length > 0) {
    console.log("notifications already fetched");
  } else {
    isLoading.value = true;
    await store.dispatch("fetchNotifications");
    isLoading.value = false;
  }
});
</script>
