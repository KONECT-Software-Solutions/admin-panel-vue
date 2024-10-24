// store/index.js
import { createStore } from "vuex";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { checkDeadline, sortMeetings, checkFinalized } from "../utils";

const store = createStore({
  state: {
    isAuthenticated: false,
    user: null,
    role: null,
    errorMessage: null,
    notifications: [],
    meetings: [],
  },
  mutations: {
    login(state, { user, role }) {
      state.isAuthenticated = true;
      state.user = user;
      state.role = role;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
      state.errorMessage = null;
    },
    setError(state, message) {
      state.errorMessage = message;
    },
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = !!user;
    },
    setRole(state, role) {
      state.role = role;
    },
    setNotifications(state, notifications) {
      state.notifications = notifications;
      console.log("state notifs", state.notifications);
    },
    setMeetings(state, meetings) {
      state.meetings = meetings;
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        await setPersistence(auth, browserLocalPersistence);
        const userCredential = await signInWithEmailAndPassword(
          auth,
          username,
          password
        );
        const user = userCredential.user;

        // Fetch the user role from Firestore
        const userDoc = await getDoc(doc(db, "attorneys", user.uid));
        let role = null;
        if (userDoc.exists()) {
          role = userDoc.data().role || "none"; // Get the user role
        }

        if (role) {
          commit("login", { user: { email: user.email, uid: user.uid }, role });
          console.log("Login successful");
          console.log("User role:", role);
        } else {
          await signOut(auth); // Log out the user if not authorized
          console.error("User not authorized");
          throw new Error("User not authorized");
        }
      } catch (error) {
        console.error("Login failed", error);
        commit("setError", error.message);
        throw new Error("Invalid credentials or unauthorized access");
      }
    },
    async logout({ commit }) {
      try {
        await signOut(auth);
        commit("logout");
        console.log("Logout successful");
      } catch (error) {
        console.error("Logout failed", error);
        throw new Error("Logout failed");
      }
    },
    async initializeAuth({ commit }) {
      return new Promise((resolve) => {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            commit("setUser", { email: user.email, uid: user.uid });
            // Fetch the user role from Firestore
            const userDoc = await getDoc(doc(db, "attorneys", user.uid));
            let role = null;
            if (userDoc.exists()) {
              role = userDoc.data().role || "none"; // Get the user role
            }
            commit("setRole", role);
          } else {
            commit("setUser", null);
            commit("setRole", null);
          }
          resolve(user);
        });
      });
    },
    async fetchNotifications({ commit }) {
      console.log("fetchnotifs");
      const notifications = [];
      const notificationsRef = collection(db, "notifications");
      const notificationsSnapshot = await getDocs(notificationsRef);
      notificationsSnapshot.forEach((doc) => {
        notifications.push(doc.data());
      });
      // sort notifications by date_tmsp field
      notifications.sort((a, b) => {
        return b.date_tmsp - a.date_tmsp;
      });
      commit("setNotifications", notifications);
    },
    async fetchMeetings({ commit }) {
      console.log("fetchmeetings");
      let meetings = [];
      const meetingsRef = collection(db, "meetings");
      const meetingsSnapshot = await getDocs(meetingsRef);
      meetingsSnapshot.forEach((doc) => {
        meetings.push({ id: doc.id, ...doc.data() });
      });
      meetings.forEach((meeting) => {
        const deadline_exceeded = checkDeadline(meeting);
        // add it to the meeting object
        if (deadline_exceeded) {
          meeting.status = "7";
          meeting.cancel_reason = "Ödeme süresi geçti.";
          meeting.payment_status = "2";
          meeting.customer_documets = [];
          meeting.deadline_exceeded = deadline_exceeded;
        }
        const finalized = checkFinalized(meeting);
        if (finalized) {
          meeting.status = "2";
          meeting.customer_documets = [];
        }
      });

      const sortedMeetings = sortMeetings(meetings);
      meetings = sortedMeetings;
      console.log("setting meetings");
      commit("setMeetings", meetings);
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    user: (state) => state.user,
    userRole: (state) => state.role,
    errorMessage: (state) => state.errorMessage,
    notifications: (state) => state.notifications,
    meetings: (state) => state.meetings,
  },
});

export default store;
