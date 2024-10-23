<template>
  <div>
    <DocumentsModal
      :show="showDocumentsModal"
      @close="showDocumentsModal = false"
      :customerDocuments="customerDocuments"
      :customerNotes="customerNotes" />
    <StatusActionModalHandler
      v-if="showStatusActionModal"
      :keepStatusModalOpen="keepStatusModalOpen"
      :meetingData="clickedMeetingData"
      @accept-meeting="handleAcceptMeeting"
      @reject-meeting="handleRejectMeeting"
      @save-result="handleSaveResult"
      @close="showStatusActionModal = false" />
    <MeetingCards
      :totalMeetings="totalMeetings"
      :approvedMeetings="approvedMeetings"
      :satisfactionRate="satisfactionRate"
      :meetingStatusSummary="meetingStatusSummary"
      :topAttorneys="topAttorneys"
      :showTopAttorneys="props.showAll"
      :showAttorneySchedule="!props.showAll"
      :uid="props.uid" />

    <shadow-box class="p-6">
      <div class="flex justify-between mb-4 items-center">
        <h1 class="font-medium">Online Görüşmeler</h1>
        <Button
          v-if="userRole === 'admin'"
          @click="handleGoBack"
          type="submit"
          text="Geri Dön"
          color="blue"
          :wFull="false">
        </Button>
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
            v-model="filterOptions.cancelled"
            type="checkbox"
            class="sr-only peer" />
          <div
            class="relative w-11 h-5 bg-gray-200 rounded-full ring-[0.12rem] peer peer-focus:ring-blue-300 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-[1.12rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <p class="text-sm font-medium text-gray-800">İptal Edilenler</p>
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
                    meeting.customer_documents,
                    meeting.status
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
      <div class="mt-4 flex justify-between items-center">
        <button
          :disabled="currentPage === 1"
          @click="prevPage"
          class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">
          <i class="ri-arrow-left-double-line text-xxl"></i>
        </button>
        <span>{{ currentPage }}/{{ totalPages }}</span>
        <button
          :disabled="currentPage === totalPages"
          @click="nextPage"
          class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">
          <i class="ri-arrow-right-double-line text-xxl"></i>
        </button>
      </div>
    </shadow-box>
  </div>
</template>
<script setup>
import MeetingCards from "../components/MeetingCards.vue";
import ShadowBox from "../components/container/ShadowBox.vue";
import DocumentsModal from "./DocumentsModal.vue";
import StatusActionModalHandler from "../components/StatusActionModalHandler.vue";
import Button from "../components/Button.vue";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import { formatDate } from "../utils";
import axios from "axios";
import { getStorage, ref as storageRef, deleteObject } from "firebase/storage";

// Access the Vuex store
const store = useStore();
const userRole = computed(() => store.getters.userRole);

const props = defineProps({
  showAll: Boolean,
  uid: String,
});

const emit = defineEmits(["goBack"]);

const meetingsData_ = computed(() => store.getters.meetings);
const meetingsData = ref(meetingsData_.value);
const meetingsRef = collection(db, "meetings");
const totalMeetings = computed(() => meetingsData.value.length);

const currentPage = ref(1);
const itemsPerPage = ref(10);

const searchTerm = ref("");

const clickedMeetingData = ref(null);

const showDocumentsModal = ref(false);
const showStatusActionModal = ref(false);
const keepStatusModalOpen = ref(false);

