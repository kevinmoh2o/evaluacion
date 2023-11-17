<template>
    
    <div class="cabecera">
        <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="titulo" 
        @volver="onBackHandle"></Navbar>
    </div>
    <!-- <form class="formDP">    
        <FilterHeader></FilterHeader>

        <div class="mentoria">
            <div class="participante" v-on:click="select(1)"  data-bs-toggle="modal" data-bs-target="#modalCuidadorSeleccion" data-bs-whatever="@mdo">
                
            </div>
            <div class="participante" v-on:click="select(2)"  data-bs-toggle="modal" data-bs-target="#modalPacienteSeleccion" data-bs-whatever="@mdo">
                
            </div>
            
        </div>
        
        <div class="btn-contendor">
            <button type="button" class="btn btn-success estilo-btn" data-bs-dismiss="modal">Registrar Consejería</button>
        </div>
        
    </form> -->
</template>


<script>

import Navbar from '@/components/compose/Navbar.vue';
//import FilterHeader from '@/components/compose/FilterHeader.vue';
//import BotonVue from '@/components/atomic/BotonVue.vue';
import { useRouter } from 'vue-router'

export default {
    name: 'temaconsejeria-layout',
    setup() {
        const router = useRouter()
        return {
            titulo: 'TEMAS DE CONSEJERÍA',
            router: router
        }
    },
    components: {
        Navbar,
        //FilterHeader,
        //BotonVue,
    },
    methods:{

        async onBackHandle(){
            console.log("navegando")
            await this.router.push('/menu')
        },
        select: function(p2) {
            //var targetId = event.currentTarget.id;
            //console.log(event); // returns 'foo'
            //console.log(targetId); // returns 'foo'
            console.log(p2);
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
$color-amarillo: #F2B749;

/* .mentoria{
    display: flex;
    width: 100%;
    //background: #1B62BF;
    min-height: 300px;
}
 */
.mentoria {
    //width: 100%;
    display: flex;
    padding: 5px 30px 5px 30px ;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.participante{
    border: 2px dashed $color-amarillo;
    border-radius: 15px;
    width: 45%;
    text-align: center;
    margin: 5px 10px 5px 10px ;
    min-height: 300px;
}

@media (max-width:600px){
    .participante{
        width: 100%;
        flex-direction: row;
    }
    
}


.btn-contendor{
    width: 100%;
    display: flex;
    justify-content: center;
    
}

.estilo-btn{
    margin: 10px 0 20px 0;
    border-radius: 15px;
    width: 250px;
    height: 40px;
}
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