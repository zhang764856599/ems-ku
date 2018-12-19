// 这是把所有的路由进行了封装
import Vue from 'vue'
import Router from 'vue-router'
import Element from '@/components/eelement.vue'
import Login from '@/components/login/login.vue'
import HOME from '@/components/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { name: 'eelement', path: '/eelement', component: Element},
    { name: 'login', path: '/login', component: Login},
    { name: 'home', path: '/home', component: HOME}
  ]
})

