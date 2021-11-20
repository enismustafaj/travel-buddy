import { createRouter, createWebHistory } from "vue-router";
import SignInView from "../views/SignInView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: SignInView,
  },
  {
    path: "/signin",
    name: "SignIn",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignInView.vue"),
  },

  {
    path: "/signup",
    name: "SignUp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUpView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
