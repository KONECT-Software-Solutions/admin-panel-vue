import { createRouter, createWebHistory } from 'vue-router';

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
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'online-meetings',
        name: 'Online Meetings',
        component: OnlineMeetings
      },
      {
        path: 'blog-management',
        name: 'Blog Management',
        component: BlogManagement
      },
      {
        path: 'lawyers',
        name: 'Lawyers',
        component: Lawyers
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings
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

export default router;
