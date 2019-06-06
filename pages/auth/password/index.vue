<template>
  <div>
    <v-layout justify-center class="mt-3">
        <v-flex xs12 sm10 md10 lg6>
        <v-form>
            <v-container>
                <p class="tooltip">회원가입시 인증하였던 이메일 주소를 입력해주세요.</p>
                <v-text-field
                outline
                :disabled="email_send"
                v-model="email"
                v-validate="'required|ajouEmail'"
                :error-messages="errors.collect('email')"
                label="E-mail"
                data-vv-name="email" 
                required
                >
                  <template v-slot:label>
                      <strong>이메일</strong> 입력
                      <v-icon style="vertical-align: middle">email</v-icon>
                  </template>
                </v-text-field>
                <v-btn color="primary" large block @click="validation" v-if="!isSent" :disabled="isSent">비밀번호 찾기</v-btn>
                <v-btn color="primary" large block v-else :disabled="isSent">해당 메일을 확인해주세요!</v-btn>
                <v-layout row wrap>
                    <v-btn color="primary" to="/" flat class="left mt-3">뒤로가기</v-btn>
                </v-layout>
            </v-container>
        </v-form>
        </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { AjouEmailRule } from '@/validates/AjouEmailValidates'
import { mapGetters } from 'vuex'

VeeValidate.Validator.extend('ajouEmail', AjouEmailRule)
Vue.use(VeeValidate)

export default {
  layout: 'login',
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      email_send: false,
      email: '',
      password: '',
      isSent: false,
      dictionary: {
        attributes: {
            email: 'E-mail Address',
            password_confirm: 'Password'
            // custom attributes
        },
        custom: {
            email: {
            required: () => '필수 정보입니다.'
                }
            }
        }
    }
  },
  computed: {
    ...mapGetters('auth', [
      'GET_USER'
    ])
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
      this.token = Math.random()
        .toString(36)
        .substring(2, 12)
      this.$axios
        .$post(`/email/reset/${this.email}`, {
          resetPasswordToken: this.token,
          resetPasswordExpires: Date.now() + 3600000
        })
        .then(res => {
          this.$notifySuccess('비밀번호 변경 이메일을 전송하였습니다.')
          this.email_send = true
          this.isSent = true
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

