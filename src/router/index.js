import config from "@/config"
import Vue from 'vue'

import VueRouter from 'vue-router'

// подключаем файлы с роутами
import publicRoute   from '@/router/routes/public'
import tmplRoute  from '@/router/routes/tmpl'

Vue.use(VueRouter)

const routes = [
  publicRoute,
  tmplRoute
]

// настройка роутера
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
