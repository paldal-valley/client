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
            v-model="slider"
            :max="max"
            :min="min"
          ></v-slider>
        </v-flex>

        <v-flex shrink style="width: 60px">
          <v-text-field
            v-model="slider"
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
import { mapGetters, mapState } from 'vuex'
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
    ...mapGetters({
      GET_USER: 'auth/GET_USER',
      GET_CATEGORIES: 'models/GET_CATEGORIES'
    }),
    // ...mapGetters([
    //   'getUserId'
    // ]),
    // ...mapState('block-sync', [
    //   'web3',
    //   'contractInstance'
    // ]),
    // ...mapGetters('block-sync', [
    //   'contractMethods'
    // ]),
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
    slider: "30"
      
  }),
  methods: {
    async createPost() {
      try {
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
              reward: this.slider
            }
            // title: this.title,
            // content: this.content,
            // userId: this.GET_USER.id,

          }
        }
        await this.$axios(options)
        // await this.getReward("0x98FE5eaFd3D61af18fB2b2322b8346dF05057202")
        this.$router.back()
      } catch (err) {
        console.error(err)
      }
    },
    // async getReward(wallet_address) {
    //     try {
    //       this.createListing(wallet_address)
    //       // const myCoin = await this.contractMethods.balanceOf(this.web3.coinbase).call()
    //       alert(`글 등록 완료!\n보상: 50AC`)
    //     } catch (err) {
    //       console.log(err)
    //     }
    // },
    // createListing (useraddress) {
    //     try {
    //       let result = this.contractMethods.createListing(useraddress).send({
    //         gas: 3000000,
    //         value: 0,
    //         from: this.web3.coinbase
    //       })
    //       console.log(result)
    //     } catch (err) {
    //       throw console.error(err)
    //     }
    //   },
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
