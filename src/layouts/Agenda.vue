<template>
    <div class="pantalla-agenda">
        <div class="cabecera-agenda">
            <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="'Agenda'"></Navbar>
        </div>
        <div class="cuerpo-agenda">
            <div class="card-container">
                
            </div>
        </div>
    </div>

</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
    data() {


    },
    components: {
        Navbar,

    }
}
</script>

<style lang="scss" scoped>
.pantalla-agenda {
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

.cabecera-agenda {
    height: 100px;
    padding: 0;

    margin: 0;
    /* establece la altura fija del primer div */
    //background-color: red;
}

.cuerpo-agenda {

    background-size: cover;
    background-position: center;
    flex: 1;
    background-size: cover;
 
    /* indica que el segundo div debe tomar todo el espacio disponible */
    //background-color: blue;

}


</style>