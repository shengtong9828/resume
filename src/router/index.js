import { createRouter, createWebHistory } from 'vue-router';

const childrenRoute = [{
  path: '/',
  name: 'Default',
  component: () => import('../views/Default.vue')
}, {
  path: '/About',
  name: 'About',
  component: () => import('../views/About.vue')
}, {
  path: '/Resume',
  name: 'Resume',
  component: () => import('../views/Resume.vue')
}, {
  path: '/Portfolio',
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
