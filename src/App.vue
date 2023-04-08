<template>
  <div class="app-container">
    <router-view />
  </div>
 
</template>

<script>
//Formulario
///import Formulario from '@/components/Formulario.vue';
/* import Navbar from '@/components/Navbar.vue'; */


export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .app-container {
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
  }
</style>