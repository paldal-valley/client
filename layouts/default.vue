<template>
  <v-app>
    <div class="layout-container">
      <vue-toolbar
        toolbar-fixed
        toolbar-color="white"
        toolbar-flat
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
</style>
