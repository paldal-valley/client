<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
        <v-form>
            <v-text-field
            label="ID"
            v-model="id"
            outline
            required            
          ></v-text-field>
            <v-text-field
            ref="password"
            v-model="password"
            :type="'password'"
            label="PASSWORD"
            outline
            required
          ></v-text-field>
        <v-divider class="mt-5"></v-divider>
          <v-btn flat>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="submit">Submit</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    layout: 'empty',
    data: () => ({
        id:'',
        password:''
    }),

    methods: {
        submit(){
            this.$axios.$post('/users/login', { // 경로확인
                userId: this.id,
                password: this.password,
                }).then((res)=>{
                    this.$router.push('/');
                    console.log(res);                    
                }).catch(err => {
                    alert(err)
                    console.log(err)
                })
        }
    }
}
</script>