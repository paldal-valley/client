<template>
  <vue-board-container>

    <!-- sidebar -->
    <vue-board-sidebar :buttons="buttons"/>

    <!-- posts -->
    <vue-board-post-list
      api-endpoint="posts/plaza?categoryId=4"
      post-link-prefix="/board/plaza/"
      alert-msg="플라자 맛집 페이지입니다."/>

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
    ]
  })
}
</script>

<style lang="scss" scoped>
</style>
