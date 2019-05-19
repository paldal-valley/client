export const state = () => ({
  categories: {
    plaza: [],
    qna: [],
  },
})

export const getters = {
  GET_CATEGORIES: state => state.categories
}

export const mutations = {
  SET_STATICS (state, payload) {
    const {
      postPlazaTypes,
      postQnaTypes
    } = payload

    state.categories.plaza = postPlazaTypes
    state.categories.qna = postQnaTypes
  }
}

export const actions = {
  async FETCH_STATICS ({ commit }) {
    try {
      const options = {
        method: 'get',
        url: 'statics'
      }
      const { data } = await this.$axios(options)
      return commit('SET_STATICS', data)
    } catch (err) {
      throw console.error('error in actions: [models/FETCH_STATICS]')
    }
  }
}
