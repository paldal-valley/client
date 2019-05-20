<template>
  <div>
    <vue-question></vue-question>
    <v-btn v-on:click="submit" block color="#054d95" class="white--text">
      <strong>질문 등록</strong>
    </v-btn>
  </div>
</template>

<script>
import VueQuestion from '~/components/common/posts/write/index'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    VueQuestion
  },
  data() {
    return {
      posts: {
        title: '', //제목
        content: '', //내용
        writer: '', // userId
        view: '', // 조회수
        recommended: '', // 추천수
        createdDate: '', //작성일
        lastModifiedDate: '', //최종 수정일
        isPending: '',
        isDeleted: '',
        type: ''
      }
    }
  },
  methods: {
    save_post_db: function(event) {
      this.$axios
        .$post('/post', {
          userId: 28, // 로그인 기능 구현 후 modify
          title: this.posts.title,
          content: this.posts.content,
          type: this.posts.type
        })
        .then(function(response) {
          // save_post_question_db()

          console.log(response)
          alert('질문이 등록되었습니다')
        })
        .catch(err => {
          console.log(err)
        })
      this.$router.go(-1)
    },
    async submit() {
        try {
          console.log(this.contractMethods)
          await this.createListing("0x98FE5eaFd3D61af18fB2b2322b8346dF05057202")
          const myLumy = await this.contractMethods.balanceOf(this.web3.coinbase).call()
          alert(`글 등록 완료!\n보상: 50AC\n잔여 코인: ${myLumy}AC`)
        } catch (err) {
          console.log(err)
        }
        this.$router.go(-1)
    },
    async createListing (useraddress) {
        try {
          let result = await this.contractMethods.createListing(useraddress).send({
            gas: 3000000,
            value: 0,
            from: this.web3.coinbase
          })
          console.log(result)
        } catch (err) {
          throw console.error(err)
        }
      },
  },
  computed: {
    ...mapState('block-sync', [
      'web3',
      'contractInstance'
    ]),
    ...mapGetters('block-sync', [
      'contractMethods'
    ])
  },
}
</script>

<style scoped></style>
