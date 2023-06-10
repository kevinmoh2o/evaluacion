<template>
  <section class="form-section form-section--datos-personales">
      <div class="formDP">
          <h2 class="lblTitulo">DATOS DEL CUIDADOR</h2>
          <div class="imgAb">
            <!-- <i class="fa-solid fa-user zizeI"></i> -->
            <img class="zizeI" src="@/assets/terapia.png" alt="Imagen PNG">
          </div>
          <Entrada class="inpE1" :type="'text'" :placeholder="''" :nombre="'nombre'" :label="'Nombres y Apellidos:'"></Entrada>
          <ComboBox class="cboxE1" :titulo="'Edad:'" :valores="edad"></ComboBox>
          <ComboBox class="cboxE2" :titulo="'Sexo:'" :valores="sexo"></ComboBox>
          <Entrada class="inpE2" :type="'Nota'" :placeholder="'Nota'" :nombre="'Nota'" :label="'Nota:'"></Entrada>
          
      </div>
  </section>
</template>

<script>
import Entrada from '@/components/atomic/Entrada.vue';
import ComboBox from '@/components/atomic/ComboBox.vue';
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
              "lblTitulo"40px
              "imgAb" 90px
              "inpE1"90px
              "cboxE1"90px
              "cboxE2"90px
              "inpE2"90px/
              100%
              ;

      }

  @media (min-width:650px){
      
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
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      align-self: center;
      justify-self: center;
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

  .cboxE1{
      grid-area:cboxE1;
  }

  .cboxE2{
      grid-area:cboxE2;
  }



  .imgAb{
    display: flex;
    margin: 10px;
    grid-area: imgAb;
    align-content: center;
    align-items: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
  }

    .zizeI{
        color: rgb(71, 70, 70);
        font-size: 60px;
        width: 100%;
        height: 70px;
    }


</style>