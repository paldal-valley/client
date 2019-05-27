<template>
  <v-app>
    <div class="foo-layout-container">
      <vue-toolbar
        toolbar-fixed
        toolbar-color="white"
        menu-hover
        menu-transition="slide-x-transition"
      />
      <vue-drawer />
      <no-ssr>
        <notifications group="alert-css"
                  position="bottom left"
                  :speed="500" />
      </no-ssr>

      <!-- 추후 리팩토링 필요함 -->
      <v-content class="pd-0">
        <v-container fluid fill-height class="pd-0">
          <v-layout justify-center align-center>
            <v-flex text-xs-center>
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
export default {
  // created 시점에서는 localStorage 생성이 안되어있음
  beforeMount() {
    // this.$store.dispatch('enhanceAccessToken')
    this.$store.dispatch('block-sync/checkWeb3')
    this.$store.dispatch('block-sync/getContractInstance')
  },
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
.foo-layout-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pd-0 {
  padding: 0px !important;
}
</style>
