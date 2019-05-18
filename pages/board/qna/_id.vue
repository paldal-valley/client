<template>
<div>
  <vue-post
    :title="posts.title"
    :content="posts.content"
    :createdDate="posts.createdDate"
    :view="posts.view"
    :hasAnswerBtn = false
    :questionId="posts.id"
    ></vue-post>

  <vue-answer
    :hasCategory="false"
    :hasTitle="false"
  ></vue-answer>
</div>
</template>



<script>
import VuePost from "~/components/common/posts/index" ;
import VueAnswer from "~/components/common/posts/write" ;
export default {
  components: {
  VuePost, VueAnswer
},
data(){
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
       }
     }
   },

}
</script>
<style>

</style>