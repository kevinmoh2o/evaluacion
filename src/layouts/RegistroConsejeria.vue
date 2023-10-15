<template>
    <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="titulo" 
            @volver="onBackHandle"></Navbar>
        
        <div class="cabecera pry">
            <FilterHeader class="filtro"></FilterHeader>
        </div>
        
        <!-- <FormCuidador class="cuidador"
        @inNombre="inNombre" @inNota="inNota"
        ></FormCuidador>
        <FormPaciente class="paciente"></FormPaciente> -->
</template>


<script>
import Navbar from '@/components/compose/Navbar.vue';
//import FormCuidador from '@/components/compose/FormCuidador.vue';
//import FormPaciente from '@/components/compose/FormPaciente.vue';
//import BotonVue from '@/components/atomic/BotonVue.vue';
import FilterHeader from '@/components/compose/FilterHeader.vue';
import { useRouter } from 'vue-router'

export default {
    name: 'regiconsejeria-layout',
    setup() {
        const router = useRouter()
        return {
            titulo: 'REGISTROS DEL CUIDADOR PRIMARIO',
            router: router
        }
    },
    components: {
        Navbar,
        //FormCuidador,
        //BotonVue,
        //FormPaciente,
        FilterHeader,
    },
    methods:{
        async onBackHandle(){
            console.log("navegando")
            await this.router.push('/menu')
        },
        inNombre(value){
            console.log('onChangeNombre:', value);
        },
        inNota(value){
            console.log('onChangeNota:', value);
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

.cabecera{
    display: flex;
    border-radius: 10px;
    margin: 5px 10px 5px 10px;
    padding: 10px 20px 10px 20px;
    justify-items: center;
    align-content: center;
    flex-direction: column;
}

.pry {
        //background-color: #f3f4eb;
        background-color: --primary;
    } 
/* 
.h-150{
    height: 150px;
}

.w-90{
    width: 90%;
}


.filtro{
    align-items: start;
    grid-area:filtro;
}



.cuidador{
    grid-area:cuidador;
}

.paciente{
    grid-area:paciente;
} */

/* .boton {
  display: flex; 
  grid-area: boton;
  width: 300px;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-self: center;
  justify-self: center;
} */

/* .pantalla {
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
 */


/* button{
    
    width: 10%;
} */

/* .form-section {
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}

*/
</style>s