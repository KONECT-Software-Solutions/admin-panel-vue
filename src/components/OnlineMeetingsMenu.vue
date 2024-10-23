<template>
  <section class="min-h-[88vh] flex items-center justify-center">
    <div v-if="isDataFetched && !hasMeetings" class="text-xl">
      <div role="status" class="flex justify-center items-center">
        <svg
          aria-hidden="true"
          class="w-6 h-6 text-gray-300 animate-spin fill-gray-900"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor" />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill" />
        </svg>
        <span class="pl-2"></span>
      </div>
    </div>
    <div v-else>
      <!-- Your original code displaying buttons for attorneys or meetings -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <button
          @click="handleShowAll"
          class="bg-white rounded-lg border border-gray-200 hover:shadow-xl hover:border-gray-300 flex items-center justify-center">
          <div class="flex flex-col items-center">
            <div class="text-[1.6rem] font-medium p-2 text-gray-500">
              Tüm Görüşmeleri
            </div>
            <div class="text-[1.6rem] font-medium text-gray-500">Gör</div>
          </div>
        </button>
        <button
          v-for="attorney in attorneysData"
          :key="attorney.id"
          @click="handleShowAttorney(attorney.id)"
          class="bg-white rounded-lg border border-gray-200 hover:shadow-xl hover:border-gray-300 flex items-center justify-center p-2">
          <div>
            <img
              :src="`assets/images/${attorney.id}.webp`"
              alt="Attorney Photo"
              class="w-40 h-60 object-cover rounded-md" />
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { onMounted } from "vue";
import { useStore } from "vuex";

const emit = defineEmits(["optionSelected"]);
const attorneysData = ref([]);
const isLoading = ref(true); // Flag to track loading state
const isDataFetched = ref(false); // New flag to track if data fetching has completed
const attorneysRef = collection(db, "attorneys");

const handleShowAll = () => emit("optionSelected", "showAll");
const handleShowAttorney = (id) => emit("optionSelected", id);
const store = useStore();

// Access meetings from store
const meetingsData = computed(() => store.getters.meetings);

// Check if meetings are available (length > 0)
const hasMeetings = computed(
  () => meetingsData.value && meetingsData.value.length > 0
);

async function fetchAttorneys() {
  let attorneys = [];
  const querySnapshot = await getDocs(attorneysRef);
  querySnapshot.forEach((doc) => {
    attorneys.push({ id: doc.id, ...doc.data() });
  });
  return attorneys;
}

async function getAllAttorneys() {
  try {
    // Check if data exists and is not expired
    const cachedAttorneys = localStorage.getItem("cachedAttorneys");
    const cachedTimeAttorneys = localStorage.getItem("cachedTimeAttorneys");
    const expiryTime = 30 * 60 * 1000; // 30 minutes expiration time

    if (
      cachedAttorneys &&
      cachedTimeAttorneys &&
      new Date() - new Date(parseInt(cachedTimeAttorneys)) < expiryTime
    ) {
      return JSON.parse(cachedAttorneys);
    } else {
      const attorneys = await fetchAttorneys();
      localStorage.setItem("cachedAttorneys", JSON.stringify(attorneys));
      localStorage.setItem(
        "cachedTimeAttorneys",
        new Date().getTime().toString()
      );
      return attorneys;
    }
  } catch (error) {
    console.error("Error getting meetings:", error);
    return [];
  }
}

onMounted(async () => {
  let dataFetched = await getAllAttorneys();

  dataFetched = dataFetched.filter(
    (attorney) => attorney.role !== "admin"
  );

  attorneysData.value = dataFetched;

  // Set loading to false once data is fetched
  isLoading.value = false;

  // Mark data as fetched
  isDataFetched.value = true;
});
</script>

<style scoped></style>
