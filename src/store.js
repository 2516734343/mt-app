import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  position: {},
  userName: ''
}
const mutations = {
  setPosition (state, value) {
    state.position = value
  },
  setUserName (state, value) {
    state.userName = value
  }
}
const actions = {
  setPosition ({commit}, value) {
    // 异步请求后端获取当前位置数据
    commit('setPosition', value)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
