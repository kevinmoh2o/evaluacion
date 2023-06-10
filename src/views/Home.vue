<template>
 <!--  <Navbar :estadoTitulo="true" :estadoFlecha="true"></Navbar> -->
  

  <div class="aplication" >
    <LoginPage></LoginPage>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPage from '../layouts/LoginPage.vue';


export default {
  name: 'home-view',
  components: {
    LoginPage,
  }
}
</script>
<style scoped>
.aplication{
  
  width: 100vw;
  height: 100vh;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
}

</style>