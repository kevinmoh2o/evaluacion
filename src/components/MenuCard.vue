<template>
    <div class="menu">
        <div class="menu__card"  @click.prevent="$emit('clickbutton')">
            <div class="card__header">
                <!-- <img class="imgClass" src="@/assets/cita-medica.png" height="100"> -->
                <!-- <img class="imgClass" src="@/assets/menu/calendario.png" alt="Imagen PNG"> -->
                <img class="imgClass" :src="require(`@/assets/menu/${ruta}.png`)" alt="Imagen PNG">
            </div>
            <div class="card__body" >
                <h2 class="titulo">{{titulo}}</h2>
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
        /* this.licenciado ='Kevin Montañez Huamán';//"Pedro Laredo Chuquispuma"
        this.userId = 'kbmont'; */
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

@import '../styles/styles.scss';

$color-azul: #1B62BF;
$color-rojo:#dc3545;

.titulo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2; /* Número de líneas máximo */
  line-clamp: 2; /* Número de líneas máximo */
  margin-left: 10px;
  margin-right: 10px;
  justify-content: center; /* Alineación vertical al centro */
  text-align: center; /* Alineación horizontal al centro */
  width: 100%;
}

h2 {
    color: map-get($theme-colors, light);
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    align-items: cennter;
    align-items: center;
    max-lines: 2;
    justify-content: center;
    
}
.menu {
    background-color: transparent;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;



    &__card {
        width: calc(25% - 10px);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 0;
        position: relative;
        overflow: hidden;
        height: 200px;

        &__header {
            background-color: #0074D9;
            padding: 20px;
            border-radius: 10px 10px 0px 0px;
            align-items: center;
            height: 130px;

            
        }

        &__body {
            padding: 20px;

            p {
                color: #333333;
                font-size: 16px;
                margin: 0;
            }
        }
    }
}
//  

.imgClass{
    width: 50px;
}
.menu__card:hover {
    opacity: 0.9;
    transform: scale(1.1);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}
.menu__card{
    width: 100px;
    height: auto;
}


@media (min-width:650px){
    .card__header {
        background-color: #ecb1b590;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 130px;
    }
    .imgClass{
        width: 50px;
    }

    h2 {
        color: map-get($theme-colors, light);
        font-size: 18px;
        font-weight: bold;
        margin: 0;
        align-items: cennter;
        align-items: center;
        max-lines: 2;
        justify-content: center;
        
    }
    .menu__card{
        width: 200px;
        height: auto;
    }
}
.card__header {
  background-color: #ecb1b590;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
}

.card__body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  background-color: $color-rojo;
}

</style>