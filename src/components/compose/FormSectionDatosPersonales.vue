<template>
    <section class="form-section form-section--datos-personales">
        <form class="formDP">
            <h2 class="lblTitulo">Datos personales</h2>
            <Entrada class="inpE1" :type="'text'" :placeholder="'Ingrese su valor aqui...'" :nombre="'nombre'" :label="'Nombres y Apellidos:'"></Entrada>
            <Entrada class="inpE2" :type="'text'" :placeholder="'Usuario...'" :nombre="'nombre'" :label="'Usuario:'"></Entrada>
            <Entrada class="inpE3" :type="'password'" :placeholder="'Contraseña...'" :nombre="'password'" :label="'Contraseña:'"></Entrada>
            <ComboBox class="cboxE1" :titulo="'Edad:'" :valores="edad"></ComboBox>
            <ComboBox class="cboxE2" :titulo="'Sexo:'" :valores="sexo"></ComboBox>
            <hr class="divider">
            <h2 class="lblSubTitulo">Ubicación</h2>
            <ComboBox class="cboxE3" :titulo="'Centro de Salud'" :valores="centroList"></ComboBox>
            <ComboBox class="cboxE4" :titulo="'Distrito'" :valores="distritoList"></ComboBox>
            <ComboBox class="cboxE5" :titulo="'Diris/Diresa'" :valores="diresaList"></ComboBox>
            <BotonVue class="btnGuardar"></BotonVue>
        </form>
    </section>
</template>
  
<script>
import Entrada from '@/components/atomic/Entrada.vue';
import ComboBox from '@/components/atomic/ComboBox.vue';
import BotonVue from '@/components/atomic/BotonVue.vue';
export default {
    props: {
        title: {
            type: String,
            default: 'Datos personales'
        }
    },
    components: {
        Entrada,
        ComboBox,
        BotonVue
    },
    data() {
    
    return {
      edad:[
       { id: 1, valor:  "18" },
       { id: 2, valor: "25" },
       { id: 3, valor: "35" }
      ],
      sexo:[
       { id: 1, valor: "Masculino" },
       { id: 2, valor: "Femenino" },
     
      ],
      centroList:[
       { id: 1, valor:  "La Perla" },
       { id: 2, valor: "San Pedro" },
       { id: 3, valor: "San Lucas" }
      ],
      distritoList:[
       { id: 1, valor: "Norte" },
       { id: 2, valor: "Centro" },
       { id: 2, valor: "Sur" },
       { id: 2, valor: "Diresa Callao" },
      ],
      diresaList:[
       { id: 1, valor: "Norte" },
       { id: 2, valor: "Centro" },
       { id: 2, valor: "Sur" },
       { id: 2, valor: "Diresa Callao" },
      ],
    }
  },
}
</script>
  
<style lang="scss" scoped>
    .formDP{
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 10px;
        padding-left: 10px;
        border-radius: 8px;
        margin-top:20px ;
        /* box-shadow: -1px 1px 5px 0px rgba(0, 0, 0, 0.75); */
        background-color: #fff;
        display: grid;
        grid-template: 
            "lblTitulo"40px
            "inpE1"90px
            "inpE2"90px
            "inpE3"90px
            "cboxE1"90px
            "cboxE2"90px
            "divider"30px
            "lblSubTitulo"50px
            "cboxE3"90px
            "cboxE4"90px
            "cboxE5"90px
            "btnGuardar"90px/
            100%
            ;
    }

    @media (min-width:650px){
        .formDP{
            margin-top:0 ;
            padding-top: 30px;
            padding-bottom: 30px;
            padding-right: 30px;
            padding-left: 30px;
            border-radius: 8px;
            /* box-shadow: -1px 1px 5px 0px rgba(0, 0, 0, 0.75); */
            background-color: #fff;
            display: grid;
            grid-template: 
                "lblTitulo lblTitulo"40px
                "inpE1 inpE2"90px
                "inpE3 cboxE1"90px
                "cboxE2 ."90px
                "divider divider"30px
                "lblSubTitulo lblSubTitulo"50px
                "cboxE3 cboxE4"90px
                "cboxE5 ."90px
                "btnGuardar btnGuardar"90px/
                50% 50%
                ;

        }
    }

    .btnGuardar{
        grid-area:btnGuardar;
        justify-self: center;
        align-self: center;
        margin: 0 15px 0 15px;
        width: 200px;
    }

    .lblSubTitulo{
        grid-area:lblSubTitulo;
        font-family: Helvetica Neue, sans-serif;
        font-size: 25px;
        padding: 0;
        margin: 0;
    }

    .lblTitulo{
        grid-area:lblTitulo;
        font-family: Helvetica Neue, sans-serif;
        font-size: 25px;
        padding: 0;
        margin: 0;
    }

    .divider {
        grid-area:divider;
        border: none;
        border-top: 1px solid #000000;
        margin: 20px 0;
    }

    .inpE1{
        grid-area:inpE1;
    }

    .inpE2{
        grid-area:inpE2;
    }

    .inpE3{
        grid-area:inpE3;
    }

    .cboxE1{
        grid-area:cboxE1;
    }

    .cboxE2{
        grid-area:cboxE2;
    }

    .cboxE3{
        grid-area:cboxE3;
    }

    .cboxE4{
        grid-area:cboxE4;
    }

    .cboxE5{
        grid-area:cboxE5;
    }






</style>