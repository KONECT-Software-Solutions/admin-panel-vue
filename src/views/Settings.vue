<template>
  <div v-if="userRole === 'attorney'" class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
    <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
      <h3 class="text-lg font-semibold pb-4 text-gray-900 border-b mb-4 border-gray-300 rounded-t">
        <span class="mb-2">Periyodik Çalışma Saatlerini Seç</span>
      </h3>
      <WorkingHoursScheduler :schedule="schedule" @save-schedule="handleSaveSchedule" />
    </div>

    <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
      <h3 class="text-lg font-semibold pb-4 text-gray-900 border-b mb-4 border-gray-300 rounded-t">
        <span class="mb-2">İstisnai Çalışma Saatleri</span>
      </h3>

      <WorkingHoursExceptioner :exceptions="exceptions" @add-exception="handleAddException" @remove-exception="handleRemoveException"/>
    </div>
  </div>
  <div v-else>admin</div>
  <!-- -->
</template>

<script setup>
import WorkingHoursExceptioner from "../components/WorkingHoursExceptioner.vue";
import WorkingHoursScheduler from "../components/WorkingHoursScheduler.vue";
import { ref, computed, onMounted } from "vue";
import { useStore } from 'vuex';
import {
  collection,
  getDoc,
  updateDoc,
  doc,
  arrayUnion
} from "firebase/firestore";
import { db } from "../firebase";

// Access the Vuex store
const store = useStore();

const userRole = computed(() => store.getters.userRole);
const userUid = computed(() => store.getters.user ? store.getters.user.uid : null);

const attorneyData = ref([]);
const attorneysRef = collection(db, "attorneys");

// Initialize schedule and exceptions
const exceptions = ref([]);
const schedule = ref({
  isWorkingHoursEnabled: false,
  days: [
  ],
});

/*
run this for inital schedule setup
const schedule = ref({
  isWorkingHoursEnabled: true,
  days: [
    {
      name: "Pazartesi",
      enabled: true,
      intervals: [
        { start: "08:00", end: "12:00" },
        { start: "13:30", end: "17:00" },
      ],
    },
    {
      name: "Salı",
      enabled: true,
      intervals: [
        { start: "08:00", end: "12:00" },
        { start: "13:30", end: "17:00" },
      ],
    },
    {
      name: "Çarşamba",
      enabled: true,
      intervals: [
        { start: "08:00", end: "12:00" },
        { start: "13:30", end: "17:00" },
      ],
    },
    {
      name: "Perşembe",
      enabled: true,
      intervals: [
        { start: "08:00", end: "12:00" },
        { start: "13:30", end: "17:00" },
      ],
    },
    {
      name: "Cuma",
      enabled: true,
      intervals: [
        { start: "08:00", end: "12:00" },
        { start: "13:30", end: "17:00" },
      ],
    },
  ],
});
*/

const handleAddException = (exception) => {
  exceptions.value.push(exception);
  addException(exception);
  console.log("Saved Exception:", exceptions.value);
};

const handleSaveSchedule = (schedule_) => {
  schedule.value = schedule_;
  saveSchedule(schedule_);
  console.log("Saved Schedule:", schedule.value);
};

const handleRemoveException = (index) => {
  exceptions.value.splice(index, 1);
  removeException(index);
};

async function addException(exception) {
  try {
    // Fetch the document reference for the attorney using the userUid
    const attorneyDocRef = doc(attorneysRef, userUid.value);

    // Update the attorney's exceptions array with the new exception
    await updateDoc(attorneyDocRef, {
      exceptions: arrayUnion(exception)
    });

    console.log("Exception added successfully");
  } catch (error) {
    console.error("Error adding exception:", error);
  }
}

async function removeException(index) {
  try {
    // Fetch the document reference for the attorney using the userUid
    const attorneyDocRef = doc(attorneysRef, userUid.value);

    // Remove the exception at the specified index
    const updatedExceptions = [...exceptions.value];
    updatedExceptions.splice(index, 1);

    // Update the attorney's exceptions field with the new exceptions array
    await updateDoc(attorneyDocRef, {
      exceptions: updatedExceptions
    });

    // Update the local exceptions value
    exceptions.value = updatedExceptions;

    console.log("Exception removed successfully");
  } catch (error) {
    console.error("Error removing exception:", error);
  }
}

async function saveSchedule(schedule) {
  try {
    // Fetch the document reference for the attorney using the userUid
    const attorneyDocRef = doc(attorneysRef, userUid.value);

    // Update the attorney's schedule field with the new schedule data
    await updateDoc(attorneyDocRef, {
      schedule: schedule
    });

    console.log("Schedule updated successfully");
  } catch (error) {
    console.error("Error updating schedule:", error);
  }
}

async function fetchScheduleAndExceptions() {
  try {
    const attorney = await fetchAttorneyById(userUid.value);

    // Update the local schedule and exceptions with fetched data
    if (attorney.schedule) {
      schedule.value = attorney.schedule;
    }
    if (attorney.exceptions) {
      exceptions.value = attorney.exceptions;
    }

    console.log("Schedule and exceptions fetched successfully");
  } catch (error) {
    console.error("Error fetching schedule and exceptions:", error);
  }
}

async function fetchAttorneyById(userUid) {
  const attorneyDocRef = doc(attorneysRef, userUid);
  const attorneyDoc = await getDoc(attorneyDocRef);
  
  if (attorneyDoc.exists()) {
    return { id: attorneyDoc.id, ...attorneyDoc.data() };
  } else {
    throw new Error('Attorney not found');
  }
}

onMounted(() => {
  fetchScheduleAndExceptions();
});
</script>
