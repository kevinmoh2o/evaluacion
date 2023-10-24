import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';

const routes = [{
        path: '/',
        name: 'home-view',
        component: Home
    },
    {
        path: '/about',
        name: 'about-view',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/crear-cuenta',
        name: 'create-layout',
        component: () => import ( /* webpackChunkName: "about" */ '../layouts/CrearCuenata.vue')
    },
    {
        path: '/menu',
        name: 'menu-layout',
        component: () => import ( /* webpackChunkName: "about" */ '../layouts/Menu.vue')
    },
    {
        path: '/agenda',
        name: 'agenda-layout',
        component: () => import ( /* webpackChunkName: "about" */ '../layouts/Agenda.vue')
    },
    {
        path: '/about-us',
        name: 'about-layout',
        component: () => import ( /* webpackChunkName: "about" */ '../layouts/About.vue')
    },
    {
        path: '/registro-consejeria',
        name: 'regiconsejeria-layout',
        component: () => import ( /* webpackChunkName: "about" */ '../layouts/RegistroCuidadorPrimario.vue')
    },
    {
        path: '/tema-consejeria',
        name: 'temaconsejeria-layout',
        component: () => import ( /* webpackChunkName: "about" */ '../layouts/TemaConsejeria.vue')
    },
    
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router