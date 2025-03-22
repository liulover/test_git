/*
 * @Author: 文荣 刘 princelwr@hotmail.com
 * @Date: 2025-03-08 10:13:36
 * @LastEditors: 文荣 刘 princelwr@hotmail.com
 * @LastEditTime: 2025-03-21 16:37:42
 * @FilePath: \myself_project\my-vue-app\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
  const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        secure: false,
        ws: true,
        pathRewrite: {
          '^/api': '/api'
        },
        logLevel: 'debug',
        headers: {
          'Connection': 'keep-alive'
        },
        onProxyReq: function(proxyReq, req, res) {
          console.log('Proxying request:', req.method, req.url, '=>', proxyReq.path)
        },
        onProxyRes: function(proxyRes, req, res) {
          console.log('Received response:', proxyRes.statusCode, 'for', req.url)
        }
      }
    }
  }
})
