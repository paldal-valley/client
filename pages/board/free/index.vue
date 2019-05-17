<template>
  <vue-board-container>
    <!-- sidebar -->
    <vue-sidebar-container>

      <!-- images -->
      <vue-sidebar-img-container>
        <nuxt-link to="/">
          <div class="tmp-img-container">
            <img
              class="tmp-img"
              src="~assets/images/ethereum.png">
          </div>
        </nuxt-link>
      </vue-sidebar-img-container>

      <!-- buttons -->
      <vue-button-group/>

    </vue-sidebar-container>

    <!-- posts -->
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
          아주코인 콘텐츠 관리를 준수하지 않는 질문과 답변의 경우 사전 고지 없이 삭제 처리 되며, 신고 누적 시 사용자 계정 비활성화, 토큰 보상 보류 등의 페널티가 있습니다.
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
  </vue-board-container>
</template>

<script>
// containers
import VuePostContainer from '~/containers/post'
import VueSidebarContainer from '~/containers/sidebar/board'
import VueBoardContainer from '~/containers/board'
import VueSidebarImgContainer from '~/containers/sidebar/board/image'

// components
import VuePostCard from '../../../components/common/cards/post'
import VueButtonGroup from '~/components/common/buttons/underline/group'

export default {
  components: {
    VueSidebarContainer,
    VueBoardContainer,
    VueSidebarImgContainer,
    VuePostContainer,
    VuePostCard,
    VueButtonGroup,
  }
}
</script>

<style lang="scss" scoped>
.alert-container {
  margin: -4px 3px 0 3px;
  .post-alert {
    width: 100%;
  }
}

.tmp-img-container {
  background-color: #abb5ff;
  border-radius: 5px;
  .tmp-img {
    max-width: 180px;
    max-height: 120px;
    margin: 10px 0;
  }
}
</style>
