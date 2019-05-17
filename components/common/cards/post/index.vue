<template>
  <nuxt-link
    to="#"
    class="card-link">
    <div class="card-container">
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__content">{{ content }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    title: '테스트',
    content: '내용',
    category: '카테고리',
    tag: '# hashtag'
  })
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/index';
  .card-link {
    /*flex: 0 0 50%;*/
    margin: 3px;
    display: block;
    padding: 0.875rem;
    text-align: left;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid transparent;
    text-decoration: none !important;
    /*background-color: blue;*/

    position: relative;
    list-style: none;
    box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.07), 0 5px 20px 0 rgba(0, 0, 0, 0.06),
    0 8px 40px 0 rgba(0, 0, 0, 0.04);
    &:hover {
      .card__title {
        color: $ac-green;
      }
    }
  }
  .card__title {
    color: $ac-green2;
  }
  .card__content {
    color: $ac-green3;
  }
  .card__img {
    position: absolute;
    right: -10px;
    bottom: -10px;
    width: 100px;
  }
</style>
