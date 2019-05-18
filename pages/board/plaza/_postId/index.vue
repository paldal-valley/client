<template>
  <div>
    <vue-post
      title="타이틀"
      content="내용"
      category="카테고리"
      user-name="이병헌"
      created-date="2019. 01. 01"
      view="34"/>
  </div>
</template>

<script>
import VuePost from '~/components/common/posts'
export default {
  components: {
    VuePost
  },
  methods: {
    async fetchPost() {

    }
  }
}
</script>

<style scoped>
</style>
