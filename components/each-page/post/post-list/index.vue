<template>
  <vue-post-container>
    <div class ="reward" v-if="fetchCategory(this.boardTitle)">
      <span class ="waitSelect" onclick="">채택 대기</span>
      <span> | </span>
      <span class = "completeSelect">채택 완료</span>
    </div>

    <vue-post-card
      v-for="post in posts"
      :board-title="boardTitle"
      :key="post.id"
      :post="post"
      :to="`${postLinkPrefix}/${post.id}`"
    />
    <div class="append-btn-container">
      <v-btn
        block
        round
        class="append-btn"
        color="#4E98A4"
        style="font-weight: bold;"
        @click="appendPost"
        >더 보기</v-btn
      >
    </div>
  </vue-post-container>
</template>

<script>
// containers
import VuePostContainer from '~/containers/post'
// components
import VuePostCard from '~/components/common/cards/post'
import VueButtonGroup from '~/components/common/buttons/with-icon/group'

export default {
  components: {
    VuePostContainer,
    VuePostCard,
    VueButtonGroup
  },
  data: () => ({
    postCnt: 5,
    posts: [],
    posts_selected: [],
    posts_ready: []
  }),
  props: {
    apiEndpoint: {
      type: String,
      default: '',
      required: true
    },
    postLinkPrefix: {
      type: String,
      default: '',
      required: true
    },
    buttons: {
      type: Array,
      default: () => []
    },
    boardTitle: {
      type: String,
      default: ''
    }
  },
  watch: {
    '$route.query'() {
      this.fetchPostList()
    }
  },
  async mounted() {
    this.fetchPostList()
  },
  methods: {
    fetchCategory(category){
      if(category == "question"){
        return true
      }
    },
    async fetchPostList() {
      const query = this.$route.query || {}
      const options = {
        url: this.apiEndpoint,
        method: 'get',
        params: query
      }
      try {
        const { data } = await this.$axios(options)
        this.posts = data
        // if(this.boardTitle == "question"){
        //   //쿼리 작성.
        // }

      } catch (err) {
        console.error(err)
      }
    },
    appendPost() {
      const payload = { limit: (this.postCnt += 5) }
      this.$updateQuerystring(payload)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/index';
.alert-container {
  margin: -4px 3px 0 3px;
  .post-alert {
    width: 100%;
  }
}
.append-btn-container {
  height: 100px;
  margin: 10px 3px 0 3px;
  .append-btn {
    color: white !important;
  }
}

.reward {
  float: right;
  margin-right: 10px;
  margin-bottom: 6px;
}
// .float-add-post-btn {
//   position: fixed;
//   margin-left: 46%;
//   margin-top: 10%;
// }
</style>
