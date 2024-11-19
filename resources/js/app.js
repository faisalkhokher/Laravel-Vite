import './bootstrap';
import { createApp } from 'vue';
import App from './layouts/app.vue'; // from ''
import router from './routes.js';

createApp(App)
  .use(router)
  .mount('#app')
