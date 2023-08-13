import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./routes";

const app = createApp(App, { router });

app.mount("#app");

export default app;