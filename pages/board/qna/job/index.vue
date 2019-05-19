<template>
  <vue-board-container>

    <!-- sidebar -->
    <vue-board-sidebar :buttons="buttons"/>

    <!-- posts -->
    <vue-board-post-list
      :buttons="icon_buttons"
      board-title="qna"
      api-endpoint="posts/qna?categoryId=1"
      post-link-prefix="/board/qna/"
      alert-msg="취업 관련 질문 페이지입니다."/>

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
        text: '취업 질문게시판',
        to: '/board/qna/job'
      },
      {
        text: '진학 질문게시판',
        to: '/board/qna/school'
      },
      {
        text: '대외활동 질문게시판',
        to: '/board/qna/extra'
      },
      {
        text: '기타 질문게시판',
        to: '/board/qna/etc'
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
