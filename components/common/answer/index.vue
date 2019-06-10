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
            <span class="meta">{{ createdDate }} </span>
          </p>
          <hr />
        </header>
      </div>
      <div class="post-content">
        {{ content }}
      </div>
      <div></div>
    </v-form>
    <!-- 여기서 v-if로 함수를 하나 더 걸어서 주인장이면 나오게 하란 말? -->
    <div class="text-xs-right pt-2">
      <v-btn v-if="hasSelectBtn"
      outline large fab color="blue"
      @click="updateSelected()">
        <v-icon>check</v-icon></v-btn>
    </div>
    <v-card-actions>
      <v-btn v-if="hasUpdateBtn"
      flat color="blue"
      @click="updateAnswer()">
      수정하기
      </v-btn>
      <v-btn v-if="hasDeleteBtn"
      flat color="red"
      @click="deleteAnswer()">
      삭제하기
      </v-btn>
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
    hasUpdateBtn: {
      type: Boolean,
      default: false
    },
    hasSelectBtn: {
      type: Boolean,
      default: false
    },
    hasDeleteBtn: {
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

      this.$router.push(`./${this.postId}/answer/${this.answerId}`)

    },
    async updateSelected() {
      try {

        //만약 채택된 답변이 없다면
       const options = {
         url: `post/answer/select/${this.answerId}`,
         method: 'put',
         params: { isSelected : 1 },
         data: {
           postId_Q : this.questionId
         }
       }
       this.$axios(options)
       this.$notifySuccess('채택이 완료되었습니다.')

       this.$router.back()
     } catch (err) {
       console.error(err)
     }

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
  overflow: auto;
}
.user-info {
  float: left;
}
.meta {
  float: right;
  margin-right: 20px;
  color: gray;
}
.post-content {
  text-align: left;
  margin: 20px;
  white-space: pre-line;
}

</style>
