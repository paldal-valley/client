<template>
  <nuxt-link
    to="#"
    class="underline-btn">
    버튼테스트
  </nuxt-link>
</template>

<script>
export default {
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
