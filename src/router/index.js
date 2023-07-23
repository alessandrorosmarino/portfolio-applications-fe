import { createRouter, createWebHistory } from "vue-router";
import PortfolioView from "../views/PortfolioView.vue";

const routes = [
  {
    path: "/",
    name: "Portfolio",
    component: PortfolioView,
  },
  {
    path: "/playPerformance",
    name: "Play Performance",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GamificationView.vue"),
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
