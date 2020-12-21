import vueRouter from 'vue-router'
import perfil from './components/perfil'
import login from './components/login'
import registro from './components/registro'
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
            path: '/perfil/:username',
            name: "perfil",
            component: perfil
        },
        {
            path: '/registro',
            name: "registro",
            component: registro
        },
    ]
})
export default router


