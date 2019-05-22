<template>
  <transition name="fade">
    <vue-board-container>
      <!-- sidebar -->
      <vue-board-sidebar
        :buttons="GET_PLAZA_META.sidebarButtons"
        :buttons-downside="GET_POST_META.sidebarButtonsDownside"/>

      <!-- posts -->
      <vue-board-post-list
        board-title="plaza"
        :buttons="GET_POST_META.icon_buttons"
        :api-endpoint="`${GET_PLAZA_META.url}?categoryId=1`"
        :post-link-prefix="GET_PLAZA_META.url"
        alert-msg="플라자 자유게시판 페이지입니다."
      />
      <vue-float-btn :to="`${GET_PLAZA_META.url}/write/`"/>
    </vue-board-container>
  </transition>
</template>

<script>
// containers
import VueBoardContainer from '~/containers/board'

// components
import VueBoardSidebar from '~/components/each-page/board/sidebar'
import VueBoardPostList from '~/components/each-page/board/post-list'
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

<style lang="scss" scoped></style>
