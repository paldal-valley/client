<template>
  <div class="underline-btn-group">
    <vue-button
      v-for="(btn, i) in buttons"
      :key="i"
      :text="btn.text"
      :to="btn.to"/>
  </div>
</template>

<script>
import VueButton from './index'
export default {
  components: {
    VueButton,
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
.underline-btn-group {
  display: flex;
  flex-direction: column;
}
</style>
