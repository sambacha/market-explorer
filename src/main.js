import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import store from "./store";
import router from "./router";
import App from "./App";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import locale from "./locale.js";
import "./theme/index.css";

Vue.config.productionTip = false;
Vue.prototype.$w3d = null;
Vue.use(ViewUI, { locale });

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  store,
  router
});
