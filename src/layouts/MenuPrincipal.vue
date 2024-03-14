<template>
  <div class="main-menu">
    <div class="menu" @click="toggleSidebar">
      <ion-icon v-if="!isMaxBarraLateral" name="menu-outline"></ion-icon>
      <ion-icon v-else name="close-outline"></ion-icon>
    </div>


    <div class="barra-lateral"
      :class="{ 'max-barra-lateral': isMaxBarraLateral, 'mini-barra-lateral': !isMaxBarraLateral, 'dark-mode': isDarkMode }">


      <div>
        <div class="nombre-pagina">
          <!-- <ion-icon id="cloud" @click="toggleMiniBarraLateral"></ion-icon> -->
          <img id="cloud" @click="toggleMiniBarraLateral" src="@/assets/images.jpeg" alt="" width="50" height="50">
          <span :class="{ 'oculto': !isMaxBarraLateral }">Consejería en Enfermería</span>
        </div>
      </div>


      <nav class="navegacion">
        <ul>
          <li>
            <a id="main-menu" :class="{ 'seleccion': boolIcn1 }" @click.prevent="showContent('main-menu')">
              <ion-icon name="menu-outline"></ion-icon>
              Menú Principal
            </a>
          </li>
          <li>
            <a id="registrar" :class="{ 'seleccion': boolIcn2 }" @click.prevent="showContent('registrar')">
              <ion-icon name="person-add-outline"></ion-icon>
              Registrar Usuario</a>
          </li>
          <li>
            <a id="equipos" :class="{ 'seleccion': boolIcn3 }" @click.prevent="showContent('equipos')">
              <ion-icon name="hammer-outline"></ion-icon>Equipos de
              Trabajo</a>
          </li>
          <li>
            <a id="soporte" :class="{ 'seleccion': boolIcn4 }" @click.prevent="showContent('soporte')">
              <ion-icon name="help-outline"></ion-icon>
              Soporte Técnico
            </a>
          </li>
          <li>
            <a id="satisfaccion" :class="{ 'seleccion': boolIcn5 }" @click.prevent="showContent('satisfaccion')">
              <ion-icon name="reader-outline"></ion-icon>
              Satisfacción
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <div class="linea"></div>

        <!-- <div class="modo-oscuro">
          <div class="info">
            <ion-icon name="moon-outline"></ion-icon>
            <span>Modo Oscuro</span>
          </div>
          <div class="switch" @click="toggleDarkMode">
            <div class="base">
              <div class="circulo" :class="{ 'prendido': isDarkMode }"></div>
            </div>
          </div>
        </div> -->

        <div class="usuario">
          <ion-icon id="imagen" name="person-circle-outline"></ion-icon>
          <div class="info-usuario" :class="{ 'oculto': !isMaxBarraLateral }">
            <div class="nombre-email">
              <span class="nombre">{{ userData.fullName }}</span>
              <span class="email">{{ userData.email }}</span>
            </div>
          </div>


        </div>
        <button class="boton" @click="cerrarSesion">
          <ion-icon name="log-out-outline"></ion-icon>
          <span :class="{ 'oculto': !isMaxBarraLateral }">Cerrar Sesión</span>
        </button>

        <div class="version">
          <!-- <strong>Versión: </strong> -->
          <span>v1.0.0</span>
        </div>


      </div>
    </div>

    <main :class="{ 'min-main': !isMaxBarraLateral }">
      <transition name="fade" mode="out-in">
        <div class="menu-selected" v-if="selectedContent === 'main-menu'">
          <Menu></Menu>
        </div>
        <div v-else-if="selectedContent === 'registrar'">
          <RegistroCuidadorPaciente :isMaxBarraLateral="isMaxBarraLateral"></RegistroCuidadorPaciente>
        </div>
        <div v-else-if="selectedContent === 'equipos'">
          <About></About>
        </div>
        <div v-else-if="selectedContent === 'soporte'">Contenido para Soporte Técnico</div>
        <div v-else-if="selectedContent === 'satisfaccion'">
          <SatisfaccionPage></SatisfaccionPage>
        </div>
      </transition>
    </main>
  </div>

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

import Menu from '@/layouts/Menu.vue';
import About from '@/layouts/About.vue';
import RegistroCuidadorPaciente from '@/layouts/RegistroCuidadorPaciente.vue';
import SatisfaccionPage from '@/layouts/SatisfaccionPage.vue';
import { mapActions } from 'vuex'
import { defineAsyncComponent } from 'vue'


