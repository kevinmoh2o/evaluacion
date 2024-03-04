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

            <div class="tamanio">
                <Books class="books" :userProv="userProv"></Books>
            </div>

        </div>
    </div>
</template>

<script>
import Navbar from '../components/compose/Navbar.vue';
import { defineAsyncComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'agenda-layout',
    /* async mounted() {
        this.userProv = this.getUser();
        console.log("userProv mounted: ",userProv);
    }, */
    data() {
        return {
            userProv:{}
        }
    },
    components: {
        Navbar,
        Books: defineAsyncComponent(() => import('../modules/agenda/Books.vue')),
        CalendarioFilter: defineAsyncComponent(() => import('@/components/compose/CalendarioFilter.vue')),

    },
    methods: {
        ...mapActions('programacionModule', ['transactionUserPeople','listUserPersona']),
        ...mapGetters('programacionModule', ['getUserProvider','getTranUserPeople','getUsuarioPersonaList','getUser']),
        onBackHandle() {
            this.$router.push('/menu');
        }
    }
}
</script>

<style lang="scss" scoped>
.tamanio {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100vw - 310px);
}



.contenedor {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

button i {
    padding: 5px;
}

select {
    width: 270px;
}

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
    box-shadow: #F2B749;
    border-color: #F2B749;
    color: #F2B749;
}

.boton {
    width: 90%;
    height: 30px;
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
    //background-color: #87f249;
    margin: 0;
    padding: 0;
    display: flex;
    text-align: start;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: start;
    flex-grow: 1;
    height: 100%;
    width: 100vw;
}


@media only screen and (max-width: 767px) {
    .cuerpo {
        //background-color: #87f249;
        margin: 0;
        padding: 0;
        display: flex;
        text-align: start;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: start;
    }
}


.selector {
    margin: 10px 0 10px 0;
    width: 90%;
    height: 30px;
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
    //background-color: aqua;

}



.books {
    margin: 10px;
    //width: calc(100vw - 400px);
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