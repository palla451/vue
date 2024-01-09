<template>
  <HomeComponent msg="welcome to home page Vue" />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HomeComponent from "@/components/HomeComponent.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeComponent
  },
});
</script>
