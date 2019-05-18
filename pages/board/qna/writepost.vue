<template>
  <v-card>
    <v-form>
      <!-- 아이템 중복 허용 옵션 muptiple -->
       <v-autocomplete
        v-model="posts.type"
        :items="['취업', '진학','대외활동','기타']"
        chips
        label="질문 카테고리를 선택하세요"
        full-width
        hide-details
        hide-no-data
        hide-selected
        single-line
      ></v-autocomplete>
      <v-divider></v-divider>
      <v-text-field
        class="title"
        v-model="posts.title"
        label="Q. 물음표로 끝나는 제목을 입력해보세요"     
        single-line
        full-width
        hide-details
      ></v-text-field>
      <v-divider></v-divider>
      <v-textarea
        class = "content"
        v-model="posts.content"
        label="내용"
        counter
        full-width
        single-line
        rows = 13px;
      ></v-textarea>
    </v-form>
   <v-btn v-on:click = "save_post_db" block color="#054d95" class="white--text">
     <strong>질문 등록</strong>
    </v-btn>
  </v-card>

</template>

<script>
  export default {
    data () {
      return {
        posts: 
        {
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
    methods : {

      save_post_db: function(event) {
        this.$axios.$post('/posts', {
          userId: 36, // 로그인 기능 구현 후 modify
          title : this.posts.title,
          content: this.posts.content,
          type: this.posts.type

      }).
      then(function (response) {
        // save_post_question_db()
        
        console.log(response)
        alert("질문이 등록되었습니다")
      })
      .catch(err => {
          console.log(err)
        })
        this.$router.go(-1);
      }


      }

    }
  
</script>

<style scoped>


</style>
