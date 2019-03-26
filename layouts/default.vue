<template>
  <div id="app">
    <vue-toolbar
      toolbar-fixed
      toolbar-color="gray"
      menu-hover
      menu-transition="slide-x-transition"/>
    <vue-drawer/>
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
