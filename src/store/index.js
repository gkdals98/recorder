import Vue from "vue";
import Vuex from "vuex";
import page_controller from "./modules/pagecontroller.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    page_controller: page_controller,
  },
});
