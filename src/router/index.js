import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

// Import your component files here
import LoginPage from '../views/LoginPage.vue';
import MainPage from '../views/MainPage.vue';
import Home from '../views/Home.vue';
import OnlineMeetings from '../views/OnlineMeetings.vue';
import BlogManagement from '../views/BlogManagement.vue';
import Lawyers from '../views/Lawyers.vue';
import Settings from '../views/Settings.vue';


const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
      },
      {
        path: 'online-meetings',
        name: 'Online Meetings',
        component: OnlineMeetings,
        meta: { requiresAuth: true }
      },
      {
        path: 'blog-management',
        name: 'Blog Management',
        component: BlogManagement,
        meta: { requiresAuth: true }
      },
      {
        path: 'lawyers',
        name: 'Lawyers',
        component: Lawyers,
        meta: { requiresAuth: true }
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings,
        meta: { requiresAuth: true }
      }
    ]
  }
];
// Create the router instance
const router = createRouter({
    linkActiveClass: 'bg-gray-950 text-white',
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    // Redirect to login page if trying to access a protected route without authentication
    next('/');
  } else {
    next();
  }
});

export default router;
