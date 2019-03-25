<template>
  <div id="app">
    <v-toolbar
      app
      flat
    >
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />

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
            @click="$router.push('/')"
          />


          <v-toolbar-title
            style="cursor: pointer;"
            class="mt-3 ml-0 mr-5"
            @click="$router.push('/')">AJOU COIN</v-toolbar-title>
          <v-btn
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            class="hidden-sm-and-down"
            flat
          >
            {{ link.text }}
          </v-btn>
          <v-menu
            transition="slide-x-transition"
            bottom
            right
          >
            <template
              #activator="{ on }"
              v-for="(link, i) in links">
              <v-btn
                :key="i"
                :to="link.to"
                class="hidden-sm-and-down"
                flat
                v-on="on"
              >
                {{ link.text }}
              </v-btn>
            </template>

            <v-list>
              <v-list-tile
                v-for="(item, i) in items"
                :key="i"
                @click=""
              >
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>



          <v-spacer />

        </v-layout>
      </v-container>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="/home/brian/Desktop/capstone/ajou-coin/client/assets/logo.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in links"
          :key="item.text"
          @click=""
        >

          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        text: '자유게시판',
        to: 'https://naver.com'
      },
      {
        text: '취업게시판',
        to: 'https://naver.com'
      },
      {
        text: '취업게시판',
        to: 'https://naver.com'
      },
      {
        text: '취업게시판',
        to: 'https://naver.com'
      }
    ],
    drawer: false,
    items: [
      {
        text: 'Home',
        to: '/'
      },
      {
        text: 'About',
        href: '#about'
      }
    ]
  })
}
</script>
