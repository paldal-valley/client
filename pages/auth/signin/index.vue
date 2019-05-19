<template>
  <v-layout justify-center class="mt-3">
    <v-flex xs12 sm10 md10 lg6>
      <v-form>
        <v-text-field label="ID" v-model="id" outline required></v-text-field>
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
          <v-flex xs12 sm4 md4> </v-flex>
          <v-flex xs12 sm4 md4>
            <v-btn color="primary" flat class="mt-3">비밀번호 찾기</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations } from 'vuex'
import { EventBus } from '~/utils/EventBus'

export default {
  layout: 'login',
  data: () => ({
    id: '',
    password: '',
    check: false
  }),

  methods: {
    submit() {
      this.$store
        .dispatch('login', { userId: this.id, password: this.password })
        .then(() => {
          this.redirect()
        })
        .catch(err => {
          console.log(err)
          alert(err)
        })
    },
    redirect() {
      const { search } = window.location
      const tokens = search.replace(/^\?/, '').split('&')
      let { returnPath } = tokens.reduce((qs, tkn) => {
        const pair = tkn.split('=')
        qs[pair[0]] = decodeURIComponent(pair[1])
        return qs
      }, {})
      if (!returnPath) {
        returnPath = '/'
      }
      // 리다이렉트 처리
      this.$router.push(returnPath)
    }
  }
}
</script>
