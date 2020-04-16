'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"', // 开发环境
    API_HOST: "/api/" //请求的地址API_HOST，开发环境中我们用上面配置的代理地址api
})