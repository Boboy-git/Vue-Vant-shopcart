import Vue from 'vue'
import App from './App.vue'
import { Tabbar, TabbarItem, NavBar ,Badge, BadgeGroup,Tab, Tabs,Card,Icon,SubmitBar,Checkbox, CheckboxGroup,Stepper,SwipeCell,Cell, CellGroup} from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(NavBar).use(Badge).use(BadgeGroup).use(Tab).use(Tabs).use(Card).use(Icon).use(SubmitBar).use(Checkbox).use(CheckboxGroup).use(Stepper).use(SwipeCell).use(Cell).use(CellGroup);
Vue.config.productionTip = false

import router from "./router/router.js"
import store from "./store/store.js"

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
