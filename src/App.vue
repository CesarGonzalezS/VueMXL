<!-- App.vue -->

<template>
  <div id="app">
    <Navbar />

    <router-view />
  </div>
</template>

<script>
import Navbar from './components/pages/Navbar.vue';
import inicio from './components/pages/inicio.vue';
export default {
  components: {
    inicio,
    Navbar,
  },
};
</script>

<style>
body {
  background-color: #f8f9fa; /* Cambia el color de fondo de la página según tus preferencias */
  margin: 0;
  font-family: 'Arial', sans-serif;
}
</style>
