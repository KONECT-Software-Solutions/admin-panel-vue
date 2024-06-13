<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
    <div tabindex="-1"
        class="fixed inset-0 flex items-center justify-center z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                    <h3 class="text-lg font-semibold text-black">
                        Toplantı Detayları
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
                <!-- Modal body -->
                <div class="px-6 py-4">
                    <div class="flex items-center justify-center space-x-4 mb-4">
                        <div
                            class="bg-gray-600 text-white rounded-lg w-20 h-24 flex flex-col items-center justify-center">
                            <div class="text-sm">HAZ</div>
                            <div class="text-4xl font-bold">2</div>
                            <div class="text-sm">Salı</div>
                        </div>
                        <div class="p-2">
                            <h2 class="text-xl font-bold">Toplantı Zamanı</h2>
                            <div class="flex items-center text-gray-500 space-x-2">
                                <i class="ri-time-line text-lg"></i>
                                <span>10:30 - 11:30</span>
                            </div>
                            <div class="flex space-x-2 mt-2">
                                <span class="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">Av. Ezgi</span>
                                <span class="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">Mehmet</span>
                            </div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Danışan Notları</label>
                        <p type="text" name="title" id="title"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Blog yazısı başlığını girin" required="">{{ customerNotes }}</p>
                    </div>
                    <div class="mb-4">
                        <div
                            class="bg-gray-50 border border-gray-300 rounded-lg flex flex-col items-center justify-center">
                            <vue-countdown class="text-lg font-bold p-4" :time="1 * 3 * 60 * 60 * 1000"
                                v-slot="{ days, hours, minutes, seconds }">
                                <div class="flex items-center text-white text-2xl mx-3">
                                    <div class="text-lg text-gray-900 mr-4">Kalan Süre</div>
                                    <div
                                        class="bg-gray-600 border flex px-4 items-center justify-center border-gray-200">
                                        {{ days }}</div>
                                    <div
                                        class="bg-gray-600 border flex px-4 items-center justify-center border-gray-200">
                                        {{ hours }}</div>
                                    <div
                                        class="bg-gray-600 border flex px-4 items-center justify-center border-gray-200">
                                        {{ minutes }}</div>
                                    <div
                                        class="bg-gray-600 border flex px-4 items-center justify-center border-gray-200">
                                        {{ seconds }}</div>
                                </div>
                            </vue-countdown>
                        </div>
                    </div>
                    <div class="flex items-center justify-center space-x-4 mt-2">
                        <a :href="meetingUrl" target="_blank"
                            class="text-white w-32 bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Katıl
                        </a>
                        <button
                            class="bg-gray-200 text-xl ri-clipboard-line hover:bg-gray-300 px-2 py-2 rounded-md">

                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import VueCountdown from '@chenfengyuan/vue-countdown';


const props = defineProps({
    meetingUrl: String,
    meetingTime: String, // ISO date string for the meeting time
});

const emits = defineEmits(['close']);

// Mock data for customer notes lorem ipsum
const customerNotes = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.');
const countdown = ref('');



// Function to update countdown timer
const updateCountdown = () => {
    const meetingDate = new Date(props.meetingTime);
    const now = new Date();
    const diff = meetingDate - now;

    if (diff <= 0) {
        countdown.value = 'Toplantı başladı';
        clearInterval(interval);
    } else {
        const hours = Math.floor(diff / 1000 / 60 / 60);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        countdown.value = `${hours} saat ${minutes} dakika kaldı`;
    }
};

let interval = null;

onMounted(() => {
    updateCountdown();
    interval = setInterval(updateCountdown, 60000); // Update every minute
});
</script>

<style scoped></style>