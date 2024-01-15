<template>
  <div class="app">
    <router-view />
  </div>

  <!-- <div v-if="getEstado().success" class="loading-indicator">
    
  </div> -->

  <!-- <LoadingMainView></LoadingMainView> -->

  <!-- <PopUp v-show="popUp" @close="togglePopUp"></PopUp> -->
 
</template>

<script>
//import { defineAsyncComponent } from 'vue';
//import { defineAsyncComponent } from 'vue'
//import { mapActions,mapGetters } from 'vuex'


export default {
  name: 'app-main',
  components: {
    //PopUp: defineAsyncComponent(() => import('@/components/compose/PopUp.vue')),
    //LoadingMainView: defineAsyncComponent(() => import('@/components/indicadores/LoadingMainView.vue')),
  },
  data() {
    return {
      popUp:true,
    }
  },
  methods: {
    //...mapActions('programacionModule', ['deleteEntry','setIsLoading']),
    //...mapGetters('programacionModule', ['getEstado']),
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
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap'); */


html{
    font-size: 14px;
}


.app{
  height: 100vh;
}

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

  .loading-indicator{
  background: var(--gradient-primary);
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>