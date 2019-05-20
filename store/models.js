export const state = () => ({
  categories: {
    plaza: [],
    qna: []
  }
})

export const getters = {
  GET_CATEGORIES: state => state.categories
}

export const mutations = {
  SET_STATICS(state, payload) {
    const { postPlazaTypes, postQnaTypes,postReviewTypes } = payload

    state.categories.plaza = postPlazaTypes
    state.categories.qna = postQnaTypes
    state.categories.review = postReviewTypes
  }
}

export const actions = {
  async FETCH_STATICS({ commit }) {
    try {
      const options = {
        method: 'get',
        url: 'statics'
      }
      const { data } = await this.$axios(options)
      return commit('SET_STATICS', data)
    } catch (err) {
      console.error(err)
      throw console.error('error in actions: [models/FETCH_STATICS]')
    }
  }
}
