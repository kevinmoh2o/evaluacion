<template>
    <div>
        <Navbar :estadoTitulo="true" :estadoFlecha="false" :titulo="titulo" @volver="onBackHandle"></Navbar>


        <div class="formulario">
            <div class="contenedor" v-for="item in cuestionario" :key="item.nro" :value="item.pregunta"
                @click="presionado(item)">
                <h3 class="pregunta">
                    <strong>{{ item.nro }}. </strong>
                    <p class="numer">{{ item.pregunta }}</p>
                </h3>
                <div class="alinear">
                    <!-- <div class="hijo"> -->
                        <EstrellaQuest @selectedIndexEmit="readSelectedIndexEmit" :repuesta="item.respuesta"></EstrellaQuest>
                    <!-- </div> -->

                </div>

            </div>

            <div class="footer-form">
                <button type="submit" class="btn btn-success">Guardar</button>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/compose/Navbar.vue';
import { useRouter } from 'vue-router'
import EstrellaQuest from '@/components/atomic/EstrellaQuest.vue';
export default {
    name: 'cuestionario-satisfaccion',
    components: {
        Navbar,
        EstrellaQuest,
    },
    setup() {
        const router = useRouter()
        return {
            titulo: 'CUESTIONARIO DE SATISFACCCIÓN',
            router: router,
            users: [{ name: 'Mary', id: 1 }, { name: 'John', id: 2 }, { name: 'Hank', id: 3 }],
            opciones: [
                { value: "1", label: "Muy poco atractiva" },
                { value: "2", label: "Poco atractiva" },
                { value: "3", label: "Neutral" },
                { value: "4", label: "Atractiva" },
                { value: "5", label: "Muy atractiva" }
            ],
            cuestionario: [
                {
                    nro: 1,
                    pregunta: "Fue simple usar esta plataforma.",
                    respuesta: { value: "0", label: "" },
                    opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 2,
                    pregunta: "Fue fácil aprender a utilizar esta plataforma.",
                    respuesta: { value: "0", label: "" },
                    opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 3,
                    pregunta: "Creo que me volví experto rápidamente utilizando esta plataforma.",
                    respuesta: { value: "0", label: "" },
                    opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 4,
                    pregunta: "La plataforma muestra mensajes de error que me dicen claramente cómo resolver los problemas.",
                    respuesta: { value: "0", label: "" },
                    opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 5,
                    pregunta: "Cada vez que cometo un error utilizando la plataforma lo resuelvo fácil y rápidamente.",
                    respuesta: { value: "0", label: "" },
                    opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 6,
                    pregunta: "La información (como ayuda en línea, mensajes en pantalla y otra documentación) que provee esta plataforma es clara.",
                    respuesta: { value: "0", label: "" },
                    opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 7,
                    pregunta: "Es fácil encontrar en la plataforma la información que necesito.",
                    respuesta: { value: "0", label: "" },
                    opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 8,
                    pregunta: "La información que proporciona la plataforma fue efectiva ayudándome a completar las tareas.",
                    respuesta: { value: "0", label: "" },
                    opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 9,
                    pregunta: "La organización de la información de la plataforma en la pantalla fue clara.",
                    respuesta: { value: "0", label: "" },
                    opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 10,
                    pregunta: "La interfaz de la plataforma fue placentera.",
                    respuesta: { value: "0", label: "" },
                    opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 11,
                    pregunta: "Me gustó utilizar la plataforma.",
                    respuesta: { value: "0", label: "" },
                    opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 12,
                    pregunta: "La plataforma tuvo todas las herramientas que esperaba que tuviera.",
                    respuesta: { value: "0", label: "" },
                    opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 12,
                    pregunta: "En general, estuve satisfecho con la plataforma.",
                    respuesta: { value: "0", label: "" },
                    opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                }
            ]
        }
    },
    methods: {
        onBackHandle() {
            this.$router.push('/menu');
        },
        readSelectedIndexEmit(value) {
            console.log("readSelectedIndexEmit value: ", value)
        },
        presionado(value) {
            console.log("presionado value: ", value)
        },
    }
}
</script>

<style lang="scss" scoped>
//@import '@/styles/styles.scss';

.pregunta {
    font-size: 15px;
    font-weight: 400;
    margin: 0;
    display: flex;
    flex-direction: row;
}

.contenedor {
    max-width: 500px;
    margin: 5px 10px 5px 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}


.opcion {
    margin: 10px 20px 10px 20px;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 50px;
}

.elemnto {
    margin-left: 10px;
    margin-right: 10px;
}

.numer {
    padding-left: 10px;
    font-weight: 500;
}


.footer-form {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    align-content: center;
    //margin: 5px;
    //padding: 10px;
}

.formulario {
    width: 100%;
    //height:calc(100vh);
    //width: 100vw;
    //overflow-y: scroll;
    //margin-top: 40px;
    padding: 20px;
    //scrollbar-color: map-get($theme-colors, "azul");;
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    //width: 100vw;
    padding: 0;
    margin: 0;

}


.alinear {
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: left;

}

.hijo {
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    text-align: left !important;
    align-items: start !important;
}
</style>