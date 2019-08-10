import Vue from 'vue'
import App from './App'
import router from './router'
// import '@/utils/itemdb'

Vue.config.productionTip = false
Vue.prototype.allItems = allItems
Vue.prototype.allLangs = window.db_l10n_texts.zh

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
