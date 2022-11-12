import { createApp } from 'vue'
import { createPinia } from "pinia";

import './tailwind.css'
import 'tailwindcss/tailwind.css'
import 'tw-elements'

import Notifications from 'notiwind'

import VueAwesomePaginate from "vue-awesome-paginate";

import "vue-awesome-paginate/dist/style.css";

import 'https://kit.fontawesome.com/42d5adcbca.js';

import App from './App.vue'
import router from './router/index.js'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueAwesomePaginate);
app.use(Notifications)
app.mount("#app");

