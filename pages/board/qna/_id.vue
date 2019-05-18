<template>
  <v-card>
    <v-form>
          <div class = "question" >
        <header class = "question-show-box">
            <div data category>
                <!-- 글 카테고리 -->
                <span class = "category" style="float:left; margin-top:10px; margin-left:5px;">
                    취업
                </span>
            </div><br><br>
            <h2 class = "title" style="float:left; margin-top:8px; margin-left:10px;">
                <span class = "text-primary">
                    Q.
                </span>
                취뽀하는 방법 없나요?
            </h2><br><br>
            <p class = "question-info" style="margin-top:5px; margin-left:20px;">
                <span class = "writer">
                    <strong class = "nickname" style="float:left;">HaHa</strong>
                </span>
                <span class = "date" style="float:left; margin-left:10px; color:gray;">
                    2019. 05. 02.
                </span>
                <span class = "view" style="float:left; margin-left:10px; color:gray;">
                    조회수 33
                </span>
            </p>
            <br>
            <br><hr>
        </header>
    </div>
    <!-- 답변 내용 text area -->
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
     <strong>답변 등록</strong>
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
          postId: '' // 해당하는 질문의 id          
        }
      }
    },
    methods : {
      
      save_post_db: function(event) {
        // this.$axios.$get('/boards').then((response) => {
        //   this.posts[0].title = response
        //   //this.posts[0].title = response.data
        // })
        this.$axios.$post('/posts/answer', {
          userId: 35, //답변 단 사람 id
          content: this.posts.content,
          postId: 9 // 질문의 포스트 아이디

      }).then(function (response) {
        console.log(response)
        alert("답변이 등록되었습니다")
      })
      .catch(err => {
          console.log(err)
        })
        this.$router.go('-1');
      }
    }
  }
</script>

<style scoped>


</style>
