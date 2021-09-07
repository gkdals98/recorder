import Vue from "vue";
import Vuex from "vuex";
import page_controller from "./modules/pagecontroller.js";
import record_controller from "./modules/recordcontroller.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    page_controller: page_controller,
    record_controller: record_controller,
  },
});
