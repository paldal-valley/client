<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1" color="primary">
      이메일 인증
      <small>아주대학교 이메일을 인증해주세요.</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-container>
        <v-text-field
          outline
          :disabled="email_send"
          v-model="form.email"
          v-validate="'required|ajouEmail'"
          :error-messages="errors.collect('email')"
          label="E-mail"
          data-vv-name="email"
          required
          append-icon="send"
          @click:append="send_email"
        >
          <template v-slot:label>
            <strong>이메일</strong> 입력
            <v-icon style="vertical-align: middle">email</v-icon>
          </template>
        </v-text-field>
        <v-text-field
          v-if="email_send"
          v-model="token_input"
          label="위 이메일로 전송된 인증메일의 코드를 입력해주세요."
          data-vv-name="token"
          required
          loading
        >
          <template v-slot:append>
            <v-btn color="primary" dark @click="check_token">
              <p class="mb-0">{{ buttons.text }}</p>
              <v-icon dark right v-bind:class="{ none: !isActive }"
                >check_circle</v-icon
              >
            </v-btn>
          </template>
        </v-text-field>
      </v-container>
      <v-btn
        class="next"
        color="primary"
        :disabled="!email_confirm"
        @click="e6 = 2"
        >다음 단계</v-btn
      >
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2" color="primary"
      >기본정보 입력</v-stepper-step
    >

    <v-stepper-content step="2">
      <form>
        <v-text-field
          v-model="form.name"
          v-validate="'required|max:10'"
          :counter="10"
          :error-messages="errors.collect('name')"
          label="NickName"
          data-vv-name="name"
          required
        ></v-text-field>
        <v-text-field
          v-model="form.password"
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
          v-model="form.password_confirm"
          v-validate="'required|confirmed:password'"
          :append-icon="'visibility_off'"
          :type="'password'"
          :counter="15"
          :error-messages="errors.collect('password_confirm')"
          label="비밀번호 확인"
          data-vv-name="password_confirm"
          required
        ></v-text-field>
        <v-text-field
          v-model="form.walletAddress"
          v-validate="'required|length:42'"
          :counter="42"
          :error-messages="errors.collect('walletAddress')"
          label="Wallet Address"
          data-vv-name="walletAddress"
          append-icon="help"
          @click:append="go_tutorial"
        ></v-text-field>
        <v-select
          v-model="form.majorId"
          v-validate="'required'"
          :items="selectorItem"
          item-value="id"
          item-text="title"
          :error-messages="errors.collect('majorId')"
          :state="null"
          label="전공"
          placeholder="전공 선택"
          data-vv-name="majorId"
          required
        ></v-select>
      </form>
      <v-btn color="#eeeeee" @click="clear">초기화</v-btn>
      <v-btn class="next" :disabled="!valid" color="primary" @click="validate"
        >다음 단계</v-btn
      >
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3" color="primary"
      >이용 약관</v-stepper-step
    >

    <v-stepper-content step="3">
      <VueSignupScroll/>
        <v-layout align-center>
          <v-checkbox
            v-model="enabled"
            label="동의"
            color="primary"
            hide-details
          ></v-checkbox>
        </v-layout>
      <v-btn class="before" color="#eeeeee" @click="e6 = 2">이전 단계</v-btn>
      <v-btn
        class="next"
        color="primary"
        :disabled="!enabled"
        @click="send_user_info"
        >완료</v-btn
      >
    </v-stepper-content>
    <v-snackbar v-model="snackbar.open" :timeout="snackbar.timeout">
      {{ snackbar.text }}
      <v-btn color="pink" flat @click="snackbar.open = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-stepper>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { AjouEmailRule } from '@/validates/AjouEmailValidates'

import VueSignupScroll from '~/components/each-page/signup'

import { mapGetters } from 'vuex'

VeeValidate.Validator.extend('ajouEmail', AjouEmailRule)
Vue.use(VeeValidate)

