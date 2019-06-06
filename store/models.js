export const state = () => ({
  categories: {
    plaza: [],
    question: [],
    review: [],
    major: []
  }
})

export const getters = {
  GET_CATEGORIES: state => state.categories
}

export const mutations = {
  SET_STATICS(state, payload) {
    const { postPlazaTypes, postQuestionTypes, postReviewTypes, majorTypes} = payload

    state.categories.plaza = postPlazaTypes
    state.categories.question = postQuestionTypes
    state.categories.review = postReviewTypes
    state.categories.major = majorTypes
  }
}

export const actions = {
  async FETCH_STATICS({ commit }) {
    try {
      const options = {
        method: 'get',
        url: 'static'
      }
      const { data } = await this.$axios(options)
      return commit('SET_STATICS', data)
    } catch (err) {
      console.error(err)
      throw Error('error in actions: [models/FETCH_STATICS]')
    }
  }
}
