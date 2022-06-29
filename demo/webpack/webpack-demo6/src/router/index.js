import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../views/main/index.vue";
import User from "../views/user/index.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      {
        path: "/user",
        name: "user",
        component: User,
      },
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
