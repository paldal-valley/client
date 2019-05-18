<template>
  <div>
    <vue-post
      title="타이틀"
      content="내용"
      category="카테고리"
      user-name="이병헌"
      created-date="2019. 01. 01"
      view="34"/>
  </div>
</template>

<script>
import VuePost from '~/components/common/posts'
export default {
  components: {
    VuePost
  },
  data () {
    return {
    posts: [
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
    ]
    }
  },
  async created(){
    const postId = this.$route.params.id || ''
    //alert(postId) 
    const { data } = await this.$axios.get(`/posts/readQ/${postId}`)
    this.posts = data
    //alert(this.posts[0].title)

  },
  methods: {


  }
}

</script>

<style>

</style>
