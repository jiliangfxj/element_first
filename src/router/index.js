import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect:'/index',//重定向,根组件重定向到index
    component: () => import(/* webpackChunkName: "Home" */ '../views/index.vue')
  },
  {
    path: '/index',
    name:'app',
    component: () => import(/* webpackChunkName: "Home" */ '../views/index.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Map.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Calendar.vue')
  },
  {
    path: '/imgcropping',
    name: 'ImgCropping',
    component: () => import(/* webpackChunkName: "Home" */ '../views/ImgCropping.vue')
  },
  {
    path: '/textedit',
    name: 'textEdit',
    component: () => import(/* webpackChunkName: "Home" */ '../views/textEdit.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "Home" */ '../views/table.vue')
  },
  {
    path: '/selfinfo',
    name: 'selfInfo',
    component: () => import(/* webpackChunkName: "Home" */ '../views/selfInfo.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Home" */ '../views/LoginRegister.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '/404',
    component: () => import(/* webpackChunkName: "Home" */ '../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
