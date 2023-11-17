<template>
  <div class="app">
    <router-view />
  </div>

  <!-- <PopUp v-show="popUp" @close="togglePopUp"></PopUp> -->
 
</template>

<script>
//import { defineAsyncComponent } from 'vue';

export default {
  name: 'app-main',
  components: {
    //PopUp: defineAsyncComponent(() => import('@/components/compose/PopUp.vue')),
  },
  data() {
    return {
      popUp:true,
    }
  },
  methods: {
    togglePopUp(){
        this.popUp=!this.popUp;
        console.log("pressed");
    },
    close() {
      this.$refs.youtube.pauseVideo();
      this.$refs.youtube.stopVideo();
      
      this.modalActive = false;
    },
  },
}

</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');


html{
    font-size: 14px;
}

body{
    width: 100vw;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
    font-size: 0.88rem;
    user-select: none;
    overflow-x: hidden;
    color: var(--color-dark);
    background-color: var(--color-background);
    
}

/*   html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Inter,sans-serif;
  } */

  .column-container .full-calendar a {
    text-decoration: none !important;
    color: var(--warning) !important;
  }

  .column-container .full-calendar button {
    text-decoration: none !important;
    color: white !important;
    background-color: #F2B749;
    border-color: white;
  }

  .column-container .full-calendar button:hover {
    color: white !important;
    background-color: #bd974f;
  }

  .column-container .full-calendar button::after {
    color: white !important;
    background-color: red;
  }

  .inpE6 .ipt .dp__input {
    border: 1px solid #ffffff;
  }

  .custom-container {
    height: 100vh;
  }

/* .app{
  position: fixed;
} */
</style>