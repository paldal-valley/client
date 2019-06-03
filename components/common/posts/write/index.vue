<template>
  <div class="write-container">
    <v-card>
      <v-form>
        <v-text-field
          v-model="title"
          :label="titlePlaceHolder"
          full-width/>


        <v-divider
          class="separator"/>

<!-- slide로 내공 추가하고 컴포넌트에 has slider 옵션 만들어서 qna에서만 보이도록. 그리고 디비랑 연결 -->

        <!-- <v-slider
            v-model="slider"
            :max="max"
            :min="min"
          ></v-slider> -->


        <v-textarea
          v-model="content"
          :placeholder="contentPlaceHolder"
          full-width
          rows="15"/>
      </v-form>
    </v-card>
    
    <v-btn
      block
      color="blue"
      class="white--text">
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
      default: '제목을 입력하세요!'
    },
    contentPlaceHolder: {
      type: String,
      default: '내용을 입력하세요!'
    }
  },
  computed: {
    ...mapGetters([
      'getUserId'
    ])
  },
  data: () => ({
    title: '',
    content: ''
  }),
  methods: {

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
