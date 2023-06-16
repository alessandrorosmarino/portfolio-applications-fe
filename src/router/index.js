import { createRouter, createWebHistory } from "vue-router";
import PortfolioView from "../views/PortfolioView.vue";

const routes = [
  {
    path: "/",
    name: "portfolio",
    component: PortfolioView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/taskReminder",
    name: "Task Reminders",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ReminderView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
