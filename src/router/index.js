import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Action from '../views/Action.vue'
import Attr from '../views/Attr.vue'
import Friend from '../views/Friend.vue'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Game from '../views/Game.vue'
import Fight from '../views/Fight.vue'

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
    component: Fight
  },
  {
    path: '/game',
    component: Game,
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'action',
        component: Action
      },
      {
        path: 'attr',
        component: Attr
      },
      {
        path: 'friend',
        component: Friend
      },
      {
        path: 'main',
        component: Main
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
