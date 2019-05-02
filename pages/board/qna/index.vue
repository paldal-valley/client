<template>
  <v-card>
    <v-card-title>
      Q&A
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
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
      <template v-slot:items="props">
        <!-- <td>{{ props.item.name }}</td> -->
        <td class="text-xs-center">{{ props.item.title }}</td>
        <td class="text-xs-center">{{ props.item.writer }}</td>
        <td class="text-xs-center">{{ props.item.createdDate }}</td>
        <td class="text-xs-center">{{ props.item.answer }}</td>
        <td class="text-xs-center">{{ props.item.recommend }}</td>
        <td class="text-xs-center">{{ props.item.view }}</td>
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
    <v-btn round color="primary" dark @click="onclick();">글쓰기</v-btn>
  </v-card>
      
</template>

<script>
export default {
  data () {
    return {
      search: '',
      pagination: {},
      selected: [],
      headers: [
        {
          text: '제목',
          align: 'center',
          sortable: false,
          value: 'title'
        },
        { text: '작성자', value: 'writer', sortable: false, align: 'center'},
        { text: '작성일자', value: 'createdDate', align: 'center' },
        { text: '답변수', value: 'answer', sortable: false, align: 'center' },
        { text: '추천수', value: 'recommend', align: 'center' },
        { text: '조회수', value: 'view', align: 'center' },

      ],
      posts: [
        {
          title: '취업꿀팁',
          writer: 'jane',
          createdDate: 2019,
          answer: 6,
          recommend: 24,
          view: 12
        },
        {
          title: '삼성가즈아',
          writer: 'arren',
          createdDate: 2019,
          answer: 2,
          recommend: 10,
          view: 11
        },
                {
          title: 'hello현대',
          writer: '하이루',
          createdDate: 2019,
          answer: 10,
          recommend: 2,
          view: 2
        }

      ]
    }
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
    onclick() {
      window.location='./qna/post';
    }
  }
}
</script>

<style scoped>

</style>