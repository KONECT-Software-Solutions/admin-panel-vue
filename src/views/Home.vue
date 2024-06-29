<template>
  
    <div>
      <h1 class="font-bold text-4xl">Home</h1>
      <div v-if="userRole === 'admin'">
        <p>Welcome, Admin!</p>
        <p>Your data {{ userData }}</p>
        <!-- Admin-specific content -->
      </div>
      <div v-else-if="userRole === 'attorney'">
        <p>Welcome, <span>{{ userRole }}</span>!</p>
        <p>Your data {{ userData }}</p>
        <p></p>
        <!-- Attorney-specific content -->
      </div>
      <DocumentsModal :show="showDocumentsModal" @close="showDocumentsModal = false" :customerDocuments="customerDocuments" :customerNotes="customerNotes" />
      <!-- button for document modal-->
      <button @click="showDocumentsModal = true" class="text-white w-full inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Dokümanlar
      </button>
</div>
</template>
  
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../firebase";
import { ref } from 'vue';

import DocumentsModal from "../components/DocumentsModal.vue";

const showDocumentsModal = ref(false);

const customerNotes = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit  ');
const file_url = "https://firebasestorage.googleapis.com/v0/b/tiryaki-hukuk-admin-pane-9a3f2.appspot.com/o/customer_documents%2Fcontrat.pdf?alt=media&token=1032a6ca-f410-4862-b5fb-f1b7cac615ca";
const customerDocuments = ref([
    {
        name: 'Doküman 1',
        size : '1.2 MB',
        // firebase file url to download
        file_url : file_url,
        kind: 'docx'
    },
    {
        name: 'Doküman 2',
        size : '1.4 MB',
        file_url : file_url,
        kind: 'pdf'
    },
    {
        name: 'Doküman 3',
        size : '3.2 GB',
        file_url : file_url,
        kind: 'jpg'
    },
    {
        name: 'Doküman 4',
        size : '1.2 GB',
        file_url : file_url,
        kind: 'pdf'
    },
    {
        name: 'Doküman 5',
        size : '1.2 GB',
        file_url : file_url,
        kind: 'pdf'
    }
]);

// Access the Vuex store
const store = useStore();

// Create computed properties for the user role and UID
const userRole = computed(() => store.getters.userRole);
const userUid = computed(() => store.getters.user ? store.getters.user.uid : null);
const userData = ref(null);

// fetch attorney data from firebase based on uid. uid = document id
const fetchAttorneyData = async (id) => {
    const userDoc = await getDoc(doc(db, 'attorneys', id));
    userData.value = userDoc.data();
};


// Call the fetchAttorneyData function when the component is mounted
onMounted(() => {
    fetchAttorneyData(userUid.value);
});
</script>