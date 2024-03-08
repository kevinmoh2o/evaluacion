<template>
 <!--  <transition v-if="contador<2" name="modal-animation">
    <div v-show="modalActive" class="modal container-fluid">
      <div v-show="modalActive" class="modal container-fluid">
        <transition name="modal-animation-inner">
          <div v-show="modalActive" class="col container-video"
            style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <button type="button" class="btn btn-close" aria-label="Close" @click="close" style="margin-left: auto;">
            </button>
            <slot />
            <YouTube class="col-lg-12 text-center" :width="youtubeWidth" :height="youtubeHeight" :key="youtubeWidth"
              :aspect-ratio="16 / 9" :src="'http://www.youtube.com/watch?v=NRHCHVrq8nY'" ref="youtube" @playing="playing"
              @ready="onReady" />
          </div>
        </transition>
      </div>
    </div>
  </transition> -->

  <LoginPage></LoginPage>

</template>

<script>
// @ is an alias to /src
import LoginPage from '../layouts/LoginPage.vue';
//import YouTube from 'vue3-youtube';
import { mapActions, mapGetters,mapMutations } from 'vuex'

//import { defineAsyncComponent } from 'vue'


export default {
  name: 'home-view',
  components: {
    LoginPage,
    //YouTube,
    //LoadingMainView: defineAsyncComponent(() => import('@/components/indicadores/LoadingMainView.vue')),
  },
  data() {
    return {
      modalActive: true,
      windowWidth: window.innerWidth,
      popUp: true,
      playing: true,
      loading: true,
      contador:0,
    }
  },
  computed: {
    youtubeWidth() {
      return this.windowWidth * 0.7;
    },
    youtubeHeight() {
      return this.windowWidth * 5 / 16;
    },
  },
  created() {
    console.log("created in home")
    this.contador = this.getCounter();
    if(this.contador>2){
      window.addEventListener('resize', this.handleWindowResize);
    }
  },
  unmounted() {
    if(this.contador>2){
      window.removeEventListener('resize', this.handleWindowResize);
    }
  },
  methods: {
    ...mapActions('programacionModule', ['deleteEntry', 'setIsLoading']),
    ...mapGetters('programacionModule', ['getEstado','getCounter']),
    ...mapMutations('programacionModule', ['setCounter']),
    togglePopUp() {
      this.popUp = !this.popUp;
      console.log("pressed");
    },
    close() {
      //this.$refs.youtube.pauseVideo();
      console.log("Close");
      this.$refs.youtube.stopVideo();
      this.modalActive = false;
      //var contador = this.getCounter();
      //console.log('contador: ',contador);
      this.setCounter(this.contador+1);
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
.aplication {

  background-color: yellow;
}

.container-video{
  margin: 10px;
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