import Vue from "vue";
import VueRouter from "vue-router";
import RecordMainPage from "views/RecordMainPage";
import SettingPage from "views/SettingPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "RecordMainPage",
    component: RecordMainPage,
  },
  {
    path: "/recordmainpage",
    name: "RecordMainPage",
    component: RecordMainPage,
  },
  {
    path: "/setting",
    name: "SettingPage",
    component: SettingPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
