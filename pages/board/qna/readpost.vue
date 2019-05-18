<template>
<div>
  <v-card>
      <v-form>
      <div class = "question" >
          <header class = "question-show-box">
              <div data category>
                  <!-- 글 카테고리 -->
                  <v-span v-model = "posts.type" class = "category" style="float:left; margin-top:10px; margin-left:5px;">
                      취업
                  </v-span>
              </div><br><br>
              <v-h2 v-model = "posts.title" class = "title" style="float:left; margin-top:8px; margin-left:10px;">
                  <span class = "text-primary">
                      Q.
                  </span>
              </v-h2><br><br>
              <p class = "question-info" style="margin-top:5px; margin-left:20px;">
                  <v-span v-model = "posts.writer" class = "writer">
                      <strong class = "nickname" style="float:left;">HaHa</strong>
                  </v-span>
                  <v-span v-model = "posts.createdDate" class = "date" style="float:left; margin-left:10px; color:gray;">
                      <!-- 2019. 05. 02. -->
                  </v-span>
                  <v-span v-model = "posts.view" class = "view" style="float:left; margin-left:10px; color:gray;">
                      조회수 33
                  </v-span>
              </p>
              <br><hr>
          </header>
      </div>
      <v-textarea
          v-model="posts.content"
          label="내용"
          counter
          full-width
          single-line
          disabled
          rows = 10px;
        ></v-textarea>
      </v-form>
      <!-- 좋아요 버튼 -->
      <div class ="text-xs-right pt-2">
      <v-btn outline large fab color="red">
        <v-icon>thumb_up</v-icon>
      </v-btn></div>
      <!-- 답변하기 버튼 -->
      <v-btn block color="#054d95" class="white--text" @click="onWriteClick();">
          <strong>답변하기</strong>
      </v-btn>
  </v-card>

      <div class = "answer_count" style = "margin-top: 20px; margin-bottom: 20px">
        <h4 data-v-a90f5bf8="" class="answer-count text-muted">
          <i data-v-a90f5bf8="" class="icon icon-message"></i>
          1개의 답변이 있습니다.
        </h4>
      </div>



  <v-card style="margin_top: 20px">
         <header class = "question-show-box">
              <div data category>
                  <v-span v-model = "posts.type" class = "category" style="float:left; margin-top:10px; margin-left:5px;">
                      취업
                  </v-span>
              </div><br><br>
              <v-h2 v-model = "posts.title" class = "title" style="float:left; margin-top:8px; margin-left:10px;">
                  <span class = "text-primary">
                      A.
                  </span>
              </v-h2><br><br>
              <p class = "question-info" style="margin-top:5px; margin-left:20px;">
                  <v-span v-model = "posts.writer" class = "writer">
                      <strong class = "nickname" style="float:left;">HaHa</strong>
                  </v-span>
                  <v-span v-model = "posts.createdDate" class = "date" style="float:left; margin-left:10px; color:gray;">
                      <!-- 2019. 05. 02. -->
                  </v-span>
                  <v-span v-model = "posts.view" class = "view" style="float:left; margin-left:10px; color:gray;">
                      조회수 33
                  </v-span>
              </p>
         </header>

        <v-textarea
        class = "답변"
        v-model="posts.content"
        label="이것은 답변임."
        counter
        full-width
        single-line
        disabled
        rows = 10px;
      ></v-textarea>

      <div class ="text-xs-right pt-2">
        <v-btn outline large fab color="blue">
        <v-icon>check</v-icon>
      </v-btn>
      <v-btn outline large fab color="red">
        <v-icon>thumb_up</v-icon>
      </v-btn></div>
    </v-card>
  </div>

</template>

<script>
import { ServerResponse } from 'http';
export default {
  //middleware : 'search',
  data () {
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
  async created(){
    // const { data } = await this.$axios.get('/posts_questions')
    // this.posts = data
    // console.log(data)
      // this.$axios.$get('/boards').then((response) => {
      //   this.posts.title = response
      //   this.posts[0].createdDate = response[0].createdDate
      //   console.log(this.posts[0].createdDate)
      //   //this.posts[0].title = response.data
      // })


  },
  methods: {

    onWriteClick() {
      this.$router.push('./writeanswer');
      // this.$axios.$get('/boards').then((response) => {
      //   this.posts[0].title = response
      //   //this.posts[0].title = response.data
      // })
      //this.posts[0].title = 취업꿀팁
      //window.location='./qna/writepost';
    },
    async onReadClick() {
      this.$router.go('-1');

      // this.$axios.$post('/boards', {
      //   id : '37',
      //   title : '한국어교육학과'
      // }).then(function (response) {
      //   console.log(response)
      // })
      //window.location='./qna/readpost';
    }
  }
}

</script>

<style>

</style>
