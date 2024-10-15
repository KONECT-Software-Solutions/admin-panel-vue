<template>
  <Status0Modal v-if="meetingData.status === '0' && keepStatusModalOpen" @close="$emit('close')" :meetingData="meetingData"
    :formattedDate="formattedDate" @accept-meeting="$emit('accept-meeting')" @reject-meeting="handleRejectMeeting" />
  <Status1Modal v-if="meetingData.status === '1' && keepStatusModalOpen" @close="$emit('close')" :meetingData="meetingData"
    :formattedDate="formattedDate" />
  <Status3Modal v-if="meetingData.status === '3' && keepStatusModalOpen" @close="$emit('close')" :rejectReason="meetingData.cancel_reason" />
  <Status6Modal v-if="meetingData.status === '6' && keepStatusModalOpen" @close="$emit('close')" :cancelReason="meetingData.cancel_reason" />
</template>

<script setup>
import Status0Modal from "../components/Status0Modal.vue";
import Status1Modal from "../components/Status1Modal.vue";
import Status3Modal from "../components/Status3Modal.vue";
import { onUpdated, computed, onMounted } from "vue";
import { formatDate } from "../utils";
import Status6Modal from "../components/Status6Modal.vue";



const emits = defineEmits(["close", "accept-meeting", "reject-meeting"]);

const props = defineProps({
  meetingData: {
    type: Object,
    required: true,
  },
  keepStatusModalOpen: {
    type: Boolean,
    required: true,
  },
});

function meetingTimeEnd(timestamps) {
  const meetingTime = new Date(timestamps * 1000);
  meetingTime.setHours(meetingTime.getHours() + 1);
  const hoursString = meetingTime.getHours().toString().padStart(2, '0');
  const minutesString = meetingTime.getMinutes().toString().padStart(2, '0');
  return `${hoursString}:${minutesString}`;
}

const formattedDate = computed(() => {
  const meetingDataDateTime = props.meetingData.date_time;
  const date = formatDate(meetingDataDateTime, 'all');
  // add meetingTimeEnd to date object
  date.meetingTimeEnd = meetingTimeEnd(meetingDataDateTime);
  return date;
});

const handleRejectMeeting = (reject_reason) => {
  emits('reject-meeting', reject_reason)
  
};

</script>

<style></style>