


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
  class="answer"
  :title="posts.title"
  :content="posts.content"
  :createdDate="posts.createdDate"
  :view="posts.view"
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

      },
     // postId: ''
    }
  },
  async created(){

    const postId = this.$route.params.id || ''
    //alert(postId) 
    const { data } = await this.$axios.get(`/posts/readQ/${postId}`)
    this.posts = data[0]
  

  },
  methods: {

    onWriteClick() {
      this.$router.push('./writeanswer');
      // this.$axios.$get('/boards').then((response) => {
      //   this.posts[0].title = response
      //   //this.posts[0].title = response.data
      // })
      //this.posts[0].title = 취업꿀팁
      //window.location='./qna/writepost';
    },
    async onReadClick() {
      this.$router.go('-1');

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
.answer{
  margin-top:20px;

}
</style>
