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
            <div v-if="hasReward && isSelected" class = "selectDiv">
              <span class = "status">
                채택
              </span>
            </div>

            <div v-if="hasReward" v-bind:class="{rewardDiv:isSelected, selectDiv:!isSelected}">
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
            <span class="meta right"> {{ createdDate }} </span>
          </p>
          <hr class="header"/>
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
      <div v-if="hasLike" class="like">
        <button @click="likeButtonClick()" v-bind:class="{likebtn:true, liked:isLiked, unliked:!isLiked}">
          <i aria-hidden="true" class="likeicon v-icon material-icons theme--light">thumb_up</i>
           <span class="number">
            {{ likes }}
          </span>
        </button>
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
      type: Number,
      default: 0
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
      default: false
    },
    likes: {
      type: Number,
      default: 0
    },
    isLiked: {
      type: Boolean,
      default: false
    },
    isSelected: {
      type: Boolean,
      defalut: false
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

    selectStatus(){

      // if(this.isSelected == 1){
      //   return true
      // }
    },
    onWriteClick() {
      const postId = this.$route.params.postId
      if(this.userId == this.GET_USER.id){
        this.$notifyError('본인 질문에는 답변할 수 없습니다.')
      }
      else{
        this.$router.push(`./${postId}/answer`)
      }
    },
    async likeButtonClick() {
      const currentUserId = this.GET_USER.id
      try {
        const options = {
          url: `post/like/${this.postId}`,
          method: 'post',
          params: { postId: this.postId  },
          data: { userId: this.userId }
        }
        const { data } = await this.$axios(options)
        this.$emit("likes-pushed")
      }
      catch (err){
        console.error(err)
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
  margin-left: 1px;
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

.selectDiv {
  float: left;
  margin-top: 12px;
  margin-left: 20px;
  font-size: 0;
  line-height: 0;
}

.status {
  display: inline-block;
  margin-right: 2px;
  border-radius: 6px;
  padding: 3px 6px;
  font-size: 13px;
  line-height: 17px;
  background-color: lightcoral;
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
.liked {
  padding-bottom: 0.5rem;
  color: white !important;
  background: #333399 !important;
  box-shadow: none !important;
}
.unliked {
  padding-bottom: 0.5rem;
  color: #333399 !important;
  background: transparent !important;
  border: 2px solid #333399 !important;
  box-shadow: none !important;
}
.likebtn {
  margin: 10px;
  width: 80px;
  height: 80px;
  padding: 14px;
  border-radius: 50%;
  font-size: 14px;
  line-height: 26px;
  transition: all .15s ease-in-out;

  .likeicon {
    display: block;
    color: inherit !important;
    font-weight: 600;
    font-size: 28px;
  }
}
.likebtn:focus {
  outline: none;
}
.header{
  border: 0px;
  border-top: 0.8px solid #dddddd
}

</style>
