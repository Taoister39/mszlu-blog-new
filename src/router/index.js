import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/myHome.vue";
import Login from "@/pages/myLogin.vue";
import Register from "@/pages/myRegister.vue";
import MainIndex from "@/pages/MainIndex.vue";

/** 路由
 * @type {import("vue-router").RouteRecordRaw []}
 */
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        component: MainIndex,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];
// 路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
