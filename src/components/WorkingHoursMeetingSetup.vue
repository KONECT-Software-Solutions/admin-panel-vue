<template>
	<div class="bg-white rounded-lg border border-gray-200 p-6 mb-4 shadow-lg">

		<!-- here, attorneys can set their online meeting price based on the meeting duration-->
		<form @submit.prevent="saveAppointmentSettings">
			<div class="pb-4 border-b mb-4 border-gray-300 rounded-t flex justify-between">
				<h3 class="text-lg font-semibold text-gray-900">
					<span class="mb-2">Randevu Ayarlarını Yap</span>
				</h3>
				<button type="submit"
					class="text-white w-40 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
					Kaydet
				</button>

			</div>
			<!-- I want to make changes on this div-->
			<div>
				<div v-for="(meeting, index) in appointmentSettings" :key="index"
					class="flex mb-4 items-center space-x-3">
					<div>
						<label :for="'meeting-duration-' + index" class="flex text-sm font-medium text-gray-900">Randevu
							Süresi<p class="pl-2 text-gray-500">(dk)</p></label>

						<select v-model="meeting.duration" :id="'meeting-duration-' + index" name="meeting-duration"
							class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
							<option v-for="time in durations" :key="time" :value="time">{{ time }}</option>
						</select>
					</div>
					<div>
						<label :for="'meeting-type-' + index" class="flex text-sm font-medium text-gray-900">Randevu
							Tipi</label>
						<select v-model="meeting.type" :id="'meeting-type-' + index" name="meeting-type"
							class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
							<option v-for="type in appointmentTypes" :key="type" :value="type">{{ type }}</option>
						</select>
					</div>
					<div>
						<label :for="'meeting-price-' + index" class="flex text-sm font-medium text-gray-900">Randevu
							Ücreti<p class="pl-2 text-gray-500">(TL)</p></label>
						<input type="number" v-model="meeting.price" :id="'meeting-price-' + index" name="meeting-price"
							class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
					</div>

					<div v-if="index === appointmentSettings.length - 1" class="flex items-center">
						<button @click="addMeeting" type="button"
							class="inline-flex items-center mt-4 p-1.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
								stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M12 4v16m8-8H4" />
							</svg>
						</button>
						<button :disabled="appointmentSettings.length === 1" @click="removeMeeting(index)" type="button"
							class="inline-flex items-center mt-4 p-1.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
							<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
								height="24" fill="currentColor" viewBox="0 0 24 24">
								<path fill-rule="evenodd"
									d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
									clip-rule="evenodd" />
							</svg>
						</button>
					</div>
					<button v-else @click="removeMeeting(index)" type="button"
						class="inline-flex items-center p-1.5 mt-4 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
						<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
							height="24" fill="currentColor" viewBox="0 0 24 24">
							<path fill-rule="evenodd"
								d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
								clip-rule="evenodd" />
						</svg>
					</button>
				</div>

			</div>
		</form>
	</div>
</template>

<script setup>

const props = defineProps({
	appointmentSettings: Array,
});

const emit = defineEmits(['save-appointment-settings']);

const durations = [30, 45, 60];
const appointmentTypes = ['Online Görüşme', 'Telefonla Görüşme', 'Ofiste Görüşme'];

const addMeeting = () => {
	props.appointmentSettings.push({ duration: '', price: '', type: '' });
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
