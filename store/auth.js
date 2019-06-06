import cookie from 'js-cookie'

export const state = () => ({
  user: null,
})

export const getters = {
  GET_USER: state => state.user,
  IS_LOGGED_IN: state => !!state.user
}

export const mutations = {
  SET_USER: (state, payload) => state.user = payload,
  RESET_USER: state => state.user = null,
}

export const actions = {
  async TOKEN_FETCH ({ commit }) {
    const options = {
      url: 'auth/fetch',
      method: 'get',
    }
    try {
      const { data } = await this.$axios(options)
      cookie.set('x-access-token', data.token, { expires: 7 })
      commit('SET_USER', data.user)
    } catch (err) {
      console.error(err)
      throw Error('error in actions: [auth/FETCH]')
    }
  },
  async FETCH ({ commit }) {
    const options = {
      url: 'auth',
      method: 'get',
    }
    try {
      const { data } = await this.$axios(options)
      commit('SET_USER', data.user)
    } catch (err) {
      console.error(err)
      throw Error('error in actions: [auth/FETCH]')
    }
  },
  async LOGIN ({ commit }, userInfo) {
    const options = {
      url: 'auth/login',
      method: 'post',
      data: userInfo
    }
    try {
      const { data } = await this.$axios(options)
      // cookie 설정
      // header 설정은 plugins/axios 에서
      cookie.set('x-access-token', data.token, { expires: 7 })
      return commit('SET_USER', data.user)
    } catch (err) {
      console.error(err)
      throw Error('error in actions: [auth/LOGIN]')
    }
  },
  LOGOUT ({ commit }) {
    // delete this.$axios.defaults.headers.common['x-access-token']
    cookie.remove('x-access-token')
    location.replace('/')
    return commit('RESET_USER')
  }
}
