import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dialogError: false,
    errorTitle: "",
    errorDescription: "",
    dynamicProgress: false,
    progressTitle: ""
  }
});
