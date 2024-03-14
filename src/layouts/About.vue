<template>
    <nav class="about">
        <nav class="cab">
            <Navbar :estadoTitulo="true" :estadoFlecha="false" :titulo="'Nosotros'" @volver="onBackHandle"></Navbar>
        </nav>
        <nav class="bod">
            <EquipoTrabajo></EquipoTrabajo>
        </nav>
    </nav>


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
.about {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.cab{
    height: 80px;
}
</style>