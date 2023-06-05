<template>
    <div class="menu">
        <div class="card"  @click.prevent="$emit('clickbutton')">
            <div class="cabeza">
                <img class="imgClass" :src="require(`@/assets/menu/${ruta}.png`)" alt="Imagen PNG">
            </div>
            <div class="cuerpo" >
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

    .card{
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
    /* box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3); */
    background-color: transparent;
}
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* width: 100%; */
  /* height: 100%; */
}

</style>