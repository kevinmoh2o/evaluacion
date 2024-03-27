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
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/crear-cuenta',
        name: 'create-layout',
        component: () => import ( /* webpackChunkName: "about" */ '../layouts/CrearCuenata.vue')
    },
    {
        path: '/menu-main',
        name: 'menu-main',
        component: () => import ( /* webpackChunkName: "about" */ '../layouts/MenuPrincipal.vue')
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
        path: '/video-conference',
        name: 'video-conference',
        props: true, 
        component: () => import ( /* webpackChunkName: "about" */ '../layouts/VideoConference.vue')
    },
    {
        path: '/registro-consejeria',
        name: 'regiconsejeria-layout',
        component: () => import ( /* webpackChunkName: "about" */ '../layouts/RegistroConsejeria.vue')
    },
    {
        path: '/tema-consejeria',
        name: 'temaconsejeria-layout',
        component: () => import ( /* webpackChunkName: "about" */ '../layouts/TemaConsejeria.vue')
    },
    {
        path: '/indicador-loading',
        name: 'indicador-layout',
        component: () => import ('@/components/indicadores/LoadingMainView.vue')
    },
    {
        path: '/registrar-cuidador-paciente',
        name: 'regis-cuidador-paciente',
        component: () => import (/* webpackChunkName: "about" */'../layouts/RegistroCuidadorPaciente.vue')
    },
    {
        path: '/cuestionario-satisfaccion',
        name: 'cuestionario-satisfaccion',
        component: () => import (/* webpackChunkName: "about" */'../layouts/SatisfaccionPage.vue')
    },
    {
        path: '/login-layout',
        name: 'login-layout',
        component: () => import (/* webpackChunkName: "about" */'../layouts/LoginPage.vue')
    },
    {
        path: '/test-component',
        name: 'test-component',
        component: () => import (/* webpackChunkName: "about" */'../layouts/TestComponent.vue')
    },
    {
        path: '/soporte-tecnico',
        name: 'soporte-tecnico',
        component: () => import (/* webpackChunkName: "about" */'../layouts/SoporteTecnico.vue')
    }

    //
    
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router