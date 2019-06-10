<template>
  <div>
    <v-container class="my-5">
        <v-layout row class="mb-3">
          <v-flex md8 class="mx-auto header-container">
            <h3 class="header">토큰 정보</h3>
          </v-flex>
        </v-layout>

        <v-layout row class="mb-5">
          <v-flex md8 class="mx-auto">
            <hr class="line-separator" />
          </v-flex>
        </v-layout>

        <v-layout v-if="checkMeta" row>
          <v-flex md8 class="mx-auto">
            <v-layout row class="mb-1">
              <v-flex xs4>
                <v-subheader>토큰이름</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-subheader style="color: black!">DoaToken</v-subheader>
              </v-flex>
            </v-layout>
            <v-layout row class="mb-1">
              <v-flex xs4>
                <v-subheader>토큰주소</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-subheader style="color: black!">{{ tokenAddress }}</v-subheader>
              </v-flex>
            </v-layout>
            <v-layout row class="mb-1">
              <v-flex xs4>
                <v-subheader>보유토큰</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-subheader style="color: black!">{{ GET_QUESTION_META.doatBalance }} DOAT</v-subheader>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

        <v-layout v-else row>
            <v-flex md8 class="mx-auto">
              <v-layout row class="mb-1">
                <v-flex xs8>
                  <v-subheader>메타 마스크에 로그인을 해주셔야 확인이 가능합니다.</v-subheader>
                </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

    </v-container>
  </div>
</template>

<script>
import Vue from 'vue'
import VueButtonGroup from '~/components/common/buttons/nav/group'

import { mapGetters } from 'vuex'

export default {
  layout: 'mypage',
  middleware: ['isLoggedIn'],
  components: {
    VueButtonGroup,
  },
  computed: {
    ...mapGetters('page-meta', [
      'GET_MYPAGE_META'
    ]),
    ...mapGetters({
      GET_QUESTION_META: 'block-sync/WEB3_META'
    }),
    checkMeta() {
      return this.GET_QUESTION_META.web3Instance ? true : false
    }
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
      ],
    tokenAddress : ''
  }),

  mounted() {
  },

  methods: {
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
</style>
