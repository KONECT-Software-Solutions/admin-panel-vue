<template>
  <div>
    <button
      v-if="userRole === 'admin'"
      @click="handleGoBack"
      class="bg-green-700 text-white px-4 py-1 font-medium rounded mb-4">
      Geri Dön
    </button>
    <DocumentsModal
      :show="showDocumentsModal"
      @close="showDocumentsModal = false"
      :customerDocuments="customerDocuments"
      :customerNotes="customerNotes" />
    <StatusActionModalHandler
      v-if="showStatusActionModal"
      :keepStatusModalOpen="keepStatusModalOpen"
      :meetingData="clickedMeetingData"
      @set-meeting="handleSetMeeting"
      @reject-meeting="handleRejectMeeting"
      @close="showStatusActionModal = false" />
    <MeetingCards
      :totalMeetings="totalMeetings"
      :approvedMeetings="approvedMeetings"
      :satisfactionRate="satisfactionRate"
      :meetingStatusSummary="meetingStatusSummary"
      :topAttorneys="topAttorneys"
      :showTopAttorneys="props.showAll"
      :showAttorneySchedule="!props.showAll" />

    <shadow-box class="p-6">
      <div class="flex justify-between mb-4 items-start">
        <h1 class="font-medium">Online Görüşmeler</h1>
      </div>
      <form action="" class="flex items-center mb-4">
        <div class="relative w-full mr-2">
          <input
            v-model="searchTerm"
            type="text"
            class="py-2 pr-4 pl-10 bg-gray-100 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
            placeholder="Müşteri ismine göre ara..." />
          <i
            class="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>
        </div>
      </form>
      <div class="flex">
        <label class="inline-flex items-center space-x-2 p-2 cursor-pointer">
          <input
            v-model="filterOptions.requests"
            type="checkbox"
            class="sr-only peer" />
          <div
            class="relative w-11 h-5 bg-gray-200 rounded-full ring-[0.12rem] peer peer-focus:ring-blue-300 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-[1.12rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <p class="text-sm font-medium text-gray-800">Görüşme İstekleri</p>
        </label>
        <label class="inline-flex items-center space-x-2 p-2 cursor-pointer">
          <input
            v-model="filterOptions.accepted"
            type="checkbox"
            class="sr-only peer" />
          <div
            class="relative w-11 h-5 bg-gray-200 rounded-full ring-[0.12rem] peer peer-focus:ring-blue-300 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-[1.12rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <p class="text-sm font-medium text-gray-800">Kabul Edilenler</p>
        </label>
        <label class="inline-flex items-center space-x-2 p-2 cursor-pointer">
          <input
            v-model="filterOptions.pending"
            type="checkbox"
            class="sr-only peer" />
          <div
            class="relative w-11 h-5 bg-gray-200 rounded-full ring-[0.12rem] peer peer-focus:ring-blue-300 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-[1.12rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <p class="text-sm font-medium text-gray-800">Beklemede Olanlar</p>
        </label>
      </div>

      <table v-if="meetingsData?.length" class="w-full mt-4 table-fixed">
        <thead>
          <tr>
            <th
              class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-black py-2 px-4 bg-gray-100 text-left">
              Avukat
            </th>
            <th
              class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-black py-2 px-4 bg-gray-100 text-left">
              Danışan
            </th>
            <th
              class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-black py-2 px-4 bg-gray-100 text-left">
              Danışan Tel
            </th>
            <th
              class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-black py-2 px-4 bg-gray-100 text-left">
              Tarih
            </th>
            <th
              class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-black py-2 px-4 bg-gray-100 text-left">
              Saat
            </th>
            <th
              class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-black py-2 px-4 bg-gray-100 text-left">
              Görüşme Türü
            </th>
            <th
              class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-black py-2 px-4 bg-gray-100 text-left">
              Evrak
            </th>
            <th
              class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-black py-2 px-4 bg-gray-100 text-left">
              Ödeme
            </th>
            <th
              class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-black py-2 px-4 bg-gray-100 text-left">
              Durum
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="meeting in paginatedItems" :key="meeting.id">
            <td class="py-2 px-4 border-b border-b-gray-200">
              <div class="flex items-center">
                <span
                  class="text-gray-600 text-sm font-medium hover:text-blue-500">
                  {{ meeting.attorney_name }}
                </span>
              </div>
            </td>
            <td class="py-2 px-4 border-b border-b-gray-200">
              <span class="text-[13px] font-medium text-gray-600">
                {{ meeting.customer_name }}
              </span>
            </td>
            <td class="py-2 px-4 border-b border-b-gray-200">
              <span class="text-[13px] font-medium text-gray-600">
                {{ meeting.customer_phone }}
              </span>
            </td>
            <td class="py-2 px-4 border-b border-b-gray-200">
              <span class="text-[13px] font-medium text-gray-600">
                {{ formatDate(meeting.date_time, (format = "date")) }}
              </span>
            </td>
            <td class="py-2 px-4 border-b border-b-gray-200">
              <span class="text-[13px] font-medium text-gray-600">
                {{ formatDate(meeting.date_time, (format = "time")) }}
              </span>
            </td>
            <td class="py-2 border-b px-4 border-b-gray-200">
              <div class="tooltip">
                <div
                  class="w-10 h-10 flex items-center justify-center bg-gray-600 text-white text-xl font-medium rounded-full ml-2 ring-0">
                  <i :class="meetingTypeIcon(meeting.type)"> </i>
                  <span class="tooltiptext">{{
                    meetingTypeText(meeting.type)
                  }}</span>
                </div>
              </div>
            </td>
            <td class="py-2 px-4 border-b border-b-gray-200">
              <button
                @click="
                  handleDocumentsModal(
                    meeting.notes,
                    meeting.customer_documents
                  )
                "
                class="ri-file-text-line flex items-center justify-center ml-2 text-lg bg-yellow-400 hover:bg-gray-900 text-white font-bold px-2 rounded"></button>
            </td>
            <td class="py-2 border-b px-4 border-b-gray-200">
              <div class="tooltip">
                <div
                  class="w-10 h-10 flex items-center justify-center font-medium rounded-full ml-2 ring-0"
                  :class="paymentStatusClass(meeting.payment_status)">
                  <i :class="paymentStatusIcon(meeting.payment_status)"> </i>
                  <span class="tooltiptext">{{
                    paymentStatusText(meeting.payment_status)
                  }}</span>
                </div>
              </div>
            </td>
            <td class="py-2 px-4 border-b border-b-gray-200">
              <div class="tooltip">
                <button
                  @click="handleStatusClick(meeting)"
                  :class="buttonClass(meeting.status)"
                  class="w-10 h-10 flex items-center justify-center font-medium rounded-full ml-2 ring-0 focus:ring-[0.12rem] focus:ring-gray-600 focus:outline-none">
                  <i :class="iconClass(meeting.status)"></i>
                </button>
                <span class="tooltiptext">{{
                  statusText(meeting.status)
                }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination-container flex justify-end mt-4 w-full">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="ri-arrow-left-fill border border-gray-800 h-8 px-2 m-2 text-xl text-black transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-gray-800 hover:text-white"></button>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="ri-arrow-right-fill border border-gray-800 h-8 px-2 m-2 text-xl text-black transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-gray-800 hover:text-white"></button>
      </div>
    </shadow-box>
  </div>
</template>
<script setup>
import MeetingCards from "../components/MeetingCards.vue";
import ShadowBox from "../components/container/ShadowBox.vue";
import DocumentsModal from "./DocumentsModal.vue";
import StatusActionModalHandler from "../components/StatusActionModalHandler.vue";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { onMounted, ref, computed, watch } from "vue";
import { useStore } from "vuex";
import { formatDate } from "../utils";
import axios from "axios";

// Access the Vuex store
const store = useStore();
const userRole = computed(() => store.getters.userRole);

const props = defineProps({
  showAll: Boolean,
  uid: String,
});

const emit = defineEmits(["goBack"]);

const clickedMeetingData = ref(null);

const showDocumentsModal = ref(false);
const showStatusActionModal = ref(false);
const keepStatusModalOpen = ref(false);

const customerNotes = ref(null);
const customerDocuments = ref([]);
const filterOptions = ref({
  requests: false,
  accepted: false,
  pending: false,
});
const satisfactionRate = ref(85);

const meetingStatusSummary = computed(() => {
  const summary = {};
  meetingsData.value.forEach((meeting) => {
    if (summary[meeting.status]) {
      summary[meeting.status]++;
    } else {
      summary[meeting.status] = 1;
    }
  });
  return summary;
});

const approvedMeetings = computed(() => {
  return meetingsData.value.filter((meeting) => meeting.status === "1").length;
});

// below is topAttorneys computed property array of objects consist name and total meeting
const topAttorneys = computed(() => {
  const attorneyMeetings = {};
  meetingsData.value.forEach((meeting) => {
    if (attorneyMeetings[meeting.attorney_name]) {
      attorneyMeetings[meeting.attorney_name]++;
    } else {
      attorneyMeetings[meeting.attorney_name] = 1;
    }
  });
  const topAttorneys = Object.entries(attorneyMeetings)
    .sort((a, b) => b[1] - a[1])
    .map(([name, meetings]) => ({ name, meetings }));
  return topAttorneys.slice(0, 3);
});

const meetingsData = ref([]);
const meetingsRef = collection(db, "meetings");
const totalMeetings = computed(() => meetingsData.value.length);

const currentPage = ref(1);
const itemsPerPage = ref(10);

const searchTerm = ref("");

const handleGoBack = () => {
  emit("goBack");
};

const createMeetingUrl = async (start_time, attorney_email, customer_email) => {
  // iso format formatted again because the iso format that google accepts doesnt include the millisecond precision
  const start_time_iso =
    new Date(start_time.seconds * 1000).toISOString().split(".")[0] + "Z";
  console.log("start_time_iso", start_time_iso);

  try {
    const response = await axios.post(
      "https://ykt7hblm31.execute-api.eu-north-1.amazonaws.com/prod/create-meeting",
      {
        start_time: start_time_iso,
        attorney_email: attorney_email,
        customer_email: customer_email,
      }
    );
    const meetLink = JSON.parse(response.data.body)['meet_link'];
    console.log("response data", JSON.parse(response.data.body)['meet_link']); // I get the response data successfully
    console.log("Meeting created successfully");
    return meetLink; // Return the meeting link here
  } catch (error) {
    if (error.response) {
      // Log detailed error response from the server
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something else caused the error
      console.error("Error setting up the request:", error.message);
    }
  }
};

async function handleSetMeeting() {
  meetingsData.value = await Promise.all(
    meetingsData.value.map(async (meeting) => {
      if (meeting.id === clickedMeetingData.value.id) {
        meeting.status = "1";
        console.log("Meeting data to set meeting", meeting);

        try {
          const meeting_url = await createMeetingUrl(
            meeting.date_time,
            meeting.attorney_email,
            meeting.customer_email
          );
          meeting.meeting_url = meeting_url;
          await updateMeeting(meeting); // Ensure updateMeeting is awaited
          console.log("Meeting updated successfully:", meeting);
          
          sendMeetingAcceptedEmail(meeting);
          // Reset the clickedMeetingData ref
          clickedMeetingData.value = {};
        } catch (error) {
          console.error("Failed to create meeting URL:", error);
        }
      }
      return meeting;
    })
  );
}

const sendMeetingAcceptedEmail = async (meetingData) => {
  try {
    const response = await axios.post(
      "https://ykt7hblm31.execute-api.eu-north-1.amazonaws.com/prod/send-meeting-accepted-email",
      {
        customer_name: meetingData.customer_name,
        attorney_name: meetingData.attorney_name,
        date_for_display: meetingData.date_for_display,
        day: meetingData.day,
        slot: meetingData.slot,
        end_time: meetingData.end_time,
        email: meetingData.customer_email,
        meeting_url: meetingData.meeting_url,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    console.log("Meeting accepted email sent successfully");
  } catch (error) {
    console.error("Error sending appointment recieved email:", error);
  }
};

function handleRejectMeeting(reject_reason) {
  // change the status of the meeting with meetingId to "3" (rejected)
  meetingsData.value = meetingsData.value.map((meeting) => {
    if (meeting.id === clickedMeetingData.value.id) {
      meeting.status = "3";
      meeting.reject_reason = reject_reason;
      //updateMeeting(meeting);
    }
    return meeting;
  });
}

function handleDocumentsModal(notes, customer_documents) {
  showDocumentsModal.value = true;
  customerNotes.value = notes;
  customerDocuments.value = customer_documents;
}

function handleStatusClick(meeting) {
  showStatusActionModal.value = true;
  clickedMeetingData.value = meeting;
  keepStatusModalOpen.value = true;
}

// Computed property to filter blogs based on the search term and filters
const filteredMeetings = computed(() => {
  let meetings = meetingsData.value;

  if (searchTerm.value) {
    meetings = meetings.filter((meeting) =>
      meeting.customer_name
        .toLowerCase()
        .includes(searchTerm.value.toLowerCase())
    );
  }

  const { requests, accepted, pending } = filterOptions.value;

  if (requests || accepted || pending) {
    meetings = meetings.filter((meeting) => {
      let match = false;
      if (requests && meeting.status === "0") match = true;
      if (accepted && meeting.status === "1") match = true;
      if (pending && meeting.status === "4") match = true;
      return match;
    });
  }

  return meetings;
});

// log the filtered blogs every time the searchTerm changes
// watch(searchTerm, (newVal) => {
//  console.log("Filtered blogs:", filteredBlogs.value);
// });

// Computed property to calculate the start index of the current page
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);

const paginatedItems = computed(() => {
  if (filteredMeetings.value.length === 0) {
    const start = startIndex.value;
    const end = start + itemsPerPage.value;
    return meetingsData.value.slice(start, end);
  } else {
    return filteredMeetings.value.slice(
      startIndex.value,
      startIndex.value + itemsPerPage.value
    );
  }
});

// Computed property to calculate the total number of pages
const totalPages = computed(() => {
  if (filteredMeetings.value.length === 0) {
    return Math.ceil(meetingsData.value.length / itemsPerPage.value);
  } else {
    return Math.ceil(filteredMeetings.value.length / itemsPerPage.value);
  }
});

// Method to go to the next page
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// Method to go to the previous page
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const statusTextVisible = ref(null);

const statusDetails = (status) => {
  switch (status) {
    case "0":
      return {
        color: "bg-blue-300 hover:bg-blue-400",
        text: "İstek",
        icon: "ri-user-add-line",
      }; // Bu status için alınabilecek aksiyonlar: isteği kabul et, reddet
    case "1":
      return {
        color: "bg-green-300 hover:bg-green-400 ",
        text: "Kabul edildi",
        icon: "ri-calendar-check-line",
      }; // Bu status için alınabilecek aksiyonlar: toplantı detaylarını görüntüle
    case "2":
      return {
        color: "bg-gray-300 hover:bg-gray-400 ",
        text: "Tamamlandı",
        icon: "ri-check-line",
      };
    case "3":
      return {
        color: "bg-red-300 hover:bg-red-400 ",
        text: "Reddedildi",
        icon: "ri-close-line",
      }; // Bu status için alınabilecek aksiyonlar: reddedilme sebebini görüntüle
    case "4":
      return {
        color: "bg-orange-200",
        text: "Müşteri onayı",
        icon: "ri-time-line",
      }; // Bu status için alınabilecek aksiyonlar: değişikliği görüntüle, onay hatırlatması gönder
    case "5":
      return {
        color: "bg-orange-200",
        text: "Avukat onayı",
        icon: "ri-time-line",
      }; // Bu status için alınabilecek aksiyonlar: değişikliği görüntüle, onay hatırlatması gönder
    case "6":
      return {
        color: "bg-gray-600 text-white hover:bg-gray-700 ",
        text: "İptal Edildi",
        icon: "ri-calendar-close-line",
      }; // Bu status için alınabilecek aksiyonlar: iptal sebebini görüntüle
    default:
      return {
        color: "bg-gray-200",
        text: "Unknown status",
        icon: "ri-question-line",
      };
  }
};

const buttonClass = (status) => {
  return statusDetails(status).color;
};

const iconClass = (status) => {
  return statusDetails(status).icon;
};

const statusText = (status) => {
  return statusDetails(status).text;
};

const paymentStatusDetails = (status) => {
  switch (status) {
    case "0":
      return {
        class: "bg-orange-300",
        text: "Bekleniyor",
        icon: "ri-time-line",
      };
    case "1":
      return {
        class: "bg-green-300",
        text: "Ödendi",
        icon: "ri-check-double-line",
      };
    case "2":
      return {
        class: "bg-red-300",
        text: "Ödenmedi",
        icon: "ri-close-line",
      };
    default:
      return {
        class: "bg-gray-200",
        text: "Bilinmiyor",
        icon: "ri-question-line",
      };
  }
};

const paymentStatusClass = (status) => {
  return paymentStatusDetails(status).class;
};

const paymentStatusIcon = (status) => {
  return paymentStatusDetails(status).icon;
};

const paymentStatusText = (status) => {
  return paymentStatusDetails(status).text;
};

const meetingTypeDetails = (type) => {
  switch (type) {
    case "phone":
      return {
        class: "bg-orange-300",
        text: "Telefonla Görüşme",
        icon: "ri-phone-line",
      };
    case "video":
      return {
        class: "bg-green-300",
        text: "Online Video Görüşme",
        icon: "ri-video-on-line",
      };
    case "office":
      return {
        class: "bg-red-300",
        text: "Yüzyüze Görüşme",
        icon: "ri-user-line",
      };
    default:
      return {
        class: "bg-gray-200",
        icon: "ri-question-line",
      };
  }
};

const meetingTypeClass = (type) => {
  return meetingTypeDetails(type).class;
};

const meetingTypeIcon = (type) => {
  return meetingTypeDetails(type).icon;
};

const meetingTypeText = (type) => {
  return meetingTypeDetails(type).text;
};

// Utility function to load blogs data
async function fetchMeetings() {
  let meetings = [];
  const querySnapshot = await getDocs(meetingsRef);
  querySnapshot.forEach((doc) => {
    meetings.push({ id: doc.id, ...doc.data() });
  });
  return meetings;
}

// Checking and setting local storage
async function getAllMeetings() {
  try {
    // Check if data exists and is not expired
    const cachedMeetings = localStorage.getItem("cachedMeetings");
    const cachedTimeMeetings = localStorage.getItem("cachedTimeMeetings");
    const expiryTime = 0 * 60 * 1000; // 30 minutes expiration time

    if (
      cachedMeetings &&
      cachedTimeMeetings &&
      new Date() - new Date(parseInt(cachedTimeMeetings)) < expiryTime
    ) {
      return JSON.parse(cachedMeetings);
    } else {
      const meetings = await fetchMeetings();
      localStorage.setItem("cachedMeetings", JSON.stringify(meetings));
      localStorage.setItem(
        "cachedTimeMeetings",
        new Date().getTime().toString()
      );
      return meetings;
    }
  } catch (error) {
    console.error("Error getting meetings:", error);
    return [];
  }
}

async function updateMeeting(meetingDataToUpdate) {
  console.log("Received updated meeting data:", meetingDataToUpdate);

  try {
    console.log("Updating document with ID:", meetingDataToUpdate.id);
    await updateDoc(
      doc(db, "meetings", meetingDataToUpdate.id),
      meetingDataToUpdate
    ); // Ensure updateDoc is awaited

    // Update cachedBlogs in local storage
    localStorage.setItem("cachedMeetings", JSON.stringify(meetingsData.value));
  } catch (error) {
    console.error("Error updating meeting document:", error);
  }
}

// below function is for populating meeting data and adding it to the database
async function addMeeting(meeting) {
  try {
    const docRef = await addDoc(meetingsRef, meeting);
    console.log("Document written with ID: ", docRef.id);
    meetingsData.value.push({ id: docRef.id, ...meeting });
    console.log("Meeting added to the database");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function fetchAttorney(id) {
  try {
    const attorneyRef = doc(db, "attorneys", id);
    const attorneySnap = await getDoc(attorneyRef);
    if (attorneySnap.exists()) {
      return attorneySnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching attorney data:", error);
    throw error;
  }
}

// write sorting function here

function sortMeetings(meetings) {
  // Define the status priorities
  const statusPriority = {
    1: 1, // Kabul edildi
    0: 2, // İstek
    4: 3, // Müşteri onayı
    5: 3, // Avukat onayı
    2: 4, // Tamamlandı
    3: 5, // Reddedildi
    6: 6, // Geri ödemeli iptal
    7: 7, // Geri ödemesiz iptal
  };

  // Convert Firestore timestamps to Date objects and sort the meetings
  return meetings.sort((a, b) => {
    const statusComparison =
      statusPriority[a.status] - statusPriority[b.status];
    if (statusComparison !== 0) {
      return statusComparison;
    } else {
      // Convert Firestore timestamps to Date objects
      const dateA = new Date(a.date_time.seconds * 1000);
      const dateB = new Date(b.date_time.seconds * 1000);
      return dateA - dateB;
    }
  });
}
// Usage
onMounted(async () => {
  const meetings = await getAllMeetings();
  const sortedMeetings = sortMeetings(meetings);

  if (props.showAll) {
    meetingsData.value = sortedMeetings;
  } else {
    meetingsData.value = sortedMeetings.filter(
      (meeting) => meeting.attorney_id === props.uid
    );
  }
  console.log("Meetings data:", meetingsData.value);
});
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  white-space: nowrap;
  visibility: hidden;
  background-color: #fff;
  color: rgb(75 85 99);
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  bottom: 70%;
  left: 70%;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip-action {
  top: 20%;
  left: 100%;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
