import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginData:
    [
      {
        phone:"123",
        code:"456"
      }
    ],
    loginBool:false
  },
  mutations: {
    changeLogin(state)
    {
      state.loginBool=!state.loginBool;
    }
  },

  actions: {
  },
  modules: {
  }
})
