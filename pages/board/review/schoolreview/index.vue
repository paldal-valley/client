<template>
  <vue-board-container>

    <!-- sidebar -->
    <vue-board-sidebar :buttons="buttons"/>

    <!-- posts -->
    <vue-board-post-list
      :buttons="icon_buttons"
      board-title="review"
      api-endpoint="posts/review?categoryId=3"
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
    ],
    icon_buttons: [
      {
        text: 'AC 광장',
        to: '/board/plaza/free'
      },
      {
        text: 'Q&A 게시판',
        to: '/board/qna/job'
      },
      {
        text: '수기게시판',
        to: '/board/review/jobreview'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
</style>
