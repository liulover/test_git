/*
 * @Author: 文荣 刘 princelwr@hotmail.com
 * @Date: 2025-03-08 10:13:36
 * @LastEditors: 文荣 刘 princelwr@hotmail.com
 * @LastEditTime: 2025-03-21 18:31:24
 * @FilePath: \myself_project\my-vue-app\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
