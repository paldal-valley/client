<template>
  <v-card class="comment-card">
    <v-textarea
      class="comment-textarea"
      placeholder="댓글을 작성해보세요!"
      hide-details
      full-width
      rows="5"/>

    <v-btn
      class="comment-btn"
      color="#4E98A4"
      block>완료</v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/index';
.comment-card {
  border-radius: 5px;
  background-color: white;
  margin-bottom: 20px;

  .comment-textarea {
    margin-top: 5px;
  }

  .comment-btn {
    font-weight: bold;
    margin-bottom: -2px;
    color: white;
  }
}

</style>
