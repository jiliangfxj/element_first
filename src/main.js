import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./styles/index.scss"
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import axios from './views/http.ts'


import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

const app = createApp(App)
// 全局挂载
app.config.globalProperties.$axios = axios

app.use(ElementPlus,{locale})
app.use(router)

app.mount('#app')

