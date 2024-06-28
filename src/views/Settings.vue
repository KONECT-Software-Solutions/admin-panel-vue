<template>
  <div v-if="userRole === 'attorney'" class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
    <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
      <h3 class="text-lg font-semibold pb-4 text-gray-900 border-b mb-4 border-gray-300 rounded-t">
        <span class="mb-2">Periyodik Çalışma Saatlerini Seç</span>
      </h3>
      <WorkingHoursScheduler @save-schedule="handleSaveSchedule" />
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
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";


// Access the Vuex store
const store = useStore();

const userRole = computed(() => store.getters.userRole);
const userUid = computed(() => store.getters.user ? store.getters.user.uid : null);

const attorneyData = ref([]);
const attorneysRef = collection(db, "attorneys");

const exceptions = ref([{
  date: "01/01/22",
  startTime: "12:00",
  endTime: "13:00",
  repeat: false,
}]);
const schedule = ref();

const handleAddException = (exception) => {
  exceptions.value.push(exception);
  console.log("Saved Exception:", exceptions.value);
};

const handleSaveSchedule = (schedule_) => {
  schedule.value = schedule_;
  console.log("Saved Schedule:", schedule.value);
};

const handleRemoveException = (index) => {
  exceptions.value.splice(index, 1);
};

async function addException(exception) {
null;

}

async function removeException(index) {
null;

}

async function saveSchedule(schedule) {
null;

}

async function fetchScheduleAndExceptions() {
null;

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

  fetchAttorneyById(userUid.value).then((attorney) => {
    console.log("Attorney Data:", attorney);
    attorneyData.value = attorney;
  }).catch((error) => {
    console.error("Error fetching attorney data:", error);
  });
});


</script>
