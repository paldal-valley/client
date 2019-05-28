<template>
  <v-card class="comment-card">
    <v-textarea
      class="comment-textarea"
      v-model="commentContent"
      hide-details
      full-width
      :placeholder="placeholder"
      :rows="textareaRow"/>

    <v-btn
      class="comment-btn"
      color="#4E98A4"
      block
      @click="createComment">{{ buttonText }}</v-btn>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    placeholder: {
      type: String,
      default: '댓글을 작성해보세요!'
    },
    textareaRow: {
      type: String,
      default: '5'
    },
    buttonText: {
      type: String,
      default: '댓글 작성'
    }
  },
  computed: {
    ...mapGetters('auth', ['GET_USER'])
  },
  mounted() {
    this.postId = this.$route.params.postId
  },
  data: () => ({
    postId: '',
    commentContent: ''
  }),
  methods: {
    async createComment() {
      if (!this.isValidComment()) {
        this.$notifyWarning('올바른 댓글을 입력해주세요!')
        return
      }

      const options = {
        url: `post/${this.postId}/comment`,
        method: 'post',
        data: {
          userId: this.GET_USER.id,
          content: this.commentContent
        }
      }
      try {
        await this.$axios(options)
        this.$notifySuccess('댓글 작성 완료')
        this.$emit('comment-created')
        this.commentContent = ''
      } catch (err) {
        console.error(err)
        this.$notifyError('에러가 발생했습니다.')
      }
    },
    isValidComment() {
      const copy = this.commentContent.slice()
      return copy.trim()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/index';
.comment-card {
  border-radius: 5px;
  background-color: white;
  margin-bottom: 20px;

  .comment-textarea {
    margin-top: 10px;
  }

  .comment-btn {
    font-weight: bold;
    margin-bottom: -2px;
    color: white;
  }
}

</style>
