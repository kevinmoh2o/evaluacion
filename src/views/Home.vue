<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal container-fluid">
      <div v-show="modalActive" class="modal container-fluid">
        <transition name="modal-animation-inner">
          <div v-show="modalActive" class="col" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <button type="button" class="btn btn-close" aria-label="Close" @click="close" style="margin-left: auto;">
            </button>
            <slot />
            <YouTube class="col-lg-12 text-center" :width="youtubeWidth" :height="youtubeHeight" :key="youtubeWidth"
              :aspect-ratio="16 / 9" src="https://www.youtube.com/watch?v=NRHCHVrq8nY" ref="youtube" @playing="playing"
              @ready="onReady" />
          </div>
        </transition>
      </div>
    </div>
  </transition>
  
  <div class="aplication">
    <LoginPage></LoginPage>
  </div>

  <!-- <div v-if="getEstado().loading" class="loading-indicator">
    <div class="loader">
      
    </div>
    <Label class="txtLoading">Autenticando Usuario</Label>
  </div>
  

  <div v-if="getEstado().success" class="loading-indicator">
    <LoadingMainView></LoadingMainView>
  </div>


  <div v-if="getEstado().error" class="loading-indicator">

  </div> -->

  

  <!-- <button class="btn" @click="togglePopUp">
    Open Modal 
  </button> -->
  
</template>

<script>
// @ is an alias to /src
import LoginPage from '../layouts/LoginPage.vue';
import YouTube from 'vue3-youtube';
import { mapActions,mapGetters } from 'vuex'
//import { defineAsyncComponent } from 'vue'


export default {
  name: 'home-view',
  components: {
    LoginPage,
    YouTube,
    //LoadingMainView: defineAsyncComponent(() => import('@/components/indicadores/LoadingMainView.vue')),
  },
  data() {
    return {
      modalActive: true,
      windowWidth: window.innerWidth,
      popUp:true,
      playing: true,
      loading: true,
    }
  },
  computed: {
    youtubeWidth() {
      return this.windowWidth * 0.9;
    },
    youtubeHeight() {
      return this.windowWidth * 7 / 16;
    },
  },
  created() {
    window.addEventListener('resize', this.handleWindowResize);
    
  },
  unmounted() {
    window.removeEventListener('resize', this.handleWindowResize);
  },
  methods: {
    ...mapActions('programacionModule', ['deleteEntry','setIsLoading']),
    ...mapGetters('programacionModule', ['getEstado']),
    togglePopUp(){
        this.popUp=!this.popUp;
        console.log("pressed");
    },
    close() {
      //this.$refs.youtube.pauseVideo();
      this.$refs.youtube.stopVideo();
      this.modalActive = false;
    },
    onReady() {
            this.$refs.youtube.playVideo()
        },
    handleWindowResize() {
      this.windowWidth = window.innerWidth;
    },
  },
}
</script>
<style lang="scss" scoped>
.aplication{
  
  background-color: yellow;
}
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}



.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(229, 229, 229, 0.7);

  .modal-inner {
    position: relative;
    //max-width: 670px;
    //width: 80%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #fff;
    padding: 64px 16px;

    i {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 30px;
      cursor: pointer;

      &:hover {
        color: crimson;
      }
    }

    button {
      padding: 20px 30px;
      border: none;
      font-size: 16px;
      background-color: crimson;
      color: #fff;
      cursor: pointer;
    }
  }
}

.modal-animation-inner-leave-to {
  transform: scale(0.8);
}


.custom-youtube {
  width: 900px !important;
  height: 700px !important;
}

/* .loading-indicator{
  background: var(--gradient-primary);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
} */


/* iframe.custom-youtube {
  width: 900px !important;
  height: 700px !important;
} */
</style>