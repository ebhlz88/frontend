import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import "./assets/app.scss";
import "bootstrap";
import "./assets/app.scss";
import VueRouter from "vue-router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import home from "./components/Home.vue";
import cardview from "./components/cardview.vue";
import table from "./components/table.vue";
import studentform from "./components/studentform.vue";

library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueRouter);
Vue.component("navbar", require("./components/navbar.vue").default);

import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: home },
  { path: "/cardview", component: cardview },
  { path: "/list", component: table },
  { path: "/sform", component: studentform },
];

const router = new VueRouter({
  routes,
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
