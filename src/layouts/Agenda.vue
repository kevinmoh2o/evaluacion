<template>
    <div class="contenedor">
        <Navbar class="nav-tag" :estadoTitulo="true" :estadoFlecha="true" :titulo="'Agenda'" @volver="onBackHandle">
        </Navbar>

        <div class="cuerpo">
            <div class="fitro-calendario">
                <CalendarioFilter></CalendarioFilter>
                <div class="selector">
                    <select class="form-select" id="validationCustom10" required>
                        <option selected disabled value="">Seleccionar cuidador</option>
                        <option value="2">Juan</option>
                        <option value="3">Pedro</option>
                        <option value="3">Lucas</option>
                        <option value="3">Alberto</option>
                    </select>
                    <div class="invalid-feedback">
                        Seleccione un valor.
                    </div>
                </div>
                <button class="btn boton" type="submit"><i class="fas fa-search"></i>Buscar</button>
            </div>

            <Books class="books"></Books>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/compose/Navbar.vue';
import { defineAsyncComponent } from 'vue'


export default {
    name: 'agenda-layout',
    data() {


    },
    components: {
        Navbar,
        Books: defineAsyncComponent(() => import('../modules/agenda/Books.vue')),
        CalendarioFilter: defineAsyncComponent(() => import('@/components/compose/CalendarioFilter.vue')),

    },
    methods: {
        onBackHandle() {
            this.$router.push('/menu');
        }
    }
}
</script>

<style lang="scss" scoped>
.contenedor {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

button i {
    padding: 5px;
}

/* @media (min-width:750px){
    .cuerpo{
        display: flex;
        width: 100%;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
    }

    .books{
        width: 100%;
    }
} */

.form-select {
    text-align: center;
}

.form-select:hover {
    //background-color: #eaeaea;
    //color: #333;
    border: 1px solid #F2B749;
    ;

}

.form-select:focus {
    outline: 2px solid #F2B749;
    ;
    /* Puedes ajustar el color y el grosor según tus preferencias */
    box-shadow: #F2B749;
    border-color: #F2B749;
    color: #F2B749;
}

.boton {
    width: 90%;
    border-radius: 10px;
    background-color: #F2B749;
    color: white;
    transition: all .55s ease;
    align-self: center;
}

.boton:hover {
    transform: translateX(-10px);
    //border-bottom-color: red !important;;
}

.cuerpo {
    display: flex;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    //height: calc(100vh - 60px);
    //width: 600px;
    justify-content: center;
    flex-grow: 1;
    height: 100%;
    width: 100vw;
}


.selector {
    margin: 10px 0 10px 0;
    width: 90%;
    display: flex;
    align-content: center;
    align-items: center;
    align-self: center;
    text-align: center;
    justify-content: center;
    justify-items: center;
}

.fitro-calendario {

    //padding: 10px;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    justify-content: center;

}



/* .books{
    width: calc(100vw - 400px);
} */
/* .cabeceraAgenda{
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
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    max-width: 100%;
}

.cabecera-agenda {
    height: 100px;
    padding: 0;
    margin: 0;
}

.cuerpo-agenda {

    background-size: cover;
    background-position: center;
    flex: 1;
    background-size: cover;
}
 */
</style>