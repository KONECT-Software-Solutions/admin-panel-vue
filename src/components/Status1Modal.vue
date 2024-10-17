<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
  <div
    tabindex="-1"
    class="fixed inset-0 flex items-center justify-center z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-[40rem] max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 border-b rounded-t">
          <h3 class="text-lg font-semibold text-black">Toplantı Detayları</h3>
          <button
            type="button"
            @click="$emit('close')"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 14 14">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="px-6 py-4">
          <div class="flex items-center justify-center space-x-4">
            <div
              class="bg-gray-600 text-white rounded-lg w-20 h-24 flex flex-col items-center justify-center">
              <div class="text-sm">{{ formattedDate.month }}</div>
              <div class="text-4xl font-bold">
                {{ formattedDate.dayNumber }}
              </div>
              <div class="text-sm">{{ formattedDate.dayName }}</div>
            </div>
            <div class="p-2">
              <h2 class="text-xl font-bold">Toplantı Detayları</h2>
              <div class="flex items-center text-gray-500 space-x-2">
                <i class="ri-time-line text-lg"></i>
                <span>{{ formattedDate.time }} -</span>
                <span>{{ formattedDate.meetingTimeEnd }}</span>
              </div>
              <div class="flex space-x-2 mt-2">
                <span
                  class="bg-gray-100 hover:bg-gray-200 ring-0 ring-gray-400 hover:ring-1 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >{{ meetingData.attorney_name }}</span
                >
                <span
                  class="bg-gray-100 hover:bg-gray-200 ring-0 ring-gray-400 hover:ring-1 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >{{ meetingData.customer_name }}</span
                >
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Randevu Sebebi</label
            >
            <p
              type="text"
              name="title"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required="">
              {{ meetingData.topic }}
            </p>
          </div>
          <div v-if="meetingData.type === 'video'">
            <p
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 leading-7"
              required="">
              <span>Online video görüşme randevunuza</span>

              <vue-countdown
                :time="countdownTime"
                v-slot="{ days, hours, minutes, seconds }">
                <div
                  class="space-x-1 mx-1 items-center text-nowrap bg-yellow-100 rounded-xl px-2 text-sm inline-block">
                  <i class="ri-time-fill mr-1 text-lg"></i>
                  <span v-if="days > 1">{{ days }} gün</span>
                  <span>{{ hours }} saat {{ minutes }} dk {{ seconds }}sn</span>
                </div>
              </vue-countdown>

              <!-- Force this text to go to a new line -->
              <span>
                kaldı. Randevu saatinde aşağıdaki butona tıklayarak görüşmeye
                katılabilirsiniz.
              </span>
            </p>

            <div class="flex items-center justify-center space-x-2 mt-4">
              <a
                :href="meetingData.meeting_url"
                target="_blank"
                class="flex items-center justify-center space-x-3 px-6 py-2 rounded-lg bg-gradient-to-r from-green-400 to-lime-400 text-white shadow-md hover:shadow-lg hover:from-green-500 hover:to-lime-500 transition-all duration-300 ease-in-out transform hover:scale-105">
                <img
                  src="../assets/google-meet-svgrepo-com.svg"
                  class="w-8 h-8"
                  alt="google-meet" />
                <span class="text-lg font-semibold">Katıl</span>
              </a>
            </div>
          </div>
          <div v-if="meetingData.type === 'phone'">
            <p
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 leading-7"
              required="">
              <span>Telefon görüşme randevunuza</span>

              <vue-countdown
                :time="countdownTime"
                v-slot="{ days, hours, minutes, seconds }">
                <div
                  class="space-x-1 mx-1 items-center text-nowrap bg-yellow-100 rounded-xl px-2 text-sm inline-block">
                  <i class="ri-time-fill mr-1 text-lg"></i>
                  <span v-if="days > 1">{{ days }} gün</span>
                  <span>{{ hours }} saat {{ minutes }} dk {{ seconds }}sn</span>
                </div>
              </vue-countdown>

              <!-- Force this text to go to a new line -->
              <span>
                kaldı. Vakit geldiğinde danışanınıza aşağıdaki numaradan
                ulaşabilirsiniz.</span
              >
            </p>

            <div class="flex items-center justify-center mt-4">
              <div
                class="text-white flex space-x-1 bg-green-600 items-center hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                <i class="ri-phone-line text-3xl"></i>
                <p>+90 {{ meetingData.customer_phone }}</p>
              </div>
            </div>
          </div>
          <div v-if="meetingData.type === 'inPerson'">
            <p
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 leading-7"
              required="">
              <span>Yüzyüze görüşme randevunuza</span>

              <vue-countdown
                :time="countdownTime"
                v-slot="{ days, hours, minutes, seconds }">
                <div
                  class="space-x-1 mx-1 items-center text-nowrap bg-yellow-100 rounded-xl px-2 text-sm inline-block">
                  <i class="ri-time-fill mr-1 text-lg"></i>
                  <span v-if="days > 1">{{ days }} gün</span>
                  <span>{{ hours }} saat {{ minutes }} dk {{ seconds }}sn</span>
                </div>
              </vue-countdown>

              <!-- Force this text to go to a new line -->
              <span>
                kaldı. Danışanınıza aşşağıdaki iletişim bilgilerinden
                ulaşabilirsiniz.
              </span>
            </p>

            <div class="flex items-center space-x-2 justify-center mt-4">
              <div
                class="text-white flex space-x-1 bg-green-600 items-center hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                <i class="ri-phone-line text-3xl"></i>
                <p>+90 {{ meetingData.customer_phone }}</p>
              </div>
              <div
                class="text-white flex space-x-1 bg-green-600 items-center hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                <i class="ri-mail-line text-3xl"></i>
                <p>{{ meetingData.customer_email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import VueCountdown from "@chenfengyuan/vue-countdown";

const props = defineProps({
  meetingData: {
    type: Object,
    required: true,
  },
  formattedDate: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["close"]);

const countdownTime = computed(() => {
  if (props.meetingData.date_time && props.meetingData.date_time.seconds) {
    const meetingTime = new Date(props.meetingData.date_time.seconds * 1000);
    const currentTime = new Date();
    const duration = meetingTime - currentTime;
    return duration > 0 ? duration : 0; // Ensure the duration is non-negative
  }
  return 0;
});

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {}
}

onMounted(() => {
  console.log(props.formattedDate);
});
</script>

<style scoped></style>
