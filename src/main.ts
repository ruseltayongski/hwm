import { createApp } from 'vue'
import { createPinia } from "pinia";
// import './style.css'
import 'tailwindcss/tailwind.css'

//tailwind notification
import Notifications from 'notiwind'

// import the package
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";

/* Font Awesome Icons */
import 'https://kit.fontawesome.com/42d5adcbca.js';

import App from './App.vue'
import router from './router/index.js'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueAwesomePaginate);
app.use(Notifications)
app.mount("#app");

