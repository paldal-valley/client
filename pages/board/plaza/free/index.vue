<template>
  <vue-board-container>

    <!-- sidebar -->
    <vue-board-sidebar :buttons="buttons"/>

    <!-- posts -->
    <vue-board-post-list
      api-endpoint="posts/plaza"
      alertMsg="아주코인"/>

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
        to: '#'
      },
      {
        text: '스터디 게시판',
        to: '#'
      },
      {
        text: '취업 게시판',
        to: '#'
      },
      {
        text: '맛집 게시판',
        to: '#'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
</style>
