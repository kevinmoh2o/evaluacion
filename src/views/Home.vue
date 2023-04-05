<template>
  <Navbar></Navbar>
  <div class="aplication">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <LoginPage></LoginPage>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPage from '../layouts/LoginPage.vue';
import Navbar from '@/components/Navbar.vue';


export default {
  name: 'Home',
  components: {
    LoginPage,
    Navbar
  }
}
</script>
<style scoped>
.aplication{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>