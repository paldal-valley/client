<template>
  <nuxt-link
    :to="to"
    class="card-link">
    <div class="card-container">
      <h2 class="card__title">{{ post.title }}</h2>
      <p class="card__content">{{ post.content }}</p>
    </div>
  </nuxt-link>
</template>

<script>
// props
// exist: title, view, id, recommended, content
// need: createdDate, tag, category
export default {
  name: 'index',
  props: {
    post: {
      type: Object,
      default: () => ({})
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
    box-shadow: $box-shadow;
    &:hover {
      .card__title {
        color: $ac-green2;
      }
      .card__content {
        color: $ac-green2;
      }
    }
  }
  .card__title {
    color: black;
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
