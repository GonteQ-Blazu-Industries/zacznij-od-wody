import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import FacebookPosts from '../views/FacebookPosts.vue';
import About from '../views/About.vue';
import AboutMe from '../views/AboutMe.vue';
import WaterMeaning from '../views/WaterMeaning.vue';
import WaterParameters from '../views/WaterParameters.vue';
import WaterQuality from '../views/WaterQuality.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/facebook-posts',
    name: 'FacebookPosts',
    component: FacebookPosts,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: AboutMe,
  },
  {
    path: '/znaczenie-wody',
    name: 'WaterMeaning',
    component: WaterMeaning,
  },
  {
    path: '/parametry-wody',
    name: 'WaterParameters',
    component: WaterParameters,
  },
  {
    path: '/jakosc-wody',
    name: 'WaterQuality',
    component: WaterQuality,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
