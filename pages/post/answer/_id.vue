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
        />

        <v-divider
          class="separator"/>
         <br><br> 
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
    post: {}
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
    }
  },
  mounted() {
    this.postId = this.$route.params.id
    //this.postId_Q
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
        //alert(this.postId_Q)
        await this.$axios(options)
        alert(this.postId_Q)
        // await this.getReward("0x98FE5eaFd3D61af18fB2b2322b8346dF05057202")
        //this.$router.back()
      } catch (err) {
        console.error(err)
      }
    },
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
