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

        <v-subheader>아주코인을 걸어주세요(0AC~100AC)</v-subheader>
        <v-card-text>
          <v-layout row>
            <v-flex class="pr-3">
              <v-slider
                color="#4E98A4"
                v-model="reward"
                :max="max"
                :min="min"
              ></v-slider>
            </v-flex>

            <v-flex shrink style="width: 60px">
              <v-text-field
                v-model="reward"
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
  middleware: ['isLoggedIn', 'walletValidation'],
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
      GET_CATEGORIES: 'models/GET_CATEGORIES',
      WEB3_META: 'block-sync/WEB3_META',
      CONTRACT_METHODS: 'block-sync/CONTRACT_METHODS'
    }),
    selectorItem() {
      return this.GET_CATEGORIES['question']
    }
  },
  data: () => ({
    title: '',
    content: '',
    categoryId: 0,
    min: "0",
    max: "100",
    reward: "30"
  }),
  methods: {
    async createPost() {
      try {
        /* 보유 토큰 검증 */
        const reward = Number(this.reward)
        if (reward > this.WEB3_META.doatBalance) {
          this.$notifyWarning(`${reward - this.WEB3_META.doatBalance}DOAT가 부족합니다.`)
          return
        }

        const options = {
          url: `post/question`,
          method: 'post',
          params: { categoryId: this.categoryId},
          data: {
            post: {
              title: this.title,
              content: this.content,
              userId: this.GET_USER.id

            },
            postQuestion: {
              reward: this.reward
            }
          }
        }

        if(this.checkValidation()) {
          const { data } = await this.$axios(options)
          const questionId = data.insertId

          if (reward > 0) {
            await this.CONTRACT_METHODS.questionCreated(questionId, reward * Math.pow(10, 18)).send({
              from: this.WEB3_META.coinbase,
            })
          }

          this.$router.back()
        } else {
          this.$notifyWarning('게시글을 모두 작성해주세요.')
        }
      } catch (err) {
        console.error(err)
        this.$notifyError('오류가 발생하였습니다.')
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
