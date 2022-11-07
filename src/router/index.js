import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InteresView from '../views/InteresView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, 
  {
    path: '/interes',
    name: 'interes',
    component: InteresView
  },
  {
    path: '/Contactenos',
    name: 'Contactenos',
    component: () => import('../views/ContactoView.vue')
  },
  {
    path: '/Nosotros',
    name: 'Nosotros',
    component: () => import('../views/NosotrosView.vue')
  },
  {
    path: '/Aliados',
    name: 'Aliados',
    component: () => import('../views/LugaresNegciosView.vue')
  },
  //Rutas para Aceder al modulo de admin 
  {
    path: '/Admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin/AdminView.vue')
  },
  {
    path: '/AddOrEdit',
    name: 'AddOrEdit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin/VistaAddOrEdit.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
