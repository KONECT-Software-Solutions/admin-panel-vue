<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
    <!-- Total Online Meetings Card -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <div>
          <div class="text-4xl font-bold text-gray-800">{{ totalMeetings }}</div>
          <div class="text-lg font-medium text-gray-500">Toplam Online Görüşmeler</div>
        </div>
        <div class="text-gray-400">
          <i class="ri-group-line text-4xl"></i>
        </div>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div class="h-full bg-blue-600" :style="{ width: meetingProgress + '%' }"></div>
      </div>
      <div class="text-right text-sm font-medium text-gray-600 mt-2">{{ meetingProgress }}%</div>
    </div>

    <!-- Meeting Status Summary Card -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <div>
          <div class="flex items-center mb-1">
            <div class="text-4xl font-bold text-gray-800">{{ approvedMeetings }}</div>
            <div class="ml-2 p-1 rounded bg-emerald-100 text-emerald-700 text-sm font-semibold">
              +{{ approvedPercentage }}%
            </div>
          </div>
          <div class="text-lg font-medium text-gray-500">Yaklaşan Görüşmeler</div>
        </div>
        <div class="text-gray-400">
          <i class="ri-calendar-check-line text-4xl"></i>
        </div>
      </div>
      <div class="text-gray-600 font-medium">Güncel Durum:</div>
      <div class="mt-2 flex flex-wrap">
        <span v-for="(count, status) in meetingStatusSummary" :key="status" :class="statusColors[status]" class="text-xs font-semibold mr-2 px-2 py-1 rounded-lg mb-1">
          {{ getStatusText(status) }}: {{ count }}
        </span>
      </div>
    </div>

      <!-- Top Performing Attorneys Card -->
      <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
      <div class="flex justify-between items-center mb-4">
          <div>
            <div class="text-2xl font-bold text-gray-800">En İyi Avukatlar</div>
      <div class="text-lg font-medium text-gray-500">Toplantı Sayısına Göre</div>
          </div>
          <div class="text-gray-400">
          <i class="ri-award-line text-4xl"></i>
          </div>
      </div>
      <ul class="mt-2 space-y-2">
          <li v-for="(attorney, index) in topAttorneys" :key="index" class="text-lg font-semibold text-gray-700">
            <span class="flex-1">{{ index + 1 }}. {{ attorney.name }}</span>
            <span class="text-xl font-bold text-gray-900">
              <i class="ri-calendar-line"></i> {{ attorney.meetings }}
            </span>
            </li>
      </ul>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, defineProps } from "vue";

// props
const props = defineProps({
  totalMeetings: Number,
  approvedMeetings: Number,
  satisfactionRate: Number,
  meetingStatusSummary: Object,
  topAttorneys: Array
});

const statusColors = {
  0: 'bg-blue-100 text-blue-700',
  1: 'bg-green-100 text-green-700',
  2: 'bg-gray-100 text-gray-700',
  3: 'bg-red-100 text-red-700',
  4: 'bg-orange-100 text-orange-700',
  5: 'bg-orange-100 text-orange-700',
  6: 'bg-black text-white',
  7: 'bg-black text-white'
};


const getStatusText = (status) => {
  switch (status) {
    case "0": return 'İstek';
    case "1": return 'Kabul Edildi';
    case "2": return 'Tamamlandı';
    case "3": return 'Reddedildi';
    case "4": return 'Müşteri Onayı';
    case "5": return 'Avukat Onayı';
    case "6": return 'Geri Ödemeli İptal';
    case "7": return 'Geri Ödemesiz İptal';
    default: return 'Unknown';
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

</script>
