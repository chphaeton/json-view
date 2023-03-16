import Vue from 'vue'
import App from './App.vue'
import publish from '../publish'

Vue.config.productionTip = false
Vue.use(publish)

new Vue({
  render: h => h(App),
}).$mount('#app')
