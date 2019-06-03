<template>
  <v-card class="post">
    <v-form>
      <div class="post-container">
        <header>
            <br>
          <p class="post-info">
            <span class="user-info">
              <strong>작성자: {{ userName }}</strong>
              ({{ userEmail }})
            </span>
            <span class="meta"> 작성일: {{ createdDate }} </span>
          </p>
          <br />
          <hr />
        </header>
      </div>
      <div class="post-content">
        {{ content }}
      </div>
      <div></div>
    </v-form>
    <v-card-actions>
      <v-btn flat color="blue" @click="updateAnswer()">수정하기</v-btn>
      <v-btn flat color="red" @click="deleteAnswer()">삭제하기</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { EventBus } from '~/utils/EventBus'
export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    userName: {
      type: String,
      default: ''
    },
    userEmail: {
      type: String,
      default: ''
    },
    createdDate: {
      type: String,
      default: ''
    },
    hasSelectBtn: {
      type: Boolean,
      default: false
    },
    hasTitle: {
      type: Boolean,
      default: true
    },
    answerId: {
      type: String,
      default: ''
    },
    questionId: {
      type: String,
      default: ''
    },
    postId : {
      type: String,
      default: ''
    }
  },
  // watcher: detect change of the data
  // updated: detect change of the DOM
  watch: {
    category() {
      EventBus.$emit('categoryName from post', this.category)
    }
  },
  methods: {
    async updateAnswer() {
      //alert(this.answerId)
      //./${postId}/answer
      this.$router.push(`./${this.postId}/answer/${this.answerId}`)
      
      // const options = {
      //   url: `post/${this.answerId}`,
      //   method: 'put',
      //   data: { content: this.content }
      // }
      // try {
      //   await this.$axios(options)
      //   this.$notifySuccess('답변 수정 완료')
      //   this.$emit('answers-changed')
      //   this.isEditing = false
      // } catch (err) {
      //   console.error(err)
      //   this.$notifyError('에러가 발생했습니다.')
      // }
    },
    async deleteAnswer(){

      const options = {
        url: `post/${this.answerId}`,
        method: 'delete'
      }

      try {
        if (confirm('답변을 정말 삭제하시겠습니까?')) {
          await this.$axios(options)
          this.$notifySuccess('정상적으로 삭제되었습니다.')
          this.$router.back()
        }
      } catch (err) {
        console.error(err)
        this.$notifyError('에러가 발생했습니다.')
      }
    }
  }
}
</script>

<style scoped>
.post {
  width: 100%;
  margin-bottom: 35px;
}
.category {
  float: left;
  margin-top: 10px;
  margin-left: 0px;
}
.title {
  float: left;
  margin-top: 8px;
  margin-left: 20px;
}
.post-info {
  margin-top: 5px;
  margin-left: 20px;
}
.user-info {
  float: left;
}
.meta {
  float: left;
  margin-left: 20px;
  color: gray;
}
.post-content {
  text-align: left;
  margin: 20px;
  white-space: pre-line;
}

</style>
