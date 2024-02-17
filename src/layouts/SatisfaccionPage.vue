<template>
    <div>
        <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="titulo" @volver="onBackHandle"></Navbar>


        <div class="formulario">
            <div class="contenedor" v-for="item in cuestionario" :key="item.nro" :value="item.pregunta"
                @click="presionado(item)">
                <h3 class="pregunta">
                    <span>{{ item.nro }}. </span>
                    <strong class="numer">{{ item.pregunta }}</strong>
                </h3>
                <div class="alinear">
                    <div class="hijo">
                        <EstrellaQuest @selectedIndexEmit="readSelectedIndexEmit" :repuesta="item.respuesta"></EstrellaQuest>
                    </div>

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
                    pregunta: "En general, ¿cómo calificarías tu satisfacción con la plataforma web de la Consejería de Enfermería?",
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
                    pregunta: "¿Encontraste la plataforma fácil de usar?",
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
                    pregunta: "¿La información en la plataforma fue clara y comprensible?",
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
                    pregunta: "¿Experimentaste algún problema técnico mientras utilizabas la plataforma?",
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
                    pregunta: "¿La plataforma te proporcionó la información que necesitabas de manera eficiente?",
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
                    pregunta: "En relación con tus expectativas, ¿cómo calificarías el rendimiento de la plataforma?",
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
                    pregunta: "¿Hubo alguna funcionalidad específica que no encontraste en la plataforma y que te hubiera sido útil?",
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
                    pregunta: "¿Cómo evaluarías la apariencia visual de la plataforma?",
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
                    pregunta: "¿Recomendarías la plataforma web de la Consejería de Enfermería a otros usuarios?",
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
                    pregunta: "¿Tienes algún comentario adicional o sugerencia para mejorar la plataforma?",
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
}

.contenedor {
    margin: 5px 10px 5px 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* Alinea los elementos al inicio verticalmente */
    align-items: flex-start;
    /* Alinea los elementos al inicio horizontalmente */
}


.opcion {
    margin: 10px 20px 10px 20px;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 50px;

    /* justify-content: start;
    justify-items: start;
    justify-self: start;
    align-items: center;
    align-self: flex-start;
    align-content: start; */
}

.elemnto {
    margin-left: 10px;
    margin-right: 10px;
}

.numer {
    padding: 10px;
    font-weight: bolder;
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
    width: 100%;
    display: flex;

}

.hijo {
    width: 200px;
    padding: 0;
    margin: 0;
}
</style>