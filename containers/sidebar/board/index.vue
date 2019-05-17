<template>
  <div class="sidebar-container">
    <slot/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .sidebar-container {
    display: flex;
    flex-direction: column;
  }
</style>
