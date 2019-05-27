<template>
  <vue-board-container>
    <!-- sidebar -->
    <vue-board-sidebar
      :buttons="GET_QUESTION_META.sidebarButtons"
      :buttons-downside="GET_POST_META.sidebarButtonsDownside"/>
    <vue-post
      :title="post.title"
      :content="post.content"
      :category="category"
      :user-name="post.userName"
      :user-email="post.userEmail"
      :created-date="post.createdDate"
      :hasAnswerBtn=true
    />
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

// components
import VueBoardSidebar from '~/components/each-page/post/sidebar'
import VuePost from '~/components/common/posts'
import VueFloatBtn from '~/components/common/buttons/float'

import { mapGetters } from 'vuex'

export default {
  middleware: ['isLoggedIn'],
  components: {
    VueBoardContainer,
    VueBoardSidebar,
    VuePost,
    VueFloatBtn,
  },
  data: () => ({
    postId: '',
    postId_Q: '',
    post: {},
    answer: {}
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
    this.fetchAnswer()
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
      } catch (err) {
        console.error(err)
      }
    },
    async fetchAnswer(){
      try {
        const options = {
          url: `post/answer/${this.postId}`,
          method: 'get',
          params: { postId_Q: this.postId_Q }
        }
        const { data } = await this.$axios(options)
        this.answer = data
        //alert(data.length) --> 답변 갯수
        // await this.getReward("0x98FE5eaFd3D61af18fB2b2322b8346dF05057202")
      } catch (err) {
        console.error(err)
      }
    },
    async deletePost() {
      // TODO: vue-notification 플러그인이 먹지 않음
      // TODO: 향후 alert 등 대체할 것
      this.$notify({
        group: 'alert-css',
        title: '게시글 삭제', 
        text: '정상적으로 삭제되었습니다.'
      });
      const options = {
        url: `post/${this.postId}`,
        method: 'delete'
      }

      try {
        if (confirm('포스트를 정말 삭제하시겠습니까?')) {
          await this.$axios(options)
          alert('정상적으로 삭제되었습니다')
          this.$router.back()
        }
      } catch (err) {
        console.error(err)
        alert('에러가 발생했습니다.')
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
