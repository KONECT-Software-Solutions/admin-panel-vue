import { createRouter, createWebHistory } from 'vue-router';

// Import your component files here
import Home from '../views/Home.vue';
import OnlineMeetings from '../views/OnlineMeetings.vue';
import BlogManagement from '../views/BlogManagement.vue';
import Lawyers from '../views/Lawyers.vue';
import Settings from '../views/Settings.vue';


// Define your routes
const routes = [
  { path: '/', component: Home },
  { path: '/online-meetings', component: OnlineMeetings },
  { path: '/blog-management', component: BlogManagement },
  { path: '/lawyers', component: Lawyers },
  { path: '/settings', component: Settings },
];

// Create the router instance
const router = createRouter({
    linkActiveClass: 'bg-gray-950 text-white',
  history: createWebHistory(),
  routes,
});

export default router;
