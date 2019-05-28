<template>
  <nuxt-link :to="to" class="card-link">
    <div class="card-container">
      <div
        v-if="boardTitle"
        class="card__category">
        {{ category }}
      </div>
      <div class="card__header">
        <span class="card__title">{{ post.title }}</span>
        <span
          v-if="post.totalComment"
          class="card__comment">[{{ post.totalComment }}]</span>
      </div>
      <p class="card__content">{{ post.content }}</p>
      <div class="card__date"> {{ post.createdDate }} </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => ({})
    },
    to: {
      type: String,
      default: '#'
    },
    boardTitle: {
      type: String,
      default: ''
    }
  },
  computed: {
    title() {
      return `${this.post.title}`
    },
    category() {
      return this.$categoryMapper(this.boardTitle, this.post.categoryId)
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

  .card__header {
    margin-bottom: 10px;
    font-weight: bold;

    .card__title {
      color: black;
      font-size: 20px;
    }
    .card__comment {
      color: $ac-green2;
      font-size: 15px;
      margin-left: 5px;
    }
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

  .card__category {
    display: inline-block;
    box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.2);
    background-color: #4e98a424;
    color: black;
    padding: 3px;
    margin-bottom: 10px;
    border-radius: 3px;
  }

  .card__date {
    text-align: right;
    font-weight: bold;
    color: gray;
  }
}
</style>
