<template>
  <v-app>
    <div v-if="!checkMeta" class="topNotification">
      <v-icon class="notiIcon">notification_important</v-icon>
      메타마스크가 설치되지 않았거나, 정상적으로 로그인되지 않았습니다.
    </div>
    <div v-bind:class="{'layout-container': true, 'top-margin':!checkMeta}">
      <vue-toolbar
        toolbar-fixed
        toolbar-color="white"
        toolbar-flat
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

      <v-content>
        <v-container fluid fill-height>
          <transition class="fade" mode="out-in">
          <v-layout justify-center align-center>
            <v-flex text-xs-center>
              <nuxt />
            </v-flex>
          </v-layout>
          </transition>
        </v-container>
      </v-content>
      <vue-footer />
    </div>
  </v-app>
</template>

<script>
import VueToolbar from '~/components/nav-bar/toolbar'
import VueDrawer from '~/components/nav-bar/drawer'
import VueFooter from '~/components/footer'
export default {
  components: {
    VueToolbar,
    VueDrawer,
    VueFooter
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
.layout-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20%;
  margin-left: 20%;
}
.fade{
  transition: width .2s,opacity .4s;
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
