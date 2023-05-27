<template>
  <div class="containernav">
  
    
        <div class="boton" >
            <button class="btn btn-outline-info mx-2" v-if="estadoFlecha" @click="$emit('volver')">
                <i class="fa fa-arrow-left"></i>
            </button>
        </div>

        <div class="texto" >
          <a v-if="estadoTitulo" class="navbar-brand text-white">
            {{ titulo }}
        </a>
        </div>
        

        <div class="imagen">
            <img src="@/assets/logo.png" alt="Vue Logo" height="50" class="d-inline-block align-text-top mx-2">
        </div>
    
      <nav class="linea">
          
      </nav>
  </div>
    
</template>

<script>
export default {
  name: 'navbar-component',
  props:{
    estadoTitulo:Boolean,
    estadoFlecha:Boolean,
    titulo:String

  },
    setup() {

    },
    components: {

    }
}
</script>


<style lang="scss" scoped>
$color-amarillo: #F2B749;
$color-azul: #1B62BF;
$color-blanco:#f8f9fa;

.containernav >*{
    //box-shadow: -1px -1px 7px 0px rgba(0, 0, 0, 0.75);
    //border-radius: 4px;
    padding: 10px;
    text-align: center;
    background-color: $color-amarillo;
    
}
.boton{
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: $color-amarillo;
  grid-area: boton;
}
.linea{
  background-color:$color-azul;
  width: 100%;
  height: 10px;
  grid-area: linea;
}

.texto{
  grid-area: texto;
}

.imagen{
  grid-area: imagen;
}


.containernav {
    display: grid;
  
    grid-template: 
        "boton texto imagen" 70px
        "linea linea linea" 10px /
        100px auto 200px;
}



/* @media (min-width:900px){
    .containernav{
        grid-template:
        "boton texto imagen" 70px
        "linea linea linea" 10px/
        auto auto auto;
    }
} */

.navbar-brand {
    display: block;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
}



button.btn {
  &.btn-outline-info {
    color: $color-azul;
    border-color: $color-azul;
    inline-size: 70px;
    size-adjust: 50px;
    border: 2px solid $color-azul;

    &:hover {
      background-color: $color-blanco;
      color: $color-blanco;
    }
    
    i.fa {
      color: $color-azul;
    }
  }
  
  background-color: $color-amarillo;
}
</style>