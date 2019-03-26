<template>
  <v-navigation-drawer
    v-model="drawer"
    :right="drawerRight"
    absolute
    temporary>

    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>

      <v-divider/>

      <v-list-group
        prepend-icon="account_circle"
        value="true"
        v-for="tab in tabs"
        :key="tab.text">

        <template #activator>
          <v-list-tile>
            <v-list-tile-title>{{ tab.text }}</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list-group
          no-action
          sub-group
          value="true"
          v-for="item in tab.items"
          :key="item.text"
        >
          <template #activator>
            <v-list-tile>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile>
          </template>
        </v-list-group>

      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { EventBus } from '~/utils/EventBus'
export default {
  watch: {
    drawer() {
      EventBus.$emit('drawer-to-toolbar', { drawer: this.drawer })
    }
  },
  props: {
    drawerRight: {
      type: Boolean,
      default: false
    },
  },
  data: () => ({
    drawer: false,
    tabs: []
  }),
  mounted() {
    EventBus.$on('toolbar-to-drawer', data => {
      console.log(data)
      this.drawer = data.drawer
      this.tabs = data.tabs
    })
  }
}
</script>

<style scoped>

</style>
