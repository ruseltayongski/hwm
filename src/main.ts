import { createApp } from 'vue'
import { createPinia } from "pinia";
// import './style.css'
import 'tailwindcss/tailwind.css'

// import the package
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";

import App from './App.vue'
import router from './router/index.js'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueAwesomePaginate);
app.mount("#app");

