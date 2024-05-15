<template>
  <DeleteModal
    :show="showDeleteModal"
    @close="showDeleteModal = false"
    @delete="handleDelete"
  />
  <BlogModalEdit
    :show="showEditModal"
    @close="showEditModal = false"
    @updateBlog="handleUpdate"
    :editmeetingData="editmeetingData"
  />
  <shadow-box class="p-6">
    <div class="flex justify-between mb-4 items-start">
      <h1 class="font-medium">Online Görüşmeler</h1>
    </div>
    <form action="" class="flex items-center mb-4">
      <div class="relative w-full mr-2">
        <input
          type="text"
          class="py-2 pr-4 pl-10 bg-gray-100 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
          placeholder="Ara..."
        />
        <i
          class="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
        ></i>
      </div>
    </form>
    <table v-if="meetingData?.length" class="w-full bg-gray-100 mt-6">
      <thead>
        <tr>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md"
          >
            Müşteri İsmi
          </th>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left"
          >
            Avukat İsmi
          </th>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left"
          >
            Randevu Tarihi
          </th>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left"
          >
            Randevu durumu
          </th>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left"
          >
            Randevu Linki
          </th>
          <th
            class="w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left"
          >
            Aksiyonlar
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="meeting in paginatedItems" :key="meeting.id">
          <td class="py-2 px-4 border-b border-b-gray-50">
            <div class="flex items-center">
              <a
                href="#"
                class="text-gray-600 text-sm font-medium hover:text-blue-500 truncate"
                >{{ meeting.customer_name || "" }}</a
              >
            </div>
          </td>
          <td class="py-2 px-4 border-b border-b-gray-50">
            <span class="text-[13px] font-medium text-gray-600">{{
              meeting.attorney_name || ""
            }}</span>
          </td>
          <td class="py-2 px-4 border-b border-b-gray-50">
            <span class="text-[13px] font-medium text-gray-600">{{
              formatDate(meeting.date)
            }}</span>
          </td>
          <td class="py-2 px-4 border-b border-b-gray-50">
            <div class="flex space-x-5">
              <span class="text-[13px] font-medium text-gray-600">Data</span>
            </div>
          </td>
          <td class="py-2 px-4 border-b border-b-gray-50">
            <div class="flex space-x-5">
              <span class="text-[13px] font-medium text-gray-600">Data</span>
            </div>
          </td>
          <td class="py-2 px-4 border-b border-b-gray-50 flex justify-between">
            <div class="button-container relative flex flex-row gap-1">
              <button
                @click="toggleEdit(meeting)"
                class="ri-edit-line text-lg bg-orange-400 hover:bg-gray-900 text-white font-bold px-2 rounded"
              ></button>
              <button
                @click="openURL(meeting.url)"
                class="ri-eye-line text-lg bg-green-700 hover:bg-gray-900 text-white font-bold px-2 rounded"
              ></button>
              <button
                @click="confirmDelete(meeting.id)"
                id="delete-blog-modal-button"
                class="ri-delete-bin-6-line text-lg bg-red-700 hover:bg-gray-900 text-white font-bold px-2 rounded"
              ></button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination-container flex justify-end mt-4 w-full">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="ri-arrow-left-fill h-8 px-4 m-2 text-l text-white transition-colors duration-150 bg-gray-800 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      ></button>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="ri-arrow-right-fill h-8 px-4 m-2 text-l text-white transition-colors duration-150 bg-gray-800 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      ></button>
    </div>
  </shadow-box>
  <AnalyticsCardTotal />
</template>
<script setup>
import DeleteModal from "../components/layout/DeleteModal.vue";
import BlogModalEdit from "../components/layout/BlogModalEdit.vue";
import AnalyticsCardTotal from "../components/layout/AnalyticsCardTotal.vue";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { onMounted, ref, computed } from "vue";
import ShadowBox from "../components/container/ShadowBox.vue";

const showEditModal = ref(false);
const showDeleteModal = ref(false);
let meetingIdToDelete = null;
const editMeetingData = ref(null);

function toggleEdit(blog) {
  showEditModal.value = true;
  editMeetingData.value = meeting;
  console.log(editMeetingData.value);
}

function openURL(url) {
  window.open(url, "_blank");
}

function confirmDelete(meetingId) {
  meetingIdToDelete = meetingId;
  showDeleteModal.value = true;
}

const meetingRef = collection(db, "meetings");
const meetingData = ref([]);
// meetingData length
const meetingDataLength = computed(() => meetingData.value.length);
const currentPage = ref(1);
const itemsPerPage = ref(10);

// Computed property to calculate the start index of the current page
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);

const paginatedItems = computed(() => {
  const start = startIndex.value;
  const end = start + itemsPerPage.value;
  return meetingData.value.slice(start, end);
});
// Computed property to calculate the total number of pages
const totalPages = computed(() =>
  Math.ceil(meetingData.value.length / itemsPerPage.value)
);

// Method to go to the next page
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    console.log(currentPage.value);
    console.log(totalPages.value);
  }
};

// Method to go to the previous page
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// Utility function to load meetings data
async function fetchMeetings() {
  let meetings = [];
  const querySnapshot = await getDocs(meetingRef);
  for (const doc of querySnapshot.docs) {
    let docData = doc.data();
    docData.id = doc.id;
    meetings.push(docData);
  }
  return meetings;
}

// Checking and setting local storage
async function getAllMeetings() {
  try {
    // Check if data exists and is not expired
    const cachedmeetings = localStorage.getItem("cachedmeetings");
    const cachedTime = localStorage.getItem("cachedTime");
    const expiryTime = 30 * 60 * 1000; // 30 minutes expiration time

    if (
      cachedmeetings &&
      cachedTime &&
      new Date() - new Date(parseInt(cachedTime)) < expiryTime
    ) {
      return JSON.parse(cachedmeetings);
    } else {
      const meetings = await fetchMeetings();
      localStorage.setItem("cachedmeetings", JSON.stringify(meetings));
      localStorage.setItem("cachedTime", new Date().getTime().toString());
      return meetings;
    }
  } catch (error) {
    console.error("Error getting meetings with comments:", error);
    return [];
  }
}
function formatDate(timestamp) {
  const date = new Date(timestamp.seconds * 1000);
  return date.toLocaleDateString("en-US");
}
// Function to delete a meeting by ID
async function handleDelete() {
  showDeleteModal.value = false;
}

async function handleUpdate(meetingDataToUpdate) {
  console.log("Received updated meeting data:", meetingDataToUpdate);
  // Perform actions with the received meeting data, e.g., send to backend, update state, etc.
  // Calling the function to update the meeting post

  try {
    await updateDoc(
      doc(db, "meetings", meetingDataToUpdate.id),
      meetingDataToUpdate
    ); // Ensure updateDoc is awaited

    // Update local meetingData with the updated meeting
    meetingData.value = meetingData.value.map((meeting) => {
      if (meeting.id === meetingDataToUpdate.id) {
        return meetingDataToUpdate;
      } else {
        return meeting;
      }
    });

    // Update cachedmeetings in local storage
    localStorage.setItem("cachedMeetings", JSON.stringify(meetingData.value));
  } catch (error) {
    console.error("Error updating document:", error);
  }
}

onMounted(async () => {
  getAllMeetings().then((data) => {
    meetingData.value = data;
    meetingDataLength.value = data.length;
    console.log(meetingDataLength.value);
  });
});
</script>
