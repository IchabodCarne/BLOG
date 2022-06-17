import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../views/main/index.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      {
        path: "/user",
        name: "user",
        component: import("../views/user/index.vue"),
      },
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
