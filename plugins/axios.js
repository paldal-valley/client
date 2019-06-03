import cookie from 'js-cookie'
import https from 'https'
export default function ({ $axios, store }) {
  $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })

  $axios.onRequest(config => {

    // 서버사이드에서 헤더를 설정해준 경우 (nuxtServerInit) 헤더가 사전에 존재할 수 있음
    if (typeof config.headers.common['x-access-token'] !== 'undefined') return

    if (cookie.get('x-access-token')) {
      config.headers.common['x-access-token'] = cookie.get('x-access-token')
    } else {
      delete config.headers.common['x-access-token']
      store.commit('auth/RESET_USER')
    }
  })
}
