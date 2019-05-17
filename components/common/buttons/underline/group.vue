<template>
  <div class="underline-btn-group">
    <vue-button/>
    <vue-button/>
    <vue-button/>
    <vue-button/>
    <vue-button/>
    <vue-button/>
  </div>
</template>

<script>
import VueButton from './index'
export default {
  components: {
    VueButton,
  }
}
</script>

<style scoped>
.underline-btn-group {
  display: flex;
  flex-direction: column;
}
</style>
