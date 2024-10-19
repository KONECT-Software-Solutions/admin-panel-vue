<template>
  <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg relative">
    <div
      v-if="isLoading"
      class="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-65">
      <LoadingSpinner :text="''" />
    </div>
    <h3
      class="text-lg font-semibold pb-4 text-gray-900 border-b mb-4 border-gray-300 rounded-t">
      <span class="mb-2">Admin Ayarları</span>
    </h3>
    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 mb-6">
      <div class="flex justify-between items-center mb-3">
        <span class="text-gray-900 text-base font-medium">Şifre Sıfırlama</span>
        <div class="inline-flex items-center cursor-pointer">
          <Button
            @click="handlePasswordChange"
            text="Mail Gönder"
            color="blue"
            :wFull="false"></Button>
        </div>
      </div>
      <div class="flex-col space-y-4 items-center">
        <MessageWrapper v-if="forgotPasswordSuccessMessage" type="success">
          {{ forgotPasswordSuccessMessage }}
        </MessageWrapper>
        <MessageWrapper v-if="forgotPasswordErrorMessage" type="error">
          {{ forgotPasswordErrorMessage }}
        </MessageWrapper>
        <div>
          <label for="mail" class="text-sm text-gray-500 font-normal">
            Şifre sıfırlama maili göndermek istediğiniz avukatın mail adresini
            girin.
          </label>
          <input
            type="text"
            id="mail"
            v-model="mail"
            placeholder="avukat@tiryakihukuk.com"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
      </div>
    </div>
  </div>
  <!-- -->
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import Button from "../components/Button.vue";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import MessageWrapper from "../components/MessageWrapper.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
// Access the Vuex store
const store = useStore();

const userRole = computed(() => store.getters.userRole);
const userUid = computed(() =>
  store.getters.user ? store.getters.user.uid : null
);

const mail = ref("");
const forgotPasswordSuccessMessage = ref(null);
const forgotPasswordErrorMessage = ref(null);
const isLoading = ref(false);

const handlePasswordChange = async () => {
  if (mail.value === "") {
    forgotPasswordErrorMessage.value = "Lütfen bir mail adresi giriniz.";
    return;
  }
  forgotPasswordSuccessMessage.value = null;
  forgotPasswordErrorMessage.value = null;
  isLoading.value = true;

  try {
    // Send password reset email
    const response = await sendPasswordResetEmail(auth, mail.value);

    console.log("Password reset email sent:");
    forgotPasswordSuccessMessage.value =
      "Şifre yenileme linki email adresinize gönderildi. Mailin size ulaşması 10 dakikayı bulabilir. Lütfen spam klasörünü kontrol ediniz.";
  } catch (error) {
    console.error("Error sending password reset email:", error);
    forgotPasswordErrorMessage.value =
      "Bir hata oluştu. Lütfen tekrar deneyiniz.";
  } finally {
    isLoading.value = false;
  }
};
</script>
