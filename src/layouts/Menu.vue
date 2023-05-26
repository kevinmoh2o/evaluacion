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

export default {
    name: 'menu-layout',
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

    }
}
</script>

<style lang="scss" scoped>


.background-image{
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
}
.mainContMenu {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Dos columnas de igual tamaño */
    grid-template-rows: auto 1fr 1fr; /* Tres filas: cabecera, card1, card2, card3 y card4 */
    gap: 10px;
    height: 100vh;
    background-color:transparent ;
    grid-template: 
        "cabeceraMenu cabeceraMenu"
        "card1 card2"
        "card3 card4"
        ;
}

.cabeceraMenu {
    grid-area:cabeceraMenu;
}

.card1{
    grid-area:card1;
}
.card2{
    grid-area:card2;
}
.card3{
    grid-area:card3;
}
.card4{
    grid-area:card4;
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
    z-index: 1; 

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


</style>