<template>
    <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="'Nosotros'"
    @volver="onBackHandle"
    ></Navbar>
    <InfoUx class="box1" :intitulo="'Investigador:'" :inDescripcion="'BACH. MARIA PUMAYALLI'"></InfoUx>
    <InfoUx class="box1" :intitulo="'Investigador:'" :inDescripcion="'BACH. CINTHIA PIO'"></InfoUx>
    <InfoUx class="box1" :intitulo="'Asesor:'" :inDescripcion="' DANIEL CONDOR'"></InfoUx>
    <InfoUx class="box1" :intitulo="'Desarrollador:'" :inDescripcion="'KEVIN MONTAÑEZ HUAMÁN'"></InfoUx>
    <!-- <InfoUx></InfoUx> -->
</template>


<script>
import InfoUx from '@/components/compose/InfoUx.vue';
import Navbar from '../components/compose/Navbar.vue';
import { useRouter } from 'vue-router'
export default {
    name: 'about-layout',
    setup() {
        const router = useRouter()
        return {
            titulo: 'Crear Cuenta',
            router: router
        }
    },
    components: {
        Navbar,
        InfoUx,
    },
    methods:{

        async onBackHandle(){
            console.log("navegando")
            await this.router.push('/menu')
        }
    
    }
}
</script>
<style lang="scss" scoped>

.box1{
    margin: 15px 0 15px 0;
}

</style>