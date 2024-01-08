<template>
  <div class="about">
    <AboutComponent msg="Welcome to You Vue.js about page "/>
  </div>
</template>

<script>
import AboutComponent from "@/components/AboutComponent.vue";

export default {
  name: 'AboutView',
  components: {
    AboutComponent
  }
}
</script>