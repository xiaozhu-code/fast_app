import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'vant/lib/index.css';
import { Swipe, SwipeItem,Grid, GridItem,Divider,NavBar} from 'vant'
import 'ant-design-vue/dist/antd.css'
Vue.use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Divider).use(NavBar)
Vue.config.productionTip = false
Vue.use(Antd)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
