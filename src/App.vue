<template>
  <div class="app">
    <router-view />
  </div>

  <!-- <div v-if="getEstado().success" class="loading-indicator">
    
  </div> -->

  <!-- <LoadingMainView></LoadingMainView> -->

  <!-- <PopUp v-show="popUp" @close="togglePopUp"></PopUp> -->

  <div v-if="loadingData.status === true">
    <LoadingOverlay :loading="loadingData" />
  </div>
  <div v-else>
    <div v-if="apiResponse.status === true">
      <SuccessView :reponse="apiResponse" />
    </div>
    <div v-if="apiResponse.status === false">
      <ErrorView :reponse="apiResponse" @cerrar-indicador="hadlerCloseIndicator" />
    </div>
  </div>
</template>

<script>
  //import { defineAsyncComponent } from 'vue';
  //import { defineAsyncComponent } from 'vue'
  //import { mapActions,mapGetters } from 'vuex'
  import { ref, reactive, defineAsyncComponent } from 'vue';
  import { useRouter } from 'vue-router';

  export default {
    name: 'app-main',
    components: {
      LoadingOverlay: defineAsyncComponent(() => import('@/components/indicadores/LoadingOverlay.vue')),
      SuccessView: defineAsyncComponent(() => import('@/components/indicadores/SuccessView.vue')),
      ErrorView: defineAsyncComponent(() => import('@/components/indicadores/ErrorView.vue')),
    },
    setup() {
      const router = useRouter();

      // Define los datos reactivos
      const apiResponse = reactive({ status: null });
      const loadingData = reactive({
        status: false,
        title: "¡Estamos guardando la información del paciente y del cuidador!<br><br>Por favor, espera un momento mientras asociamos estos datos al especialista."
      });

      return {
        apiResponse,
        loadingData,
        router,
      };
    },
    /* data() {
      return {
        popUp: true,
      }
    }, */
    methods: {
      //...mapActions('programacionModule', ['deleteEntry','setIsLoading']),
      //...mapGetters('programacionModule', ['getEstado']),
      togglePopUp() {
        this.popUp = !this.popUp;
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

<style>


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

</style>