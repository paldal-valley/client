<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1" color="ac-blue">
      이메일 인증
      <small>아주대학교 이메일을 인증해주세요.</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn class="next" color="ac-blue" @click="e6 = 2">다음 단계</v-btn>
      <v-btn flat>취소</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2" color="ac-blue">기본정보 입력</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="lighten-1" class="mb-5" height="500px">
        <form>
          <v-text-field
            v-model="id"
            v-validate="'required|min:6|max:20'"
            :counter="20"
            :error-messages="errors.collect('id')"
            label="ID"
            data-vv-name="id"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            v-validate="'required|min:6|max:15'"
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
            :counter="15"
            :error-messages="errors.collect('password_confirm')"
            label="비밀번호 확인"
            data-vv-name="password_confirm"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            v-validate="'required|email'"
            :error-messages="errors.collect('email')"
            label="E-mail"
            data-vv-name="email"
            required
          ></v-text-field>
           <v-text-field
            v-model="walletAddress"
            v-validate="'min:42|max:42'"
            :counter="42"
            :error-messages="errors.collect('walletAddress')"
            label="Wallet Address"
            data-vv-name="walletAddress"
          ></v-text-field>
          <v-select
            v-model="majorId"
            :items="majors"
            :rules="[v => !!v || '필수 정보입니다.']"
            label="전공"
            data-vv-name="majorId"
            required
          ></v-select>
        </form>
      </v-card>
      <v-btn color="#eeeeee" @click="clear">초기화</v-btn>
      <v-btn class="next" color="ac-blue" @click="e6 = 3">다음 단계</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3" color="ac-blue">이용 약관</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="lighten-1" class="mb-5" height="200px">
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          이용약관
        </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
          <v-layout align-center>
            <v-checkbox
              v-model="enabled"
              label="동의"
              color="primary"
              hide-details
            ></v-checkbox>
          </v-layout>
      </v-card>
      <v-btn class="before" color="#eeeeee" @click="e6 = 2">이전 단계</v-btn>
      <v-btn class="next" color="ac-blue" :disabled="!enabled" @click="e6 = 4">다음 단계</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4" color="ac-blue">View setup instructions</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn class="next" color="ac-blue" @click="e6 = 1">완료</v-btn>
      <v-btn flat>취소</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  // 한글화 노가다 말고 'ko' locale 이용해서 해보기
/*   import ko from 'vee-validate/dist/locale/ko.js'

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
      majors: [
        '소프트웨어학과',
        '미디어학과',
        '블라블라학과',
        '어쩌구저쩌구학과'
      ],
      enabled: false,
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
        this.id = ''
        this.password = ''
        this.password_confirm = ''
        this.email = ''
        this.walletAddress = ''
        this.major = null
        this.$validator.reset()
      }
    }
  }
</script>

<style scoped>
.next {
  color: white;
}
</style>
