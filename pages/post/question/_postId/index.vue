<template>
  <vue-board-container>
    <!-- sidebar -->
    <vue-board-sidebar
      :buttons="GET_QUESTION_META.sidebarButtons"
      :buttons-downside="GET_POST_META.sidebarButtonsDownside"/>
    <div class="post-content">
      <vue-post
        :title="post.title"
        :reward ="post.reward"
        :content="post.content"
        :category="category"
        :user-name="post.userName"
        :user-email="post.userEmail"
        :created-date="post.createdDate"
        :hasAnswerBtn=true
        :hasReward=true
      />
      <br>
      <h2> {{length}}개의 답변이 존재합니다. </h2>
      <br>
<!-- 원래 hasAnswerBtn = true 였음 -->
      <vue-answer
        v-for="answer in answers"
        :key="answer.id"
        :content="answer.content"
        :user-name="answer.userName"
        :user-email="answer.userEmail"
        :created-date="answer.createdDate"
        :hasSelectBtn="selectBtn(GET_USER.id)"
      />

      <!-- comments -->
      <vue-category-separator
        :category-name="commentText"/>

      <vue-comment-textarea
        @comment-created="fetchPost"/>

      <transition-group name="fade" tag="div">
        <vue-comment-card
          v-for="comment in post.comments"
          :key="comment.id"
          :comment="comment"
          @comments-changed="fetchPost"/>
      </transition-group>
    </div>
    <div
      v-if="GET_USER.id === post.userId"
      class="float-btn-group">
      <vue-float-btn
        class="float-btn"
        button-text="수정하기"
        @click="$router.push(`${$route.path}/edit`)"/>
      <vue-float-btn
        class="float-btn"
        color="red"
        button-text="삭제하기"
        @click="deletePost"/>
    </div>
  </vue-board-container>
</template>

<script>
// containers
import VueBoardContainer from '~/containers/board'
import VuePostContainer from '~/containers/post'

// components
import VueBoardSidebar from '~/components/each-page/post/sidebar'
import VuePost from '~/components/common/posts'
import VueFloatBtn from '~/components/common/buttons/float'
import VueAnswer from '~/components/common/answer'
import VueCommentCard from '~/components/common/cards/comment'
import VueCommentTextarea from '~/components/common/textareas/comment'
import VueCategorySeparator from '~/components/common/separators/category'

import { mapGetters } from 'vuex'

export default {
  middleware: ['isLoggedIn'],
  components: {
    VuePostContainer,
    VueBoardContainer,
    VueBoardSidebar,
    VuePost,
    VueFloatBtn,
    VueAnswer,
    VueCommentCard,
    VueCommentTextarea,
    VueCategorySeparator
  },
  computed: {
    ...mapGetters({
      GET_POST_META: 'page-meta/GET_POST_META',
      GET_QUESTION_META: 'page-meta/GET_QUESTION_META',
      GET_USER: 'auth/GET_USER'
    }),
    category() {
      return this.$categoryMapper('question', this.post.categoryId)
    },
    commentText() {
      if (typeof this.post.comments !== 'undefined') {
        return this.post.comments.length
          ? `${this.post.comments.length}개의 댓글이 존재합니다.`
          : `작성된 댓글이 없습니다.`
      }
    }
  },
  data: () => ({
    postId: '',
    postId_Q: '',
    length: '',
    post: {},
    answers: []
  }),
  mounted() {
    this.postId = this.$route.params.postId
    this.fetchPost()
  },
  methods: {
    async fetchPost() {
      try {
        const options = {
          url: `post/question/${this.postId}`,
          method: 'get'
        }
        const { data } = await this.$axios(options)
        this.post = data
        this.postId_Q = data.id
        try{
          const options2 = {
            url: `post/answer/${this.postId}`,
            method: 'get',
            params: { postId_Q: this.postId_Q }
          }
          const ans = (await this.$axios(options2)).data
          this.answers = ans
          this.length = ans.length

        }catch (err) {
          console.error(err)
        }
      } catch (err) {
        console.error(err)
      }
    },
    async deletePost() {
      const options = {
        url: `post/${this.postId}`,
        method: 'delete'
      }

      try {
        if (confirm('포스트를 정말 삭제하시겠습니까?')) {
          await this.$axios(options)
          this.$notifySuccess('정상적으로 삭제되었습니다.')
          this.$router.back()
        }
      } catch (err) {
        console.error(err)
        this.$notifyError('에러가 발생했습니다.')
      }
    },
   onWriteClick() {
      const routerid = this.$route.params.postId
      this.$router.push(`../answer/${routerid}`)
      //this.$router.push(`../question/${routerid}`)
    },
    selectBtn(loginId) {
      if(loginId === this.post.userId){
        return true;
      }

    }
  }
}
</script>

<style lang="scss" scoped>
  .float-btn-group {
    position: fixed;
    margin-left: 60%;
    margin-top: 10%;
    .float-btn {
      margin-bottom: 10px;
    }
  }
  .post-content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
