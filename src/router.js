import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Home2 from './views/Home2'
import Home3 from './views/Home3'
import Header1 from './views/Header1'
import Header2 from './views/Header2'
import Header3 from './views/Header3'
import Header4 from './views/Header4'
import Service from './views/Service'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        component: Home,
        beforeEnter: (to, from, next) => {
            next();
            document.title = to.meta.title || 'صفحه اصلی';
        }
    },
    {
        path: '/home2',
        component: Home2,
        beforeEnter: (to, from, next) => {
            next();
            document.title = to.meta.title || ' 2صفحه اصلی';
        }
    },
    {
        path: '/home3',
        component: Home3,
        beforeEnter: (to, from, next) => {
            next();
            document.title = to.meta.title || ' 3صفحه اصلی';
        }
    },
    {
        path: '/header1',
        component: Header1,
        beforeEnter: (to, from, next) => {
            next();
            document.title = to.meta.title || ' سربرگ1 ';
        }
    },
    {
        path: '/header2',
        component: Header2,
        beforeEnter: (to, from, next) => {
            next();
            document.title = to.meta.title || '  سربرگ2';
        }
    },
    {
        path: '/header3',
        component: Header3,
        beforeEnter: (to, from, next) => {
            next();
            document.title = to.meta.title || ' سربرگ3';
        }
    },
    {
        path: '/header4',
        component: Header4,
        beforeEnter: (to, from, next) => {
            next();
            document.title = to.meta.title || ' سربرگ4';
        }
    },
    {
        path: '/service',
        component: Service,
        beforeEnter: (to, from, next) => {
            next();
            document.title = to.meta.title || 'سرویس‌ها';
        }
    },

    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})