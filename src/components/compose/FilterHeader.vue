<template>
    <div class="container">
        <div class="ctnIpt">
            <EntradaImg :placeholder="'Buscar'" @buscar="realizarConsulta"></EntradaImg>
            <LabelImg :title="'Agregar'" iconName="fa-circle-plus" @agregar="agregarConsulta"></LabelImg>
            <ComboBoxFil :valores="nroConsejeria" :valorInit="'Nro de Consejería'"></ComboBoxFil>
            <BotonVue :color="'#198754'" :hovercolor="'#f8f9fa'" :title="'Filtrar'"></BotonVue>
        </div>
    </div>
</template>

<script>
import EntradaImg from '@/components/atomic/EntradaImg.vue';
import LabelImg from '@/components/atomic/LabelImg.vue';
import ComboBoxFil from '@/components/atomic/ComboBoxFil.vue';
import BotonVue from '@/components/atomic/BotonVue.vue';

export default {
  name: 'filter-component',
  props: {
    label: String,
    placeholder: String,
    nombre: String,
    type: String
  },
  data() {
  
  return {
    nroConsejeria:[
      { id: 1, valor:  "1" },
      { id: 2, valor: "2" },
      { id: 3, valor: "3" }
      ]
    }
  },
  components:{
    EntradaImg,
    LabelImg,
    ComboBoxFil,
    BotonVue,
  },
  methods: {
    realizarConsulta(terminoBusqueda) {
      console.log('Realizando consulta con:', terminoBusqueda);
    },
    agregarConsulta(terminoBusqueda) {
      console.log('Presionando PLUS:', terminoBusqueda);
    }
  }
}
</script>


<style lang="scss" scoped>

  .container{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    max-width: none;
    padding-top: 5px;
    padding-bottom: 5px;
    //padding-left: 15px;
    //padding-right: 15px;
    width: 100%;
  }

    .lbl{
      justify-self: start;
      align-self: start;
      align-items: start;
      grid-area:lbl;
      font-weight: 600;
      font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
      padding-bottom:5px ;
    }

    .ipt{
        grid-area:ipt;
        border: 1.5px solid #5B5D6B;
        border-radius: 5px;
        width: 100%;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
        padding-left:5px ;
        height: 45px;
    }

    .ctnIpt {
        width: 100%;
        display: grid;
        grid-template-columns: 100%; 
        grid-template-areas:
            "lbl"
            "ipt"
            ; 
    }
</style>
  