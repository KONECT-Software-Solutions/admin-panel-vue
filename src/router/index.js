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
import NotFound from '../views/NotFound.vue';
import Unauthorized from '../views/Unauthorized.vue'; // Add an Unauthorized component


const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all route
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/unauthorized',
    name: 'Unauthorized',
    component: Unauthorized
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
        meta: { requiresAuth: true, role: 'admin' }
      },
      {
        path: 'blog-management',
        name: 'Blog Management',
        component: BlogManagement,
        meta: { requiresAuth: true, role: 'admin' }
      },
      {
        path: 'lawyers',
        name: 'Lawyers',
        component: Lawyers,
        meta: { requiresAuth: true, role: 'admin' }
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

router.beforeEach(async(to, from, next) => {
  await store.dispatch('initializeAuth');

  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    // Redirect to login page if trying to access a protected route without authentication
    next('/');
  } else if (to.meta.requiresAuth) {
    const userRole = store.getters.userRole;
    if (to.meta.role && to.meta.role !== userRole) {
      // If the route requires a specific role and the user doesn't have it, redirect to home or an appropriate page
      if (userRole === 'attorney') {
        next('/main/home');
      } else {
        next('/unauthorized');
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;