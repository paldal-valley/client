<template>
  <vue-board-container>
    <!-- sidebar -->
    <vue-board-sidebar
      :buttons="GET_PLAZA_META.sidebarButtons"
      :buttons-downside="GET_POST_META.sidebarButtonsDownside"/>

    <!-- posts -->
    <vue-board-post-list
      board-title="plaza"
      :buttons="GET_POST_META.icon_buttons"
      :api-endpoint="`${GET_PLAZA_META.url}?categoryId=2`"
      :post-link-prefix="GET_PLAZA_META.url"
      alert-msg="플라자 스터디 페이지입니다."
    />
    <vue-float-btn
      class="float-add-post-btn"
      @click="$router.push(`${GET_PLAZA_META.url}/write/`)"/>
  </vue-board-container>
</template>

<script>
// containers
import VueBoardContainer from '~/containers/board'

// components
import VueBoardSidebar from '~/components/each-page/post/sidebar'
import VueBoardPostList from '~/components/each-page/post/post-list'
import VueFloatBtn from '~/components/common/buttons/float'

import { mapGetters } from 'vuex'

export default {
  components: {
    VueBoardContainer,
    VueBoardSidebar,
    VueBoardPostList,
    VueFloatBtn
  },
  computed: {
    ...mapGetters('page-meta', [
      'GET_POST_META',
      'GET_PLAZA_META'
    ]),
  },
}
</script>

<style lang="scss" scoped>
  .float-add-post-btn {
    position: fixed;
    margin-left: 60%;
    margin-top: 10%;
  }
</style>
