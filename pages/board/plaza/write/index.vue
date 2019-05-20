<template>
  <div class="write-container">
    <v-card>
      <v-form>
        <v-select
          v-model="categoryId"
          :items="selectorItem"
          item-value="id"
          item-text="title"
          label="카테고리"
          full-width/>

        <v-divider
          class="separator"/>

        <v-text-field
          v-model="title"
          :label="titlePlaceHolder"
          full-width/>

        <v-divider
          class="separator"/>

        <v-textarea
          v-model="content"
          :placeholder="contentPlaceHolder"
          full-width
          rows="15"/>
      </v-form>
    </v-card>
    <v-btn
      block
      color="#4E98A4"
      class="white--text"
      @click="createPost">
      <strong>작성 완료</strong>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    titlePlaceHolder: {
      type: String,
      default: '제목'
    },
    contentPlaceHolder: {
      type: String,
      default: '내용을 입력하세요!'
    }
  },
  computed: {
    ...mapGetters([
      'getUserId'
    ]),
    ...mapGetters('models', [
      'GET_CATEGORIES'
    ]),
    selectorItem() {
      return this.GET_CATEGORIES['plaza']
    }
  },
  data: () => ({
    title: '',
    content: '',
    categoryId: 0,
  }),
  methods: {
    async createPost() {
      try {
        const options = {
          url: `posts/plaza`,
          method: 'post',
          params: { categoryId: this.categoryId },
          data: {
            title: this.title,
            content: this.content
          }
        }

        await this.$axios(options)
        this.$router.back()

      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style scoped>
  .separator {
    margin-top: -30px;
    margin-bottom: 10px;
  }
  .write-container {
    margin-bottom: 20px;
  }
</style>
