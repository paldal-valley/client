import cookie from 'cookie'

export const strict = false

export const state = () => ({
  // accessToken: null,
  // userId: null
})

export const getters = {
  // getUserId: state => state.userId
}

export const mutations = {
  // LOGIN(state, { accessToken, userId }) {
  //   state.accessToken = accessToken
  //   state.userId = userId
  //   localStorage.accessToken = accessToken
  //   localStorage.userId = userId
  // },
  // LOGOUT(state) {
  //   state.accessToken = null
  //   state.userId = null
  //   delete localStorage.accessToken
  //   delete localStorage.userId
  // }
}

export const actions = {
  // enhanceAccessToken({ commit }) {
  //   if (localStorage.accessToken) {
  //     commit('LOGIN', localStorage)
  //     this.$axios.defaults.headers.common['Authorization'] = `Bearer ${
  //       localStorage.accessToken
  //     }`
  //   }
  // },
  // login_check() {
  //   // If the user is not authenticated
  //   if (!localStorage.accessToken) {
  //     return false
  //   }
  //   return true
  // },
  // login({ commit }, { userId, password }) {
  //   return this.$axios
  //     .$post('/login', {
  //       // 경로확인
  //       userId: userId,
  //       password: password
  //     })
  //     .then(res => {
  //       commit('LOGIN', res)
  //       this.$axios.defaults.headers.common['Authorization'] = `Bearer ${
  //         res.accessToken
  //       }`
  //     })
  //     .catch(err => {
  //       alert(err)
  //     })
  // },
  // logout({ commit }) {
  //   this.$axios.defaults.headers.common['Authorization'] = undefined
  //   commit('LOGOUT')
  //   console.log('logout')
  // },
  async nuxtServerInit({ dispatch, commit }, ctx) {
    // refresh 하면 store의 user 데이터도 리셋되므로
    // auth/FETCH를 통해서 refresh 시 매번 user데이터를 init 해준다.
    // 또한 FETCH를 위해서도 역시 헤더에 x-access-token이 있어야하는데
    // 서버사이드에서 보내는 요청이므로 plugins/axios 설정에 있는
    // js-cookie로는 브라우저단 쿠키를 잡지 못한다.
    // 따라서 server side cookie 모듈로 쿠키를 헤더에 설정해줘야함
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
