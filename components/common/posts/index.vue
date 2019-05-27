<template>
  <v-card class="post">
    <v-form>
      <div class="post-container">
        <header>
          <div>
            <span class="category">
              {{ category }}
            </span>
            <br /><br />
          </div>
          <h2 v-if="hasTitle" class="title">
            {{ title }}
          </h2>
          <br /><br />

          <p class="post-info">
            <span class="user-info">
              <strong>작성자: {{ userName }}</strong>
              ({{ userEmail }})
            </span>
            <span class="meta"> 작성일: {{ createdDate }} </span>
            <span class="meta"> 조회수: {{ view }} </span>
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
    <div class="text-xs-right pt-2">
      <v-btn v-if="hasSelectBtn" outline large fab color="blue">
        <v-icon>check</v-icon>
      </v-btn>
      <v-btn outline large fab color="red">
        <v-icon>thumb_up</v-icon>
      </v-btn>
    </div>
    <v-btn
      v-if="hasAnswerBtn"
      block
      color="#054d95"
      class="white--text"
      @click="onWriteClick()"
    >
      <strong>답변하기</strong>
    </v-btn>
  </v-card>
</template>

<script>
import { EventBus } from '~/utils/EventBus'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    category: {
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
    view: {
      type: String,
      default: ''
    },
    hasAnswerBtn: {
      type: Boolean,
      default: false
    },
    hasSelectBtn: {
      type: Boolean,
      default: false
    },
    hasTitle: {
      type: Boolean,
      default: true
    },
    questionId: {
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
  // beforeUpdate() {
  //   EventBus.$emit('categoryName from post', this.category)
  // },
  methods: {
    onWriteClick() {
      const routerid = this.questionId
      this.$router.push(`../question/${routerid}`)
      // this.$axios.$get('/boards').then((response) => {
      //   this.posts[0].title = response
      //   //this.posts[0].title = response.data
      // })
      //this.posts[0].title = 취업꿀팁
      //window.location='./qna/writepost';
    }
  }
}
</script>

<style scoped>
.post {
  width: 100%;
}
.category {
  float: left;
  margin-top: 10px;
  margin-left: 20px;
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