export default {
  $_veeValidate: {
    validator: 'new'
  },
  components:{
    VueSignupScroll
  },
  data: () => ({
    e6: 1,
    isActive: false,
    valid: true,
    token: '',
    token_input: '',
    email_send: false,
    enabled: false,
    email_confirm: false,
    form: {
      name: '',
      email: '',
      status: '',
      password: '',
      password_confirm: '',
      walletAddress: '',
      type: '',
      majorId: null,
      createdDate: '',
      lastModifiedDate: ''
    },
    buttons: {
      text: '인증하기'
    },
    snackbar: {
      open: false,
      text: '',
      timeout: 4000
    },
    dictionary: {
      attributes: {
        email: 'E-mail Address',
        password_confirm: 'Password'
        // custom attributes
      },
      custom: {
        name: {
          required: () => '필수 정보입니다.',
          max: '닉네임은 최대 10자 입니다.'
        },
        password: {
          required: () => '필수 정보입니다.',
          min: '패스워드는 최소 6자 입니다.',
          max: '패스워드는 최대 15자 입니다.'
        },
        password_confirm: {
          required: () => '필수 정보입니다.',
          confirmed: '입력하신 비밀번호와 일치하지 않습니다.'
        },
        walletAddress: {
          required: () => '필수 정보입니다.',
          length: '지갑주소는 42자 입니다.'
        },
        majorId: {
          required: () => '필수 정보입니다.'
        },
        email: {
          required: () => '필수 정보입니다.'
        }
      }
    }
  }),

  mounted() {
    this.$validator.localize('en', this.dictionary)
  },
  computed: {
    ...mapGetters({
      GET_CATEGORIES: 'models/GET_CATEGORIES'
    }),
    selectorItem() {
      return this.GET_CATEGORIES['major']
    }
  },
  methods: {
    go_tutorial(){
      let route = this.$router.resolve({path: '../tutorial'})
      window.open(route.href,'_blank')
    },
    submit() {
      this.$validator.validateAll()
    },
    clear() {
      this.form.name = ''
      this.form.password = ''
      this.form.password_confirm = ''
      this.form.email = ''
      this.form.walletAddress = ''
      this.form.majorId = null
      this.$validator.reset()
    },
    validate() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.e6 = 3
        } else {
          this.$notifyWarning('모든 필수정보를 입력해주세요.')
        }
      })
    },
    send_email() {
      this.$validator.validate('email').then(valid => {
        if (valid) {
          this.token = Math.random()
            .toString(36)
            .substring(2, 8)
          this.$axios
            .$post('/email', {
              // 경로확인
              email: this.form.email,
              token: this.token
            })
            .then(res => {
              console.log(this.token)
              this.email_send = true
              this.snackbar.text = '정상적으로 이메일이 전송 되었습니다.'
              this.snackbar.open = true
            }).catch(e=>{
              this.snackbar.text = '이미 인증된 이메일 주소입니다.'
              this.snackbar.open = true
            })
        }
      })
    },
    check_token() {
      if (this.token == this.token_input) {
        this.email_confirm = true
        this.isActive = true
        this.buttons.text = '인증완료'
      } else {
        this.$notifyError("올바르지 않은 인증번호입니다.")
      }
    },
    send_user_info() {
      this.email_confirm = true
      this.$axios
        .$post('/user', {
          // 경로확인
          name: this.form.name,
          password: this.form.password,
          email: this.form.email,
          walletAddress: this.form.walletAddress,
          majorId: this.form.majorId
        })
        .then(res => {
          this.snackbar.text = '회원가입이 정상적으로 되었습니다.'
          this.snackbar.open = true
          this.$notifySuccess('[Welcome] 가입기념 토큰이 지급되었습니다.')
          this.$router.push('/')
        })
        .catch(err => {
          console.log(this.form)
          this.$notifyError("오류가 발생하였습니다.")
        })
    }
  }
}
</script>

<style scoped>
.next {
  color: white;
}
</style>
