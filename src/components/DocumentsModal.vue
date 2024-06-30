<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
    <div tabindex="-1" v-if="show"
        class="fixed inset-0 flex items-center justify-center z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative  bg-white rounded-lg shadow">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                    <h3 class="text-lg font-semibold text-black">
                        Danışan Dökümanları
                    </h3>
                    <button type="button" @click="$emit('close')"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
                        <svg class="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="grid gap-4 mb-4 p-4 pb-6 grid-cols-2">
                    <div class="col-span-2">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Görüşme Notu</label>
                        <p type="text" name="title" id="title"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Blog yazısı başlığını girin" required="">{{ customerNotes }}</p>
                    </div>
                    <div class="col-span-2">
                        <label for="documents" class="block mb-2 text-sm font-medium text-gray-900">Görüşme
                            Evrakları</label>
                        <div v-if="customerDocuments.length != 0" class="grid gap-4 grid-cols-1 md:grid-cols-2">
                            <div v-for="document in customerDocuments" :key="document.name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <div class="flex flex-col items-center justify-center mr-4">
                                            <i class="ri-file-fill text-3xl"></i>
                                            <p class="text-sm text-gray-500">{{ document.kind }}</p>
                                        </div>
                                        <div>
                                            <p>{{ document.name }}</p>
                                            <p class="text-sm text-gray-500">{{ document.size }}</p>
                                        </div>

                                    </div>

                                    <button type="button" @click="downloadDocument(document)"
                                        class="bg-transparent mt-1 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                                        <i class="ri-download-2-line text-2xl"></i>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div v-else
                                class="bg-red-100 mb-4 border border-gray-200 rounded-lg p-4 w-full flex items-center">
                                <p class="text-sm text-gray-500 font-normal">
                                    Danışan herhangi bir evrak eklemedi.
                                </p>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

const props = defineProps({
    show: Boolean,
    customerNotes: String,
    customerDocuments: Array
})

const emits = defineEmits(['close']);

const downloadDocument = (document) => {
    window.open(document.file_url, '_blank');
}

</script>

<style></style>