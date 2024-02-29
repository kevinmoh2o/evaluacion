<template>
    <form class="formDP">
        <div class="cabecera">
            <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="titulo" @volver="onBackHandle"></Navbar>
        </div>
        <FilterHeader></FilterHeader>

        <div class="mentoria">
            <div class="participante" v-on:click="select(1)">
            </div>
            <div class="participante" v-on:click="select(2)">
            </div>
            <CardOne></CardOne>
        </div>
        <div class="btn-contendor">
            <button type="button" class="btn btn-success estilo-btn" data-bs-dismiss="modal">Registrar Consejería</button>
        </div>

    </form>
</template>


<script>
import Navbar from '@/components/compose/Navbar.vue';
import FilterHeader from '@/components/compose/FilterHeader.vue';
//import BotonVue from '@/components/atomic/BotonVue.vue';
import { useRouter } from 'vue-router'
import { defineAsyncComponent } from 'vue'

export default {
    name: 'regiconsejeria-layout',
    setup() {
        const router = useRouter()
        return {
            titulo: 'REGISTROS DE CONSEJERÍA',
            router: router
        }
    },
    components: {
        //ModalCuidadorSelecionado: defineAsyncComponent(() => import('../components/compose/ModalCuidadorSelecionado.vue')),
        CardOne: defineAsyncComponent(() => import('../components/widgets/CardOne.vue')),
        Navbar,
        FilterHeader,
    },
    methods: {
        async onBackHandle() {
            console.log("navegando")
            await this.router.push('/menu')
        },
        select: function (p2) {
            //var targetId = event.currentTarget.id;
            //console.log(event); // returns 'foo'
            //console.log(targetId); // returns 'foo'
            console.log(p2);
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


.mentoria {
    //width: 100%;
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
    min-height: 300px;
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