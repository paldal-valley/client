<template>
  <div>
    <vue-post
      :title="post.title"
      :content="post.content"
      :category="category"
      user-name="이병헌"
      :created-date="post.createdDate"
      view="34"
    />
  </div>
</template>

<script>
import VuePost from '~/components/common/posts'
export default {
  middleware: ['isLoggedIn'],
  components: {
    VuePost
  },
  computed: {
    category() {
      return this.$categoryMapper('plaza', this.post.categoryId)
    }
  },
  data: () => ({
    postId: '',
    post: {}
  }),
  mounted() {
    this.postId = this.$route.params.postId
    this.fetchPost()
  },
  methods: {
    async fetchPost() {
      try {
        const options = {
          url: `post/plaza/${this.postId}`,
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
