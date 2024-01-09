<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>
      <v-col cols="12">
        <h1>Vue about page</h1>
        {{ msg }}
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  props: {
    msg : String
  }
}
</script>

<style scoped>

</style>
