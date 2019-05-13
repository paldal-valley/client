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
        label="Q. 물음표로 끝나는 제목을 입력해보세요"
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
        single-line
        rows = 13px;
      ></v-textarea>
    </v-form>
   <v-btn v-on:click = "writePost" block color="#054d95" class="white--text">
     <strong>질문 등록</strong>
    </v-btn>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    },
    methods : {
      
      writePost: function(event) {
        this.$axios.post('http://localhoast:3000/', {
            name: this.name,
            description: this.description
        })
        alert("질문이 등록되었습니다")
        this.$router.push('./')
        this.$axios.$post('/boards')
        .then((response) => {
          // this.posts[2].title = response.data
          this.posts[0].title = response
          alert(response.data)
        })
        //window.location='./qna/writepost';
      }
    }
  }
</script>

<style scoped>


</style>
