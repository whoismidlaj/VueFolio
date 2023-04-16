import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import WorksView from "../views/WorksView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
        path: "/about",
        name: "About",
        component: AboutView
      },
      {
        path: "/works",
        name: "Works",
        component: WorksView
      },
   ]
});

export default router;