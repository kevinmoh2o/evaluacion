<template>
    <div  ></div>
    <div class="background-image"></div>
    <div class="mainContMenu" >
        <div class="cabeceraMenu">
            <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="'Plataforma Virtual'"
            @volver="onBackHandle"
            ></Navbar>
        </div>
            <div class="card1">
                <MenuCard :titulo="'Agenda'" @clickbutton="handlePress(1)" :idCard="idParent"></MenuCard>
            </div>
            <div class="card2">
                <MenuCard :titulo="'Temas de Consejeria'" @clickbutton="handlePress(2)" :idCard="idParent"></MenuCard>
            </div>
            <div class="card3">
                <MenuCard :titulo="'Registro de Cuidadores'" @clickbutton="handlePress(3)" :idCard="idParent"></MenuCard>
            </div>
            <div class="card4">
                <MenuCard :titulo="'Equipos de Trabajo'" @clickbutton="handlePress(4)" :idCard="idParent"></MenuCard>
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
            switch (val) {
                case 1:
                    this.$router.push('/agenda');
                    break;
                case 2:
                    this.$router.push('/');
                    break;
                case 3:
                    this.$router.push('/');
                    break;
                case 4:
                    this.$router.push('/');
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


/* .background-image{
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    height: calc(100vh - 90px);
    background-image: url('https://www.semfyc.es/wp-content/uploads/2016/05/semFYC_Corazon.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.45;
} */
.mainContMenu {
    display: grid;
    
    //gap: 10px;
    height: 100vh;
    background-color:transparent ;
    grid-template: 
        "cabeceraMenu cabeceraMenu cabeceraMenu cabeceraMenu cabeceraMenu" 90px
        ". card1 . card2 ." 1fr
        ". card3 . card4 ." 1fr/
        1fr 1fr 1fr 1fr 1fr
        ;
}

.cabeceraMenu {
    grid-area:cabeceraMenu;
    padding: 0;
    margin: 0;
}

.card1{
    grid-area:card1;
    align-items: center;
    text-align: center;
    align-content: center;
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