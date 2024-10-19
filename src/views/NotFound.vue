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
        class="w-full bg-gray-700 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-4xl font-bold text-center text-white">
            404 - Page Not Found
          </h1>
          <p class="text-center text-gray-300">
            Üzgünüm, bu sayfa mecvut değil.
          </p>
          <div class="flex justify-center">
            <a
              :href="href"
              class="inline-block w-full px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-600 rounded-lg focus:ring-4">
              Ana Sayfa
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

// Access the Vuex store
const store = useStore();
const href = computed(() =>
  store.getters.userRole === "admin"
    ? "/online-meetings"
    : `/online-meetings/${store.getters.user.uid}`
);

const userRole = computed(() => store.getters.userRole);
const userUid = computed(() =>
  store.getters.user ? store.getters.user.uid : null
);
</script>

<style></style>
