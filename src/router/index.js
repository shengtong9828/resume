import { createRouter, createWebHistory } from 'vue-router';

const childrenRoute = [{
  path: '/',
  name: 'About',
  component: () => import('../views/Default.vue')
}, {
  path: '/',
  name: 'Resume',
  component: () => import('../views/Resume.vue')
}, {
  path: '/',
  name: 'Portfolio',
  component: () => import('../views/Portfolio.vue')
}]
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: childrenRoute
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
