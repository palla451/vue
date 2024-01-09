<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" v-model:mini-variant="miniVariant">

    <!-- Contenuto del menu a scomparsa -->
      <v-list>
        <router-link to="/">
          <v-list-item link>Home</v-list-item>
        </router-link>

        <router-link to="/about">
          <v-list-item link>About</v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Titolo della pagina</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- Il tuo contenuto principale va qui -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      miniVariant: false, // Inizializza con il menu non compresso
    };
  },
};
</script>

<style>
/* Personalizza lo stile secondo le tue esigenze */
</style>
