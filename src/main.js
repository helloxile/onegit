import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MintUI from 'mint-ui'
import "mint-ui/lib/style.css"


Vue.use(MintUI)
Vue.use(VueAxios,axios)
Vue.config.productionTip = false
// axios.defaults.baseURL = url
Vue.prototype.$axios = axios
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';


/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
