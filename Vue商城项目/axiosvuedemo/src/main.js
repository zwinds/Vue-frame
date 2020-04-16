// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

// 将axios绑定在vue原型上,这样可以在其他组件中通过this.$axios使用axios
Vue.prototype.$axios = axios;




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})

// 使用vuecli webpack 
// 配置完路由
// 点击对应组件中的按钮 发送请求

// axios 不只是可以在vue中使用
// 也可以在node中使用