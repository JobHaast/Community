import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/Default.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/communities",
        name: "Communities",
        component: () =>
          import(
            /* webpackChunkName: "communities" */ "../views/community/Communities.vue"
          ),
      },
      {
        path: "/requests",
        name: "Requests",
        component: () =>
          import(
            /* webpackChunkName: "requests" */ "../views/request/Requests.vue"
          ),
      },
      //OTHER
      {
        path: "/about-us",
        name: "About-us",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/other/About.vue"),
      },
      {
        path: "/documentation",
        name: "Documentation",
        component: () =>
          import(
            /* webpackChunkName: "documentation" */ "../views/other/Documentation.vue"
          ),
      },
      {
        path: "/faq",
        name: "FAQ",
        component: () =>
          import(/* webpackChunkName: "faq" */ "../views/other/FAQ.vue"),
      },
      // AUTH
      {
        path: "/login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/auth/Login.vue"),
      },
      {
        path: "/register",
        name: "Register",
        component: () =>
          import(
            /* webpackChunkName: "register" */ "../views/auth/Register.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
