<template>
    <Navbar :estadoTitulo="true" :estadoFlecha="false" :titulo="'Nosotros'" @volver="onBackHandle"></Navbar>
    <EquipoTrabajo></EquipoTrabajo>
</template>


<script>
//import InfoUx from '@/components/compose/InfoUx.vue';
import Navbar from '../components/compose/Navbar.vue';
import { useRouter } from 'vue-router'
import { defineAsyncComponent } from 'vue'

export default {
    name: 'about-layout',
    setup() {
        const router = useRouter()
        return {
            titulo: 'Nosotros',
            router: router
        }
    },
    components: {
        Navbar,
        //InfoUx,
        EquipoTrabajo: defineAsyncComponent(() => import('@/components/compose/EquipoTrabajo.vue')),
    },
    methods: {

        async onBackHandle() {
            console.log("navegando")
            await this.router.push('/menu')
        }

    }
}
</script>
<style lang="scss" scoped>
.box1 {
    margin: 15px 0 15px 0;
}
</style>