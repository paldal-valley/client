<template>
  <div class="write-container">
    <v-card>
      <v-form>
        <v-select
          v-model="post.categoryId"
          :items="selectorItem"
          item-value="id"
          item-text="title"
          label="카테고리"
          full-width/>

        <v-divider
          class="separator"/>

        <v-text-field
          v-model="post.title"
          label="제목"
          full-width/>

        <v-divider
          class="separator"/>

        <v-textarea
          v-model="post.content"
          full-width
          rows="15"/>
      </v-form>
    </v-card>
    <v-btn
      block
      color="#4E98A4"
      class="white--text"
      @click="updatePost">
      <strong>수정 완료</strong>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: ['isLoggedIn'],
  computed: {
    ...mapGetters({
      GET_USER: 'auth/GET_USER'
    }),
    selectorItem() {
      return this.GET_CATEGORIES['review']
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
          url: `post/review/${this.postId}`,
          method: 'get'
        }
        const { data } = await this.$axios(options)

        if (data.userId !== this.GET_USER.id) {
          alert('자신의 포스트만 수정 가능합니다.')
          this.$router.back()
        } else {
          this.post = data
        }

      } catch (err) {
        console.error(err)
      }
    },
    async updatePost() {
      const options = {
        url: `post/review/${this.postId}`,
        method: 'put',
        params: { categoryId: this.post.categoryId },
        data: {
          title: this.post.title,
          content: this.post.content
        }
      }

      try {
        if(this.checkValidation()) {
          await this.$axios(options)
          this.$router.back()         
        } else {
          this.$notifyWarning('게시글을 모두 작성해주세요.')
        }
      } catch (err) {
        this.$notifyError('에러가 발생했습니다.')
        console.error(err)
      }
    },
    checkValidation() {
      return this.post.title && this.post.content && (this.post.categoryId > 0)
    }
  },
}
</script>

<style scoped>
  .separator {
    margin-top: -30px;
    margin-bottom: 10px;
  }
  .write-container {
    margin-bottom: 20px;
  }
</style>
