<template>
    <div class="container">
        <div class="ctnIpt">
            <div class="imagen">
                <button class="btn resaltadoVerde " @click.prevent="emitEvento(valor)" data-toggle="tooltip" title="Guardar">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <input class="ipt" :placeholder= "placeholder"  v-model="valor"/>              
        </div>
    </div>
</template>

<script>
export default {
  name: 'entrada-img-component',
  props: {
    placeholder: String,
  },
  methods:{
    emitEvento(element) {
      this.$emit('buscar', element);
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
    padding: 0px 0px 0px 0px;
    width: 100%;
  }

  .imagen {
    grid-area:imagen;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
    .ipt{
      text-align: center;
        background-color: rgb(111, 140, 193);
        grid-area:ipt;
        border: 2px solid transparent;
        border-radius: 7px ;
        color: white;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
        padding-left: 10px ;
        height: 45px;
    }

    .ipt::placeholder {
        color: #fff;
    }

    .ipt:focus {
        color: black;
        border-color: red !important;
        background-color: rgb(240, 243, 247);
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

    .ipt::placeholder {
        color: rgb(219, 206, 206);
    }

    /* Estilo del placeholder cuando el input está enfocado */
    .ipt:focus::placeholder {
        color: gray;
    }
</style>
  