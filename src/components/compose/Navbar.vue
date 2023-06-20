<template>
  <div class="containernav">
  
    
        <div class="boton" >
            <button class="btn btn-outline-info mx-2" v-if="estadoFlecha" @click="$emit('volver')">
                <i class="fa fa-arrow-left"></i>
            </button>
        </div>

        <div class="texto" >
          <a v-if="estadoTitulo" class="navbar-brand">
            {{ titulo }}
          </a>
        </div>
        

        <div class="imagen">
            <img src="@/assets/logo2.png" alt="Vue Logo" height="70">
        </div>
    
      <div class="linea">
          
      </div>
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
  padding: 0;
  color: white;
}


.imagen{
  background-color: #f2b749da; 
  grid-area: imagen;
  padding: 0;
}


.containernav {
  display: grid;
  grid-template: 
    "boton imagen imagen" 70px
    "boton texto texto" 22.5px
    "linea linea linea" 10px /
    100px auto auto;
}



@media (min-width:650px){
  .texto{
    padding: 10px;
    color: white;
  }
  .navbar-brand {
    font-size: 30px;
    display: block;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
  }
  .containernav {
    display: grid;
    grid-template: 
        "boton texto imagen" 70px
        "linea linea linea" 10px /
        100px auto 200px;
  }
}

.navbar-brand {
  padding: 0;
  margin: 0;
  /* font-size: 15px; */
  /* display: block; */
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
}

/* .styleTitulo{
  display: block;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
}
 */


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