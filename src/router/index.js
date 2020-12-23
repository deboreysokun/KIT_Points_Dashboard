import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue"
Vue.use(VueRouter);
{/* <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script> */}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/dashboard",
    name:"Dashboard",
    component:Dashboard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
