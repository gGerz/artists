import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/artist/:id',
    name: 'Artist',
    component: () => import(/* webpackChunkName: "Artist" */ '../views/Artist.vue')
  },
  {
    path: '/crud',
    name: 'CRUD',
    component: () => import(/* webpackChunkName: "Create" */ '../views/CRUD.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