export default {
  name: 'menu-main',
  props: {
    msg: String
  },
  components: {
    Menu,
    About,
    RegistroCuidadorPaciente,
    SatisfaccionPage,
    LoadingOverlay: defineAsyncComponent(() => import('@/components/indicadores/LoadingOverlay.vue')),
    SuccessView: defineAsyncComponent(() => import('@/components/indicadores/SuccessView.vue')),
    ErrorView: defineAsyncComponent(() => import('@/components/indicadores/ErrorView.vue')),
  },
  beforeUnmount() {
    // Remover el escuchador de eventos al desmontar el componente
    window.removeEventListener('popstate', this.handlePopstate);
  },
  async mounted() {
    this.selectedContent = 'main-menu';
    var usertest = localStorage.user;
    this.userData = usertest !== null ? JSON.parse(usertest) : null;
    await this.llamarLista(this.userData.id);
    // Agregar un escuchador de eventos para el evento popstate
    window.addEventListener('popstate', this.handlePopstate);

    // Modificar el historial para que la página no tenga una entrada de historial adicional
    history.pushState(null, document.title, location.href);

  },
  data() {
    return {
      isMaxBarraLateral: true,
      isDarkMode: false,
      selectedContent: null,
      userData: {},
      boolIcn1: true,
      boolIcn2: false,
      boolIcn3: false,
      boolIcn4: false,
      boolIcn5: false,
      loadingData: {
        status: false,
        title: "Cerrando Sesión..."
      },
      apiResponse: { status: null, },
    };
  },
  methods: {
    ...mapActions('programacionModule', ['transactionUserPeople', 'listUserPersona']),
    toggleSidebar() {
      this.isMaxBarraLateral = !this.isMaxBarraLateral;
    },
    toggleMiniBarraLateral() {
      this.isMaxBarraLateral = !this.isMaxBarraLateral;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    showContent(content) {
      this.selectedContent = content;
      console.log(this.selectedContent)
      switch (this.selectedContent) {
        case "main-menu":
          this.boolIcn1 = true; this.boolIcn2 = false; this.boolIcn3 = false; this.boolIcn5 = false; this.boolIcn5 = false;
          break;
        case "registrar":
          this.boolIcn1 = false; this.boolIcn2 = true; this.boolIcn3 = false; this.boolIcn5 = false; this.boolIcn5 = false;
          break;
        case "equipos":
          this.boolIcn1 = false; this.boolIcn2 = false; this.boolIcn3 = true; this.boolIcn5 = false; this.boolIcn5 = false;
          break;
        case "soporte":
          this.boolIcn1 = false; this.boolIcn2 = false; this.boolIcn3 = false; this.boolIcn5 = true; this.boolIcn5 = false;
          break;
        case "satisfaccion":
          this.boolIcn1 = false; this.boolIcn2 = false; this.boolIcn3 = false; this.boolIcn5 = false; this.boolIcn5 = true;
          break;
        default:
          break;
      }
    },
    async llamarLista(value) {
      try {
        await this.listUserPersona({ id: value, isActive: true });
        const { status, data } = this.getUsuarioPersonaList();
        this.valorTabla = data;
        console.log("Todo bien: ", { status, data });
      } catch (error) {
        console.log("Todo mal: ", error);
      }

    },
    handlePopstate(event) {
      // Impedir el comportamiento predeterminado (navegación hacia atrás)
      history.pushState(null, document.title, location.href);
    },
    async sleep(ms) {
      return await new Promise(resolve => setTimeout(resolve, ms));
    },
    async cerrarSesion() {
      this.loadingData.status = true;
      this.loadingData.title = "Cerrando Sesión...";
      await this.sleep(3000);
      this.loadingData.title = "Borrando Todos sus datos de Navegación";
      await this.sleep(3000);
      this.$router.push('/login-layout');
      this.loadingData.status = false;
    }
  },

}
</script>

<style scoped>
/* #cloud{
    color:orange;
  } */

.main-menu {
  width: 100%;
  height: 100%;
}

/************** menu icons **************/
.menu {
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  width: 50px;
  height: 50px;
  font-size: 30px;
  background-color: var(--color-boton);
  color: var(--color-botton-texto);
  right: 15px;
  top: 15px;
  z-index: 100;
}




/************** barra latearl **************/
.barra-lateral {
  position: fixed;
  width: 250px;
  height: 100%;
  overflow: hidden;
  padding: 20px 15px;
  background-color: var(--color-barra-lateral);
  transition: width 0.5s ease, background-color 0.5s ease, left 0.5s ease;
  color: var(--color-texto);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 50;
}


/* .barra-lateral > div:nth-child(1),
  .barra-lateral > nav:nth-child(2),
  .barra-lateral > div:nth-child(3){
      border: 2px solid red;
  } */


.mini-barra-lateral {
  width: 80px;
}

.barra-lateral span {
  width: 100px;
  text-align: left;
  font-size: 15px;
  opacity: 1;
  transition: opacity 0.5s ease, widh 0.5s ease;
}

.barra-lateral span.oculto {
  opacity: 0;
  width: 0;
}




.barra-lateral .nombre-pagina {
  width: 100%;
  height: 45px;
  display: flex;
  margin-bottom: 30px;
  align-items: center;
}

.barra-lateral .nombre-pagina img {
  min-width: 50px;
  font-size: 40px;
  cursor: pointer;
}

.barra-lateral .nombre-pagina span {
  margin-left: 5px;
  font-weight: 800;
}


/* ------- boton  */
.barra-lateral .boton {
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background-color: var(--color-boton);
  color: var(--color-botton-texto);
  margin-top: 20px;
  cursor: pointer;
  transition: width 0.5s ease;
}

.barra-lateral .boton:hover {
  width: 90%;
}

.barra-lateral .boton ion-icon {
  min-width: 50px;
  font-size: 25px;
}

/*********** Navegacion ***********/

.barra-lateral .navegacion {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.barra-lateral .navegacion::-webkit-scrollbar {
  width: 5px;
}

.barra-lateral .navegacion::-webkit-scrollbar-thumb {
  background-color: var(--color-scroll);
  border-radius: 5px;
}

.barra-lateral .navegacion::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-scroll-hover);
}


