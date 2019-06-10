<template>
  <div>

      <v-container>
        <v-layout>
          <v-flex md8 class="mx-auto">
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Prefix for dollar currency</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  label="Amount"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs4>
                <v-subheader>Suffix for weight</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  label="Weight"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs4>
                <v-subheader>Suffix for email domain</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  label="Email address"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs4>
                <v-subheader>Suffix for time zone</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  label="Label Text"
                ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
  </v-container>
  </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueButtonGroup from '~/components/common/buttons/nav/group'

import { mapGetters } from 'vuex'

Vue.use(VeeValidate)

export default {
  layout: 'mypage',
  middleware: ['isLoggedIn'],
  $_veeValidate: {
    validator: 'new'
  },
  components: {
    VueButtonGroup,
  },
  computed: {
    ...mapGetters('page-meta', [
      'GET_MYPAGE_META'
    ]),
  },
  data: () => ({
    nav_buttons: [
        {
          text: '계정설정',
          to: '/mypage/account'
        },
        {
          text: '토큰관리',
          to: '/mypage/tokens'
        }
      ]
  }),

  mounted() {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    submit() {
      this.$validator.validateAll()
    },
    validate() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.e6 = 3
        } else {
          alert('모든 필수정보를 입력해주세요.')
        }
      })
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
          if (res == 'ER_DUP_ENTRY') {
            this.snackbar.text = '이미 존재하는 아이디 입니다.'
            this.snackbar.open = true
          } else {
            this.snackbar.text = '회원가입이 정상적으로 되었습니다.'
            this.snackbar.open = true
            this.$router.push('/')
          }
        })
        .catch(err => {
          alert(err)
          console.log(err)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
  .mypage-nav{
    list-style: none;
    
    li{
      float: left;

      a.mypage-btn{
        color: rgba(0,0,0,0.35);
        padding: 20px;
        text-decoration: none;
      }    

      a.active{
      opacity: 1;
      }
    }

  }
  .bg-white{
    background: white !important;
  }
  .banner{
    background: #4e98a4;
    color: white;
    margin: 0px !important;
    padding: 60px;
    width: 100%;
  }
  .pd-10{
    padding: 10px;
  }
</style>
