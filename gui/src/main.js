import Vue from 'vue'
import Vuelidate from "vuelidate";
import "./plugins/axios";
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuelidate);
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
