// store/index.js
import { createStore } from 'vuex';

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
    login({ commit }, { username, password }) {
      // Hardcoded login check (replace with actual backend API call)
      if (username === 'admin@gmail.com' && password === '12345') {
        console.log('Login successful');
        const user = { username };
        commit('login', user);
        return Promise.resolve();
      } else {
        return Promise.reject(new Error('Invalid credentials'));
      }
    },
    logout({ commit }) {
      commit('logout');
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user
  }
});

export default store;
