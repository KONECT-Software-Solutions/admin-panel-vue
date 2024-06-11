<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
    <div tabindex="-1"
        class="fixed inset-0 flex items-center justify-center z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                    <h3 class="text-lg font-semibold text-black">
                        Avukat Uygun Randevu Saatleri
                    </h3>
                    <button type="button" @click="$emit('close')"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                        <svg class="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <div class="p-4 px-10 max-h-full flex items-center justify-center">
                    <div>
                        <VueDatePicker v-model="date" inline auto-apply name="date" class="form-input w-full"
                            :enable-time-picker="false" />
                        <ul id="timetable" class="pt-4 grid w-full grid-cols-3 gap-2 mb-5">
                            <li v-for="(time, index) in availableTimes" :key="index">
                                <input type="radio" :id="'time-' + index" value="" class="hidden peer" name="timetable">
                                <label :for="'time-' + index"
                                    class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white border rounded-lg cursor-pointer text-gray-500 border-gray-200 peer-checked:border-blue-700 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50">
                                    {{ time }}
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref(new Date());

const mockData = {
    Monday: ["09:00", "10:00", "11:30", "13:00", "14:30", "16:00"],
    Tuesday: ["09:30", "10:30", "12:00", "13:30", "15:00", "16:30"],
    Wednesday: ["09:00", "11:00", "12:30", "14:00", "15:30", "17:00"],
    Thursday: ["08:30", "10:00", "11:30", "13:00", "14:30", "16:00"],
    Friday: ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"],
    Saturday: ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"],
    Sunday: ["09:30", "11:00", "12:30", "14:00", "15:30", "17:00"]
};

const availableTimes = computed(() => {
    const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date.value);
    return mockData[dayOfWeek];
});

const props = defineProps({
    customerNotes: String
});

const emits = defineEmits(['close']);

onMounted(() => {
    console.log('Component mounted');
});
</script>

<style></style>
