// store/index.js
import { createStore } from 'vuex';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';



const store = createStore({
  state: {
    isAuthenticated: false,
    user: null
  },
  mutations: {
    login(state, user) {
      state.isAuthenticated = true;
      state.user = user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    }
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, username, password);
        const user = userCredential.user;
        commit('login', { email: user.email, uid: user.uid });
        console.log('Login successful');
      } catch (error) {
        console.error('Login failed', error);
        throw new Error('Invalid credentials');
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
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user
  }
});

export default store;
