<template>
  <vue-board-container>
    <!-- sidebar -->
    <vue-board-sidebar
      :buttons="GET_QUESTION_META.sidebarButtons"
      :buttons-downside="GET_POST_META.sidebarButtonsDownside"/>

    <vue-post
      :title="post.title"
      :content="post.content"
      :category="category"
      user-name=" "
      :created-date="post.createdDate"
      view="34"
    />
  </vue-board-container>
</template>

<script>
// containers
import VueBoardContainer from '~/containers/board'

// components
import VueBoardSidebar from '~/components/each-page/board/sidebar'
import VuePost from '~/components/common/posts'

import { mapGetters } from 'vuex'

export default {
  middleware: ['isLoggedIn'],
  components: {
    VueBoardContainer,
    VueBoardSidebar,
    VuePost
  },
  data: () => ({
    postId: '',
    post: {}
  }),
  computed: {
    ...mapGetters('page-meta', [
      'GET_POST_META',
      'GET_QUESTION_META'
    ]),
    category() {
      return this.$categoryMapper('question', this.post.categoryId)
    }
  },
  mounted() {
    this.postId = this.$route.params.postId
    this.fetchPost()
  },
  methods: {
    async fetchPost() {
      try {
        const options = {
          url: `post/question/${this.postId}`,
          method: 'get'
        }
        const { data } = await this.$axios(options)
        this.post = data
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style scoped></style>
