<template>
    <form class="formDP">
        <div class="cabecera">
            <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="titulo" 
            @volver="onBackHandle"></Navbar>
        </div>
        <FilterHeader></FilterHeader>
        <!-- <BotonVue class="boton"></BotonVue> -->
    </form>
</template>


<script>

import Navbar from '@/components/compose/Navbar.vue';
import FilterHeader from '@/components/compose/FilterHeader.vue';
//import BotonVue from '@/components/atomic/BotonVue.vue';
import { useRouter } from 'vue-router'

export default {
    name: 'temaconsejeria-layout',
    setup() {
        const router = useRouter()
        return {
            titulo: 'REGISTROS DEL CUIDADOR PRIMARIO',
            router: router
        }
    },
    components: {
        Navbar,
        FilterHeader,
        //BotonVue,
    },
    methods:{

        async onBackHandle(){
            console.log("navegando")
            await this.router.push('/menu')
        }
    
    }
}
</script>

<style lang="scss" scoped>

$color-azul: #1B62BF;
$color-azul-ligth: #62A1D9;
$color-azul-intermedio: #616C8C;
$color-placeholder: #4f4d4db5;
$color-negro: #2c3e50;

/* .formDP{
    display: grid;
    height: 100vh;
    background-color:transparent ;
    grid-template: 
        "cabecera" 110px
        " cuidador" 1fr
        " paciente" 1fr
        " boton" 120px/
        1fr 
        ;
}

@media (min-width:650px){
    .formDP{
        display: grid;
        height: 100vh;
        background-color:transparent ;
        grid-template: 
            "cabecera cabecera" 100px
            " cuidador  paciente " 1fr
            " boton  boton " 120px/
            1fr 1fr 
            ;
    }
    
} */

.cabecera{
    grid-area:cabecera;
}


.cuidador{
    grid-area:cuidador;
}

.paciente{
    grid-area:paciente;
}

.boton {
  display: flex; 
  grid-area: boton;
  width: 300px;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-self: center;
  justify-self: center;
}

.pantalla {
    display: flex;
    flex-direction: column;   
    max-width: 2000px;
}

 .button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
 width: 100%;
}


.form-section {
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}


</style>