<template>
    <div  ></div>
    <div class="background-image"></div>
    <div class="mainContMenu" >
        <div class="cabeceraMenu">
            <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="'Plataforma Virtual'"></Navbar>
        </div>
            <div class="card1">
                <MenuCard :titulo="'Agenda'" @presionado="handlePress(1)" :idCard="idParent"></MenuCard>
            </div>
            <div class="card2">
                <MenuCard :titulo="'Temas de Consejeria'" @presionado="handlePress(2)" :idCard="idParent"></MenuCard>
            </div>
            <div class="card3">
                <MenuCard :titulo="'Registro de Cuidadores'" @presionado="handlePress(3)" :idCard="idParent"></MenuCard>
            </div>
            <div class="card4">
                <MenuCard :titulo="'Equipos de Trabajo'" @presionado="handlePress(4)" :idCard="idParent"></MenuCard>
            </div>
    </div>
    

</template>

<script>
import Navbar from '../components/Navbar.vue';
import MenuCard from '@/components/MenuCard.vue';
import { useRouter } from 'vue-router'

export default {
    data() {
        return {
        idParent:0,
        }

    },
    methods:{
        handlePress(val){
            this.idParent=val
            console.log("val parent",val);

        }
    },  
    components: {
        Navbar,
        MenuCard,

    },
    methods:{
        async onBack(){
            console.log("navegando")
            await this.router.push('/')
        },
        async clickbutton(valor){
            //console.log(valor)
            switch (valor) {
                case 1:
                    await this.router.push('/menu');
                    break;
                case 2:
                    await this.router.push('/agenda');
                    break;
                case 3:
                    await this.router.push('/crear-cuenta');
                    break;
            
                default:
                    await this.router.push('/about');
                    break;
            }
            
        }

    }
}
</script>

<style lang="scss" scoped>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.pantalla-menu >*{
    text-align: center;
    width: 100%;
}

.cabeceramen{
    grid-column: 1 / -1;
}

.card1{
    margin-top: 10px;
    margin-bottom: 10px;
}
.card2{
    margin-top: 10px;
    margin-bottom: 10px;
}
.card3{
    margin-top: 10px;
    margin-bottom: 10px;
}
.card4{
    margin-top: 10px;
    margin-bottom: 10px;
}
.pantalla-menu {
    display: grid;
    //gap: 10px;
    grid-template-areas: 
        "cabeceramen"
        "card1"
        "card2"
        "card3" 
        "card4";
}

@media (min-width:900px){
    .pantalla-menu{
        grid-template:
        "cabeceramen cabeceramen" 100px
        "card1 card2" auto
        "card3 card4" auto /
        50% 50% ;
    }
}
</style>
<!-- 
<style lang="scss" scoped>
.pantalla-menu {
    display: flex;
    /* activa el modo flexible en el contenedor */
    flex-direction: column;
    /* establece la dirección de los elementos en vertical */
    height: 100vh;
    /* establece la altura del contenedor al 100% de la pantalla */
    width: 100vw;
    padding: 0;
    margin: 0;
    max-width: 100%;
}

.cabecera-menu {
    height: 100px;
    padding: 0;

    margin: 0;
    /* establece la altura fija del primer div */
    //background-color: red;
}

.card1, .card2, .card3, .card4 {
  width: 100%; /* Ocupar todo el ancho disponible */
  height: 100%; /* Ocupar todo el alto disponible */
}
/* .cuerpo-menu {
    background-image: url('https://www.semfyc.es/wp-content/uploads/2016/05/semFYC_Corazon.jpg');
    background-size: cover;
    background-position: center;
    flex: 1;
    background-size: cover;
    opacity: 0.6; 
    /* indica que el segundo div debe tomar todo el espacio disponible */
    //background-color: blue;
    z-index: 1; /* establecer un valor bajo para el z-index */

} */


/* .card {
    margin: 10px;
    padding: 10px;
    background-color: rgba(0,0,0,0);
    border-color: transparent;
    > * {
        opacity: 1;
    }
} */

@media screen and (min-width: 768px) {
    .card-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 20px;
        height: 100%;
        
    }
}
</style>