import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

// Vuelidate
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import dateHelper from '@/functions/helpers/dateHelper'
Vue.prototype.$dateHelper = dateHelper;

import herpers from '@/functions/helpers/index'
Vue.prototype.$helpers = herpers;

import appConfig from "@/config"
Vue.prototype.$appConfig = appConfig.PARAMS;


window.vue_app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
