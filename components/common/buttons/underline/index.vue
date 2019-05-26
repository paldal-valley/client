<template>
  <div class="underline-btn-container">
    <nuxt-link
      v-if="isCurrentPage"
      :to="to"
      :style="highlight"
      class="underline-btn"
    >
      {{ text }}
    </nuxt-link>
    <nuxt-link v-else :to="to" class="underline-btn">
      {{ text }}
    </nuxt-link>
  </div>
</template>

<script>
import { EventBus } from '~/utils/EventBus'
export default {
  props: {
    text: {
      type: String,
      default: 'button'
    },
    to: {
      type: String,
      default: '#'
    }
  },
  data: () => ({
    highlight: {
      'border-color': '#4E98A4',
      color: 'black'
    },
    categoryName: ''
  }),
  computed: {
    isCurrentPage() {
      return this.categoryName
        // when 게시판 상세페이지
        ? this.text === this.categoryName
        // when 게시판 리스트
        : this.$route.path === this.to
    }
  },
  mounted() {
    EventBus.$once('categoryName from post',
      categoryName => this.categoryName = categoryName)
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/index';
.underline-btn-container {
  display: table-cell;
  vertical-align: middle;
  font-weight: bold;
  font-size: 1rem;
  padding: 0 2px;
  margin: 10px 0;
  text-align: left;

  .underline-btn {
    color: gray;
    text-decoration: none;
    padding-bottom: 5px;
    border-bottom: 2px solid transparent;
  }

  &:hover {
    cursor: pointer;

    .underline-btn {
      color: black;
    }
  }
}
</style>
