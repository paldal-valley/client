import Vue from 'vue'
import { mapGetters } from 'vuex'

const Plugin = {}
Plugin.install = Vue => {
  Vue.mixin({
    computed: {
      ...mapGetters('models', ['GET_CATEGORIES'])
    },
    methods: {
      $updateQuerystring(payload) {
        const query = Object.assign({}, this.$route.query, payload)
        this.$router.push({ query })
      },
      $categoryMapper(board, categoryId) {
        const category = this.GET_CATEGORIES[board][categoryId - 1]
        console.log(this.GET_CATEGORIES[board])
        if (category) {
          return category.title
        }
      }
    }
  })
}

Vue.use(Plugin)
