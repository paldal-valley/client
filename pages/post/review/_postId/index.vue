<template>
  <vue-board-container>
    <!-- sidebar -->
    <vue-board-sidebar
      :buttons="GET_REVIEW_META.sidebarButtons"
      :buttons-downside="GET_POST_META.sidebarButtonsDownside"/>

    <vue-post-container>
      <!-- buttons -->
      <vue-button-group :buttons="GET_POST_META.icon_buttons" />
      <!-- post-content -->
      <div class="post-content">
        <vue-post
          :title="post.title"
          :content="post.content"
          :category="category"
          :user-name="post.userName"
          :user-email="post.userEmail"
          :created-date="post.createdDate"
          :view="post.view"
          :hasLike="true"
          :likes="likeNum"
          :isLiked="isLiked"
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
    </vue-post-container>

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
import VuePostContainer from '~/containers/post'

// components
import VueBoardSidebar from '~/components/each-page/post/sidebar'
import VuePost from '~/components/common/posts'
import VueFloatBtn from '~/components/common/buttons/float'
import VueCommentCard from '~/components/common/cards/comment'
import VueCommentTextarea from '~/components/common/textareas/comment'
import VueCategorySeparator from '~/components/common/separators/category'
import VueButtonGroup from '~/components/common/buttons/with-icon/group'

import { mapGetters } from 'vuex'

export default {
  middleware: ['isLoggedIn'],
  components: {
    VueBoardContainer,
    VuePostContainer,
    VueBoardSidebar,
    VuePost,
    VueFloatBtn,
    VueCommentCard,
    VueCommentTextarea,
    VueCategorySeparator,
    VueButtonGroup
  },
  computed: {
    ...mapGetters({
      GET_POST_META: 'page-meta/GET_POST_META',
      GET_REVIEW_META: 'page-meta/GET_REVIEW_META',
      GET_USER: 'auth/GET_USER'
    }),
    category() {
      return this.$categoryMapper('review', this.post.categoryId)
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
    likeNum: 0,
    isLiked: true
  }),
  mounted() {
    this.postId = this.$route.params.postId
    this.fetchPost().then(()=>{
      this.viewPost()
    })
  },
  methods: {
    async fetchPost() {
      try {
        const options = {
          url: `post/review/${this.postId}`,
          method: 'get'
        }
        const { data } = await this.$axios(options)
        
        this.post = data
        this.likeNum= this.post.likes.length
        this.isLiked = this.checkUserLike()
      } catch (err) {
        console.error(err)
      }
    },
    async viewPost() {
      this.post.view++;
      const options = {
          url: `post/view/${this.postId}`,
          method: 'put',
          data: {
            view: this.post.view
          }
        }
        try{
          await this.$axios(options)
        }
        catch(err){
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
    checkUserLike() {
      const temp = JSON.parse(JSON.stringify(this.post.likes))
      return temp.some(temp => temp['userId'] === this.GET_USER.id)
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

