export const state = {
  categories: [],
}

export const getters = {
  GET_CATEGORIES: state => state.categories
}

export const mutations = {
  SET_STATICS (state, payload) {
    const { categories } = payload

    state.categories = categories
  }
}

export const actions = {
  async FETCH_STATICS ({ commit }) {
    const options = {
      method: 'get',
      url: 'model/statics'
    }
  }
}
