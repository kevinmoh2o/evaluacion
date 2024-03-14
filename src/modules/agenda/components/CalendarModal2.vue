<template>
    <div class="container2">
        <div class="vacio"></div>

        <div class="botones">
            <!-- <button class="button">
                <svg viewBox="0 0 448 512" class="svgIcon">
                    <path
                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z">
                    </path>
                </svg>
            </button> -->
            <button class="boton-pop" title="Editar evento">
                <i class="fa-solid fa-pen-to-square" style="color: #73777b;"></i>
            </button>
            <button class="boton-pop" title="Quita el evento de este calendario">
                <i class="fa-solid fa-trash" style="color: #73777b;"></i>
            </button>
            <button class="boton-pop" title="Cerrar">
                <i class="fa-solid fa-xmark" style="color: #73777b;"></i>
            </button>
        </div>

        <div class="box">
            <i class="fa-solid fa-square imagen" style="color: #73777b;"></i>
            <div class="contenido">
                <label>{{ evento.title }}</label>
            </div>
        </div>

        <div class="box">
            <i class="fas fa-calendar imagen" style="color: #73777b;"></i>
            <div class="contenido">
                <label>{{ evento.extendedProps.meeting }}</label>
            </div>
        </div>
        <div class="box">
            <i class="fa fa-clock imagen" style="color: #73777b;"></i>
            <div class="contenido">
                <label>{{ evento.extendedProps.hora }}</label>
            </div>
        </div>
        <div class="box">
            <i class="fas fa-link imagen" style="color: #73777b;"></i>
            <div class="contenido">
                <router-link
                    :to="{ name: 'video-conference', query: { valor: encodeURIComponent(JSON.stringify(evento)), meeting: `Reunion con ${evento.title}` } }">Ir
                    a la
                    Video Conferencia</router-link>
            </div>
        </div>

    </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { Formatos } from '@/utils/Formatos.js';


export default {
    name: 'model-dos',
    props: {
        evento: Object
    },
    setup() {
        return {
            Formatos
        };
    },
    components: {

    },
    data() {

    },
    methods: {

    },
    computed: {
    },
    async created() {

    },
    watch: {

    }

}

</script>

<style scoped>

.boton-pop{
    background-color: white  !important;
    border: none;
    color:rgb(139, 129, 129);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding-left: 5px;
    padding-right: 5px;
    transition: background-color 0.5s ease;
}

.boton-pop:hover{
    background-color: rgb(205, 199, 199)  !important;
    /* border: none;
    color:rgb(139, 129, 129);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding-left: 5px;
    padding-right: 5px; */
}

.contenido label{
    font-size: 13px;
}


.box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

}



.resaltado {
    border-radius: 50%;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
}


.resaltado:hover {
    /* opacity: 0.5; */
    background-color: #73777b71;
}


.botones {
    /* height: 40px; */
    /* align-items: end;
    align-content: end; */
    text-align: right;
}



.fecha {
    height: 40px;
    grid-area: fecha;
    text-align: left;

}

.alarma {
    height: 40px;
    grid-area: alarma;
    text-align: left;
}

.titulo {
    height: 40px;
    grid-area: titulo;
    text-align: left;

}

.container2 {
    z-index: 1005;
    box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
    background-color: white;
    width: 300px;
    height: auto;
    border-radius: 10px;
    padding: 10px;
}

.imagen {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 10px 5px 10px;
    font-size: 15px;
}

/* .container2 {
    z-index: 1005;
    box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
    background-color: white;
    display: grid;
    gap: 0;
    width: 350px;
    height: 200px;
    border-radius: 10px;
    margin: 0;
    grid-template:
        ". botones botones botones" 40px
        "icon1 titulo titulo titulo" 40px
        ". fecha fecha fecha" 40px
        "icon2 alarma alarma alarma" 40px
        "icon3 owner owner owner" 40px/
        50px 40px 40px auto
    ;
}


@media (min-width:600px) {
    .container2 {
        z-index: 9999;
        box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
        background-color: white;
        display: grid;
        gap: 0;
        width: 450px;
        height: 200px;
        border-radius: 10px;
        align-content: center;
        align-items: center;
        align-self: center;
        text-align: center;
        margin: 0;
        grid-template:
            ". botones botones botones" 40px
            "icon1 titulo titulo titulo" 40px
            ". fecha fecha fecha" 40px
            "icon2 alarma alarma alarma" 40px
            "icon3 owner owner owner" 40px/
            50px 40px 40px auto
        ;
    }
} */


/* .button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  transition-duration: .3s;
  overflow: hidden;
  position: relative;
} */

.svgIcon {
  width: 12px;
  transition-duration: .3s;
}

.svgIcon path {
  fill: white;
}

/* .button:hover {
  width: 140px;
  border-radius: 50px;
  transition-duration: .3s;
  background-color: rgb(255, 69, 69);
  align-items: center;
} */

.button:hover .svgIcon {
  width: 50px;
  transition-duration: .3s;
  transform: translateY(60%);
}

.button::before {
  position: absolute;
  top: -20px;
  content: "Delete";
  color: white;
  transition-duration: .3s;
  font-size: 2px;
}

.button:hover::before {
  font-size: 13px;
  opacity: 1;
  transform: translateY(30px);
  transition-duration: .3s;
}
</style>
