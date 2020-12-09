import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Col, Row, Image as VanImage, Grid, GridItem, NavBar, Tabbar, TabbarItem, Icon, Toast  } from 'vant'
import 'vant/lib/button/style'
import 'vant/lib/col/style'
import 'vant/lib/row/style'
import 'vant/lib/image/style'
import 'vant/lib/grid/style'
import 'vant/lib/grid-item/style'
import 'vant/lib/nav-bar/style'
import 'vant/lib/tabbar/style'
import 'vant/lib/tabbar-item/style'
import 'vant/lib/icon/style'
import 'vant/lib/toast/style'

Vue.config.productionTip = false

Vue.use(Toast)
Vue.use(Icon)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Button)
Vue.use(Col)
Vue.use(Row)
Vue.use(VanImage)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
