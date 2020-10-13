import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AboutMe from '../views/AboutMe';

const routes = [
    {
        path: '/about',
        name: 'AboutMe',
        component: AboutMe,
    },
    {
        path: '/experience',
        name: 'Experience',
        component: () => import('../views/Experience'),
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import('../views/Portfolio'),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact'),
    },
    {
        path: '/',
        redirect: '/about',
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
