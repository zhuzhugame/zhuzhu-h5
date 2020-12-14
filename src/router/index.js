import Vue from 'vue'
import VueRouter from 'vue-router'
import { authGuard } from './authGuard'

const Friend = () => import(/* webpackChunkName: "Friend" */ '../views/Friend.vue')
const Attr = () => import(/* webpackChunkName: "Attr" */ '../views/Attr.vue')
const ResetPig = () => import(/* webpackChunkName: "ResetPig" */ '../views/ResetPig.vue')
const Register = () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
const Main = () => import(/* webpackChunkName: "Main" */ '../views/Main.vue')
const Login = () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
const Loading = () => import(/* webpackChunkName: "Loading" */ '../views/Loading.vue')
const Home = () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
const Game = () => import(/* webpackChunkName: "Game" */ '../views/Game.vue')
const Action = () => import(/* webpackChunkName: "Action" */ '../views/Action.vue')
const Fight = () => import(/* webpackChunkName: "Fight" */ '../views/Fight.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Loading
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
    path: '/loading',
    component: Loading,
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
