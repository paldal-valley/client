<template>
  <div class="category-group">
    <h2>AC 광장</h2>
    <hr class="line-separator"/>
    <div class="category-card-container">
      <vue-board-card
        v-for="bc in boardCards"
        :key="bc.title"
        :title="bc.title"
        :content="bc.content"
        :img-src="bc.imgSrc"
        :to="bc.to"/>
    </div>
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
  .category-group {
    margin-top: 80px;
    text-align: left;

    .line-separator {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid #ccc;
      padding: 0;
    }
    .category-card-container {
      /*background-color: red;*/
      display: flex;
      flex-wrap: wrap;
      margin-left: -1%;
      margin-right: -1%;
    }
  }
</style>
