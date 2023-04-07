<template>
    <nav class="navbar bg-amarillo">
        <div class="d-flex" >
            <button class="btn btn-outline-info mx-2" v-if="estadoFlecha">
                <i class="fa fa-arrow-left"></i>
            </button>
        </div>

        <a v-if="estadoTitulo" class="navbar-brand text-white">
            DAYBOOK
        </a>

        <div class="d-flex">
            <img src="@/assets/logo.png" alt="Vue Logo" height="50" class="d-inline-block align-text-top mx-2">
        </div>
    </nav>
    <nav class="navbar bg-azul">
        <a class="navbar-brand text-white">
        </a>
    </nav>
</template>

<script>
export default {
  props:{
    estadoTitulo:Boolean,
    estadoFlecha:Boolean,

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