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
            <p></p>
            <!-- Attorney-specific content -->
        </div>
        <WorkingHoursMeetingSetup :appointmentSettings="appointmentSettings" />
    
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../firebase";
import { ref } from 'vue';

import WorkingHoursMeetingSetup from '../components/WorkingHoursMeetingSetup.vue'

const appointmentSettings = ref([{ duration: '', price: '', type: '', enabled: true }]);


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