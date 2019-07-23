import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index'
import Login from './components/Login'
import Reg from './components/Reg'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        { path: '/', component: Index },
        { path: '/login', component: Login },
        { path: '/reg', component: Reg },
    ]
})