import Vue from 'vue'
import VueRouter from 'vue-router'
import { authGuard } from './authGuard'

import Home from '../views/Home.vue'
import Action from '../views/Action.vue'
import Attr from '../views/Attr.vue'
import Friend from '../views/Friend.vue'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Game from '../views/Game.vue'
import Fight from '../views/Fight.vue'
import ResetPig from '../views/ResetPig.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/fight',
    component: Fight,
    beforeEnter: authGuard,
  },
  {
    path: '/reset_pig',
    component: ResetPig,
    beforeEnter: authGuard,
  },
  {
    path: '/game',
    component: Game,
    beforeEnter: authGuard,
    children: [
      {
        path: 'home',
        component: Home,
        beforeEnter: authGuard,
      },
      {
        path: 'action',
        component: Action,
        beforeEnter: authGuard,
      },
      {
        path: 'attr',
        component: Attr,
        beforeEnter: authGuard,
      },
      {
        path: 'friend',
        component: Friend,
        beforeEnter: authGuard,
      },
      {
        path: 'main',
        component: Main,
        beforeEnter: authGuard,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
