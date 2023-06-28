import { createRouter, createWebHistory } from 'vue-router'

import homeRoutes from './home.routes';
import loginRoutes from './login.routes';
import comprasRoutes from './compras.routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {...homeRoutes},
    {...loginRoutes},
    {...comprasRoutes},
    // catch all redirect to home page
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

export default router
