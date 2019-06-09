import Vue from 'vue'
import VueNotifications from 'vue-notification'

Vue.use(VueNotifications)

const notifyBundle = {
  notifySuccess(text) {
    Vue.prototype.$notify({
      type: null,
      title: '알림메시지',
      text
    })
  },
  notifyWarning(text) {
    Vue.prototype.$notify({
      type: 'warn',
      title: '알림메시지',
      text
    })
  },
  notifyError(text) {
    Vue.prototype.$notify({
      type: 'error',
      title: '에러메시지',
      text
    })
  }
}

export default (ctx, inject) => {
  Object.assign(ctx, { notifyBundle })
  inject('notifySuccess', notifyBundle.notifySuccess)
  inject('notifyWarning', notifyBundle.notifyWarning)
  inject('notifyError', notifyBundle.notifyError)
};

