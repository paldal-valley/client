<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
        <v-form>
            <v-text-field
            label="ID"
            outline
            required            
          ></v-text-field>
            <v-text-field
            ref="password"
            :type="'password'"
            label="PASSWORD"
            outline
            required
          ></v-text-field>
        <v-divider class="mt-5"></v-divider>
          <v-btn flat>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="submit">Submit</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    layout: 'empty',
    data: () => ({
    }),

    computed: {
      
    },

    watch: {
      name () {
        this.errorMessages = ''
      }
    },

    methods: {
        submit(){
            this.$router.push('/');
        }
    }
  }
</script>