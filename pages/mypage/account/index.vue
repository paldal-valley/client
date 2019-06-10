<template>
  <div>
      <v-container class="my-5">
        <v-layout row class="mb-3">
          <v-flex md8 class="mx-auto header-container">
            <h3 class="header">내 정보</h3>
          </v-flex>
        </v-layout>

        <v-layout row class="mb-5">
          <v-flex md8 class="mx-auto">
            <hr class="line-separator" />
          </v-flex>
        </v-layout>

        <v-layout row>
          <form class="user_info">
            <v-flex md8 class="mx-auto">

              <v-layout row class="mb-1">
                <v-flex xs4>
                  <v-subheader>이메일</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    v-model="form.email"
                    v-validate="'required|email'" 
                    :type="'email'"
                    disabled
                    :error-messages="errors.collect('email')"
                    label="Email"
                    data-vv-name="email"
                    required
                    outline
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row class="mb-1">
                <v-flex xs4>
                  <v-subheader>닉네임</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    v-model="form.name"
                    v-validate="'required|max:10'"
                    :counter="10"
                    :error-messages="errors.collect('name')"
                    label="NickName"
                    data-vv-name="name"
                    required
                    outline
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row class="mb-1">
                <v-flex xs4>
                  <v-subheader>현재 비밀번호</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    v-model="form.current_password"
                    v-validate="'required|min:6|max:15'"
                    :append-icon="'visibility_off'"
                    :type="'password'"
                    :counter="15"
                    :error-messages="errors.collect('current_password')"
                    ref="current_password"
                    label="비밀번호"
                    data-vv-name="current_password"
                    required
                    outline
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row class="mb-1">
                <v-flex xs4>
                  <v-subheader>비밀번호 수정</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    v-model="form.password"
                    v-validate="'min:6|max:15'"
                    :append-icon="'visibility_off'"
                    :type="'password'"
                    :counter="15"
                    :error-messages="errors.collect('password')"
                    ref="password"
                    label="비밀번호 변경시에만 입력해주세요."
                    data-vv-name="password"
                    outline
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row class="mb-1">
                <v-flex xs4>
                  <v-subheader>비밀번호 수정 확인</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    v-model="form.password_confirm"
                    v-validate="this.form.password? 'required|confirmed:password' : 'confirmed:password'"
                    :append-icon="'visibility_off'"
                    :type="'password'"
                    :counter="15"
                    :error-messages="errors.collect('password_confirm')"
                    label="비밀번호 변경시에만 입력해주세요."
                    data-vv-name="password_confirm"
                    aria-required=""
                    outline
                    :required="isRequired"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row class="mb-1">
                <v-flex xs4>
                  <v-subheader>지갑 주소</v-subheader>
                </v-flex>
                <v-flex xs8>
                   <v-text-field
                    v-model="form.walletAddress"
                    v-validate="'required|length:42'"
                    :counter="42"
                    :error-messages="errors.collect('walletAddress')"
                    label="Wallet Address"
                    data-vv-name="walletAddress"
                    outline
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row class="mb-1">
                <v-flex xs4>
                  <v-subheader>전공</v-subheader>
                </v-flex>
                <v-flex xs8>
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
                    outline
                  ></v-select>
              </v-flex>
            </v-layout>
          </v-flex>
        </form>
      </v-layout>

      <v-layout row class="mb-5">
          <v-flex md8 class="mx-auto">
            <v-btn
              class="update-btn"
              color="#4E98A4"
              block
              @click="submit">수정하기</v-btn>
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
    ...mapGetters({
      GET_USER: 'auth/GET_USER',
      GET_CATEGORIES: 'models/GET_CATEGORIES'
    }),
    selectorItem() {
      return this.GET_CATEGORIES['major']
    },
    isRequired() {
      return this.form.password? true : false
    }
  },
  data: () => ({
    form:{
      id:'',
      email: '',
      name: '',
      current_password: '',
      password: '',
      password_confirm: '',
      walletAddress: '',
      majorId: null
    }
  }),

  mounted() {
    this.$validator.localize('en', this.dictionary)
    console.log(this.GET_USER)
    this.form = Object.assign(this.form, this.GET_USER)
  },

  methods: {
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.updateUserInfo()
        } else {
          this.$notifyWarning('모든 필수정보를 입력해주세요.')
        }
      })
    },
    async updateUserInfo() {
      try {
        const options = {
          url: `user/${this.form.id}`,
          method: 'put',
          data: {
            email: this.form.email,
            name: this.form.name,
            current_password: this.form.current_password,
            password: this.form.password,
            walletAddress: this.form.walletAddress,
            majorId: this.form.majorId
          }
        }

        await this.$axios(options)
        await this.$store.dispatch('auth/TOKEN_FETCH')
        this.$notifySuccess("정보수정을 완료하였습니다.")
      } catch (err) {
        this.$notifyError("올바르지 않은 비밀번호 입니다.")
        console.error(err)
      }
    },
  }
}
</script>
<style lang="scss" scoped>
  .header-container{
    text-align: left;
    .header{
      font-size: 1.8rem;
    }
  }
  .line-separator {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    padding: 0;
  }
  .bg-green{
    background: #4e98a4 !important;
  }
  .pd-10{
    padding: 10px;
  }
  .user_info{
    width: 100%
  }
  .v-subheader{
    color: black;
  }
   .update-btn {
    font-weight: bold;
    color: white;
  }
</style>
