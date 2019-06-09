<template>
  <vue-sidebar-container>
 
    <!-- images -->
    <vue-sidebar-img-container>
      <nuxt-link to="/">
        <div class="tmp-img-container">
          <img class="tmp-img" src="~assets/images/ethereum.png" />
        </div>
      </nuxt-link>
    </vue-sidebar-img-container>

    <!-- buttons -->
    <vue-button-group :buttons="buttons" />

    <v-divider class="separator"/>

       <!-- images -->
    <vue-sidebar-img-container>
      <nuxt-link to="/">
        <img class="banner-img mt-3" src="~assets/images/banner_1.png" />
      </nuxt-link>
    </vue-sidebar-img-container>

    <vue-sidebar-img-container>
      <nuxt-link to="/tutorial">
        <img class="banner-img" src="~assets/images/banner_2.png" />
      </nuxt-link>
    </vue-sidebar-img-container>

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
    VueButtonGroup
  },
  props: {
    buttons: {
      type: Array,
      default: () => []
    },
    buttonsDownside: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.tmp-img-container {
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  .tmp-img {
    max-width: 180px;
    max-height: 120px;
    margin: 10px 0;
  }
}
.banner-img {
  max-width: 200px;
  max-height: 140px;
}
.separator {
  margin-top: 30px;
}
</style>
