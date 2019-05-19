import Vue from 'vue'
import Vuex from 'vuex'

// todo: 리팩토링 필요함
Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      accessToken: null,
      userId: null
    },

    getters: {
      getUserId: () => {
        return state.userId
      }
    },

    mutations: {
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
    },

    actions: {
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
      async initStaticData({ dispatch }) {
        try {
        } catch (err) {
          console.error(err)
          console.error('static data init error')
        }
      }
    }
  })

export default store
