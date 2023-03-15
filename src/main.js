import { createApp } from "vue";
import ELementPlus from "element-plus";
import "./style.css";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "@/router/index.js";

import * as ElementPlusIconVue from "@element-plus/icons-vue";

const app = createApp(App);

app.use(ELementPlus);

for (const [key, component] of Object.entries(ElementPlusIconVue)) {
  app.component(key, component);
}
app.use(router);

app.mount("#app");
