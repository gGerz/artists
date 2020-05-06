import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    domain: `http://localhost:3013`
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getDomain: state => {
      return state.domain
    }
  }
})
