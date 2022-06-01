import { createStore } from 'vuex'

export default createStore({
  state: {
    news: [],
  },
  getters: {
    allNews(state) {
      return state.news
    }
  },
  mutations: {
    ALL_NEWS(state, data) {
      state.news = data;
    }
  },
  actions: {
    async getAllNews({ commit }) {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8d94e0c1846c48359ba8b51a83f1eff3`)
      const data = await response.json()
      commit('ALL_NEWS', data)
    }
  },
})
