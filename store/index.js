import cookie from 'cookie'

export const strict = false

export const state = () => ({
})

export const getters = {
}

export const mutations = {
}

export const actions = {
  async nuxtServerInit({ dispatch, commit }, ctx) {
    try {
      // auth
      const cookies = cookie.parse(ctx.req.headers.cookie || '')

      if (cookies.hasOwnProperty('x-access-token')) {
        this.$axios.setHeader('x-access-token', cookies['x-access-token'])
        await dispatch('auth/FETCH')
      } else {
        commit('auth/RESET_USER')
        delete this.$axios.defaults.headers.common['x-access-token']
      }

      // set static data from server database
      return await dispatch('models/FETCH_STATICS')
    } catch (err) {
      console.error(err)
      console.error('nuxtServerInit error')
    }
  }
}
