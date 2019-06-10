<template>
 <div class="write-container">
   <v-card>
     <v-form>
       <vue-post
         :title="post.title"
         :content="post.content"
         :category="category"
         :user-name="post.userName"
         :user-email="post.userEmail"
         :created-date="post.createdDate"
         :hasLike='false'
       />

       <v-textarea
         v-model="content"
         :placeholder="contentPlaceHolder"
         full-width
         rows="15"/>
     </v-form>
   </v-card>
   <v-btn
     block
     color="#4E98A4"
     class="white--text"
     @click="createAnswer">
     <strong>답변 등록</strong>
   </v-btn>
 </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import VuePost from '~/components/common/posts'
export default {
 components: {
   VuePost
 },
 data: () => ({
   postId: '',
   postId_Q: '',
   post: {},
   content: ''
 }),
 props: {
   titlePlaceHolder: {
     type: String,
     default: '제목'
   },
   contentPlaceHolder: {
     type: String,
     default: '내용을 입력하세요!'
   }
 },
 computed: {
   ...mapGetters({
     GET_USER: 'auth/GET_USER',
     GET_CATEGORIES: 'models/GET_CATEGORIES'
   }),
   selectorItem() {
     return this.GET_CATEGORIES['question']
   },
   category() {
      return this.$categoryMapper('question', this.post.categoryId)
    }
 },
 mounted() {
   this.postId = this.$route.params.postId
   this.fetchPost()
 },
 methods: {
    async fetchPost() {
     try {
       const options = {
         url: `post/question/${this.postId}`,
         method: 'get'
       }
       const { data } = await this.$axios(options)
       this.post = data
       this.postId_Q = data.id
     } catch (err) {
       console.error(err)
     }
   },
   async createAnswer() {
     try {
       const options = {
         url: `post/answer/${this.postId}`,
         method: 'post',
         params: { postId_Q: this.postId_Q },
         data: {
           content: this.content,
           userId: this.GET_USER.id
         }
       }
       if(this.checkValidation()){
        await this.$axios(options)
        this.$router.back()
       } else {
         this.$notifyWarning('게시글을 모두 작성해주세요.')
       }
     } catch (err) {
        this.$notifyError('에러가 발생하였습니다.')
        console.error(err)
     }
   },
   checkValidation() {
     return this.postId && this.content
   }
 }
}
</script>

<style scoped>
 .separator {
   margin-top: -30px;
   margin-bottom: 10px;
 }
 .write-container {
   margin-bottom: 20px;
 }
</style>