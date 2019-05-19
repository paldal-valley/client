<template>
  <div>
    <vue-post
      :title="post.title"
      :content="post.content"
      category="카테고리"
      user-name="이병헌"
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
  mounted() {
    this.postId = this.$route.params.postId
    this.fetchPost()
  },
  methods: {
    async fetchPost() {
      try {
        const options = {
          url: `posts/plaza/${this.postId}`,
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
