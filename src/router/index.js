import { createRouter, createWebHistory } from 'vue-router';

// Import your component files here
import Home from '../views/Home.vue';

// Define your routes
const routes = [
  { path: '/', component: Home },
  { path: '/blog-management', component: () => import('../views/BlogManagement.vue') },
  { path: '/lawyers', component: () => import('../views/Lawyers.vue') },
  { path: '/settings', component: () => import('../views/Settings.vue') },
  { path: '/login', component: () => import('../views/Login.vue') },
];

// Create the router instance
const router = createRouter({
    linkActiveClass: 'bg-gray-950 text-white',
  history: createWebHistory(),
  routes,
});

export default router;
