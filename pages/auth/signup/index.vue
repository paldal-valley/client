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
          :disabled= "email_send"
          v-model="form.email"
          v-validate="'required|email'"
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
          v-if= "email_send"
          v-model= "token_input"
          label="위 이메일로 전송된 인증메일의 코드를 입력해주세요."
          data-vv-name="token"
          required
          loading
        >
         <template v-slot:append>
            <v-btn color="primary" dark @click="check_token">
              <p class="mb-0">{{buttons.text}}</p>
              <v-icon dark right v-bind:class="{none: !isActive}">check_circle</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-container>
      <v-btn class="next" color="primary" :disabled="!email_confirm" @click="e6 = 2">다음 단계</v-btn>
      <v-btn flat>취소</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2" color="primary">기본정보 입력</v-stepper-step>

    <v-stepper-content step="2">
        <form>
          <v-text-field
            v-model="form.id"
            v-validate="'required|min:6|max:20'"
            :counter="20"
            :error-messages="errors.collect('id')"
            label="ID"
            data-vv-name="id"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.password"
            v-validate="'required|min:6|max:15'"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :type="show1 ? 'text' : 'password'"
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
            :append-icon="show2 ? 'visibility' : 'visibility_off'"
            :type="show2 ? 'text' : 'password'"
            :counter="15"
            :error-messages="errors.collect('password_confirm')"
            label="비밀번호 확인"
            data-vv-name="password_confirm"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.walletAddress"
            v-validate="'length:42'"
            :counter="42"
            :error-messages="errors.collect('walletAddress')"
            label="Wallet Address"
            data-vv-name="walletAddress"
          ></v-text-field>
          <v-select
            v-model="form.majorId"
            v-validate="'required'"
            :items="majors"
            :error-messages="errors.collect('majorId')"
            :state="null"
            label="전공"
            placeholder="전공 선택"
            data-vv-name="majorId"
            required
          ></v-select>
        </form>
      <v-btn color="#eeeeee" @click="clear">초기화</v-btn>
      <v-btn class="next" :disabled="!valid" color="primary" @click="validate">다음 단계</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3" color="primary">이용 약관</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="lighten-1" class="mb-5" height="200px">
        <v-card-title class="headline grey lighten-2" primary-title>이용약관</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
        <v-layout align-center>
          <v-checkbox v-model="enabled" label="동의" color="primary" hide-details></v-checkbox>
        </v-layout>
      </v-card>
      <v-btn class="before" color="#eeeeee" @click="e6 = 2">이전 단계</v-btn>
      <v-btn class="next" color="primary" :disabled="!enabled" @click="e6 = 1">완료</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

/* 한글화 노가다 말고 'ko' locale 이용해서 해볼것
  import ko from 'vee-validate/dist/locale/ko.js'

  const config = {
    locale: 'ko',
    dictionary: {
      ko
    }
  }

  Vue.use(VeeValidate, config)*/
  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      e6: 1,
      isActive: false,
      valid: true,
      show1: false,
      show2: false,
      token: '',
      token_input: '',
      email_send: false,
      form: {
        id: '',
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
      buttons:{
        text: '인증하기'
      },
      majors: [
        '소프트웨어학과',
        '미디어학과',
        '블라블라학과',
        '어쩌구저쩌구학과'
      ],
      enabled: false,
      email_confirm: false,
      dictionary: {
        attributes: {
          email: 'E-mail Address',
          password_confirm: 'Password'
          // custom attributes
        },
        custom: {
          id: {
            required: () => '필수 정보입니다.',
            min: 'ID는 최소 6자 입니다.',
            max: 'ID는 최대 20자 입니다.'
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
          walletAddress:{
            required: () => '필수 정보입니다.',
            min: '지갑주소는 42자 입니다.',
            min: '지갑주소는 42자 입니다.'
          },
          majorId:{
            required: () => '필수 정보입니다.'
          }
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.form.id = ''
        this.form.password = ''
        this.form.password_confirm = ''
        this.form.email = ''
        this.form.walletAddress = ''
        this.form.majorId = null
        this.$validator.reset()
      },
      validate () {
        this.$validator.validateAll().then((result) => {
        if (result) {
          this.e6 = 3;
        } else{
          alert('모든 필수정보를 입력해주세요.');
        }
      });
      },
      send_email() {
        this.$validator.validate('email').then(valid => {
          if (valid) {
            this.token = Math.random().toString(36).substring(2, 8);
            console.log(this.token);
            this.email_send = true;
            this.$axios.$post('/email', { // 경로확인
              email: this.form.email,
              token: this.token
            }).then((res)=>{
              console.log(res)
            })
          }
        });
      },
      check_token() {
        if(this.token == this.token_input){
          this.email_confirm = true;
          this.isActive = true;
          this.buttons.text = "인증완료";
        }
      },
      send_user_info() {
        this.email_confirm = true;
        this.$axios.$post('/signup', { // 경로확인
          username: this.form.name,
          password: this.form.password,
          email: this.form.email,
          nickname: this.form.nickname,
          major: this.form.major
        }).then((res)=>{
          console.log(res)
        })
      },
    }
  }
</script>

<style scoped>
.next {
  color: white;
}
</style>
