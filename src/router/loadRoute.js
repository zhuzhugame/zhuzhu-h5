import Action from '../views/Action'
import Attr from '../views/Attr'
import Fight from '../views/Fight'
import Friend from '../views/Friend'
import Game from '../views/Game'
import Home from '../views/Home'
import Login from '../views/Login'
import Main from '../views/Main'
import Register from '../views/Register'
import ResetPig from '../views/ResetPig'
import { authGuard } from './authGuard'
import router from './'

const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
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
];

router.addRoutes(routes);
