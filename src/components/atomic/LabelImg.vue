<template>
    <div class="container">
        <div class="ctnIpt">
            <div class="imagen">
                <button class="btn resaltadoVerde " @click.prevent="emitEvento()" data-toggle="tooltip" title="Guardar">
                    <i :class="`fa-solid ${iconName}`"></i>
                </button>
            </div>
            <label class="ipt">{{ title }}</label>              
        </div>
    </div>
</template>

<script>
export default {
  name: 'lbl-img-component',
  props: {
    title: String,
    iconName: {
      type: String,
      required: true
    }
  },
  methods:{
    emitEvento() {
      this.$emit('agregar', "agregando");
    }
  },
  data() {
    return {
      valor: '',
    }
  },
}
</script>


<style lang="scss" scoped>
@import '@/styles/styles.scss';
  .container{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    max-width: none;
    width: 100%;
    padding: 0px 0px 0px 0px;
  }

  .imagen {
    grid-area:imagen;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
    .ipt{
        //background-color: rgb(111, 140, 193);
        display: flex;
        grid-area:ipt;
        align-content: center;
        align-items: center;
        align-self: center;
        text-align: center;
        justify-content: center;
        border-radius: 7px ;
        color: white;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
        padding-left: 10px ;
        height: 45px;
    }



    .ctnIpt {
        border: 1.5px solid #ffffff00;
        //padding: 5px;
        border-radius: 7px;
        background-color: map-get($theme-colors, "azul");
        width: 100%;
        display: grid;
        grid-template-columns: 100%; 
        grid-template:
            "ipt imagen"45px/
            auto 50px
            ; 
    }

    i{
        height: 100%;
        width: 100%;
        font-size: 20px;
        align-content: center;
        align-items: center;
        align-self: center;
        justify-content: center;
        justify-self: center;
        display: flex;
    }

    .resaltadoVerde {
        height: 100%;
        font-size: 25px;
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
        color: #ffffff;
        
    }

    .resaltadoVerde:hover {
        opacity: 0.9;
        //background-color: #ffffff;
        color:map-get($theme-colors, "amarillo");
    }


</style>
  