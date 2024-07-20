<template>
  <div class="bg-white rounded-lg border border-gray-200 p-6 mb-4 shadow-lg">
    <!-- here, attorneys can set their online meeting price based on the meeting duration-->
    <form @submit.prevent="saveAppointmentSettings">
      <div
        class="pb-4 border-b mb-4 border-gray-300 rounded-t flex justify-between">
        <h3 class="text-lg font-semibold text-gray-900">
          <span class="mb-2">Avukat Bilgilerim</span>
        </h3>
        <button
          type="submit"
          class="text-white w-40 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Kaydet
        </button>
      </div>
      <!-- I want to make changes on this div-->

      <div class="grid gap-4 mb-4 grid-cols-3">
        <div class="col-span-1">
          <label
            for="title"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Okul</label
          >
          <input
            v-model="title"
            type="text"
            name="title"
            id="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Blog yazısı başlığını girin"
            required="" />
        </div>
        <div class="col-span-1">
          <label
            for="title"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Deneyim</label
          >
          <input
            v-model="title"
            type="text"
            name="title"
            id="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Blog yazısı başlığını girin"
            required="" />
        </div>
        <div class="col-span-1">
          <label
            for="title"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Ünvan</label
          >
          <input
            v-model="title"
            type="text"
            name="title"
            id="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Blog yazısı başlığını girin"
            required="" />
        </div>
        <div class="col-span-3">
          <label
            for="tags"
            class="block mb-2 text-sm font-medium text-gray-900">
            Etiketler
          </label>
          <div
            class="flex flex-wrap items-center border border-gray p-2 rounded-lg">
            <span
              v-for="(tag, index) in tags"
              :key="index"
              class="flex items-center bg-gray-100 text-sm border border-gray-300 hover:bg-gray-300 text-gray-900 px-3 py-1 rounded-full mr-2 mb-2">
              {{ tag }}
              <button @click="removeTag(index)" class="ml-2 focus:outline-none">
                <svg
                  class="w-4 h-4 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 10-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </span>
            <input
              v-model="newTag"
              name="tags"
              @keydown.enter.prevent="addTag"
              placeholder="Yazdıktan sonra Enter tuşuna basarak etiketi ekleyin."
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
          </div>
          <p class="mt-2 text-gray-600">
            {{ remainingTags }} etiket daha ekleyebilirsiniz.
          </p>
        </div>
        <div></div>
      </div>
    </form>
  </div>
</template>

<script setup>
const props = defineProps({
  appointmentSettings: Array,
});

const emit = defineEmits(["save-attorney-information"]);

const durations = [30, 45, 60];
const appointmentTypes = [
  "Online Görüşme",
  "Telefonla Görüşme",
  "Ofiste Görüşme",
];

const addMeeting = () => {
  props.appointmentSettings.push({ duration: "", price: "", type: "" });
};

const removeMeeting = (index) => {
  if (props.appointmentSettings.length > 1) {
    props.appointmentSettings.splice(index, 1);
  }
};

const saveAppointmentSettings = () => {
  emit("save-appointment-settings", props.appointmentSettings);
};
</script>
