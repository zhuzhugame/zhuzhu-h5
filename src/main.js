import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnime from 'vue-animejs'

import {
  CellGroup, Cell, Button, Col, Row, Image as VanImage, Grid, GridItem, NavBar, Tabbar,
  TabbarItem, Icon, Toast, Field, Tab, Tabs
} from 'vant'
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
import 'vant/lib/cell/style'
import 'vant/lib/cell-group/style'
import 'vant/lib/field/style'
import 'vant/lib/tabs/style'
import 'vant/lib/tab/style'

Vue.config.productionTip = false

Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Field)
Vue.use(CellGroup)
Vue.use(Cell)
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

Vue.use(VueAnime)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
