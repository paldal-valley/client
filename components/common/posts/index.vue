<template>
  <div class="post">
    <v-form>
      <div class="post-container">
        <header>
          <div>
            <span class="category">
              {{ category }}
            </span>
             <span class="view"> 조회수: {{ view }} </span>
            <br /><br />
          </div>

        <div  class = "rewardTitle">
          <!-- v-if has reward 걸기 -->
            <div v-if="hasReward" class = "rewardDiv">
              <span class= "rewardBox">
                  {{ reward }}
              </span>
            </div>

              <h2 v-if="hasTitle" v-bind:class="{ title: !hasReward, titleWithReward: hasReward }">
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
          <hr />
        </header>
      </div>
      <div class="post-content">
        {{ content }}
      </div>
      <div></div>
    </v-form>


<!-- 채택 버튼 들어가야 할 부분 -->
    <div class="text-xs-right pt-2">
      <v-btn v-if="hasSelectBtn" outline large fab color="blue">
        <v-icon>check</v-icon>
      </v-btn>
      <div class = "like">
        <v-btn v-if="hasLike" outline large fab color="red">
          <v-icon>thumb_up</v-icon>
        </v-btn>
      </div>
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
  </div>
</template>

<script>
import { EventBus } from '~/utils/EventBus'
import { mapGetters } from 'vuex'
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
    boardTitle: {
      type: String,
      default: ''
    },
    questionId: {
      type: String,
      default: ''
    },
    hasLike: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    // category() {
    //   return this.$categoryMapper(this.boardTitle, this.post.categoryId)
    // },
    ...mapGetters({
      GET_POST_META: 'page-meta/GET_POST_META',
      GET_QUESTION_META: 'page-meta/GET_QUESTION_META',
      GET_USER: 'auth/GET_USER'
    })
    },
 data: () => ({
    userId: ''
  }),
  // watcher: detect change of the data
  // updated: detect change of the DOM
  watch: {
    category() {
      EventBus.$emit('categoryName from post', this.category)
    }
  },
mounted() {
    this.postId = this.$route.params.postId
    this.getUserId()

  },
  methods: {
    // hasReward() {
    //   // alert(this.boardTitle)
    //   // if(this.category)
    //   // alert(this.boardTitle)
    //   // console.log(this.boardTitle)

    //   if(this.boardTitle == "QnA"){
    //     alert(this.boardTitle)
    //   }
    // },
    async getUserId() {
        const postId = this.$route.params.postId
          try {
            const options = {
              url: `post/getUser/${this.postId}`,
              method: 'get',
              params: { postId: this.postId  }
            }
            const { data } = await this.$axios(options)
            this.userId = data.userId
      //만약 postid랑 로그인 된 아이디랑 같으면 noti 날리고 -1로 돌아가게 해야함.
      //if(this.GET_USER.id)
              // alert(this.selected)
            }
            catch (err){
              console.error(err)
            }
      //const routerid = this.questionId

    },
    onWriteClick() {
      
      const postId = this.$route.params.postId
      if(this.userId == this.GET_USER.id){
        this.$notifyError('본인 질문에는 답변할 수 없습니다.')
      }
      else{
        this.$router.push(`./${postId}/answer`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/index';
.post {
  width: 100%;

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
  margin-left: 20px;
}
.titleWithReward{
  float: left;
  margin-top: 8px;
  margin-left: 8px;
}
.rewardDiv {
  float: left;
  margin-top: 12px;
  margin-right: 2px;
  margin-left: 20px;
  font-size: 0;
  line-height: 0;
}

.rewardBox {
  display: inline-block;
  border-radius: 6px;
  padding: 2px 5px;
  font-size: 15px;
  line-height: 17px;
  background-color: #4e98a4;
  color: white;
}

.post-info {
  margin-top: 5px;
  margin-left: 20px;
  overflow: auto;
}
.user-info {
  float: left;
  overflow: hidden;
}
.meta {
  float: left;
  margin-left: 20px;
  color: gray;
  overflow: hidden;
}
.post-content {
  text-align: left;
  margin: 20px;
  white-space: pre-line;
}
.like {
  float: right;
  &:hover {
    transform: scale(1.04); /*  default */
    -webkit-transform: scale(1.04); /*  크롬 */
    -moz-transform: scale(1.04); /* FireFox */
    transition: all 0.1s ease-in-out;
  }
}
.view {
  float: right;
  margin-right: 20px;
  margin-top: 10px;
  color: gray;
}
.right {
  float: right !important;
  margin-right: 20px;
}
</style>
