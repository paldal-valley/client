<template>
  <div class="sidebar-img-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
.sidebar-img-container {
  text-align: center;
  margin-bottom: 10px;
}
</style>
