<template>
  <div class="post-container">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.post-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
}
</style>
