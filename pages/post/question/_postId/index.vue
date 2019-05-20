<template>
  <div>
    <vue-post
      :title="post.title"
      :content="post.content"
      :category="category"
      user-name=" "
      :created-date="post.createdDate"
      view="34"
    />
  </div>
</template>

<script>
import VuePost from '~/components/common/posts'
export default {
  components: {
    VuePost
  },
  data: () => ({
    postId: '',
    post: {}
  }),
  computed: {
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
