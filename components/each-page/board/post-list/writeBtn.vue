<template>
  <div class="float-add-post-btn">
    <v-btn v-on:click="clickEvent()" fab dark large color="#4E98A4">
      <v-icon dark>edit</v-icon>
    </v-btn>
    <h3>글쓰기</h3>
  </div>
</template>
<script>
export default {
  props: {
    questionId: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickEvent() {
      this.$router.push('../qna/writepost/')
    }
  }
}
</script>

<style>
.float-add-post-btn {
  position: fixed;
  margin-left: 60%;
  margin-top: 10%;
}
</style>
