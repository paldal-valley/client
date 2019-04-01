<template>
  <div id="app">
    <vue-toolbar
      toolbar-fixed
      toolbar-flat
      toolbar-color="#f0eded"
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
  </div>
</template>

<script>
import VueToolbar from '~/components/NavigationBars/Toolbar'
import VueDrawer from '~/components/NavigationBars/Drawer'
export default {
  components: {
    VueToolbar,
    VueDrawer
  },
}
</script>
