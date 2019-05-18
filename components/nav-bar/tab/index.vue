<template>
  <v-menu
    :open-on-hover="openOnHover"
    :transition="transition"
    offset-y
    bottom
    right>

    <template
      #activator="{ on }">
      <v-btn
        :id="customid"
        :to="to"
        class="hidden-sm-and-down"
        flat
       @click.native="click"
        v-on="on">
        {{ text }}
      </v-btn>
    </template>

    <v-list
      v-if="items.length">
      <v-list-tile
        v-for="(item, i) in items"
        :key="i">

        <v-list-tile-title>{{ item.text }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    openOnHover: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'slide-x-transition'
    },
    click: {
      type: Function,
      default: () => {}
    },
    customid: {
      type: String,
      defalut: null
    }
  }
}
</script>

<style scoped>

</style>
