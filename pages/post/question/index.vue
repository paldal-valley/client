<template>
  <vue-board-container>
    <!-- sidebar -->
    <vue-board-sidebar
      :buttons="GET_QUESTION_META.sidebarButtons"
      :buttons-downside="GET_POST_META.sidebarButtonsDownside"/>

    <vue-post-container>
      <!-- buttons -->
      <vue-button-group :buttons="GET_POST_META.icon_buttons" />
      <!-- posts -->
      <vue-board-post-list
        board-title="question"
        :api-endpoint="GET_QUESTION_META.url"
        :post-link-prefix="GET_QUESTION_META.url"
        alert-msg="기타 질문 페이지입니다."
      />
    </vue-post-container>
    <vue-float-btn
      class="float-add-post-btn"
      button-text="글쓰기"
      @click="$router.push(`${GET_QUESTION_META.url}/write/`)"/>
  </vue-board-container>
</template>

<script>
// containers
import VueBoardContainer from '~/containers/board'
import VuePostContainer from '~/containers/post'

// components
import VueBoardSidebar from '~/components/each-page/post/sidebar'
import VueBoardPostList from '~/components/each-page/post/post-list'
import VueFloatBtn from '~/components/common/buttons/float'
import VueButtonGroup from '~/components/common/buttons/with-icon/group'

import { mapGetters } from 'vuex'

export default {
  components: {
    VueBoardContainer,
    VuePostContainer,
    VueBoardSidebar,
    VueBoardPostList,
    VueFloatBtn,
    VueButtonGroup
  },
  computed: {
    ...mapGetters('page-meta', [
      'GET_POST_META',
      'GET_QUESTION_META'
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
