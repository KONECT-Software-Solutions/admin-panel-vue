<template>
  <div>
     <button
        @click="handleGoBack"
        class="bg-green-700 text-white px-4 py-1 font-medium rounded mb-4"
      >
        Geri Dön
    </button>
    <NotesModal
    :show="showNotesModal"
    :customerNotes="customerNotes"
    @close="showNotesModal = false" 
  />
    <MeetingCards
      :totalMeetings="totalMeetings"
      :approvedMeetings="approvedMeetings"
      :satisfactionRate="satisfactionRate"
      :meetingStatusSummary="meetingStatusSummary"
      :topAttorneys="topAttorneys"
      :showTopAttorneys="props.showAll"
      :showAttorneySchedule="!props.showAll"
    />

 
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
          placeholder="Müşteri ismine göre ara..."
        />
        <i
          class="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
        ></i>
      </div>
    </form>
    <div class="flex">
            <a class="flex items-center space-x-2 p-2 hover:bg-gray-100">
                <input type="checkbox" v-model="filterOptions.requests" class="form-checkbox h-5 w-5 text-blue-600" />
                <p class="text-sm font-medium text-gray-800">Görüşme İstekleri</p>
            </a>
            <a class="flex items-center space-x-2 p-2 hover:bg-gray-100">
                <input type="checkbox" v-model="filterOptions.accepted" class="form-checkbox h-5 w-5 text-blue-600" />
                <p class="text-sm font-medium text-gray-800">Kabul Edilenler</p>
            </a>
            <a class="flex items-center space-x-2 p-2 hover:bg-gray-100">
                <input type="checkbox" v-model="filterOptions.pending" class="form-checkbox h-5 w-5 text-blue-600" />
                <p class="text-sm font-medium text-gray-800">Beklemede Olanlar</p>
            </a>
    </div>

            
    
  <table v-if="meetingsData?.length" class="w-full bg-gray-100 mt-4 table-fixed">
    <thead>
      <tr>
        <th class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
          Avukat
        </th>
        <th class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left">
          Danışan
        </th>
        <th class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left">
          Danışan Tel
        </th>
        <th class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left">
          Tarih
        </th>
        <th class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left">
          Saat
        </th>
        <th class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left">
          Notlar
        </th>
        <th class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left">
          Kategori
        </th>
        <th class="w-1/6 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left">
          Durum
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="meeting in paginatedItems" :key="meeting.id">
        <td class="py-2 px-4 border-b border-b-gray-50">
          <div class="flex items-center">
            <span class="text-gray-600 text-sm font-medium hover:text-blue-500">
              {{ meeting.attorney_name }}
            </span>
          </div>
        </td>
        <td class="py-2 px-4 border-b border-b-gray-50">
          <span class="text-[13px] font-medium text-gray-600">
            {{ meeting.customer_name }}
          </span>
        </td>
        <td class="py-2 px-4 border-b border-b-gray-50">
          <span class="text-[13px] font-medium text-gray-600">
            {{ meeting.customer_phone}}
          </span>
        </td>
        <td class="py-2 px-4 border-b border-b-gray-50">
          <span class="text-[13px] font-medium text-gray-600">
            {{ meeting.date }}
          </span>
        </td>
        <td class="py-2 px-4 border-b border-b-gray-50">
          <span class="text-[13px] font-medium text-gray-600">
            {{ meeting.time }}
          </span>
        </td>
        <td class="py-2 px-4 border-b border-b-gray-50">
          <button @click="handleNotesModal(meeting.notes)" class="ri-file-text-line flex items-center justify-center ml-2 text-lg bg-yellow-400 hover:bg-gray-900 text-white font-bold px-2 rounded" >
          </button>
        </td>
        <td class="py-2 px-4 border-b border-b-gray-50">
          <span class="text-[13px] font-medium text-gray-600">
            {{ meeting.category }}
          </span>
        </td>
        <td class="py-2 px-4 border-b border-b-gray-50">
          <div class="tooltip">
            <div
              :class="buttonClass(meeting.status)"
              class="w-10 h-10 flex items-center justify-center font-medium rounded-full ml-2">
              <i :class="iconClass(meeting.status)"></i>
            </div>
            <span class="tooltiptext">{{ statusText(meeting.status) }}</span>
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
</div>
 
</template>
<script setup>
import MeetingCards from "../components/MeetingCards.vue";
import ShadowBox from "../components/container/ShadowBox.vue";
import NotesModal from "../components/NotesModal.vue";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { onMounted, ref, computed, watch } from "vue";


const props = defineProps({
  showAll: Boolean,
  uid: String,
});

const emit = defineEmits(["goBack"]);

const handleGoBack = () => { emit('goBack')};

const showNotesModal = ref(false);

const customerNotes = ref(null);
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

function handleNotesModal(notes) {
  showNotesModal.value = true;
  customerNotes.value = notes
}

const meetingsData = ref([]);
const meetingsRef = collection(db, "meetings");
const totalMeetings = computed(() => meetingsData.value.length);


const currentPage = ref(1);
const itemsPerPage = ref(10);

