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
    ...mapGetters({
      GET_USER: 'auth/GET_USER',
      GET_CATEGORIES: 'models/GET_CATEGORIES'
    }),
    selectorItem() {
      return this.GET_CATEGORIES['review']
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
          url: `post/review`,
          method: 'post',
          params: { categoryId: this.categoryId },
          data: {
            title: this.title,
            content: this.content,
            userId: this.GET_USER.id
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
    //       await this.createListing(wallet_address)
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
