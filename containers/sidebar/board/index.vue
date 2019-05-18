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
    flex: 1 1 200px;
    flex-direction: column;
    margin-right: 20px;
    padding: 0 10px 10px 10px;
  }
</style>
