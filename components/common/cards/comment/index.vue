<template>
  <div class="card-link">
    <div class="card-container">
      <div class="first-line">
        <p
          v-if="isOwner"
          :style="myCommentStyle"
          class="card__username"><strong>{{ userInfo }}</strong></p>
        <p
          v-else
          class="card__username"><strong>{{ userInfo }}</strong></p>
        <div
          v-if="isOwner"
          class="btns">
          <vue-float-btn
            icon="edit"
            :small="true"
            @click="toggleEditor"/>
          <vue-float-btn
            icon="remove"
            color="red"
            :small="true"
            @click="deleteComment"/>
        </div>
      </div>
      <p
        v-if="!isEditing"
        class="card__content">{{ comment.content }}</p>
      <div v-else>
        <v-textarea
          v-model="newCommentContent"
          hide-details
          full-width
          rows="4"/>
        <v-btn
          class="update-btn"
          block
          color="#4E98A4"
          @click="updateComment">수정</v-btn>
      </div>
      <p class="card__date"> {{ comment.createdDate }} </p>
    </div>
  </div>
</template>

<script>
import VueFloatBtn from '~/components/common/buttons/float'

import { mapGetters } from 'vuex'
export default {
  components: {
    VueFloatBtn
  },
  props: {
    comment: {
      type: Object,
      default: () => ({})
    },
    newCommentContent: ''
  },
  computed: {
    ...mapGetters('auth', [
      'GET_USER'
    ]),
    isOwner() {
      return this.GET_USER.id === this.comment.userId
    },
    userInfo() {
      return this.isOwner
        ? '내가 작성한 댓글'
        : `${this.comment.userName} (${this.comment.userEmail})`
    }
  },
  data: () => ({
    isEditing: false,
    myCommentStyle: { color: '#4E98A4' }
  }),
  methods: {
    toggleEditor() {
      this.isEditing = !this.isEditing
      if (this.isEditing) this.newCommentContent = this.comment.content.slice()
    },
    async updateComment() {
      const options = {
        url: `comment/${this.comment.id}`,
        method: 'put',
        data: { content: this.newCommentContent }
      }
      try {
        await this.$axios(options)
        this.$notifySuccess('댓글 수정 완료')
        this.$emit('comments-changed')
        this.isEditing = false
      } catch (err) {
        console.error(err)
        this.$notifyError('에러가 발생했습니다.')
      }
    },
    async deleteComment() {
      if (confirm('정말 댓글을 삭제하시겠어요?')) {
        const options = {
          url: `comment/${this.comment.id}`,
          method: 'delete'
        }
        try {
          await this.$axios(options)
          this.$notifySuccess('댓글 삭제 완료')
          this.$emit('comments-changed')
        } catch (err) {
          console.error('에러가 발생했습니다.')
          this.$notifyError('에러가 발생했습니다.')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/index';
  .card-link {
    display: block;
    text-align: left;
    overflow: hidden;
    margin-bottom: 20px;
    border-radius: 6px;
    box-shadow: 1px 1px 5px gray;

    .card__username {
      margin-top: 10px;
    }

    .card-container {
      padding: 0 0.875rem;
      .first-line {
        display: flex;

        .btns {
          display: flex;
          margin-top: 5px;
          margin-left: auto;
        }
      }
      .update-btn {
        color: white;
        font-weight: bold;
      }
    }

    .card__content {
      color: black;
    }

    .card__date {
      font-weight: bold;
      color: gray;
    }
  }
</style>
