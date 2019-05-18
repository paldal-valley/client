<template>
  <v-app>
    <div class="foo-layout-container">
      <vue-toolbar
        toolbar-fixed
        toolbar-color="white"
        menu-hover
        menu-transition="slide-x-transition"/>
      <vue-drawer/>

      <!-- 추후 리팩토링 필요함 -->
      <v-content>
        <v-container fluid fill-height>
          <v-layout
            justify-center
            align-center>
            <v-flex text-xs-center>

              <nuxt/>

            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <vue-footer/>
    </div>
  </v-app>
</template>

<script>
import VueToolbar from '~/components/nav-bar/toolbar'
import VueDrawer from '~/components/nav-bar/drawer'
import VueFooter from '~/components/footer'
export default {
  // created 시점에서는 localStorage 생성이 안되어있음
  beforeMount(){
    this.$store.dispatch('enhanceAccessToken')
    this.$store.dispatch('login_check')
    .then((res)=>{
      if(!res) {
        alert("로그인이 필요합니다.")
        this.$router.push('/auth/signin/?returnPath=' + this.$router.currentRoute.path)
      }
    })
  },
  components: {
    VueToolbar,
    VueDrawer,
    VueFooter,
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/index';
.ac-blue{
  background-color: rgb(5, 77, 149) !important;
  border-color: rgb(5, 77, 149) !important;
  color: white !important;
}
.foo-layout-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20%;
  margin-left: 20%;
}
</style>
