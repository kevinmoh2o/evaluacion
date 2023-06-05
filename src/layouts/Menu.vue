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
                <MenuCard :titulo="'Agenda'" :ruta="link1" 
                @clickbutton="handlePress(1)" :idCard="idParent"></MenuCard>
            </div>
            <div class="card2">
                <MenuCard :titulo="'Temas de Consejeria'" :ruta="link2" 
                @clickbutton="handlePress(2)" :idCard="idParent"></MenuCard>
            </div>
            <div class="card3">
                <MenuCard :titulo="'Registro de Cuidadores'" :ruta="link3" 
                @clickbutton="handlePress(3)" :idCard="idParent"></MenuCard>
            </div>
            <div class="card4">
                <MenuCard :titulo="'Equipos de Trabajo'" :ruta="link4" 
                @clickbutton="handlePress(4)" :idCard="idParent"></MenuCard>
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
                    this.$router.push('/');
                    break;
                case 3:
                    this.$router.push('/consejeria');
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


.background-image{
    position: absolute;
    top: 113px;
    left: 0;
    width: 100%;
    height: calc(100vh - 113px);
    background-image: url('https://www.semfyc.es/wp-content/uploads/2016/05/semFYC_Corazon.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.45;
}
.mainContMenu {
        display: grid;
        height: 100vh;
        background-color:transparent ;
        grid-template: 
            "cabeceraMenu  cabeceraMenu" 120px
            " card1  card2 " 250px
            " card3  card4 " 250px/
            1fr 1fr  
            ;
    }


@media (min-width:650px){
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
            "cabeceraMenu cabeceraMenu" 100px
            " card1  card2 " 1fr
            " card3  card4 " 1fr/
            1fr 1fr 
            ;
    }
    
    
}

.cabeceraMenu {
    grid-area:cabeceraMenu;
    padding: 0;
    margin: 0;
}

.card1{
    display: flex;
    grid-area:card1;
    align-items: center;
    text-align: center;
    align-content: center;
    justify-content: center;
}
.card2{
    display: flex;
    grid-area:card2;
    align-items: center;
    text-align: center;
    align-content: center;
    justify-content: center;
}
.card3{
    display: flex;
    grid-area:card3;
    align-items: center;
    text-align: center;
    align-content: center;
    justify-content: center;
}
.card4{
    display: flex;
    grid-area:card4;
    align-items: center;
    text-align: center;
    align-content: center;
    justify-content: center;
}


</style>