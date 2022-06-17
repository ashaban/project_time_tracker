import Vue from "vue";
import "./plugins/axios";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";
import { store } from "./store";

export const eventBus = new Vue();

Vue.config.productionTip = false;

Vue.use(Vuelidate);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
