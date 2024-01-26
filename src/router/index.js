/* eslint-disable import/no-unresolved */
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import FacebookPosts from '../views/FacebookPosts.vue';
import About from '../views/About.vue';
import AboutMe from '../views/AboutMe.vue';
import WaterMeaning from '../views/WaterMeaning.vue';
import WaterParameters from '../views/WaterParameters.vue';
import CleanWater from '../views/CleanWater.vue';
import EmailThanks from '../views/emailThanks.vue';
import PrivacyPolicy from '../views/PrivacyPolicyView.vue';
import RzemienMeeting from '../views/RzemienMeeting.vue';
// import NewsletterView from '../views/NewsletterView.vue';

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
    path: '/czysta-woda',
    name: 'CleanWater',
    component: CleanWater,
  },
  {
    path: '/dziekuje-za-email',
    name: 'EmailThanks',
    component: EmailThanks,
    meta: {
      hideArrowDown: true,
      hideNavbar: true,
      hideFooter: true,
    },
  },
  {
    path: '/polityka-prywatnosci',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
  {
    path: '/rzemien-spotkanie-zapisy',
    name: 'RzemienMeeting',
    component: RzemienMeeting,
    meta: {
      hideArrowDown: true,
      hideNavbar: true,
      hideFooter: true,
    },
  },
  // {
  //   path: '/kurs',
  //   name: 'Kurs',
  //   component: NewsletterView,
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  default: Home,
});

export default router;
