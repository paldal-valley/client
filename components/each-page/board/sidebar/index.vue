<template>
  <vue-sidebar-container>

    <!-- images -->
    <vue-sidebar-img-container>
      <nuxt-link to="/">
        <div class="tmp-img-container">
          <img
            class="tmp-img"
            src="~assets/images/ethereum.png">
        </div>
      </nuxt-link>
    </vue-sidebar-img-container>

    <!-- buttons -->
    <vue-button-group :buttons="buttons"/>

  </vue-sidebar-container>
</template>

<script>
// containers
import VueSidebarContainer from '~/containers/sidebar/board'
import VueSidebarImgContainer from '~/containers/sidebar/board/image'

// components
import VueButtonGroup from '~/components/common/buttons/underline/group'
export default {
  components: {
    VueSidebarContainer,
    VueSidebarImgContainer,
    VueButtonGroup,
  },
  props: {
    buttons: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.tmp-img-container {
  background-color: #abb5ff;
  border-radius: 5px;
  .tmp-img {
    max-width: 180px;
    max-height: 120px;
    margin: 10px 0;
  }
}
</style>
