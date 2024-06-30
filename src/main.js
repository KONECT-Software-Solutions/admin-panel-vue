import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import App from "./App.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

createApp(App)
  .use(router)
  .use(store)
  .component("VueDatePicker", VueDatePicker)
  .mount("#app");
