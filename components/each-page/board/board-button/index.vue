<template>
  <vue-sidebar-container>
    <!-- buttons -->
    <vue-button-group :buttons="buttons" />
  </vue-sidebar-container>
</template>

<script>
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
