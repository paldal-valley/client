<template>
  <div class="qwer">
    <nuxt-link
      v-if="isCurrentPage"
      :to="to"
      :style="highlight"
      class="underline-btn">
      {{ text }}
    </nuxt-link>
    <nuxt-link
      v-else
      :to="to"
      class="underline-btn">
      {{ text }}
    </nuxt-link>
  </div>
</template>

<script>
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
      'color': 'black'
    }
  }),
  computed: {
    isCurrentPage() {
      return this.$route.path === this.to
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/index';
.qwer {
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
