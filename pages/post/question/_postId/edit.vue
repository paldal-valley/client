<template>
  <div class="write-container">
    <v-card>
      <v-form>
        <v-select
          v-model="post.categoryId"
          :items="selectorItem"
          item-value="id"
          item-text="title"
          label="카테고리"
          full-width/>

        <v-divider
          class="separator"/>

        <v-text-field
          v-model="post.title"
          label="제목"
          full-width/>

                  <v-divider
          class="separator"/>

   <v-subheader>아주코인을 걸어주세요(0AC~100AC)</v-subheader>
    <v-card-text>
      <v-layout row>
        <v-flex class="pr-3">
          <v-slider
            v-model="post.reward"
            :max="max"
            :min="min"
          ></v-slider>
        </v-flex>

        <v-flex shrink style="width: 60px">
          <v-text-field
            v-model="post.reward"
            class="mt-0"
            hide-details
            single-line
            type="number"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-card-text>

        <v-divider
          class="separator"/>

        <v-textarea
          v-model="post.content"
          full-width
          rows="15"/>
      </v-form>
    </v-card>
    <v-btn
      block
      color="#4E98A4"
      class="white--text"
      @click="updatePost">
      <strong>수정 완료</strong>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: ['isLoggedIn', 'walletValidation'],
  computed: {
    ...mapGetters({
      GET_USER: 'auth/GET_USER'
    }),
    selectorItem() {
      return this.GET_CATEGORIES['question']
    }
  },
  data: () => ({
    postId: '',
    post: {},
    postQuetion: {}
  }),
  mounted() {
    this.postId = this.$route.params.postId
    this.fetchPost()
  },
  methods: {
    async fetchPost() {
      try {
        const options = {
          url: `post/question/${this.postId}`,
          method: 'get'
        }
        const { data } = await this.$axios(options)

        if (data.userId !== this.GET_USER.id) {
          alert('자신의 포스트만 수정 가능합니다.')
          this.$router.back()
        } else {
          this.post = data
        }

      } catch (err) {
        console.error(err)
      }
    },
    async updatePost() {
      const options = {
        url: `post/question/${this.postId}`,
        method: 'put',
        params: { categoryId: this.post.categoryId },
        data: {
          post: {
            title: this.post.title,
            content: this.post.content

          },
          postQuestion: {
            reward: this.post.reward
          }
        }
      }

      try {
        await this.$axios(options)
        this.$router.back()
      } catch (err) {
        console.error(err)
        alert('에러가 발생했습니다.')
      }
    }
  },
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
