<template>
  <nav class="navbar-container" aria-label="Second navbar example">
    <div class="superior">
      <div class="caja1">
        <button class="btn btn-outline-info" v-if="estadoFlecha" @click="$emit('volver')">
          <i class="fa fa-arrow-left"></i>
        </button>
      </div>

      <div class="caja2">
        <a v-if="estadoTitulo" class="estiloA"
          style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
          {{ titulo }}
        </a>
      </div>

      <div class="caja3" style="display: flex; flex-direction: column; justify-content: center; align-items: center;background-color: #fff;">
        <img class="d-none d-sm-block" src="@/assets/logo2.png" alt="Vue Logo" height="70">
        <img class="d-block d-sm-none" src="@/assets/logo3.png" alt="Vue Logo" height="70">
      </div>

    </div>
    <!-- <div class="row"> -->
      <div class="linea">
      </div>
    <!-- </div> -->
  </nav>
</template>

<script>
export default {
  name: 'navbar-component',
  props: {
    estadoTitulo: Boolean,
    estadoFlecha: Boolean,
    titulo: String

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
$color-blanco: #f8f9fa;


.navbar-container{
  width: 100vw;
}

button{
    transition: all .55s ease;
}

button:hover{
    transform: translateX(10px);
}


a{
  color: $color-blanco;
}

.estiloA{
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
}


@media (max-width:500px){
  .caja2{
    width: 200px;
    a{
      max-lines: 2;
      
    }
  }

  
  }


nav .superior{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  background: $color-amarillo ;
}

.superior .caja1{
  justify-items: center;
  margin: 0 10px 0 10px;
}

.superior{
  align-items: center;
}

.btn-200 {
  width: 200px;
}

.containernav>* {
  //box-shadow: -1px -1px 7px 0px rgba(0, 0, 0, 0.75);
  //border-radius: 4px;
  padding: 10px;
  text-align: center;
  background-color: $color-amarillo;

}

.boton {
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: $color-amarillo;
  grid-area: boton;
}

.linea {
  background-color: $color-azul;
  width: 100%;
  height: 10px;
  grid-area: linea;
}

.texto {
  grid-area: texto;
  padding: 0;
  color: white;
}


.imagen {
  background-color: #f2b749da;
  grid-area: imagen;
  padding: 0;
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


button.btn {
  &.btn-outline-info {
    border-radius:10px;
    color: $color-azul;
    //border-color: var(--light);
    inline-size: 70px;
    size-adjust: 50px;
    border: 2px solid var(--light);

    &:hover {
      //background-color: $color-blanco;
      //color: $color-blanco;
    }

    i.fa {
      color: var(--light);
      font-size: 20px;
      font-weight: 700;
      transition: all .55s ease;
      &:hover{
        font-size: 30px;
        font-weight: 700;
      }
    }
  }

  background-color: $color-amarillo;
}
</style>
