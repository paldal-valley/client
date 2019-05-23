<template>
  <v-app>
    <div class="foo-layout-container">
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <v-flex text-xs-center>
              <img class="footer-logo-img" src="~assets/ac-logo.png" />
              <p class="logo" @click="$router.push('/')">DOAJOU</p>

              <nuxt />
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </div>
  </v-app>
</template>

<script>
export default {
  // created 시점에서는 localStorage 생성이 안되어있음
  beforeMount() {
    // this.$store.dispatch('enhanceAccessToken')
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
  margin-right: 25%;
  margin-left: 25%;
  margin-top: 5%;
}
.logo {
  cursor: pointer;
  color: #4e98a4;
  font-family: 'Aclonica', sans-serif;
  font-size: 30px;
}
</style>
