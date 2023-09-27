<template>
  <div class="col-10 col-md-8 col-lg-8 col-xl-8 col-xxl-8 btn"  @click.prevent="$emit('clickbutton')">
    <div class="row g-0 border rounded overflow-hidden flex-md-row m-1 shadow-sm position-relative align-items-center"  style="background: linear-gradient(to right, #1B62BF, #F2B749);">
      <div class="col p-0 d-flex flex-column position-static">
        <h5 class="m-2 p-0 text-light">{{titulo}}</h5>
      </div>
      <div class="col-auto" style="background-color: white;">
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

    /* .card{
        width: 150px;
        margin:0 ;
        height: 200px;
        border-radius: 15px;
        box-shadow: -1px 1px 5px 0px rgba(0, 0, 0, 0.75);
        background-color: #fff;
        display: grid;
        grid-template: 
            "cabeza"130px
            "cuerpo"50px/
            auto
            ;
    }


    @media (min-width:650px){
        .card{
            width: 200px;
            margin:0 ;
            height: 200px;
            border-radius: 15px;
            box-shadow: -1px 1px 5px 0px rgba(0, 0, 0, 0.75);
            background-color: #fff;
            display: grid;
            grid-template: 
                "cabeza"130px
                "cuerpo"50px/
                auto
                ;
        }
        
    }

    .cabeza {
        display:flex;
        margin: 15px 20px 15px 20px;
        border-radius: 10px;
        grid-area: cabeza;
        align-content: center;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(to right, #ff9966, #ff5e62);
    }


.cuerpo{
    border-radius: 5px;
    height: 100%;
    display:flex;
    grid-area:cuerpo;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;
    margin: 20px 20px 20px 20px;
    background-image: linear-gradient(to right, #e6e6e6, #99939339);
}

.imgClass{
    width: 50px;
}

.titulo {
  font-weight: 500;
  font-family: sans-serif;
  font-size: 20px;
  text-align: center;
  margin: 0;
}

.menu:hover {
    opacity: 0.9;
    transform: scale(1.1);
    
    background-color: transparent;
}
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

} */

/* .feature-icon {
  width: 4rem;
  height: 4rem;
  border-radius: .75rem;
}

.icon-square {
  width: 3rem;
  height: 3rem;
  border-radius: .75rem;
}

.text-shadow-1 { text-shadow: 0 .125rem .25rem rgba(0, 0, 0, .25); }
.text-shadow-2 { text-shadow: 0 .25rem .5rem rgba(0, 0, 0, .25); }
.text-shadow-3 { text-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .25); }

.card-cover {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.feature-icon-small {
  width: 3rem;
  height: 3rem;
}


.blog-header-logo:hover {
  text-decoration: none;
}

.flex-auto {
  flex: 0 0 auto;
}

.blog-pagination {
  margin-bottom: 4rem;
}


.blog-post {
  margin-bottom: 4rem;
}
.blog-post-meta {
  margin-bottom: 1.25rem;
  color: #727272;
} */

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