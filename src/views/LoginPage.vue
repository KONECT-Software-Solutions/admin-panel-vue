<template>
  <section class="bg-gray-800">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-white">
        <img
          class="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo" />
        Tiryaki Hukuk Admin Panel
      </a>
      <div
        class="w-full bg-gray-700 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form
            @submit.prevent="login"
            class="space-y-4 md:space-y-6"
            action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-white-900 text-white"
                >Email</label
              >
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-white-900 text-white"
                >Şifre</label
              >
              <input
                v-model="password"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
            </div>
            <button
              id="signin"
              :disabled="showLoading"
              class="w-full inline-block text-white bg-gray-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              <Loading v-if="showLoading" text="Giriş Yapılıyor..." />
              <span v-else>Giriş Yap</span>
            </button>
            <div v-if="error" class="text-red-500 text-sm mt-2">
              {{ error }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Loading from "../components/Loading.vue";

const store = useStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const showLoading = ref(false);
const error = ref("");

const login = async () => {
  showLoading.value = true;
  error.value = "";

  try {
    const user = { username: email.value, password: password.value };
    await store.dispatch("login", user);

    const userRole = store.getters.userRole;
    const userUid = store.getters.user ? store.getters.user.uid : null;

    if (userRole === "attorney" && userUid) {
      router.push(`/online-meetings/${userUid}`); // Redirect attorneys to /home/:uid
    } else {
      router.push("/online-meetings"); // Redirect admins to /home
    }
  } catch (e) {
    error.value = "Hesap isim veya şifre yanlış. Lütfen tekrar deneyin.";
  } finally {
    showLoading.value = false;
  }
};
</script>

<style>
/* Optional: Additional styling for the spinner if needed */
</style>
