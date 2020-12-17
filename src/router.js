import vueRouter from 'vue-router'
import perfil from './components/perfil'
import login from './components/login'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
    {
        path: '/',
        name: "root",
        component: App
    },
    {
        path: '/login',
        name: "login",
        component: login

        },
        {
        path: '/perfil',
        name: "perfil",
        component: perfil
        },
        

        ]
    })
export default router


