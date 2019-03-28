<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      이메일 인증
      <small>아주대학교 이메일을 인증해주세요.</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn class="next" color="#004dc9" @click="e6 = 2">다음 단계</v-btn>
      <v-btn flat>취소</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">기본정보 입력</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn class="next" color="#004dc9" @click="e6 = 3">다음 단계</v-btn>
      <v-btn flat>취소</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">이용 약관</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn class="next" color="#004dc9" @click="e6 = 4">동의</v-btn>
      <v-btn flat>취소</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">View setup instructions</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn class="next" color="#004dc9" @click="e6 = 1">완료</v-btn>
      <v-btn flat>취소</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
export default {
  data: () => ({
    e6: 1
  })
}
</script>

<style scoped>
.next {
  color: white;
}
</style>
