// store/index.js
import { createStore } from 'vuex';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../firebase";

const store = createStore({
  state: {
    isAuthenticated: false,
    user: null,
    role: null,
    errorMessage: null
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
    }
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        await setPersistence(auth, browserLocalPersistence);
        const userCredential = await signInWithEmailAndPassword(auth, username, password);
        const user = userCredential.user;

        // Fetch the user role from Firestore
        const userDoc = await getDoc(doc(db, 'attorneys', user.uid));
        let role = null;
        if (userDoc.exists()) {
          role = userDoc.data().role; // Get the user role
        } else {
          role = 'admin'; // Assume admin role if not in attorneys collection
        }

        if (role) {
          commit('login', { user: { email: user.email, uid: user.uid }, role });
          console.log('Login successful');
          console.log('User role:', role); 
        } else {
          await signOut(auth); // Log out the user if not authorized
          console.error('User not authorized');
          throw new Error('User not authorized');
        }
      } catch (error) {
        console.error('Login failed', error);
        commit('setError', error.message);
        throw new Error('Invalid credentials or unauthorized access');
      }
    },
    async logout({ commit }) {
      try {
        await signOut(auth);
        commit('logout');
        console.log('Logout successful');
      } catch (error) {
        console.error('Logout failed', error);
        throw new Error('Logout failed');
      }
    },
    async initializeAuth({ commit }) {
      return new Promise((resolve) => {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            commit('setUser', { email: user.email, uid: user.uid });
            // Fetch the user role from Firestore
            const userDoc = await getDoc(doc(db, 'attorneys', user.uid));
            let role = null;
            if (userDoc.exists()) {
              role = userDoc.data().role;
            } else {
              role = 'admin';
            }
            commit('setRole', role);
          } else {
            commit('setUser', null);
            commit('setRole', null);
          }
          resolve(user);
        });
      });
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user,
    userRole: state => state.role,
    errorMessage: state => state.errorMessage
  }
});

export default store;
