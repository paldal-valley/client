


<template>
<div>
<vue-question></vue-question>

<vue-answer></vue-answer>

<!-- 답변 시작 -->
</div>  
</template>

<script>
import VueAnswer from "~/components/common/posts/answer" ;
import VueQustion from "~/components/common/posts/index" ;
export default {
  //middleware : 'search',
  components: {
    VueAnswer,
    VueQustion
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

      }
    }
  },
  async created(){
    // const { data } = await this.$axios.get('/posts_questions')
    // this.posts = data
    // console.log(data)
      // this.$axios.$get('/boards').then((response) => {
      //   this.posts.title = response
      //   this.posts[0].createdDate = response[0].createdDate
      //   console.log(this.posts[0].createdDate)
      //   //this.posts[0].title = response.data
      // })


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

</style>