const searchTerm = ref("");

// Computed property to filter blogs based on the search term and filters
const filteredMeetings = computed(() => {
  let meetings = meetingsData.value;

  if (searchTerm.value) {
    meetings = meetings.filter((meeting) =>
      meeting.customer_name.toLowerCase().includes(searchTerm.value.toLowerCase())
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
  }
  else {
    return filteredMeetings.value.slice(startIndex.value, startIndex.value + itemsPerPage.value);
  }
  
});

// Computed property to calculate the total number of pages
const totalPages = computed(() => {
  if (filteredMeetings.value.length === 0) {
    return Math.ceil(meetingsData.value.length / itemsPerPage.value);
  }
  else {
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
    return { color: 'bg-blue-200', text: 'İstek', icon: 'ri-user-add-line' };
  case "1":
    return { color: 'bg-green-200', text: 'Kabul edildi', icon: 'ri-calendar-check-line' };
  case "2":
    return { color: 'bg-gray-200', text: 'Tamamlandı', icon: 'ri-check-line' };
  case "3":
    return { color: 'bg-red-200', text: 'Reddedildi', icon: 'ri-close-line' };
  case "4":
    return { color: 'bg-orange-200', text: 'Müşteri onayı', icon: 'ri-time-line' };
  case "5":
    return { color: 'bg-orange-200', text: 'Avukat onayı', icon: 'ri-time-line' };
  case "6":
    return { color: 'bg-black text-white', text: 'Geri ödemeli iptal', icon: 'ri-calendar-close-line' };
  case "7":
    return { color: 'bg-black text-white', text: 'Geri ödemesiz iptal', icon: 'ri-calendar-close-line' };
  default:
    return { color: 'bg-gray-200', text: 'Unknown status', icon: 'ri-question-line' };
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

// Utility function to load blogs data
async function fetchMeetings() {
  let meetings = [];
  const querySnapshot = await getDocs(meetingsRef);
  querySnapshot.forEach((doc) => {
    meetings.push({ id: doc.id, ...doc.data() });
  });
  meetings = meetings.map((meeting) => {
  const formattedDateTime = formatDate(meeting.date);
  return {
    ...meeting,
    date: formattedDateTime.date,
    time: formattedDateTime.time,
  };
});

  return meetings;
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

// Checking and setting local storage
async function getAllMeetings() {
  try {
    // Check if data exists and is not expired
    const cachedMeetings = localStorage.getItem("cachedMeetings");
    const cachedTimeMeetings = localStorage.getItem("cachedTimeMeetings");
    const expiryTime = 30 * 60 * 1000; // 30 minutes expiration time

    if (
      cachedMeetings &&
      cachedTimeMeetings &&
      new Date() - new Date(parseInt(cachedTimeMeetings)) < expiryTime
    ) {
  return JSON.parse(cachedMeetings);
    } else {
      const meetings = await fetchMeetings();
      localStorage.setItem("cachedMeetings", JSON.stringify(meetings));
      localStorage.setItem("cachedTimeMeetings", new Date().getTime().toString());
      return meetings;
    }
  } catch (error) {
    console.error("Error getting meetings:", error);
    return [];
  }
}
function formatDate(timestamp) {
  if (!timestamp) return '';
  if (timestamp.seconds) { // Firestore timestamp
    const date = new Date(timestamp.seconds * 1000);
    
    // Get date in "DD/MM/YYYY" format
    const formattedDate = date.toLocaleDateString("tr-TR");
    
    // Get time in "HH:mm" format
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    // Return an object with date and time
    return {
      date: formattedDate,
      time: formattedTime
    };
  }

  if (typeof timestamp === 'string') { // Already formatted string
    return timestamp;
  }
  const date = new Date(timestamp); // Fallback for any other case
  return date.toLocaleDateString("tr-TR");
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
    "1": 1, // Kabul edildi
    "0": 2, // İstek
    "4": 3, // Müşteri onayı
    "5": 3, // Avukat onayı
    "2": 4, // Tamamlandı
    "3": 5, // Reddedildi
    "6": 6, // Geri ödemeli iptal
    "7": 7  // Geri ödemesiz iptal
  };

  // Convert date strings to Date objects and sort the meetings
  return meetings.sort((a, b) => {
    const statusComparison = statusPriority[a.status] - statusPriority[b.status];
    if (statusComparison !== 0) {
      return statusComparison;
    } else {
      // Convert dates to comparable format (dd.MM.yyyy -> yyyy-MM-dd)
      const dateA = new Date(a.date.split('.').reverse().join('-'));
      const dateB = new Date(b.date.split('.').reverse().join('-'));
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
  }
  else{
    meetingsData.value = sortedMeetings.filter(meeting => meeting.attorney_id === props.uid);
  }   
});

</script>


  <style scoped>
  .tooltip {
    position: relative;
    display: inline-block;
  }
  
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #fff;
    color: rgb(75 85 99);
    text-align: center;
    font-size: 0.875rem;
    line-height: 1rem;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    top: 20%;
    left: 230%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
  </style>