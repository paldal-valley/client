<template>
  <vue-post-container>
    <!-- alert -->
    <!-- <div class="alert-container">
      <v-alert
        class="post-alert"
        :value="true"
        color="#FF3700"
        icon="check_circle"
        outline
      >
        {{ alertMsg }}
      </v-alert>
    </div> -->

    <!-- button-group -->
    <vue-button-group :buttons="buttons" />

    <!-- posts -->
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
    posts: []
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
    alertMsg: {
      type: String,
      default:
        '아주코인 콘텐츠 관리를 준수하지 않는 질문과 답변의 경우 사전 고지 없이 삭제 처리 되며, 신고 누적 시 사용자 계정 비활성화, 토큰 보상 보류 등의 페널티가 있습니다.'
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

// .float-add-post-btn {
//   position: fixed;
//   margin-left: 46%;
//   margin-top: 10%;
// }
</style>
