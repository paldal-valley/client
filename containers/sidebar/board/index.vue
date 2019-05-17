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
    flex: 1 1 250px;
    flex-direction: column;
    padding: 10px;
  }
</style>
