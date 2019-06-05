<template>
  <v-toolbar
    app
    :flat="toolbarFlat"
    :fixed="toolbarFixed"
    :color="toolbarColor"
  >
    <v-container class="nav-container" py-0>
      <v-layout>
        <v-img
          :src="require('@/assets/ac-logo.png')"
          style="cursor: pointer;"
          class="mr-3"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="$router.push('/')"
        />

        <v-toolbar-title class="nav-home" @click="$router.push('/')"
          >DOAJOU</v-toolbar-title
        >

        <v-spacer></v-spacer>

        <!-- 툴바 오른쪽 탭 -->
        <toolbar-tab-group
          v-for="tab in conditionalTab"
          :key="tab.text"
          :tab="tab"
        />

        <v-toolbar-side-icon
          class="hidden-md-and-up"
          @click="drawer = !drawer"
        />
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
import ToolbarTabGroup from '../tab/group'
import { EventBus } from '~/utils/EventBus'
import { mapGetters } from 'vuex'

export default {
  components: {
    ToolbarTabGroup
  },
  watch: {
    drawer() {
      EventBus.$emit('toolbar-to-drawer', {
        drawer: this.drawer,
        tabs: this.tabs.basic
      })
    }
  },
  props: {
    toolbarFlat: {
      type: Boolean,
      default: true
    },
    toolbarFixed: {
      type: Boolean,
      default: false
    },
    toolbarColor: {
      type: String,
      default: 'gray'
    }
  },
  data: () => ({
    drawer: false,
    tabs: {
      conditional: {
        plain: [
          {
            text: '로그인',
            to: '/auth/login'
          },
          {
            text: '회원가입',
            to: '/auth/signup'
          }
        ],
        authorized: [
          {
            text: '마이페이지',
            to: '/mypage/account'
          },
          {
            text: '로그아웃',
            to: '#'
          }
        ]
      }
    },

    isLoggedIn: false
  }),
  mounted() {
    EventBus.$on('drawer-to-toolbar', data => {
      this.drawer = data.drawer
    })
    this.isAuthenticated()
  },
  computed: {
    ...mapGetters('auth', [
      'IS_LOGGED_IN'
    ]),
    conditionalTab() {
      return this.isLoggedIn
        ? this.tabs.conditional.authorized
        : this.tabs.conditional.plain
    }
  },
  methods: {
    isAuthenticated() {
      this.isLoggedIn = this.IS_LOGGED_IN
      // this.$store.dispatch('login_check').then(check => {
      //   this.isLoggedIn = check
      // })
    },
    logout() {
      // this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-container {
  margin-left: 20%;
  margin-right: 20%;

  .nav-home {
    margin-left: -5px;
    margin-top: 6px;
    font-size: 26px;
    cursor: pointer;
    color: #4e98a4;
    font-family: 'Aclonica', sans-serif;
  }
}
</style>
