export const strict = false

export const state = () => ({
  accessToken: null,
  userId: null
})

export const getters = {
  getUserId: state => state.userId
}

export const mutations = {
  LOGIN(state, { accessToken, userId }) {
    state.accessToken = accessToken
    state.userId = userId
    localStorage.accessToken = accessToken
    localStorage.userId = userId
  },
  LOGOUT(state) {
    state.accessToken = null
    state.userId = null
    delete localStorage.accessToken
    delete localStorage.userId
  }
}

export const actions = {
  enhanceAccessToken({ commit }) {
    if (localStorage.accessToken) {
      commit('LOGIN', localStorage)
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${
        localStorage.accessToken
      }`
    }
  },
  login_check() {
    // If the user is not authenticated
    if (!localStorage.accessToken) {
      return false
    }
    return true
  },
  login({ commit }, { userId, password }) {
    return this.$axios
      .$post('/login', {
        // 경로확인
        userId: userId,
        password: password
      })
      .then(res => {
        commit('LOGIN', res)
        this.$axios.defaults.headers.common['Authorization'] = `Bearer ${
          res.accessToken
        }`
      })
      .catch(err => {
        alert(err)
      })
  },
  logout({ commit }) {
    this.$axios.defaults.headers.common['Authorization'] = undefined
    commit('LOGOUT')
    console.log('logout')
  },
  async nuxtServerInit({ dispatch }) {
    try {
      return await dispatch('models/FETCH_STATICS')
    } catch (err) {
      console.error(err)
      console.error('static data init error')
    }
  }
}