const customerNotes = ref(null);
const customerDocuments = ref([]);
const filterOptions = ref({
  requests: false,
  accepted: false,
  cancelled: false,
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
  console.log("approvedMeetings computed property", meetingsData.value);
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

const handleGoBack = () => {
  emit("goBack");
};

const createMeetingUrl = async (
  start_time,
  attorney_email,
  customer_email,
  type
) => {
  // iso format formatted again because the iso format that google accepts doesnt include the millisecond precision
  // uncomment after test
  if (type !== "video") {
    return "no-meeting-url-type-is-not-video";
  }

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
    const meetLink = JSON.parse(response.data.body)["meet_link"];
    console.log("response data", JSON.parse(response.data.body)["meet_link"]); // I get the response data successfully
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

// add exception to the attorney's schedule
// en son burda kaldım. bu fonksiyonu meeting set ederken bir yerde çağrımalıyım. şuan dbde olan meetingleri silmeliyim
// çünkü meeting id leri ekli değil exceptionlar attorneylere eklenmemiş tüm meetingleri sıfırlayıp test et
const addException = async (exceptionData) => {
  console.log("Exception data to add:", exceptionData);
  try {
    const attorneyDocRef = doc(db, "attorneys", exceptionData.attorney_id);
    const attorneyDoc = await getDoc(attorneyDocRef);
    if (attorneyDoc.exists()) {
      const attorneyData = attorneyDoc.data();
      const exceptions = attorneyData.exceptions || [];
      delete exceptionData.attorney_id;
      exceptions.push(exceptionData);
      await updateDoc(attorneyDocRef, { exceptions });
    }
  } catch (error) {
    console.error("Error fetching attorney by ID:", error);
  }
};

const deleteException = async (exceptionData) => {
  console.log("Exception data to delete:", exceptionData);
  try {
    const attorneyDocRef = doc(db, "attorneys", exceptionData.attorney_id);
    const attorneyDoc = await getDoc(attorneyDocRef);
    if (attorneyDoc.exists()) {
      const attorneyData = attorneyDoc.data();
      const exceptions = attorneyData.exceptions || [];
      const updatedExceptions = exceptions.filter(
        (exception) => exception.meeting_id !== exceptionData.meeting_id
      );
      await updateDoc(attorneyDocRef, { exceptions: updatedExceptions });
    }
  } catch (error) {
    console.error("Error fetching attorney by ID:", error);
  }
};

async function handleAcceptMeeting() {
  meetingsData.value = await Promise.all(
    meetingsData.value.map(async (meeting) => {
      if (meeting.id === clickedMeetingData.value.id) {
        meeting.status = "1";
        console.log("Meeting data to set meeting", meeting);

        try {
          const meeting_url = await createMeetingUrl(
            meeting.date_time,
            meeting.attorney_email,
            meeting.customer_email,
            meeting.type
          );
          meeting.meeting_url = meeting_url;
          await updateMeeting(meeting); // Ensure updateMeeting is awaited
          await addException({
            date: meeting.date,
            startTime: meeting.slot,
            endTime: meeting.end_time,
            repeat: false,
            isMeeting: true,
            attorney_id: meeting.attorney_id,
            meeting_id: meeting.id,
          });
          console.log("Meeting updated successfully:", meeting);
          // uncomment after test
          console.log("meeting accepted mail sended");
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
        customer_email: meetingData.customer_email,
        customer_phone: meetingData.customer_phone,
        attorney_email: meetingData.attorney_email,
        attorney_name: meetingData.attorney_name,
        date_for_display: meetingData.date_for_display,
        day: meetingData.day,
        slot: meetingData.slot,
        end_time: meetingData.end_time,
        meeting_url: meetingData.meeting_url,
        type: meetingData.type,
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

async function deleteFiles(customer_documents) {
  const storage = getStorage();

  for (const document of customer_documents) {
    try {
      // Extract file path from URL
      const url = new URL(document.file_url);
      const filePath = decodeURIComponent(
        url.pathname.split("/o/")[1].split("?")[0]
      );

      // Reference to the file in storage
      const fileRef = storageRef(storage, filePath);

      // Delete the file
      await deleteObject(fileRef);
      console.log(`Successfully deleted: ${document.name}`);
    } catch (error) {
      console.error(`Error deleting file: ${document.name}`, error);
    }
  }
}

function handleSaveResult(meetingResult, meetingResultText) {
  meetingsData.value = meetingsData.value.map((meeting) => {
    if (meeting.id === clickedMeetingData.value.id) {
      console.log("updating meeting result for: ", meeting);
      meeting.result = meetingResult;
      meeting.result_text = meetingResultText;
      updateMeeting(meeting);
      setTimeout(() => {
        showStatusActionModal.value = false;
      }, 4000);
    }
    return meeting;
  });
}

function handleRejectMeeting(reject_reason) {
  // change the status of the meeting with meetingId to "3" (rejected)
  meetingsData.value = meetingsData.value.map((meeting) => {
    if (meeting.id === clickedMeetingData.value.id) {
      console.log(
        "Meeting data to delete on handlerejectmeeting function",
        clickedMeetingData.value.id
      );
      if (meeting.customer_documents.length > 0) {
        console.log("Deleting files:", meeting.customer_documents);
        deleteFiles(meeting.customer_documents);
        meeting.customer_documents = [];
      }
      meeting.status = "3";
      meeting.cancel_reason = reject_reason;
      meeting.payment_status = "2";
      updateMeeting(meeting);
      showStatusActionModal.value = false;
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

  const { requests, accepted, cancelled } = filterOptions.value;

  if (requests || accepted || cancelled) {
    meetings = meetings.filter((meeting) => {
      let match = false;
      if (requests && meeting.status === "0") match = true;
      if (accepted && meeting.status === "1") match = true;
      if (
        cancelled &&
        (meeting.status === "6" ||
          meeting.status === "3" ||
          meeting.status === "7")
      )
        match = true;
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
        color: "bg-green-300 hover:bg-green-400 ",
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
        icon: "ri-close-line",
      };
    case "7":
      return {
        color: "bg-gray-600 text-white hover:bg-gray-700 ",
        text: "Ödeme Süresi Geçti",
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
        icon: "ri-shield-check-line",
      };
    case "2":
      return {
        class: "bg-red-300",
        text: "Ödeme alınmadı",
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
    case "inPerson":
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

async function updateMeeting(meetingDataToUpdate) {
  try {
    console.log("Updating document with ID:", meetingDataToUpdate.id);
    await updateDoc(
      doc(db, "meetings", meetingDataToUpdate.id),
      meetingDataToUpdate
    );
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
// Usage
onMounted(async () => {
  console.log("meetings", meetingsData.value);
  if (!meetingsData.value.length) {
    store.dispatch("fetchMeetings");
  }

  if (!props.showAll) {
    // filter the meetings by attorney id
    meetingsData.value = meetingsData.value.filter(
      (meeting) => meeting.attorney_id === props.uid
    );
  }
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
