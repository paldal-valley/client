<template>
  <vue-board-container>
    <!-- sidebar -->
    <vue-board-sidebar
      :buttons="GET_QUESTION_META.sidebarButtons"
      :buttons-downside="GET_POST_META.sidebarButtonsDownside"/>

    <!-- posts -->
    <vue-board-post-list
      board-title="question"
      :buttons="GET_POST_META.icon_buttons"
      :api-endpoint="`${GET_QUESTION_META.url}?categoryId=3`"
      :post-link-prefix="`${GET_QUESTION_META.url}/`"
      alert-msg="대외활동 관련 질문 페이지입니다."
    />
    <vue-float-btn to="/board/question/write/"/>
  </vue-board-container>
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
      'GET_QUESTION_META'
    ]),
  },
}
</script>

<style lang="scss" scoped></style>
