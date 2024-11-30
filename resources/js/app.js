import './bootstrap';
import { createApp } from 'vue';
import App from './layouts/app.vue'; // from ''
import router from './routes.js';
import store from './store/index';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
