<template>
  <v-menu
    :open-on-hover="openOnHover"
    :transition="transition"
    offset-y
    bottom
    right
  >
    <template #activator="{ on }">
      <v-btn
        v-if="text === '로그아웃'"
        class="hidden-sm-and-down"
        flat
        @click.native="logout"
        v-on="on">
        {{ text }}
      </v-btn>
      <v-btn
        v-else
        :to="to"
        class="hidden-sm-and-down"
        flat
        v-on="on">
        {{ text }}
      </v-btn>
    </template>

    <v-list v-if="items.length">
      <v-list-tile v-for="(item, i) in items" :key="i">
        <v-list-tile-title>{{ item.text }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    openOnHover: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'slide-x-transition'
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/LOGOUT')
      // this.$store.dispatch('logout').then(() => {
      //   this.$router.push('/')
      //   location.reload()
      // })
    }
  }
}
</script>

<style scoped></style>
