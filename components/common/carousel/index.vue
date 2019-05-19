<template>
  <v-carousel
    :height="height"
    hide-controls>
    <nuxt-link
      v-for="(item, i) in items"
      :key="i"
      :to="item.to">
      <v-carousel-item :src="item.src"/>
    </nuxt-link>
  </v-carousel>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    height: {
      type: String,
      default: '500'
    },
    hideDelimiters: {
      type: Boolean,
      default: true
    }
  },
}
</script>

<style scoped>
</style>
