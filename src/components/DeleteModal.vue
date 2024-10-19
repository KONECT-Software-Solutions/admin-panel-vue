<template>
  <div
    v-if="show"
    id="deleteModal"
    class="font-medium text-sm fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div class="bg-white rounded-lg p-4 max-w-sm w-full">
      <!-- Confirmation Modal -->
      <div v-if="!showLoading && !showSuccess && !showFailure">
        <div class="mb-4">
          <p class="text-gray-800 text-sm">
            Bu blog yazısını silmek istediğinize emin misiniz?
          </p>
        </div>
        <div class="flex justify-end space-x-2">
          <Button
            @click="handleDelete"
            id="confirmDelete"
            text="Evet"
            color="green"
            :wFull="false">
          </Button>
          <Button
            @click="$emit('close')"
            text="Hayır"
            id="cancelDelete"
            color="red"
            :wFull="false">
          </Button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-else-if="showLoading">
        <Loading text="Blog yazısı siliniyor..." />
      </div>

      <!-- Success State -->
      <div v-else-if="showSuccess">
        <p class="text-sm mb-4">Blog yazısı başarıyla silindi.</p>
        <div class="flex justify-end">
          <Button
          @click="handleClose"
            text="Tamam"
            color="blue"
            :wFull="false">
          </Button>
        </div>
      </div>

      <!-- Failure State -->
      <div v-else-if="showFailure">
        <p class="text-sm mb-4">Blog yazısı silinirken bir hata oluştu.</p>
        <div class="flex justify-end">
          <Button
          @click="handleClose"
            text="Geri Dön"
            color="blue"
            :wFull="false">
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Loading from "./Loading.vue";
import Button from "./Button.vue";

const props = defineProps({
  show: Boolean,
});

const emits = defineEmits(["close", "delete"]);

// States
const showLoading = ref(false);
const showSuccess = ref(false);
const showFailure = ref(false);

// Handle the delete action
const handleDelete = async () => {
  showLoading.value = true;
  try {
    // Simulate an async delete operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    emits("delete");
    // Simulate success
    showLoading.value = false;
    showSuccess.value = true;
  } catch (error) {
    // Handle failure
    showLoading.value = false;
    showFailure.value = true;
  }
};

// Close the modal
const handleClose = () => {
  // Reset all states
  showLoading.value = false;
  showSuccess.value = false;
  showFailure.value = false;
  emits("close");
};
</script>

<style scoped></style>
