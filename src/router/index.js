import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [
        {
        path: '/',
        component: () => import('../App'),
        children: [{
            path: '/',
            name: 'Inicio',
            component: () => import('../views/Inicio')
        }
        ,{
            path: '/productos',
            name: 'Productos',
            component: () => import('../views/Productos')
        },
        {
            path: '/contacto',
            name: 'Contacto',
            component: () => import('../views/Contacto')
        }]
    }
    ,{
        path:'*',
        redirect: '/'
    }]
})

export default router