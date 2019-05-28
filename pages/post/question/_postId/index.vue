<template>
  <vue-board-container>
    <!-- sidebar -->
    <vue-board-sidebar
      :buttons="GET_QUESTION_META.sidebarButtons"
      :buttons-downside="GET_POST_META.sidebarButtonsDownside"/>
    <vue-post-container>
    <vue-post
      :title="post.title"
      :content="post.content"
      :category="category"
      :user-name="post.userName"
      :user-email="post.userEmail"
      :created-date="post.createdDate"
      :hasAnswerBtn=true
    />
    <br>
    <h2> {{length}}개의 답변이 존재합니다. </h2>
    <br>
    <vue-answer
      v-for="answer in answers"
      :key="answer.id"
      :content="answer.content"
      :user-name="answer.userName"
      :user-email="answer.userEmail"
      :created-date="answer.createdDate"
      :hasSelectBtn=true
    />
    </vue-post-container>
    <div>
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

import { mapGetters } from 'vuex'

export default {
  middleware: ['isLoggedIn'],
  components: {
    VueBoardContainer,
    VueBoardSidebar,
    VuePost,
    VueFloatBtn,
    VueAnswer,
  },
  data: () => ({
    postId: '',
    postId_Q: '',
    length: '',
    post: {},
    answers: []
  }),
  computed: {
    ...mapGetters({
      GET_POST_META: 'page-meta/GET_POST_META',
      GET_QUESTION_META: 'page-meta/GET_QUESTION_META',
      GET_USER: 'auth/GET_USER'
    }),
    category() {
      return this.$categoryMapper('question', this.post.categoryId)
    }
  },
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
</style>
