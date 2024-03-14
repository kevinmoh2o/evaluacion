<template>
    <form class="formDP">
        <div class="cabecera">
            <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="titulo" @volver="onBackHandle"></Navbar>
        </div>
        <FilterHeader :lista="valorTabla"></FilterHeader>

        <div class="mentoria">
            <div class="participante" v-on:click="select(1)">
            </div>
            <div class="participante" v-on:click="select(2)">
            </div>
        </div>

        <div class="btn-contendor">
            <button type="button" class="btn btn-success estilo-btn" data-bs-dismiss="modal">
                Registrar Consejería
            </button>
        </div>

    </form>

    <!-- <div class="pacusr">
        <CardPacCui :nombrePac="'Kevin Montañez'" :nombreCon="'Arturo Genesis'" :consejeria="'2'"></CardPacCui>
        <CardPacCui :nombrePac="'Erik Yepes'" :nombreCon="'Fernando Manrique'" :consejeria="'3'"></CardPacCui>
        <CardPacCui :nombrePac="'Roberth García'" :nombreCon="'Jorge Bolañoz'" :consejeria="'7'"></CardPacCui>
        <CardPacCui :nombrePac="'Gustavo Olivos'" :nombreCon="'Gustavo Martinez'" :consejeria="'10'"></CardPacCui>
    </div> -->
    <!-- <CardOne></CardOne> -->

</template>


<script>
import Navbar from '@/components/compose/Navbar.vue';
import FilterHeader from '@/components/compose/FilterHeader.vue';
import { useRouter } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';
import { ref, onMounted } from 'vue';
//import { defineAsyncComponent } from 'vue'

export default {
    name: 'regiconsejeria-layout',
    setup() {
        const router = useRouter();
        const valorTabla = ref([]);
        
        return {
            titulo: 'REGISTROS DE CONSEJERÍA',
            router: router,
            userData: {},
            valorTabla,
        }
    },
    async mounted() {
        var usertest = localStorage.user;
        this.userData = usertest !== null ? JSON.parse(usertest) : null;
        await this.llamarLista(this.userData.id);
    },
    components: {
        //CardOne: defineAsyncComponent(() => import('../components/widgets/CardOne.vue')),
        Navbar,
        FilterHeader,
    },
    methods: {
        ...mapActions('programacionModule', ['transactionUserPeople', 'listPacienteCuidador']),
        ...mapGetters('programacionModule', ['getUserProvider', 'getTranUserPeople', 'getUsuarioPersonaList', 'getUser']),
        async onBackHandle() {
            console.log("navegando")
            await this.router.push('/menu-main')
        },
        select: function (p2) {
            //var targetId = event.currentTarget.id;
            //console.log(event); // returns 'foo'
            //console.log(targetId); // returns 'foo'
            console.log(p2);
        },
        async llamarLista(value) {
            try {
                await this.listPacienteCuidador({ id: value, isActive: true });
                const { status, data } = this.getUsuarioPersonaList();
                this.valorTabla = data;
                console.log("Todo bien: ", { status, data });
            } catch (error) {
                console.log("Todo mal: ", error);
            }

        }

    }
}
</script>
<style lang="scss" scoped>
$color-azul: #1B62BF;
$color-azul-ligth: #62A1D9;
$color-azul-intermedio: #616C8C;
$color-placeholder: #4f4d4db5;
$color-negro: #2c3e50;
$color-amarillo: #F2B749;


.pacusr {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

.mentoria {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 5px 30px 5px 30px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.participante {
    border: 2px dashed $color-amarillo;
    border-radius: 15px;
    width: 45%;
    text-align: center;
    margin: 5px 10px 5px 10px;
    min-height: 400px;
}

@media (max-width:600px) {
    .participante {
        width: 100%;
        flex-direction: row;
    }

}


.btn-contendor {
    width: 100%;
    display: flex;
    justify-content: center;

}

.estilo-btn {
    margin: 10px 0 20px 0;
    border-radius: 15px;
    width: 250px;
    height: 40px;
}
</style>s