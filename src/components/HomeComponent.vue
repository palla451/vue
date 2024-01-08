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
  <img alt="Vue logo" src="../assets/logo.png">
  <h1>Vue home page</h1>
  <h4>{{ msg }} - </h4>
  {{ itemsFromStore }}
</template>

<style>

</style>