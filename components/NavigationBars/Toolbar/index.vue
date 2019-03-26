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

        <v-menu
          :open-on-hover="menuHover"
          :transition="menuTransition"
          offset-y
          bottom
          right
          v-for="(tab, i) in tabs"
          :key="i">

          <template
            #activator="{ on }">
            <v-btn
              :to="tab.to"
              class="hidden-sm-and-down"
              flat
              v-on="on">
              {{ tab.text }}
            </v-btn>
          </template>

          <v-list>
            <v-list-tile
              v-for="(item, i) in tab.items"
              :key="i"
              @click="">

              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon
          class="hidden-md-and-up"
          @click="drawer = !drawer"/>

      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
import { EventBus } from '~/utils/EventBus'
export default {
  watch: {
    drawer() {
      EventBus.$emit('toolbar-to-drawer', { drawer: this.drawer, tabs: this.tabs })
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
    },
    menuHover: {
      type: Boolean,
      default: false
    },
    menuTransition: {
      type: String,
      default: 'slide-x-transition'
    }
  },
  data: () => ({
    drawer: false,
    tabs: [
      {
        text: '수기게시판',
        to: '#',
        items: [
          {
            text: '취업수기',
            to: '/'
          },
          {
            text: '진학수기',
            href: '#about'
          },
          {
            text: '대외활동',
            href: '#about'
          }
        ]
      },
      {
        text: '자유게시판',
        to: '#',
        items: [
          {
            text: '2',
            to: '/'
          },
          {
            text: '3',
            href: '#about'
          }
        ]
      },
      {
        text: '질문게시판',
        to: '#',
        items: [
          {
            text: '3',
            to: '/'
          },
          {
            text: 'About',
            href: '#about'
          }
        ]
      }
    ],
  }),
  mounted() {
    EventBus.$on('drawer-to-toolbar', data => {
      this.drawer = data.drawer
    })
  },
}
</script>

<style scoped>

</style>
