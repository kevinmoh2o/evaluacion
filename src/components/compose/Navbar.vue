<template>
  <nav class="navbar-container" aria-label="Second navbar example">
    <div class="superior">
      <div class="caja1">
        <button class="boton" v-if="estadoFlecha" @click="$emit('volver')">
          <!-- <i class="fa fa-arrow-left"></i> -->
          <ion-icon name="arrow-back-circle-outline"></ion-icon>
        </button>
      </div>

      <div class="caja2">
        <a v-if="estadoTitulo" class="estiloA">
          {{ titulo }}
        </a>
      </div>

      <div class="caja3" style="display: flex; flex-direction: column; justify-content: center; align-items: center;background-color: #fff;">
        <!-- <img class="d-none d-sm-block" src="@/assets/logo2.png" alt="Vue Logo" height="70">
        <img class="d-block d-sm-none" src="@/assets/logo3.png" alt="Vue Logo" height="70"> -->
      </div>

    </div>
    <div class="linea">
      <a href=""></a>
    </div>

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


.boton{
  width: 65px;
  height: 65px;
  border: none;
  font-size: 50px;
  color: #ffffff;
  background-color: $color-amarillo;
}


/* .boton {
  align-items: center;
  justify-content: center;
  display: flex;
  
} */

.navbar-container {
  width: 100%;
  height: 70px;
  
}

button {
  transition: all .55s ease;
}

button:hover {
  transform: translateX(10px);
}


a {
  color: $color-blanco;
}

.estiloA {
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;

}

.caja2 {
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.caja2 a{
  text-align: center;
}


/* @media (max-width:740px) {
  .estiloA {
    font-size: 15px;
  }

  .caja3{
    width: 70px;
  }
} */


nav .superior {
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  background: $color-amarillo ;
  
}

.superior .caja1 {
  justify-items: center;
}

.superior {
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


.linea {
  background-color: $color-azul;
  width: 100%;
  height: 10px;
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
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
}


/* button.btn {
  &.btn-outline-info {
    border-radius: 10px;
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

      &:hover {
        font-size: 30px;
        font-weight: 700;
      }
    }
  }

  background-color: $color-amarillo;
} */
</style>
