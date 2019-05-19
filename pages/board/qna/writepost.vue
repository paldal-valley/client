<template>
  <div>
    <vue-question></vue-question>
    <v-btn v-on:click="save_post_db" block color="#054d95" class="white--text">
      <strong>질문 등록</strong>
    </v-btn>
  </div>
</template>

<script>
import VueQuestion from '~/components/common/posts/write'
export default {
  components: {
    VueQuestion
  },
  data() {
    return {
      posts: {
        title: '', //제목
        content: '', //내용
        writer: '', // userId
        view: '', // 조회수
        recommended: '', // 추천수
        createdDate: '', //작성일
        lastModifiedDate: '', //최종 수정일
        isPending: '',
        isDeleted: '',
        type: ''
      }
    }
  },
  methods: {
    save_post_db: function(event) {
      this.$axios
        .$post('/posts', {
          userId: 28, // 로그인 기능 구현 후 modify
          title: this.posts.title,
          content: this.posts.content,
          type: this.posts.type
        })
        .then(function(response) {
          // save_post_question_db()

          console.log(response)
          alert('질문이 등록되었습니다')
        })
        .catch(err => {
          console.log(err)
        })
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped></style>
