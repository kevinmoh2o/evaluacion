<template>
  <div class="col-10 col-md-8 col-lg-8 col-xl-8 col-xxl-8 btn"  @click.prevent="$emit('clickbutton')">
    <div class="row g-0 border border-warning rounded overflow-hidden flex-md-row m-1 shadow-sm position-relative align-items-center h-145"  style="background: linear-gradient(to right, #1B62BF, #F2B749);">
      <div class="col-8 p-0 d-flex flex-column position-static">
        <h5 class="m-2 p-0 text-light">{{titulo}}</h5>
      </div>
      <div class="col-4 h-100 d-flex justify-content-center align-items-center" style="background-color: white;">
          <img class="m-3" :src="require(`@/assets/menu/${ruta}.png`)" alt="Imagen PNG" width="70" height="70">
      </div>
    </div>
  </div>

</template>

<script>

export default {
    props:{
        idCard: Number,
        titulo:String,
        ruta: {
            type: String,
            default: "calendario" 
        },
    },
    created() {
        console.log("ruta",this.ruta);
    }, 
    data() {
        return {
            cards: [
                
            ]
        }
    },
    components: {
        
    },
    methods:{
        presionar() {
            console.log("id hijo",this.idCard)
            this.$emit('presionado');
        },
        clickbutton(val) {
            console.log(val)
            console.log('Se ha hecho clic en la tarjeta del menú');
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../../styles/styles.scss';

.h-145 {
  height: 145px;
}

</style>

   <!--  <div class="menu">
        <div class="card"  @click.prevent="$emit('clickbutton')">
            <div class="cabeza">
                <img class="imgClass" :src="require(`@/assets/menu/${ruta}.png`)" alt="Imagen PNG">
            </div>
            <div class="cuerpo" >
                <h2 class="titulo">{{titulo}}</h2>
            </div>
        </div>
    </div> -->
    <!-- <div class="container px-4 py-5" id="custom-cards"> -->
    <!-- <h2 class="pb-2 border-bottom">Custom cards</h2> -->

    <!-- <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col"> -->
        <!-- <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-color: red;">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg>
                <small>Earth</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg>
                <small>3d</small>
              </li>
            </ul>
          </div> -->
        <!-- </div>
      </div> -->

    
    <!-- </div> -->
  <!-- </div> -->