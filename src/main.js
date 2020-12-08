import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Col, Row } from 'vant'
import 'vant/lib/button/style'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Col)
Vue.use(Row)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
