<template>
  <vue-board-container>
    <!-- sidebar -->
    <vue-board-sidebar
      :buttons="GET_PLAZA_META.sidebarButtons"
      :buttons-downside="GET_POST_META.sidebarButtonsDownside"/>

    <vue-post-container>
      <!-- buttons -->
      <vue-button-group :buttons="GET_POST_META.icon_buttons" />
      <!-- posts -->
      <vue-board-post-list
        :api-endpoint="`${GET_PLAZA_META.url}?categoryId=3`"
        board-title="plaza"
        :post-link-prefix="GET_PLAZA_META.url"
        alert-msg="플라자 취업 페이지입니다."
      />
    </vue-post-container>

    <vue-float-btn
      class="float-add-post-btn"
      @click="$router.push(`${GET_PLAZA_META.url}/write/`)"/>
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
