<template>
  <v-layout justify-center class="mt-3">
    <v-flex xs12 sm10 md10 lg6>
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
          <v-btn color="primary" large block @click="submit">Login</v-btn>
          <v-layout row wrap>
          <v-flex xs12 sm4 md4>
            <v-checkbox
              v-model="check"
              label="Remember"
              color="primary"
              value="primary"
              hide-details
            ></v-checkbox>
          </v-flex>
        <v-flex xs12 sm4 md4>
        </v-flex>
        <v-flex xs12 sm4 md4>
            <v-btn color="primary" flat class="mt-3">비밀번호 찾기</v-btn>
        </v-flex>
        </v-layout>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    layout: 'empty',
    data: () => ({
        id:'',
        password:'',
        check: false,
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