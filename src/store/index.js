import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datas: [],
    catDatas: '',
  },
  getters: {
  },
  mutations: {
    recieveItems(state, datas) {
      state.datas = datas
    },
    recieveCats(state, catDatas) {
      state.catDatas =  catDatas
    }
  },
  actions: {
    fetchDatas({ commit }, keyword) {
      return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + keyword)
        .then(response => {
          commit('recieveItems', response.data) 
      })
    },
    fetchCats({ commit }) {
      return axios.get('https://aws.random.cat/meow')
        .then(response => {
          commit('recieveCats', response.data)
        })
    }
  },
  modules: {
  }
})
