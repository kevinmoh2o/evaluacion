<template>
    <div class="background-image"></div>
    <div class="contenedor">

            <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="'Plataforma Virtual'"
            @volver="onBackHandle"
            ></Navbar>

            <div class="menu-general">
                <div class="card1">
                    <MenuCard :titulo="'AGENDA'" :ruta="link1" @clickbutton="handlePress(1)" :idCard="idParent"></MenuCard>
                </div>
                <div class="card1">
                    <MenuCard :titulo="'TEMAS DE CONSEJERIA'" :ruta="link2" @clickbutton="handlePress(2)" :idCard="idParent"></MenuCard>
                </div>
                <div class="card1">
                    <MenuCard :titulo="'REGISTRO DE CUIDADORES'" :ruta="link3" @clickbutton="handlePress(3)" :idCard="idParent"></MenuCard>
                </div>
                <div class="card1">
                    <MenuCard :titulo="'EQUIPOS DE TRABAJO'" :ruta="link4" @clickbutton="handlePress(4)" :idCard="idParent"></MenuCard>
                </div>
            </div>        
            
    </div>
   

</template>

<script>
import Navbar from '../components/compose/Navbar.vue';
import MenuCard from '@/components/compose/MenuCard.vue';

export default {
    name: 'menu-layout',
    data() {
        return {
        idParent:0,
        link1:"calendario",
        link2:"chat",
        link3:"cuidador",
        link4:"equipo",
        }

    },
    methods:{
        handlePress(val){
            this.idParent=val
            console.log("val parent",val);
            switch (val) {
                case 1:
                    this.$router.push('/agenda');
                    break;
                case 2:
                    this.$router.push('/tema-consejeria');
                    break;
                case 3:
                    this.$router.push('/registro-consejeria');
                    break;
                case 4:
                    this.$router.push('/about-us');
                    break;
                default:
                    break;
            }

        },
        onBackHandle(){
            this.$router.push('/');
        }
    },  
    components: {
        Navbar,
        MenuCard,

    }
}
</script>

<style lang="scss" scoped>

.contenedor{
    
    height: auto;
}
.menu-general{
    display: flex;
    flex-direction: row;
    align-content: space-evenly;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
}



.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://www.semfyc.es/wp-content/uploads/2016/05/semFYC_Corazon.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.45;
  z-index: -1; /* Coloca la imagen de fondo detrás de todo */
}


.cabeceraMenu {
    grid-area:cabeceraMenu;
    padding: 0;
    margin: 0;
}

.card1{
    //padding: 0;
    display: flex;
    margin: 30px 15px 15px 15px;
    //grid-area:card1;
    align-items: center;
    text-align: center;
    align-content: center;
    justify-content: center;
    width: 300px;
}

.card2{
    padding: 0;
    display: flex;
    grid-area:card2;
    align-items: center;
    text-align: center;
    align-content: center;
    justify-content: center;
}
.card3{
    padding: 0;
    display: flex;
    grid-area:card3;
    align-items: center;
    text-align: center;
    align-content: center;
    justify-content: center;
}
.card4{
    padding: 0;
    display: flex;
    grid-area:card4;
    align-items: center;
    text-align: center;
    align-content: center;
    justify-content: center;
}


/* .mainContMenu {
        display: grid;
        height: 100vh;
        background-color:transparent ;
        grid-template: 
            "cabeceraMenu  cabeceraMenu" auto
            " card1  card2 " 250px
            " card3  card4 " 250px/
            1fr 1fr  
            ;
    }
 */

/* @media (min-width:650px){
    .background-image{
        position: absolute;
        top: 90px;
        left: 0;
        width: 100%;
        height: calc(100vh - 90px);
        background-image: url('https://www.semfyc.es/wp-content/uploads/2016/05/semFYC_Corazon.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.4;
    }

    .mainContMenu {
        display: grid;
        height: 100vh;
        background-color:transparent ;
        grid-template: 
            "cabeceraMenu cabeceraMenu" auto
            " card1  card2 " 1fr
            " card3  card4 " 1fr/
            1fr 1fr 
            ;
    }
    
    
} */
</style>