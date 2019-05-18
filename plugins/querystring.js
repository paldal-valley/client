import Vue from 'vue'

const Plugin = {}
Plugin.install = Vue => {
  Vue.mixin({
    methods: {
      $updateQuerystring(payload) {
        const query = Object.assign({}, this.$route.query, payload)
        this.$router.push({ query })
      }
    }
  })
}

Vue.use(Plugin)
