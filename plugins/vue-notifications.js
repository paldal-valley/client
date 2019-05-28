import Vue from 'vue'
import VueNotifications from 'vue-notification'


const Plugin = {}
Plugin.install = Vue => {
  Vue.mixin({
    methods: {
      $notifySuccess(text) {
        this.$notify({
          type: null,
          title: '알림메시지',
          text
        })
      },
      $notifyWarning(text) {
        this.$notify({
          type: 'warn',
          title: '알림메시지',
          text
        })
      },
      $notifyError(text) {
        this.$notify({
          type: 'error',
          title: '에러메시지',
          text
        })
      }
    }
  })
}

Vue.use(VueNotifications)
Vue.use(Plugin)
