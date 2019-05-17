<template>
  <vue-board-container>
    <vue-sidebar-container>
      <div class="asdf">
        <v-img
          :src="require('@/assets/images/ethereum.png')"
          style="cursor: pointer;"
          contain
          max-width="180"
          max-height="120"
          @click="$router.push('/')"/>
      </div>
      <vue-button-group/>
    </vue-sidebar-container >
    <vue-post-container>
      <v-alert
        class="qwer"
        :value="true"
        color="#FF3700"
        icon="check_circle"
        outline
      >
        아주코인 콘텐츠 관리를 준수하지 않는 질문과 답변의 경우 사전 고지 없이 삭제 처리 되며, 신고 누적 시 사용자 계정 비활성화, 토큰 보상 보류 등의 페널티가 있습니다.
      </v-alert>

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
      <vue-post-card/><vue-post-card/>
      <vue-post-card/>
      <vue-post-card/>
      <vue-post-card/>

    </vue-post-container>
  </vue-board-container>
</template>

<script>
// containers
import VuePostContainer from '~/containers/post'
import VueSidebarContainer from '~/containers/sidebar/board'
import VueBoardContainer from '~/containers/board'

// components
import VuePostCard from '../../../components/common/cards/post'
import VueButtonGroup from '~/components/common/buttons/underline/group'

export default {
  components: {
    VuePostCard,
    VuePostContainer,
    VueButtonGroup,
    VueSidebarContainer,
    VueBoardContainer
  }
}
</script>

<style lang="scss" scoped>
.asdf {
  padding: 10px 0 10px 17px;
  text-align: center;
  margin-bottom: 10px;
  background-color: #abb5ff;
  border-radius: 5px;
}
.qwer {
  width:100%;
  border-bottom: 20px solid transparent;
}
</style>
