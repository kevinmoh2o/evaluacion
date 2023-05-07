<template>
    <div class="pantalla-menu">

        <Navbar class="cabeceramen" :estadoTitulo="true" :estadoFlecha="true" :titulo="'Plataforma Virtual'" @volver="onBack()"></Navbar>

        <MenuCard class="card1" :titulo="'Agenda'" @clickbutton="clickbutton(1)"></MenuCard>
    
        <MenuCard class="card2" :titulo="'Temas de Consejeria'" @clickbutton="clickbutton(2)"></MenuCard>

        <MenuCard class="card3" :titulo="'Registro de Cuidadores'" @clickbutton="clickbutton(3)"></MenuCard>

        <MenuCard class="card4" :titulo="'Equipos de Trabajo'" @clickbutton="clickbutton(4)"></MenuCard>
 
    </div>

</template>

<script>
import Navbar from '../components/Navbar.vue';
import MenuCard from '@/components/MenuCard.vue';
import { useRouter } from 'vue-router'

export default {
    setup() {
        const router = useRouter()
        return {

            router: router
        }
    },
    data() {


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
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    max-width: 100%;
}

.cabeceramen {
    height: 100px;
    padding: 0;

    margin: 0;
    //background-color: red;
}

.cuerpo-menu {
    background-image: url('https://www.semfyc.es/wp-content/uploads/2016/05/semFYC_Corazon.jpg');
    background-size: cover;
    background-position: center;
    flex: 1;
    background-size: cover;
    //opacity: 0.6; 
    //background-color: blue;
    z-index: 1; /* establecer un valor bajo para el z-index */

}


.card {
    margin: 10px;
    padding: 10px;
    background-color: rgba(0,0,0,0);
    border-color: transparent;
    > * {
        opacity: 1;
    }
}

@media screen and (min-width: 768px) {
    .card-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 20px;
        height: 100%;
        
    }
}
</style> -->