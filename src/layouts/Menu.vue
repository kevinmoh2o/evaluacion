<template>
    <div class="pantalla-menu">
        <div class="cabecera-menu">
            <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="'Plataforma Virtual'"></Navbar>
        </div>
        <div class="cuerpo-menu">
            <div class="card-container">
                <div class="card">
                    <MenuCard :titulo="'AA'"></MenuCard>
                </div>
                <div class="card">
                    <MenuCard :titulo="'Temas de Consejeria'"></MenuCard>
                </div>
                <div class="card">
                    <MenuCard :titulo="'Registro de Cuidadores'"></MenuCard>
                </div>
                <div class="card">
                    <MenuCard :titulo="'Equipos de Trabajo'"></MenuCard>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Navbar from '../components/Navbar.vue';
import MenuCard from '@/components/MenuCard.vue';

export default {
    data() {


    },
    components: {
        Navbar,
        MenuCard,

    }
}
</script>

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

.cuerpo-menu {
    background-image: url('https://www.semfyc.es/wp-content/uploads/2016/05/semFYC_Corazon.jpg');
    background-size: cover;
    background-position: center;
    flex: 1;
    background-size: cover;
    opacity: 0.6; 
    /* indica que el segundo div debe tomar todo el espacio disponible */
    //background-color: blue;
    z-index: 1; /* establecer un valor bajo para el z-index */

}


.card {
    margin: 10px;
    padding: 10px;
    background-color: rgba(0,0,0,0);
    border-color: transparent;
    /* Establecer la opacidad solo para el contenido de la card */
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
</style>