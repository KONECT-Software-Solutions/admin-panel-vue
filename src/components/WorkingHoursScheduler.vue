<template>
	<div class="max-w-xl mx-auto bg-white">
		<form @submit.prevent="saveSchedule">
			<div class="rounded-lg border border-gray-200 bg-gray-50 p-4 mb-6">
				<div class="flex justify-between items-center mb-3">
					<span class="text-gray-900 text-base font-medium">Çalışma Saatleri</span>
					<label class="inline-flex items-center cursor-pointer">
						<input v-model="isWorkingHoursEnabled" type="checkbox" class="sr-only peer" />
						<div
							class="relative w-11 h-5 bg-gray-200 rounded-full ring-[0.18rem] peer peer-focus:ring-blue-300 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-[1.12rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
						</div>
						<span class="sr-only">Çalışma Saatleri</span>
					</label>
				</div>
				<div class="flex items-center">
					<p class="text-sm text-gray-500 font-normal">
						Tüm haftalık çalışma günleri için iş çalışma saatlerini etkinleştir
						veya devre dışı bırak
					</p>
				</div>
			</div>
			<div v-for="(day, index) in days" :key="index" class="border rounded-lg p-4 mb-4" v-bind:class="{
				'border-gray-300': day.enabled,
				'opacity-50': !day.enabled
			}">
				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<label class="inline-flex items-center cursor-pointer">
							<input v-model="day.enabled" type="checkbox" :id="`toggle-${day.name}`"
								class="sr-only peer" />
							<div
								class="relative w-11 h-5 bg-gray-200 rounded-full ring-[0.18rem] peer peer-focus:ring-blue-300 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-[1.12rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
							</div>
							<span class="sr-only">Çalışma Saatleri</span>
						</label>
						<label :for="`toggle-${day.name}`" class="ml-2 p-1.5 text-sm font-medium text-gray-900">{{
							day.name
						}}</label>
					</div>
					<div @click="toggleCollapse(index)" v-if="day.enabled"
						class="text-gray-500 p-1.5 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
							stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								:d="collapsedStates[index] ? 'M19 9l-7 7-7-7' : 'M19 15l-7-7-7 7'" />
						</svg>
					</div>
				</div>
				<div v-if="!collapsedStates[index]" class="mt-4">
					<div v-for="(slot, slotIndex) in day.timeSlots" :key="slotIndex" class="flex items-center mb-2">
						<select v-model="slot.start"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 mr-2">
							<option v-for="time in times" :key="time" :value="time">
								{{ time }}
							</option>
						</select>
						<span>-</span>
						<select v-model="slot.end"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 ml-2">
							<option v-for="time in times" :key="time" :value="time">
								{{ time }}
							</option>
						</select>
						<div v-if="slotIndex === day.timeSlots.length - 1" class="flex items-center">
							<button @click="addTimeSlot(index)" type="button"
								class="inline-flex items-center ml-2 p-1.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
									stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M12 4v16m8-8H4" />
								</svg>
							</button>
							<button :disabled="day.timeSlots.length === 1" @click="removeTimeSlot(index, slotIndex)"
								type="button"
								class="inline-flex items-center ml-2 p-1.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
								<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
									height="24" fill="currentColor" viewBox="0 0 24 24">
									<path fill-rule="evenodd"
										d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
										clip-rule="evenodd" />
								</svg>
							</button>
						</div>
						<button v-else @click="removeTimeSlot(index, slotIndex)" type="button"
							class="inline-flex items-center ml-2 mr-10 p-1.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
							<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
								height="24" fill="currentColor" viewBox="0 0 24 24">
								<path fill-rule="evenodd"
									d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
									clip-rule="evenodd" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			<button type="submit"
				class="text-white w-full inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
				Kaydet
			</button>
		</form>
	</div>
</template>

<script setup>
import { reactive, watch, ref, onMounted } from "vue";

const emit = defineEmits(["save-schedule"]);

const isWorkingHoursEnabled = ref(true);

const times = [
	"07:00",
	"07:30",
	"08:00",
	"08:30",
	"09:00",
	"09:30",
	"10:00",
	"10:30",
	"11:00",
	"11:30",
	"12:00",
	"12:30",
	"13:00",
	"13:30",
	"14:00",
	"14:30",
	"15:00",
	"15:30",
	"16:00",
	"16:30",
	"17:00",
	"17:30",
	"18:00",
];


const days = reactive([
	{
		name: "Pazartesi",
		enabled: true,
		timeSlots: [
			{ start: "08:00", end: "12:00" },
			{ start: "13:30", end: "17:00" },
		],
	},
	{
		name: "Salı",
		enabled: true,
		timeSlots: [
		{ start: "08:00", end: "12:00" },
		{ start: "13:30", end: "17:00" },
		],
	},
	{
		name: "Çarşamba",
		enabled: true,
		timeSlots: [
		{ start: "08:00", end: "12:00" },
			{ start: "13:30", end: "17:00" },
		],
	},
	{
		name: "Perşembe",
		enabled: true,
		timeSlots: [
		{ start: "08:00", end: "12:00" },
		{ start: "13:30", end: "17:00" },
		],
	},
	{
		name: "Cuma",
		enabled: true,
		timeSlots: [
		{ start: "08:00", end: "12:00" },
		{ start: "13:30", end: "17:00" },
		],
	},
]);

const collapsedStates = reactive(Array(days.length).fill(true));


// if day is not enabled then collapse it
days.forEach((day, index) => {
	watch(() => day.enabled, (newVal) => {
		if (!newVal) {
			collapsedStates[index] = true;
		}
	});
});


const toggleCollapse = (index) => {
	collapsedStates[index] = !collapsedStates[index];
};

const addTimeSlot = (index) => {
	days[index].timeSlots.push({ start: "09:00", end: "17:00" });
};

const removeTimeSlot = (dayIndex, slotIndex) => {
	days[dayIndex].timeSlots.splice(slotIndex, 1);
};
function timeToMinutes(time) {
	const [hours, minutes] = time.split(':').map(Number);
	return hours * 60 + minutes;
}

// create a save schedule function to emit the schedule to the parent component. get the active days and intervals, time slots and all business hours enabled status
const saveSchedule = () => {
	const schedule = {
		isWorkingHoursEnabled: isWorkingHoursEnabled.value,
		days: days.map((day) => ({
			name: day.name,
			enabled: day.enabled,
			intervals: day.timeSlots.map((slot) => {
				const startMinutes = timeToMinutes(slot.start);
				const endMinutes = timeToMinutes(slot.end);
				const length = (endMinutes - startMinutes) / 60; // convert minutes to hours
				return {
					start: slot.start,
					end: slot.end,
					length: length
				};
			}),
		})),
	};
	emit("save-schedule", schedule);
};

</script>

<style>
/* Add your custom styles here if needed */
</style>
