<template>
  <v-card>
    <v-form>
      <v-divider></v-divider>
      <v-text-field
        label="제목"
        single-line
        full-width
        hide-details
      ></v-text-field>
      <v-divider></v-divider>
      <v-textarea
        v-model="title"
        label="내용"
        counter
        full-width
        single-line
      ></v-textarea>
    </v-form>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>

</style>
