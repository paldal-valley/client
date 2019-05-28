<template>
  <vue-board-container>
    <!-- sidebar -->
    <vue-board-sidebar
      :buttons="GET_PLAZA_META.sidebarButtons"
      :buttons-downside="GET_POST_META.sidebarButtonsDownside"/>

    <!-- post-content -->
    <div class="post-content">

      <!-- post -->
      <vue-post
        :title="post.title"
        :content="post.content"
        :category="category"
        :user-name="post.userName"
        :user-email="post.userEmail"
        :created-date="post.createdDate"
        view="34"
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

    <!-- float buttons -->
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
import VueCommentCard from '~/components/common/cards/comment'
import VueCommentTextarea from '~/components/common/textareas/comment'
import VueCategorySeparator from '~/components/common/separators/category'

import { mapGetters } from 'vuex'

export default {
  middleware: ['isLoggedIn'],
  components: {
    VueBoardContainer,
    VueBoardSidebar,
    VuePost,
    VueFloatBtn,
    VueCommentCard,
    VueCommentTextarea,
    VueCategorySeparator
  },
  computed: {
    ...mapGetters({
      GET_POST_META: 'page-meta/GET_POST_META',
      GET_PLAZA_META: 'page-meta/GET_PLAZA_META',
      GET_USER: 'auth/GET_USER'
    }),
    category() {
      return this.$categoryMapper('plaza', this.post.categoryId)
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
    post: {},
  }),
  mounted() {
    this.postId = this.$route.params.postId
    this.fetchPost()
  },
  methods: {
    async fetchPost() {
      try {
        const options = {
          url: `post/plaza/${this.postId}`,
          method: 'get'
        }
        const { data } = await this.$axios(options)
        this.post = data
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
