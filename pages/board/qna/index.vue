

<template>
  <v-card>
    <v-card-title>
      <h1>Q&A</h1>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="제목, 작성자, 내용으로 검색하세요"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="posts"
      :search="search"
      hide-actions
      :pagination.sync="pagination"
      class="elevation-1"
    >

      <template v-slot:items="props" > 
        <!-- <td>{{ props.item.name }}</td> -->
        <td class="text-sx_center" v-for="post in posts"
        :key="post.id" @click="onReadClick(post);">{{ post.title }}</td>
        <!-- <td class="text-xs-center" @click="onReadClick(post);">{{ props.item.title }}</td>
        <td class="text-xs-center">{{ props.item.writer }}</td>
        <td class="text-xs-center">{{ props.item.createdDate }}</td>
        <td class="text-xs-center">{{ props.item.answer }}</td>
        <td class="text-xs-center">{{ props.item.recommend }}</td>
        <td class="text-xs-center">{{ props.item.view }}</td> -->
       
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
     <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>
    <div style="float:right;">
    <v-btn round color="primary" dark @click="onWriteClick();">글쓰기</v-btn>
    </div>
  </v-card>
      
</template>

<script>
import { ServerResponse } from 'http';
export default {
  //middleware : 'search',
  data () {
    return {
      search: '',
      pagination: {},
      selected: [],
      headers: [
        { text: '제목', value: 'title', sortable: false, align: 'center' },
        { text: '작성자', value: 'writer', sortable: false, align: 'center'},
        { text: '작성일자', value: 'createdDate', align: 'center' },
        { text: '답변수', value: 'answer', align: 'center' },
        { text: '추천수', value: 'recommend', align: 'center' },
        { text: '조회수', value: 'view', align: 'center' },

      ],
    posts: [
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
    ]
    }
  },
  async created(){
    // this.$axios.$get('/boards')
    // .then((response)=>{
    //     // this.posts[0].title = response
    //       var i =0
    //      //ISO->UTC 시간 변환
    //         var UTCDate = new Date(response[i].createdDate).toUTCString()
    //         // response.json
    //         this.posts[i].title = response[i].title
    //         this.posts[i].writer = response[i].userId //향후 user 테이블에서 실제 아이디 가져와야 함.
    //         this.posts[i].createdDate = UTCDate

            
    // })
    const { data } = await this.$axios.get('/posts')
    this.posts = data
  
  },
  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },

  methods: {

    onWriteClick() {
      this.$router.push('./qna/writepost');
      // this.$axios.$get('/boards').then((response) => {
      //   this.posts[0].title = response
      //   //this.posts[0].title = response.data
      // })
      //this.posts[0].title = 취업꿀팁
      //window.location='./qna/writepost';
    },
    onReadClick(post) {
      const routerid = post.id
      this.$router.push(`./answer/${routerid}`)
      //this.$router.push({ path: './answers/:id?', params : { postId : routerid }})
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

<style scoped>

</style>