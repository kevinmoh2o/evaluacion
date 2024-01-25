<template>
    <div class="background-image"></div>
    <div class="contenedor">

        <Navbar class="nav-tag" :estadoTitulo="true" :estadoFlecha="true" :titulo="'Plataforma Virtual'"
            @volver="onBackHandle"></Navbar>

        <div class="menu-general">
            <div v-for="(menu, index) in menus" :key="index" class="cards">
                <MenuCard :titulo="menu.titulo" :ruta="menu.ruta" @clickbutton="handlePress(menu.id)" :idCard="idParent">
                </MenuCard>
            </div>
        </div>

    </div>
</template>

<script>
import Navbar from '../components/compose/Navbar.vue';
import MenuCard from '@/components/compose/MenuCard.vue';

export default {
    name: 'menu-layout',
    data() {
        return {
            idParent: 0,
            menus: [
                { id: 1, titulo: 'REGISTRO DE USUARIO', ruta: 'cuidador', path: 'registrar-cuidador-paciente' },
                { id: 2, titulo: 'EQUIPOS DE TRABAJO', ruta: 'equipo', path: 'about-us' },
                { id: 3, titulo: 'REGISTRO DE CONSEJERÍA', ruta: 'registro', path: 'registro-consejeria' },
                { id: 4, titulo: 'AGENDA', ruta: 'calendario', path: 'agenda' },
                { id: 5, titulo: 'TEMAS DE CONSEJERIA', ruta: 'chat', path: 'tema-consejeria' },
                { id: 6, titulo: 'SOPORTE TÉCNICO', ruta: 'servicio-cliente', path: '' },
                { id: 7, titulo: 'CUESTIONARIOS', ruta: 'cuestionario', path: '' },
            ],
        }
    },
    methods: {
        handlePress(val) {
            this.idParent = val;
            console.log("val parent", val);
            const ruta = this.menus.find(menu => menu.id === val).path;
            this.$router.push(`/${ruta}`);
        },
        onBackHandle() {
            this.$router.push('/');
        }
    },
    components: {
        Navbar,
        MenuCard,

    }
}
/* handlePress(val) {
            this.idParent = val
            console.log("val parent", val);
            switch (val) {
                case 1:
                    this.$router.push('/agenda');
                    break;
                case 2:
                    this.$router.push('/tema-consejeria');
                    break;
                case 3:
                    this.$router.push('/registro-consejeria');
                    break;
                case 4:
                    this.$router.push('/about-us');
                    break;
                default:
                    break;
            }

        }, */
</script>

<style lang="scss" scoped>
.nav-tag {
    width: 100vw;
    flex-wrap: wrap;
}

.contenedor {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.menu-general {
    display: flex;
    flex-direction: row;
    align-content: space-evenly;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-grow: 1;
    width: 100vw;
    height: 100%;
}



.background-image {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url('https://www.semfyc.es/wp-content/uploads/2016/05/semFYC_Corazon.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.45;
    z-index: -1;
}


.cabeceraMenu {
    grid-area: cabeceraMenu;
    padding: 0;
    margin: 0;
}

.cards {
    display: flex;
    margin: 10px 25px 10px 25px;
    align-items: center;
    text-align: center;
    align-content: center;
    justify-content: center;
    //width: 300px;
}
</style>