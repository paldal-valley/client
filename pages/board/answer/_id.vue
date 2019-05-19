<template>
  <div>
    <vue-post
      :title="posts.title"
      :content="posts.content"
      :createdDate="posts.createdDate"
      :view="posts.view"
      :hasAnswerBtn="true"
      :questionId="posts.postId"
    ></vue-post>

    <h4 class="answer">{{ answers.length }} 개의 답변이 있습니다.</h4>

    <vue-post
      v-for="answer in answers"
      :key="answer.id"
      class="answer"
      :content="answer.content"
      :createdDate="answer.createdDate"
      :hasSelectBtn="true"
      :hasTitle="false"
    ></vue-post>

    <!-- 답변 시작 -->
  </div>
</template>

<script>
import VuePost from '~/components/common/posts/index'
export default {
  //middleware : 'search',
  components: {
    VuePost
  },
  data() {
    return {
      posts: {
        id: '',
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
      },
      answers: []

      // postId: ''
    }
  },
  async mounted() {
    const postId = this.$route.params.id || ''
    //alert(postId)
    const { data } = await this.$axios.get(`/posts/readQ/${postId}`)
    this.posts = data[0]

    const ans = (await this.$axios.get(`/posts/readA/${this.posts.id}`)).data
    // this.$axios.$get('/posts/readA/질문id(dynamic)')
    this.answers = ans
  },
  methods: {
    onWriteClick(post) {
      const routerid = post.id
      this.$router.push('./writeanswer/${routerid}')
      // this.$axios.$get('/boards').then((response) => {
      //   this.posts[0].title = response
      //   //this.posts[0].title = response.data
      // })
      //this.posts[0].title = 취업꿀팁
      //window.location='./qna/writepost';
    },
    async onReadClick() {
      this.$router.go('-1')

      // this.$axios.$post('/boards', {
      //   id : '37',
      //   title : '한국어교육학과'
      // }).then(function (response) {
      //   console.log(response)
      // })
      //window.location='./qna/readpost';
    }
  }
}
</script>

<style>
.answer {
  margin-top: 20px;
}
</style>
