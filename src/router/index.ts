import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [];

const router = createRouter({
  // Viteの環境変数でimport.meta.env.BASE_URL = vite.config.tsのbase
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;