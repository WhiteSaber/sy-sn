import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Popup } from 'vant';
import { Stepper } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

Vue.use(Stepper);

Vue.use(Popup);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
