import Vue from 'vue'
import App from './App.vue'
import '../src/output.css'
import router from './plugins/router'

Vue.config.productionTip = false

Vue.prototype.$publicPath = process.env.BASE_URL

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
