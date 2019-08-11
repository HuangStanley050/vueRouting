import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import App from "./App.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});
router.beforeEach((to, from, next) => {
  console.log("global beforeeach");
  next();
});
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
