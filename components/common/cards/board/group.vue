<template>
  <div class="category-card-container">
    <vue-board-card
      v-for="bc in boardCards"
      :key="bc.title"
      :title="bc.title"
      :content="bc.content"
      :img-src="bc.imgSrc"/>
  </div>
</template>

<script>
import VueBoardCard from './index'

export default {
  components: {
    VueBoardCard
  },
  props: {
    boardCards: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/index';
  .category-card-container {
    /*background-color: red;*/
    display: flex;
    flex-wrap: wrap;
    margin-left: -1%;
    margin-right: -1%;
  }
</style>
