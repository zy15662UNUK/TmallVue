import Vue from 'vue';
import App from './App.vue';
import {store} from "./store/store.js";//vuex setup
// set up vue-router
import VueRouter from "vue-router";
import {routes} from "./routes.js";
Vue.use(VueRouter);
const router = new VueRouter({
  routes
  // The imported routes object
});

new Vue({
  el: '#app',
  store: store,
  router,
  render: h => h(App)
})
