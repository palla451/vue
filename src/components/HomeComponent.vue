<script>

  export default {
    props:{
      msg : String
    },
    computed: {
      itemsFromStore() {
        return this.$store.getters['api/getItems'];
      }
    },
    mounted() {
      this.$store.dispatch('api/fetchData');
    }
    // data() {
    //   return {
    //     items: null
    //   }
    // },
    // methods: {
    //   async fetchData(){
    //     const result = await axios.get('http://mcc-be.local/api/auth/sw_version');
    //     console.log(result.data);
    //     this.items = result.data;
    //   }
    // },
    // mounted() {
    //   this.fetchData();
    // }
  }
</script>

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
        <h1>Vue home page</h1>
        <h4>{{ msg }}</h4>
        {{ itemsFromStore }}
      </v-col>
    </v-row>
  </v-container>

</template>

<style>

</style>
