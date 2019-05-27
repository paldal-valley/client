<template>
  <div>
    <v-btn @click="$emit('click')" fab dark large :color="color">
      <v-icon dark>{{ icon }}</v-icon>
    </v-btn>
    <h3 class="btn-text" @click="$emit('click')">{{ buttonText }}</h3>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'edit'
    },
    color: {
      type: String,
      default: '#4E98A4'
    },
    buttonText: {
      type: String,
      default: '글쓰기'
    },
  },
}
</script>

<style lang="scss" scoped>
  .btn-text {
    &:hover {
      cursor: pointer;
    }
  }
</style>
