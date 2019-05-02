<template>
  <v-card>
    <v-form>
      <v-autocomplete
        v-model="selected"
        :items="['취업', '진학','대외활동','기타']"
        chips
        label="질문 카테고리를 선택하세요"
        full-width
        hide-details
        hide-no-data
        hide-selected
        multiple
        single-line
      ></v-autocomplete>
      <v-divider></v-divider>
      <v-text-field
        label="Q.물음표로 끝나는 제목을 입력해보세요"
        single-line
        full-width
        hide-details
      ></v-text-field>
      <v-divider></v-divider>
      <v-textarea
        v-model="title"
        label="내용"
        counter
        full-width
        rows="13"
        single-line
      ></v-textarea>
    </v-form>
    <v-btn class="white--text" block color="#054d95" @click="onclick();">질문 등록</v-btn>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    },
  methods: {
  onclick() {
    
      this.$router.go(-1);
      }
    }
}
</script>

<style scoped>

</style>
