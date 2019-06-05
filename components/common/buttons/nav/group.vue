<template>
  <v-layout row class="px-0 py-0 group-container">
    <vue-button
      v-for="(btn, i) in buttons"
      :key="i"
      :text="btn.text"
      :to="btn.to"
    />
  </v-layout>
</template>

<script>
import VueButton from './index'
export default {
  components: {
    VueButton
  },
  props: {
    buttons: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
  .group-container{
    float: left;
  }
</style>
