<template>
  <v-layout justify-center align-center>
    <v-card class="elevation-10" style="flex: 0 1 400px">
      <v-card-title class="headline">Log In</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submit">
          <v-alert v-if="alert" :type="alert.type" value="true">{{alert.message}}</v-alert>
          <v-text-field label="Email" v-model="email"/>
          <v-text-field label="Password" v-model="password" type="password"/>
          <v-btn type="submit" :loading="loading" :disabled="loading">Log In</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'fullscreen',
  data () {
    return {
      email: '',
      password: '',
      alert: null,
      loading: false
    }
  },
  computed: {
    ...mapGetters('auth', [
      'GET_USER'
    ])
  },
  methods: {
    async submit () {
      try {
        await this.$store.dispatch('auth/LOGIN', {
          email: this.email,
          password: this.password
        })

        console.log(this.GET_USER)
        this.$router.push('/admin')
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>
