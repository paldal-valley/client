<template>
  <v-app>
    <div v-if="!checkMeta" class="topNotification">
      <v-icon class="notiIcon">notification_important</v-icon>
      메타마스크가 설치되지 않았거나, 정상적으로 로그인되지 않았습니다.
    </div>
    <div v-bind:class="{'foo-layout-container': true, 'top-margin':!checkMeta}">
      <vue-toolbar
        toolbar-fixed
        toolbar-color="white"
        menu-hover
        menu-transition="slide-x-transition"
        v-bind:class="{'top-margin':!checkMeta}"
      />
      <vue-drawer />
      <no-ssr>
        <notifications
          position="bottom right"
          width="400"
          :speed="500"/>
      </no-ssr>

      <!-- 추후 리팩토링 필요함 -->
      <v-content class="pd-0">
        <v-container fluid fill-height class="pd-0">
          <v-layout justify-center align-center>
            <v-flex text-xs-center class="innerFlex">
              <nuxt />
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <vue-footer />
    </div>
  </v-app>
</template>

<script>
import $ from 'jquery'
import VueToolbar from '~/components/nav-bar/toolbar'
import VueDrawer from '~/components/nav-bar/drawer'
import VueFooter from '~/components/footer'

import { mapGetters } from 'vuex'

export default {
  components: {
    VueToolbar,
    VueDrawer,
    VueFooter
  },
  computed: {
    ...mapGetters({
      GET_QUESTION_META: 'block-sync/WEB3_META'
    }),
    checkMeta() {
      return this.GET_QUESTION_META.web3Instance ? true : false
    }
  },
  mounted(){
    console.log(this.GET_QUESTION_META.web3Instance)
    console.log(this.GET_QUESTION_META)
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/index';
.ac-blue {
  background-color: rgb(5, 77, 149) !important;
  border-color: rgb(5, 77, 149) !important;
  color: white !important;
}
.foo-layout-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.pd-0 {
  padding: 0px !important;
}
.innerFlex {
  height: 100%;
}
.topNotification {
  height: 50px;
  width: 100%;
  background: #00004D;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  text-align: center;
  line-height: 3rem;
  font-size: 0.9rem;
  letter-spacing: 2px;
  transition: all .15s ease-in-out;

  .notiIcon{
    color: white;
  }
}
.top-margin {
  margin-top: 50px !important;
}
</style>
