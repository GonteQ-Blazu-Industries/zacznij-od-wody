/* eslint-disable import/no-unresolved */
import { createApp } from 'vue';
import VueSmoothScroll from 'vue3-smooth-scroll';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).use(VueSmoothScroll)
  .mount('#app');
