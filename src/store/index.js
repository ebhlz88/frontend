import Vue from "vue";
import Vuex from "vuex";
import vuex from "./modules/vuex.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    vuex,
  },
  plugins: [createPersistedState()],
});

export default store;
