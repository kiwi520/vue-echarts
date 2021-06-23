import Vue from 'vue'
import App from './App.vue'
import Charts from '@/components/chart-mixin'

Vue.config.productionTip = false
Vue.use(Charts)
new Vue({
  render: h => h(App),
}).$mount('#app')
