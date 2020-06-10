import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:[]
  },
  mutations: {
     createUser(state,payload){
        state.user = payload
     },
     removeUser(state){
        state.user = ''
     }
  },
  actions: {
    createUser({state,commit},payload){
       this.commit('createUser',payload)
    }
  },
  modules: {

  }
})
