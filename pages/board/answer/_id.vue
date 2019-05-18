<template>
<div>

<vue-post
  :title="posts.title"
  :content="posts.content"
  :createdDate="posts.createdDate"
  :view="posts.view"
  :hasAnswerBtn = true
  ></vue-post>

<h4 class = "answer">
    1개의 답변이 있습니다.
</h4>

<vue-post
  v-for="answer in answers"
  :key="answer.id"
  class="answer"
  :content="answer.content"
  :createdDate="answer.createdDate"
  :hasSelectBtn = true
  :hasTitle = false
></vue-post>

<!-- 답변 시작 -->
</div>  
</template>

<script>

import VuePost from "~/components/common/posts/index" ;
export default {
  //middleware : 'search',
  components: {
    VuePost
  },
  data () {
    return {
    posts: 
        {
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
        answers: [],
     // postId: ''
    }
  },
  async mounted(){

    const postId = this.$route.params.id || ''
    //alert(postId) 
    const { data } = await this.$axios.get(`/posts/readQ/${postId}`)
    this.posts = data[0]

    const ans = (await this.$axios.get(`/posts/readA/9`)).data
    // this.$axios.$get('/posts/readA/질문id(dynamic)')
    this.answers = ans
  
  },
  methods: {


  }
}

</script>

<style>
.answer{
  margin-top:20px;

}
</style>
