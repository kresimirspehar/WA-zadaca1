import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Detalji from "../views/Detalji.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:sha_id",
    name: "Detalji",
    component: Detalji,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
