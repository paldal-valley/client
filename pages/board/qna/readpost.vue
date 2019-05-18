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
            <br><hr>
        </header>
    </div>
    <v-textarea
        v-model="title"
        label="내용"
        counter
        full-width
        single-line
        disabled
        rows = 10px;
      ></v-textarea>
    </v-form>
    <div class="text-xs-right pt-2">
    <v-btn outline large fab color="red">
      <v-icon>thumb_up</v-icon>
    </v-btn></div>
    <v-btn block color="#054d95" class="white--text" @click="onWriteClick();">
        <strong>답변하기</strong>
    </v-btn>
    </v-card>
</template>

<script>
import { ServerResponse } from 'http';
export default {
  //middleware : 'search',
  data () {
    return {
      posts: []
    }
  },
  async created(){
    const { data } = await this.$axios.get('/boards')
    this.posts = data

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
    onReadClick() {
      this.$router.push('./qna/readpost');
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