.barra-lateral .navegacion ul {
  padding: 0 !important;
}

.barra-lateral .navegacion li {
  list-style: none;
  display: flex;
  margin-bottom: 5px;
}

.barra-lateral .navegacion a {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 10px;
  color: var(--color-texto-menu);
}

.barra-lateral .navegacion a:hover {
  background-color: var(--color-menu-hover);
  color: var(--color-menu-hover-texto);
}

.barra-lateral .navegacion ion-icon {
  min-width: 50px;
  font-size: 20px;
}

.linea {
  width: 100%;
  height: 3px;
  background-color: var(--color-linea);
  margin-bottom: 15px;
  margin-top: 15px;
}


/* modo oscuro */
.barra-lateral .modo-oscuro {
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.barra-lateral .modo-oscuro .info {
  width: 150px;
  height: 45px;
  display: flex;
  align-items: center;
  color: var(--color-texto-menu);
  overflow: hidden;
}

.barra-lateral .modo-oscuro ion-icon {
  width: 50px;
  font-size: 20px;

}

/* switch */
.barra-lateral .modo-oscuro .switch {
  min-width: 50px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.barra-lateral .modo-oscuro .base {
  position: relative;
  border: 2px solid gray;
  width: 35px;
  height: 20px;
  background-color: var(--color--switch--base);
  border-radius: 50px;
  display: flex;
  align-items: center;
}

.barra-lateral .modo-oscuro .circulo {
  position: absolute;
  border: 2px solid black;
  width: 18px;
  height: 90%;
  background-color: var(--color--switch--circulo);
  border-radius: 50%;
  left: 2px;
  transition: left 0.5s ease;
}

.barra-lateral .modo-oscuro .circulo.prendido {
  left: 15px;

}

/* usuarios */
.barra-lateral .usuario {
  width: 100%;
  display: flex;
  transition: width 0.5s ease;
}

.barra-lateral .usuario #imagen {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}


.barra-lateral .usuario .info-usuario {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-texto);
  overflow: hidden;
}

.barra-lateral .usuario .info-usuario.oculto {
  width: 0;
}

.barra-lateral .usuario .nombre-email {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
}

.barra-lateral .usuario .nombre {
  font-size: 13px;
  font-weight: 500;
}

.barra-lateral .usuario .email {
  font-size: 13px;
  font-weight: 600;
}

.barra-lateral .usuario ion-icon {
  font-size: 20px;
}

/************ Main ************/

main {
  height: 100%;
  margin-left: 250px;
  padding: 0;
  transition: margin-left 0.5s ease;
}

main.min-main {

  margin-left: 80px;
}

/* #main-menu {
  background-color: var(--color-menu-hover);
  color: var(--color-menu-hover-texto);
} */

.seleccion {
  background-color: var(--color-menu-hover);
  color: var(--color-menu-hover-texto);
}

/************ ****************/
.barra-lateral .version {
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 15px;
}

.barra-lateral .version span {
  font-size: 15px;

}

.main.menu {
  overflow: hidden;
}


.menu-selected {
  height: 100%;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active

/* .fade-leave-active in <2.1.8 */
  {
    transition: opacity 0.5s ease;
}


/************* MEDIA QUERYS  *************/
@media (max-height:660px) {
  .barra-lateral .nombre-pagina {
    margin-bottom: 5px;
  }

  .barra-lateral .modo-oscuro {
    margin-bottom: 3px;
  }
}

@media (max-width:600px) {
  .barra-lateral {
    position: fixed;
    left: -250px;
  }

  .max-barra-lateral {
    left: 0;
  }

  .menu {
    display: flex;
  }

  .menu ion-icon:nth-child(2) {
    display: none;
  }

  main {
    margin-left: 0;
  }

  main.min-main {
    margin-left: 0;
  }
}
</style>