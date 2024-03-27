<template>
    <div>
      <h1>{{ titulo }}</h1>
      <p>{{ mensaje }}</p>
      <button @click="mostrarMensaje">Mostrar Mensaje</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  
  export default {
    name: 'soporte-tecnico',
    setup() {
      const titulo = 'Bienvenido al Soporte Técnico'
      const mensaje = ref('')
      const store = useStore()
  
      const setIsLoading = async () => {
        await store.dispatch('programacionModule/setIsLoading', {
          loadingData: {
            status: false,
            title: "Autenticando usuario...",
            btnText: 'Continuar',
            navTo: ''
          },
          apiResponse: { status: true }
        })
        await sleep(3000)
        await store.dispatch('programacionModule/setIsLoading', {
          loadingData: {
            status: false,
            title: "Autenticando usuario...",
            btnText: 'Continuar',
            navTo: ''
          },
          apiResponse: { status: false }
        })
      }
  
      const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
      }
  
      const mostrarMensaje = async () => {
        mensaje.value = '¡Mensaje mostrado con éxito!'
        await llamadoAsincrono()
      }
  
      const llamadoAsincrono = async () => {
        console.log("empezando")
        await setIsLoading()
      }
  
      return {
        titulo,
        mensaje,
        mostrarMensaje
      }
    }
  }
  </script>
  


<style lang="scss" scoped>
    .soporte-page {
        width: 100%;
        height: 100%;
        border: 2px solid blue;
    }

    h1 {
        color: black;
    }
</style>