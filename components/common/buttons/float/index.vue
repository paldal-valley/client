<template>
  <div class="float-add-post-btn">
    <v-btn @click="onClick" fab dark large :color="color">
      <v-icon dark>{{ icon }}</v-icon>
    </v-btn>
    <h3 class="abc" @click="onClick">글쓰기</h3>
  </div>
</template>
<script>
export default {
  props: {
    questionId: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'edit'
    },
    to: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#4E98A4'
    }
  },
  methods: {
    onClick() {
      this.$router.push(this.to)
    }
  }
}
</script>

<style lang="scss" scoped>
  .float-add-post-btn {
    position: fixed;
    margin-left: 60%;
    margin-top: 10%;
  }
  .abc {
    &:hover {
      cursor: pointer;
    }
  }
</style>
