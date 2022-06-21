import { createApp } from "vue";
import router from "./src/router";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

createApp(App).use(router).use(createPinia()).use(ElementPlus).mount("#app");
