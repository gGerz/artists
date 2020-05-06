import Vue from 'vue'
import App from './App.vue'
import { domain } from './globalVariables'
import router from './router'
import store from './store'
import axios from 'axios'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

// Axios options
// Vue.options.root = domain
// Vue.prototype.$http = axios
// axios.defaults.withCredentials = true
//
// Vue.use(axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
