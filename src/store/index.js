import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    pigId: null,
    userId: null,
  },
  getters: {
    getToken: state => `Bearer ${state.token}`,
    getPigId: state => state.pigId,
  },
  mutations: {
    setToken: (state, token) => { state.token = token },
    setPigId: (state, pigId) => { state.pigId = pigId },
    setUserId: (state, userId) => { state.userId = userId },
  },
  actions: {
  },
  modules: {
  }
})
