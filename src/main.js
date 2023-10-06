import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/css/style.css";
import router from "./router/index";
createApp(App).use(bootstrap).use(router).mount("#app");
