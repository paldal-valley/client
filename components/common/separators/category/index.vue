<template>
  <div>
    <h2 class="category-name">{{ categoryName }}</h2>
    <v-divider class="separator"/>
  </div>
</template>

<script>
export default {
  props: {
    categoryName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.category-name {
  text-align: left;
  margin-top: 30px;
}
.separator {
  margin-bottom: 10px;
}
</style>
