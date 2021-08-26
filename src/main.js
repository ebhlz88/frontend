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
import table from "./components/table.vue";
import studentform from "./components/formstudent.vue";
import fees from "./components/fees.vue";
import result from "./components/result.vue";
import teachertable from "./components/teachertable.vue";
import payment from "./components/payment.vue";
import sdetailtable from "./components/sdetailtable.vue";
import tdetail from "./components/tdetail.vue";
import cardview from "./components/cardview.vue";
import graph from "./components/financialgraph.vue";

import VueComp from "@vue/composition-api";

Vue.use(VueComp);

library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueRouter);
Vue.component("navbar", require("./components/navbar.vue").default);

// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
//Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin);
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: home },
  { path: "/sform", component: studentform },
  { path: "/list", component: table },
  { path: "/fees", component: fees },
  { path: "/fees/:roll", component: fees, props: true },
  { path: "/result", component: result },
  { path: "/result/:roll", component: result, props: true },
  { path: "/ttable", component: teachertable },
  { path: "/payments", component: payment },
  { path: "/main", component: cardview },
  { path: "/graph", component: graph },
  { path: "/payments/:roll", component: payment, props: true },
  { path: "/sdetail/:roll", component: sdetailtable, props: true },
  { path: "/tdetail/:roll", component: tdetail, props: true },
];

const router = new VueRouter({
  routes,
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
