<template>
  <attorney-schedule-modal
    v-if="showAttorneyScheduleModal"
    @close="showAttorneyScheduleModal = false" />
  <!-- make the lg-->
  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
    <!-- Total Online Meetings Card -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <div>
          <div class="text-4xl font-bold text-gray-800">
            {{ totalMeetings }}
          </div>
          <div class="text-lg font-medium text-gray-500">
            Toplam Online Görüşmeler
          </div>
        </div>
        <div class="text-gray-400">
          <i class="ri-group-line text-4xl"></i>
        </div>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          class="h-full bg-blue-600"
          :style="{ width: meetingProgress + '%' }"></div>
      </div>
      <div class="text-right text-sm font-medium text-gray-600 mt-2">
        {{ meetingProgress }}%
      </div>
    </div>

    <!-- Meeting Status Summary Card -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <div>
          <div class="flex items-center mb-1">
            <div class="text-4xl font-bold text-gray-800">
              {{ approvedMeetings }}
            </div>
            <div
              class="ml-2 p-1 rounded bg-emerald-100 text-emerald-700 text-sm font-semibold">
              +{{ approvedPercentage }}%
            </div>
          </div>
          <div class="text-lg font-medium text-gray-500">
            Yaklaşan Görüşmeler
          </div>
        </div>
        <div class="text-gray-400">
          <i class="ri-calendar-check-line text-4xl"></i>
        </div>
      </div>
      <div class="text-gray-600 font-medium">Güncel Durum:</div>
      <div class="mt-2 flex flex-wrap">
        <span
          v-for="(count, status) in meetingStatusSummary"
          :key="status"
          :class="statusColors[status]"
          class="text-xs font-semibold mr-2 px-2 py-1 rounded-lg mb-1">
          {{ getStatusText(status) }}: {{ count }}
        </span>
      </div>
    </div>

    <div v-if="!showTopAttorneys"
      class="bg-white flex justify-center rounded-lg border border-gray-200 p-2 shadow-lg">
      <div v-if="uid">
        <img
          :src="`/assets/images/${uid}.webp`"
          alt="Attorney Photo"
          class="w-56 object-cover rounded-md" />
      </div>
    </div>
    <!-- <div v-if="showAttorneySchedule && userRole === 'admin'"
      class="flex items-center justify-center bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
      <div>
        <div class="text-2xl font-bold text-gray-800 mb-4">Avukat Çizelgesi</div>
        <button @click="showAttorneyScheduleModal = true"
          class="text-white w-full inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Çizelgeyi Görüntüle
        </button>
      </div>
    </div>-->

    <div
      v-if="showTopAttorneys"
      class="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
      <div
        class="flex justify-between items-center mb-4 bg-gray-800 p-2 rounded-t-lg">
        <div class="flex items-center p-2">
          <i class="ri-award-line text-2xl text-white"></i>
          <div class="ml-2 text-lg font-bold text-white">
            En çok Görüşme Yapan Avukatlar
          </div>
        </div>
      </div>
      <ul class="mt-2 space-y-2">
        <li
          v-for="(attorney, index) in topAttorneys"
          :key="index"
          class="flex items-center justify-between text-lg font-medium text-black bg-gray-100 h-10 rounded-lg">
          <div class="flex items-center">
            <div
              class="bg-gray-800 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
              {{ index + 1 }}
            </div>
            <div class="pl-4 flex items-center justify-stretch">
              <div class="text-lg font-bold">{{ attorney.name }}</div>
            </div>
          </div>
          <div class="text-xl border-l-2 border-gray-800 px-4">
            {{ attorney.meetings }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import AttorneyScheduleModal from "../components/AttorneyScheduleModal.vue";

// Access the Vuex store
const store = useStore();

// Create computed properties for the user role and UID
const userRole = computed(() => store.getters.userRole);
const showAttorneyScheduleModal = ref(false);

const isAdmin = () => userRole.value === "admin";

// props
const props = defineProps({
  totalMeetings: Number,
  approvedMeetings: Number,
  satisfactionRate: Number,
  meetingStatusSummary: Object,
  topAttorneys: Array,
  showTopAttorneys: Boolean,
  showAttorneySchedule: Boolean,
  uid: String,
});

const statusColors = {
  0: "bg-blue-100 text-blue-700",
  1: "bg-green-100 text-green-700",
  2: "bg-gray-100 text-gray-700",
  3: "bg-red-100 text-red-700",
  4: "bg-orange-100 text-orange-700",
  5: "bg-orange-100 text-orange-700",
  6: "bg-black text-white",
  7: "bg-black text-white",
};

const getStatusText = (status) => {
  switch (status) {
    case "0":
      return "İstek";
    case "1":
      return "Kabul Edildi";
    case "2":
      return "Tamamlandı";
    case "3":
      return "Reddedildi";
    case "6":
      return "İptal Edildi";
      case "7":
      return "Süresi Geçti";
    default:
      return "Unknown";
  }
};

// computed properties
const approvedPercentage = computed(() => {
  if (props.totalMeetings === 0) return 0;
  return ((props.approvedMeetings / props.totalMeetings) * 100).toFixed(2);
});

const meetingProgress = computed(() => {
  if (props.totalMeetings === 0) return 0;
  return ((props.totalMeetings / 100) * 100).toFixed(2); // assuming 100 is the goal
});

onMounted(() => {
  console.log("isAdmin", isAdmin(userRole));
  console.log("uid", props.uid);
});
</script>
