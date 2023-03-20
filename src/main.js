import Vue from 'vue'
import App from './App.vue'
import publish, {generateJson} from '../publish'
// import publish, {generateJson} from 'json-view-lu'

// console.log('-> generateJson', generateJson({a: [12, 32]}))

Vue.config.productionTip = false
Vue.use(publish)

new Vue({
    render: h => h(App),
}).$mount('#app')
