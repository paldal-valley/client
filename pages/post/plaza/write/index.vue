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
  middleware: ['isLoggedIn'],
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
    ...mapGetters({
      GET_USER: 'auth/GET_USER',
      GET_CATEGORIES: 'models/GET_CATEGORIES'
    }),
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
          url: `post/plaza`,
          method: 'post',
          params: { categoryId: this.categoryId },
          data: {
            title: this.title,
            content: this.content,
            userId: this.GET_USER.id
          }
        }

       if(this.checkValidation()) {
          await this.$axios(options)
          this.$router.back()         
        } else {
          this.$notifyWarning('게시글을 모두 작성해주세요.')
        }
      } catch (err) {
        this.$notifyError('에러가 발생했습니다.')
        console.error(err)
      }
    },
    checkValidation() {
      return this.title && this.content && (this.categoryId > 0)
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
