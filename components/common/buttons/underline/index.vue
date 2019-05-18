<template>
  <nuxt-link
    :to="to"
    class="underline-btn">
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  // TODO: 현재 페이지와 to가 같으면 underline 활성화 되도록 watch
  props: {
    text: {
      type: String,
      default: 'button'
    },
    to: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/index';

.underline-btn {
  display: table-cell;
  vertical-align: middle;
  font-weight: bold;
  font-size: 1rem;
  padding: 0 2px;
  margin: 10px 0;
  text-decoration: none;
  color: gray;
  border-bottom: 2px solid transparent;
  text-align: left;

  &:hover {
    cursor: pointer;
    color: $ac-green2;
    border-color: $ac-green2;
  }
}
</style>
