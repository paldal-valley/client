<template>
  <div class="post">
    <v-form>
      <div class="post-container">
        <header>
          <div>
            <span class="category">
              {{ category }}
            </span>
            <br /><br />
          </div>

<!-- 내공 보이는 부분 -->
        <div  class = "rewardTitle">
            <div v-if="hasReward" class = "rewardDiv">
              <span class= "rewardBox">
                  <!-- 30 -->
                  {{ reward }}
              </span>
            </div>

              <h2 v-if="hasTitle" class="title">
                {{ title }}
              </h2>
              <br /><br />
        </div>

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


<!-- 채택 버튼 들어가야 할 부분 -->
    <!-- <div class="text-xs-right pt-2"> -->
      <!-- <v-btn v-if="hasSelectBtn" outline large fab color="blue">
        <v-icon>check</v-icon>
      </v-btn> -->
      <div class = "like">
        <v-btn outline large fab color="red">
          <v-icon>thumb_up</v-icon>
        </v-btn>
      </div>
    <!-- </div> -->


    <v-btn
      v-if="hasAnswerBtn"
      block
      color="#054d95"
      class="white--text"
      @click="onWriteClick()"
    >
      <strong>답변하기</strong>
    </v-btn>
  </div>
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
    reward: {
      type: Number,
      default: 0
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
    hasReward: {
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
  methods: {
    onWriteClick() {
      //const routerid = this.questionId
      const routerid = this.$route.params.postId
      //alert(routerid)
      this.$router.push(`../answer/${routerid}`)
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

<style lang="scss" scoped>
@import '~assets/scss/index';
.post {
  width: 100%;
  height: 500px;

  // 아래 세 요소 scss로 래핑하기
  box-shadow: $box-shadow;
  border: 1px solid transparent;
  border-radius: 6px;
}
.category {
  float: left;
  margin-top: 10px;
  margin-left: 20px;
}
.title {
  float: left;
  margin-top: 8px;
  margin-left: 5px;
}
.rewardDiv {
  float: left;
  margin-top: 9px;
  margin-right: 2px;
  margin-left: 20px;
  font-size: 0;
  line-height: 0;
}

.rewardBox {
  display: inline-block;
  border-radius: 1px;
  padding: 1px 5px 2px;
  font-size: 15px;
  line-height: 17px;
  background-color: #a5adb7;
  
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
.like {
  float: right;
}

</style>
