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
        <notifications
          position="bottom right"
          width="400"
          :speed="500"/>
      </no-ssr>

      <!-- 추후 리팩토링 필요함 -->
      <v-content>
        <v-container fluid fill-height class="pd-0">
          <transition class="fade" mode="out-in">
            <v-layout justify-center align-center>
              <v-flex text-xs-center class="bg-white">
                <div class="bg-green">
                  <v-container class="pd-10">
                    <v-layout row>
                      <v-flex md8 class="mx-auto">
                        <vue-button-group :buttons="GET_MYPAGE_META.nav_buttons" />
                      </v-flex>
                    </v-layout>
                  </v-container>
                </div>
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
import $ from 'jquery'
import VueToolbar from '~/components/nav-bar/toolbar'
import VueDrawer from '~/components/nav-bar/drawer'
import VueFooter from '~/components/footer'
import VueButtonGroup from '~/components/common/buttons/nav/group'

import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('page-meta', [
      'GET_MYPAGE_META'
    ]),
  },
  components: {
    VueToolbar,
    VueDrawer,
    VueFooter,
    VueButtonGroup
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
.bg-white{
  background: white;
}
.bg-green{
  background: #4e98a4 !important;
}
.pd-10{
  padding: 10px;
}
</style>
