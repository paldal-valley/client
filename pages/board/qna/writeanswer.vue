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
  }
  
}
</script>
<style>

</style>

