<template>
  <vue-board-container>
    <!-- sidebar -->
    <vue-board-sidebar :buttons="buttons" />

    <!-- posts -->
    <vue-board-post-list
      :buttons="icon_buttons"
      board-title="plaza"
      api-endpoint="posts/plaza?categoryId=1"
      post-link-prefix="/board/plaza/"
      alert-msg="플라자 자유게시판 페이지입니다."
    />
    <vue-btn></vue-btn>
  </vue-board-container>
</template>

<script>
// containers
import VueBoardContainer from '~/containers/board'

// components
import VueBoardSidebar from '~/components/each-page/board/sidebar'
import VueBoardPostList from '~/components/each-page/board/post-list'
import VueBtn from '~/components/each-page/board/post-list/writeBtn'

export default {
  components: {
    VueBoardContainer,
    VueBoardSidebar,
    VueBoardPostList,
    VueBtn
  },
  data: () => ({
    buttons: [
      {
        text: '자유 게시판',
        to: '/board/plaza/free'
      },
      {
        text: '스터디 게시판',
        to: '/board/plaza/study'
      },
      {
        text: '취업 게시판',
        to: '/board/plaza/job'
      },
      {
        text: '맛집 게시판',
        to: '/board/plaza/food'
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

<style lang="scss" scoped></style>
