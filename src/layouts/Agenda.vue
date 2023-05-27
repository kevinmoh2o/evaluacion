<template>
    <div class="mainAgenda">
      
            <Navbar class="cabeceraAgenda"
            :estadoTitulo="true" :estadoFlecha="true" :titulo="'Agenda'"
            @volver="onBackHandle"></Navbar>
        
        <div class="booksContainer">
            
                <Books class="books"></Books>
          
        </div>
    </div>

</template>

<script>
import Navbar from '../components/Navbar.vue';
import { defineAsyncComponent } from 'vue'


export default {
    name: 'agenda-layout',
    data() {


    },
    components: {
        Navbar,
        Books: defineAsyncComponent(() => import('../modules/agenda/Books.vue')),

    },
    methods:{
        onBackHandle(){
            this.$router.push('/menu');
        }
    }
}
</script>

<style lang="scss" scoped>


.mainAgenda {
        display: grid;
        
        //gap: 10px;
        height: 100vh;
        background-color:transparent ;
        grid-template: 
            "cabeceraAgenda " 100px
            "booksContainer" 1fr/
            1fr             ;
    }


@media (min-width:700px){
    .mainAgenda {
        display: grid;
        
        //gap: 10px;
        height: 100vh;
        background-color:transparent ;
        grid-template: 
            "cabeceraAgenda cabeceraAgenda cabeceraAgenda cabeceraAgenda cabeceraAgenda cabeceraAgenda" 100px
            ". booksContainer booksContainer booksContainer booksContainer ." 1fr/
            1fr 1fr 1fr 1fr 1fr 1fr
            ;
    }
}

.cabeceraAgenda{
    grid-area:cabeceraAgenda;
    
}

.booksContainer{
    grid-area:booksContainer;
    max-width: 1000px;
    align-content: center;
    align-items: center;
    text-align: center;
}








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