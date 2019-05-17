<template>
  <vue-board-container>

    <!-- sidebar -->
    <vue-board-sidebar/>

    <!-- posts -->
    <vue-board-post-list/>

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
  }
}
</script>

<style lang="scss" scoped>
</style>
