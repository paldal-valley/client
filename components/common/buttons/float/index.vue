<template>
  <div>
    <v-btn
      fab
      dark
      :color="color"
      :small="small"
      :large="!small"
      @click="$emit('click')">
      <v-icon dark>{{ icon }}</v-icon>
    </v-btn>
    <h3 v-if="buttonText" class="btn-text" @click="$emit('click')">{{ buttonText }}</h3>
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
      default: ''
    },
    small: {
      type: Boolean,
      default: false
    }
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
