import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Action from '../views/Action.vue'
import Attr from '../views/Attr.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/action',
    name: 'Action',
    component: Action
  },
  {
    path: '/attr',
    name: 'Attr',
    component: Attr
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
