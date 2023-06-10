<template>
    <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="'Nosotros'"
    @volver="onBackHandle"
    ></Navbar>
    <InfoUx :intitulo="'TESISTA:'" :inDescripcion="'BACH. MARIA PUMAYALLI'"></InfoUx>
    <InfoUx :intitulo="'TESISTA:'" :inDescripcion="'BACH. CINTHIA PIO'"></InfoUx>
    <InfoUx :intitulo="'ASESOR:'" :inDescripcion="' DANIEL CONDOR'"></InfoUx>
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


</style>