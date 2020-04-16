import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import List from '../components/List.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Home,
        },
        {
            path: '/home',
            component: Home
        }, {
            path: '/list',
            component: List
        }
    ]
})