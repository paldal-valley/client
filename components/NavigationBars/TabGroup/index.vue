<template>
  <div>
    <toolbar-tab
      v-if="typeof tab.items !== 'undefined'"
      open-on-hover
      :items="tab.items"
      :text="tab.text"
      :to="tab.to"/>
    <toolbar-tab
      v-else
      :text="tab.text"
      :to="tab.to"/>
  </div>
</template>

<script>
import ToolbarTab from './Tab'
export default {
  components: {
    ToolbarTab
  },
  props: {
    tab: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>

</style>
