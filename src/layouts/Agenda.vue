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
                <Books class="books"></Books>
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
            //userProv: {}
        }
    },
    components: {
        Navbar,
        Books: defineAsyncComponent(() => import('../modules/agenda/Books.vue')),
        CalendarioFilter: defineAsyncComponent(() => import('@/components/compose/CalendarioFilter.vue')),

    },
    methods: {
        ...mapActions('programacionModule', ['transactionUserPeople', 'listPacienteCuidador']),
        ...mapGetters('programacionModule', ['getTranUserPeople', 'getUsuarioPersonaList', 'getUser']),
        onBackHandle() {
            this.$router.push('/menu-main');
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-tag{
    height: 80px;
}

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
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    justify-content: center;
}



.books {
    margin: 10px;
    //width: calc(100vw - 400px);
}


@media only screen and (max-width: 767px) {
    .cuerpo {
        //background-color: #87f249;
        margin: 0;
        padding: 10px;
        display: flex;
        text-align: start;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: start;
        overflow-x: hidden;
    }

    .fitro-calendario {
        display: none;
    }

}


</style>