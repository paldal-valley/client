<template>
  <vue-post-container>
    <!-- alert -->
    <div class="alert-container">
      <v-alert
        class="post-alert"
        :value="true"
        color="#FF3700"
        icon="check_circle"
        outline
      >
        {{ alertMsg }}
      </v-alert>
    </div>

    <!-- posts -->
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>
    <vue-post-card/>

  </vue-post-container>
</template>

<script>
// containers
import VuePostContainer from '~/containers/post'
// components
import VuePostCard from '~/components/common/cards/post'

export default {
  components: {
    VuePostContainer,
    VuePostCard
  },
  props: {
    apiEndpoint: {
      type: String,
      default: '',
      required: true
    },
    alertMsg: {
      type: String,
      default: '아주코인 콘텐츠 관리를 준수하지 않는 질문과 답변의 경우 사전 고지 없이 삭제 처리 되며, 신고 누적 시 사용자 계정 비활성화, 토큰 보상 보류 등의 페널티가 있습니다.'
    }
  },
}
</script>

<style lang="scss" scoped>
.alert-container {
  margin: -4px 3px 0 3px;
  .post-alert {
    width: 100%;
  }
}
</style>
