import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    //La ruta base
    {
        path: '/',
        redirect: '/inicio'
    },
    //Las rutas asociadas a los componentes
    {
        path:'/',
        component: {
            render(c) {
                return c('router-view')
            },
        },
        //Los componentes que se renderiza en router-view
        children:[
            {
                path: '/inicio',
                name: 'inicio',
                component: () => import('../components/pages/inicio.vue')
            },
            {
                path: '/contacto',
                name: 'contacto',
                component: () => import('../components/pages/contacto.vue')
            },
            {
                path: '/Navbar',
                name: 'Navbar',
                component: () => import('../components/pages/navbar.vue')
            },
            {
                path: '/promociones',
                name: 'promociones',
                component: () => import('../components/pages/promociones.vue')
            },
            
            
        

        ]
    }
]

const router = new VueRouter({ routes, })


export default router;

