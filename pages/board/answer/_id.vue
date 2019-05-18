<template>
<v-card>
<h1>Hello! {{$route.params.id}}</h1>
<v-spacer></v-spacer>

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
    const postId = this.$route.params.id || ''
    //alert(postId) 
     const { data } = await this.$axios.get(`/posts/readQ/${postId}`)
     this.posts = data
     //alert(this.posts)
  },
  methods: {

  }
}

</script>

<style>

</style>
