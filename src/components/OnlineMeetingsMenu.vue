<template>
  <section class="min-h-[88vh] flex items-center justify-center">

    <div>
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

const emit = defineEmits(["optionSelected"]);
const attorneysData = ref([]);

const attorneysRef = collection(db, "attorneys");

const handleShowAll = () => emit("optionSelected", "showAll");
const handleShowAttorney = (id) => emit("optionSelected", id);

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



});
</script>

<style scoped></style>
