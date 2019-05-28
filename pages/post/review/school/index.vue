<template>
  <vue-board-container>
    <!-- sidebar -->
    <vue-board-sidebar
      :buttons="GET_REVIEW_META.sidebarButtons"
      :buttons-downside="GET_POST_META.sidebarButtonsDownside"/>

    <vue-post-container>
      <!-- buttons -->
      <vue-button-group :buttons="GET_POST_META.icon_buttons" />
      <!-- posts -->
      <vue-board-post-list
        board-title="review"
        :api-endpoint="`${GET_REVIEW_META.url}?categoryId=2`"
        :post-link-prefix="GET_REVIEW_META.url"
        alert-msg="수기 게시판입니다."
      />
    </vue-post-container>

    <vue-float-btn
      class="float-add-post-btn"
      @click="$router.push(`${GET_REVIEW_META.url}/write/`)"/>
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
      'GET_REVIEW_META'
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
