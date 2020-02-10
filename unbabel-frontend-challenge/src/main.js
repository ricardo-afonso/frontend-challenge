import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseIcon from '@/components/shared/BaseIcon'
import Checkbox from '@/components/shared/Checkbox'

Vue.config.productionTip = false

Vue.component('BaseIcon', BaseIcon)
Vue.component('Checkbox', Checkbox)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
