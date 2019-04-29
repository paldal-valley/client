<template>
  <v-toolbar
    app
    :flat="toolbarFlat"
    :fixed="toolbarFixed"
    :color="toolbarColor">


    <v-container mx-auto py-0>
      <v-layout>
        <v-img
          :src="require('@/assets/logo.png')"
          style="cursor: pointer;"
          class="mr-3"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="$router.push('/')"/>


        <v-toolbar-title
          style="cursor: pointer;"
          class="mt-3 ml-0 mr-5"
          @click="$router.push('/')">AJOU COIN</v-toolbar-title>


        <!-- 툴바 메인 탭 -->
        <toolbar-tab-group
          v-for="tab in tabs.basic"
          :key="tab.text"
          :tab="tab"/>

        <v-spacer></v-spacer>

        <!-- 툴바 오른쪽 탭 -->
        <toolbar-tab-group
          v-for="tab in conditionalTab"
          :key="tab.text"
          :tab="tab"/>

        <v-toolbar-side-icon
          class="hidden-md-and-up"
          @click="drawer = !drawer"/>

      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
import ToolbarTabGroup from '../TabGroup'
import { EventBus } from '~/utils/EventBus'
export default {
  components: {
    ToolbarTabGroup,
  },
  watch: {
    drawer() {
      EventBus.$emit('toolbar-to-drawer', { drawer: this.drawer, tabs: this.tabs.basic })
    }
  },
  props: {
    toolbarFlat: {
      type: Boolean,
      default: false
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
      basic: [
        {
          text: '수기게시판',
          to: '#',
          items: [
            {
              text: '취업수기',
              to: '/board/jobreview',
            },
            {
              text: '진학수기',
              href: '/board/schoolreview',
            },
            {
              text: '대외활동',
              href: '/board/extrareview',
            }
          ]
        },
        {
          text: '질문게시판',
          to: '/board/qna',
        },
        {
          text: '자유게시판',
          to: '/board/free',
        },
      ],
      conditional: {
        plain: [
          {
            text: '회원가입',
            to: '/auth/signup'
          },
          {
            text: '로그인',
            to: '#'
          }
        ],
        authorized: [
          {
            text: '마이페이지',
            to: '#'
          },
          {
            text: '로그아웃',
            to: '#'
          }
        ]
      }
    },

    tmpIsLoggedIn: false,
  }),
  mounted() {
    EventBus.$on('drawer-to-toolbar', data => {
      this.drawer = data.drawer
    })
  },
  computed: {
    conditionalTab() {
      return this.tmpIsLoggedIn
        ? this.tabs.conditional.authorized
        : this.tabs.conditional.plain
    }
  }
}
</script>

<style scoped>

</style>
