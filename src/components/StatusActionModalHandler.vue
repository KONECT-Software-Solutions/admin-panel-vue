<template>
<Status0Modal v-if="meetingData.status === '0'" @close="$emit('close')" :meetingData="meetingData" @set-meeting="$emit('set-meeting')" @decline-meeting="$emit('decline-meeting')"/>
<Status1Modal v-if="meetingData.status === '1'" @close="$emit('close')" :meetingUrl="meetingUrl" :meetingTime="meetingTime"/>
<Status3Modal v-if="meetingData.status === '3'" @close="$emit('close')" :cancellationReason="reason"/>
  
</template>

<script setup>
import Status0Modal from "../components/Status0Modal.vue";
import Status1Modal from "../components/Status1Modal.vue";
import Status3Modal from "../components/Status3Modal.vue";
import { onUpdated } from "vue";

const reason = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ulttum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibodales hendrerit.";
const meetingUrl = "https://meet.google.com/abc-def-ghi";
const meetingTime = "2024-06-14T10:30:00";

const props = defineProps({
  meetingData: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["close", "set-meeting", "decline-meeting"]);

onUpdated(() => {
  console.log("status action modal handler updated");
  console.log(props.meetingData);
});

</script>

<style>

</style>