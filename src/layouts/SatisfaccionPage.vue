<template>
    <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="titulo" @volver="onBackHandle"></Navbar>
    <div class="contenedor" v-for="item in cuestionario" :key="item.nro" :value="item.pregunta">
        <h3 class="pregunta">
            <span>{{ item.nro }}. </span>
            <strong class="numer">{{ item.pregunta }}</strong>

        </h3>
        <div class="opcion">
            <div class="form-check elemnto" v-for="opcion in item.opciones" :key="opcion.value">
                <input class="form-check-input" type="radio" :name="'flexRadioDefault' + item.nro"
                    :id="'flexRadioDefault' + opcion.value" v-model="item.respuesta" :value="opcion.label">
                <label :for="'flexRadioDefault' + opcion.value" class="form-check-label">
                    {{ opcion.label }}
                </label>
            </div>
        </div>
    </div>

    <div class="footer-form">
        <button type="submit" class="btn btn-success">Guardar</button>
    </div>
</template>

<script>
import Navbar from '@/components/compose/Navbar.vue';
import { useRouter } from 'vue-router'
export default {
    name: 'cuestionario-satisfaccion',
    components: {
        Navbar,
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
                    nro: 1, pregunta: "En general, ¿cómo calificarías tu satisfacción con la plataforma web de la Consejería de Enfermería?", respuesta: "", opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 2, pregunta: "¿Encontraste la plataforma fácil de usar?", respuesta: "", opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 3, pregunta: "¿La información en la plataforma fue clara y comprensible?", respuesta: "", opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 4, pregunta: "¿Experimentaste algún problema técnico mientras utilizabas la plataforma?", respuesta: "", opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 5, pregunta: "¿La plataforma te proporcionó la información que necesitabas de manera eficiente?", respuesta: "", opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 6, pregunta: "En relación con tus expectativas, ¿cómo calificarías el rendimiento de la plataforma?", respuesta: "", opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 7, pregunta: "¿Hubo alguna funcionalidad específica que no encontraste en la plataforma y que te hubiera sido útil?", respuesta: "", opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 8, pregunta: "¿Cómo evaluarías la apariencia visual de la plataforma?", respuesta: "", opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 9, pregunta: "¿Recomendarías la plataforma web de la Consejería de Enfermería a otros usuarios?", respuesta: "", opciones: [
                        { value: "1", label: "Muy poco atractiva" },
                        { value: "2", label: "Poco atractiva" },
                        { value: "3", label: "Neutral" },
                        { value: "4", label: "Atractiva" },
                        { value: "5", label: "Muy atractiva" }
                    ]
                },
                {
                    nro: 10, pregunta: "¿Tienes algún comentario adicional o sugerencia para mejorar la plataforma?", respuesta: "", opciones: [
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
        }
    }
}
</script>

<style lang="scss" scoped>
.pregunta {
    font-size: 15px;
    font-weight: 400;
}

.contenedor {
    margin: 5px 10px 5px 10px;
    padding: 5px;
}

.opcion {
    margin: 10px 20px 10px 20px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
}

.elemnto {
    margin-left: 10px;
    margin-right: 10px;
}

.numer {
    padding: 10px;
    font-weight: bolder;
}


.footer-form{
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin: 5px ;    
    padding: 10px ;    
}
</style>