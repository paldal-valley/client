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
                <v-btn color="primary" large block @click="submit">비밀번호 찾기</v-btn>
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
      check: false,
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
    async submit () {
      this.$notifySuccess('비밀번호 변경 이메일을 전송하였습니다.')
    //   try {
    //     await this.$store.dispatch('auth/LOGIN', {
    //       email: this.email,
    //       password: this.password
    //     })

    //     console.log(this.GET_USER)
    //     this.$router.push('/')
    //   } catch (err) {
    //     console.error(err)
    //   }
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

