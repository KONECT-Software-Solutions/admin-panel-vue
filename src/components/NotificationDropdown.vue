<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-50">
      <i class="ri-notification-4-fill ri-2x"></i>
    </button>
    <div
      v-show="isOpen"
      class="absolute right-0 mt-2 w-64 border border-gray-300 shadow-xl bg-white rounded-md z-50">
      <ul class="max-h-64 overflow-auto">
        <li
          v-for="notification in notifications"
          :key="notification.id"
          class="border-b last:border-b-0">
          <router-link to="/notifications">
          <button @click="isOpen = false" class="block text-left hover:bg-gray-300 p-4">
            <p class="text-sm font-medium text-gray-800">
              {{ getTitle(notification.type) }}
            </p>
            <p class="text-xs text-gray-600"> {{ getMessage(notification) }}</p>
          </button>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const notifications = computed(() => store.getters.notifications);

const getTitle = (type) => {
  switch (type) {
    case "newUser":
      return "Yeni müşteri!";
    case "newAppointmentRequest":
      return "Randevu isteği!";
    case "appointmentAccepted":
      return "Ayarlanan randevu!";
    case "newContactForm":
      return "Yeni iletişim formu!";
    default:
      return "Unknown";
  }
};

const getMessage = (notification) => {
  switch (notification.type) {
    case "newUser":
      return `Yeni bir kullanıcı ${notification.email} mail adresi ile kayıt oldu. Kontrol et! `;
    case "newAppointmentRequest":
      return `Avukat ${notification.attorney_name} için yeni bir randevu talebi geldi. Kontrol et!`;
    case "appointmentAccepted":
      return `Danışan ${notification.customer_name } için olan randevu talebi kabul edildi. Kontrol et!`;
    case "newContactForm":
      return `Yeni bir iletişim formu dolduruldu. Kontrol et!`;
    default:
      return "Unknown";
  }
};

const isOpen = ref(false);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}
onMounted(() => {
  console.log("notifications", notifications.value);
});
</script>

<style scoped>
/* Optional: Styles specific to the dropdown */
</style>
