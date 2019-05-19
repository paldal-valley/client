<template>
  <vue-board-container>

    <!-- sidebar -->
    <vue-board-sidebar :buttons="buttons"/>

    <!-- posts -->
    <vue-board-post-list
      board-title="review"
      api-endpoint="posts/review?categoryId=1"
      post-link-prefix="/board/review/"
      alert-msg="수기 게시판입니다."/>

  </vue-board-container>
</template>

<script>
// containers
import VueBoardContainer from '~/containers/board'

// components
import VueBoardSidebar from '~/components/each-page/board/sidebar'
import VueBoardPostList from '~/components/each-page/board/post-list'

export default {
  components: {
    VueBoardContainer,
    VueBoardSidebar,
    VueBoardPostList,
  },
  data: () => ({
    buttons: [
      {
        text: '취업 게시판',
        to: '/board/review/jobreview'
      },
      {
        text: '진학 게시판',
        to: '/board/review/schoolreview'
      },
      {
        text: '대외활동 게시판',
        to: '/board/review/extrareview'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
</style>
