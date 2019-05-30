<template>
  <div>
    <v-layout justify-center class="mt-3">
        <v-flex xs12 sm10 md10 lg6>
        <v-form>
            <v-container>
                <p class="tooltip">변경하고자 하는 비밀번호를 입력하여주세요.</p>
                <v-text-field
                  v-model="password"
                  v-validate="'required|min:6|max:15'"
                  :append-icon="'visibility_off'"
                  :type="'password'"
                  :counter="15"
                  :error-messages="errors.collect('password')"
                  ref="password"
                  label="비밀번호"
                  data-vv-name="password"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password_confirm"
                  v-validate="'required|confirmed:password'"
                  :append-icon="'visibility_off'"
                  :type="'password'"
                  :counter="15"
                  :error-messages="errors.collect('password_confirm')"
                  label="비밀번호 확인"
                  data-vv-name="password_confirm"
                  required
                ></v-text-field>
                <v-btn color="primary" large block @click="validation">비밀번호 찾기</v-btn>
            </v-container>
        </v-form>
        </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { mapGetters } from 'vuex'

Vue.use(VeeValidate)

export default {
  layout: 'login',
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      password_confirm: '',
      password: '',
      token: ''
    }
  },
  computed: {
    ...mapGetters('auth', [
      'GET_USER'
    ])
  },
  mounted() {
    this.token = this.$route.params.token
  },
  methods: {
    async validation() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.submit()
        } else {
          this.$notifySuccess('모든 필수정보를 입력해주세요.')
        }
      })
    },
    async submit () {
      this.$axios
        .$post('/user/reset', {
          email: this.email,
          token: this.token
        })
        .then(res => {
          this.$notifySuccess('비밀번호 변경이 완료되었습니다.')
        }).catch(e=>{
          console.log(e)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
 .tooltip{
    color: rgba(0,0,0,0.54);
    font-size: 0.8rem;
 }
</style>

