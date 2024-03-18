<template>
    <div class="tema-consejeria">
        <div class="cabecera">
            <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="titulo" @volver="onBackHandle"></Navbar>
        </div>
        <div class="contenedor">


            <div class="botones">
                <div class="boton" @click="selectedOption = 'opcionOne'">
                    <div class="covered"></div>
                    <span>Adherencia</span>
                </div>
                <div class="boton" @click="selectedOption = 'opcionTwo'">
                    <div class="covered"></div>
                    <span>Crianza</span>
                </div>
                <div class="boton" @click="selectedOption = 'opcionThree'">
                    <div class="covered"></div>
                    <span>Prevencion</span>
                </div>
                <div class="boton" @click="selectedOption = 'opcionFour'">
                    <div class="covered"></div>
                    <span>Soporte</span>
                </div>
            </div>

            <div class="mydict">
        <div>
            <label>
                <input type="radio" name="radio" v-model="selectedOption" value="opcionOne">
                <span>Adherencia</span>
            </label>
            <label>
                <input type="radio" name="radio" v-model="selectedOption" value="opcionTwo">
                <span>Crianza</span>
            </label>
            <label>
                <input type="radio" name="radio" v-model="selectedOption" value="opcionThree">
                <span>Prevencion</span>
            </label>
            <label>
                <input type="radio" name="radio" v-model="selectedOption" value="opcionFour">
                <span>Soporte</span>
            </label>
        </div>
    </div> 


            <div class="slider">
                <div class="slider-wrapper">
                    <ion-icon name="chevron-back-circle-outline" id="prev-slide" class="slide-button material-icons"
                        @click="slide(-1)"></ion-icon>

                    <transition name="fade" mode="out-in">
                        <div v-if="selectedOption === 'opcionOne'" class="image-container" ref="imageContainer">
                            <img v-for="(image, index) in opcionOne" :key="index" :src="image.src"
                                :alt="'img-' + (index + 1)" class="image-item" />
                        </div>

                        <div v-else-if="selectedOption === 'opcionTwo'" class="image-container" ref="imageContainer">
                            <img v-for="(image, index) in opcionTwo" :key="index" :src="image.src"
                                :alt="'img-' + (index + 1)" class="image-item" />
                        </div>

                        <div v-else-if="selectedOption === 'opcionThree'" class="image-container" ref="imageContainer">
                            <img v-for="(image, index) in opcionThree" :key="index" :src="image.src"
                                :alt="'img-' + (index + 1)" class="image-item" />
                        </div>

                        <div v-else-if="selectedOption === 'opcionFour'" class="image-container" ref="imageContainer">
                            <img v-for="(image, index) in opcionFour" :key="index" :src="image.src"
                                :alt="'img-' + (index + 1)" class="image-item" />
                        </div>
                    </transition>

                    <ion-icon name="chevron-forward-circle-outline" id="next-slide"
                        class="slide-button material-symbols-rounded" @click="slide(1)"></ion-icon>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Navbar from '@/components/compose/Navbar.vue';

export default {
    name: 'temaconsejeria-layout',
    data() {
        return {
            selectedOption: 'opcionOne',
            titulo: 'TEMAS DE CONSEJERIA',
            opcionOne: [
                { src: require("../assets/flyers/adherencia/imagen1.jpg"), order: 1 },
                { src: require("../assets/flyers/adherencia/imagen2.jpg"), order: 2 },
                { src: require("../assets/flyers/adherencia/imagen3.jpg"), order: 3 },
            ],
            opcionTwo: [
                { src: require("../assets/flyers/crianza/imagen1.jpg"), order: 1 },
                { src: require("../assets/flyers/crianza/imagen2.jpg"), order: 2 },
                { src: require("../assets/flyers/crianza/imagen3.jpg"), order: 3 },
                { src: require("../assets/flyers/crianza/imagen4.jpg"), order: 4 },
                { src: require("../assets/flyers/crianza/imagen5.jpg"), order: 5 },
            ],
            opcionThree: [
                { src: require("../assets/flyers/prevencion/imagen1.jpg"), order: 1 },
                { src: require("../assets/flyers/prevencion/imagen2.jpg"), order: 2 },
                { src: require("../assets/flyers/prevencion/imagen3.jpg"), order: 3 },
            ],
            opcionFour: [
                { src: require("../assets/flyers/soporte/imagen1.jpg"), order: 1 },
                { src: require("../assets/flyers/soporte/imagen2.jpg"), order: 2 },
                { src: require("../assets/flyers/soporte/imagen3.jpg"), order: 3 },
                { src: require("../assets/flyers/soporte/imagen4.jpg"), order: 4 },
            ]
        };
    },
    components: {
        Navbar,

    },
    mounted() {
        /* this.initSlider(); */
    },
    methods: {
        initSlider() {
            const imageContainer = this.$refs.imageContainer;
            this.imageWidth = imageContainer.offsetWidth; // Ancho de una imagen
            const selectedOptionImages = this[this.selectedOption];
            selectedOptionImages.sort((a, b) => a.order - b.order); // Ordenar las imágenes según el atributo order
            this.maxScrollLeft = (selectedOptionImages.length - 1) * this.imageWidth;
        },

        slide(direction) {
            const imageContainer = this.$refs.imageContainer;
            this.initSlider(); // Llamar a initSlider() antes de calcular la posición de desplazamiento
            const selectedOptionLength = this[this.selectedOption].length;
            this.maxScrollLeft = (selectedOptionLength - 1) * this.imageWidth;
            const scrollAmount = this.imageWidth * direction;
            const newPosition = Math.max(0, Math.min(imageContainer.scrollLeft + scrollAmount, this.maxScrollLeft));
            imageContainer.scrollTo({
                left: newPosition,
                behavior: "smooth"
            });
        },
        onBackHandle() {
            this.$router.push('/menu-main');
        }
    },
    watch: {
        selectedOption(newValue, oldValue) {
            console.log('selectedOption cambió de', oldValue, 'a', newValue);
            const imageContainer = this.$refs.imageContainer;
            imageContainer.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
            this.initSlider(); // Llama a initSlider() cada vez que cambie la opción seleccionada
        }
    }

    /* watch: {
        selectedOption(newValue, oldValue) {
            console.log('selectedOption cambió de', oldValue, 'a', newValue);
            this.$nextTick(() => {
                const imageContainer = this.$refs.imageContainer;
                imageContainer.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            });
        }
    } */

};
</script>




<style scoped>
ion-icon {
    width: 50px;
    height: 50px;
    font-size: 30px;
    cursor: pointer;
    color: rgb(96, 95, 95);
    transition: background-color 0.5s ease;
}

ion-icon:hover {
    border-radius: 50%;
    background-color: rgb(228, 225, 225);
}

.tema-consejeria {
    overflow-x: hidden;
    display: flex;
    height: 100%;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    /* flex-wrap: wrap; */
}


.cabecera {
    /* border: 2px solid purple; */
    width: 100%;
    height: 70px !important;
    /* position: fixed; */
}


.contenedor {
    /* border: 2px solid red; */
    height: 100%;
    display: flex;
    flex-direction: row;
}


.contenedor .botones {
    /* border: 2px solid blue; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    transition: width 0.9s ease;
}


.contenedor .botones .boton {
    position: relative;
    overflow: hidden;
    /* border: 2px solid purple; */
    height: 70px;
    width: 160px;
    margin: 20px 10px 20px 0;
    border-radius: 0 10px 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: color 0.5s ease;
    background-color: rgb(244, 241, 241);
}


/*********** COLOR PARA CADA BOTON ***********/
.contenedor .botones .boton:nth-child(1) .covered {
    background-color: #E5004B;
}

.contenedor .botones .boton:nth-child(2) .covered {
    background-color: #007F73;
}

.contenedor .botones .boton:nth-child(3) .covered {
    background-color: #4CCD99;
}

.contenedor .botones .boton:nth-child(4) .covered {
    background-color: #FFC700;
}


/*********** HOVER A LOS BOTONES***********/
.contenedor .botones .boton:nth-child(1):hover .covered {
    background-color: #E5004B;
}

.contenedor .botones .boton:nth-child(2):hover .covered {
    background-color: #007F73;
}

.contenedor .botones .boton:nth-child(3):hover .covered {
    background-color: #4CCD99;
}

.contenedor .botones .boton:nth-child(4):hover .covered {
    background-color: #FFC700;
}

.contenedor .botones .boton:hover>span {
    position: relative;
    color: white;
}


.contenedor .botones .boton .covered {
    left: 0;
    position: absolute;
    height: 70px;
    width: 15px;
    background-color: blue;
    transition: width 0.35s ease;
}

.contenedor .botones .boton:hover .covered {
    width: 100%;
    color: white;
}





.contenedor .slider {
    /* border: 2px solid green; */
    height: 100%;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap: wrap;
    flex-direction: row;
}

.container {
    /* max-width: 600px; */
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.slider-wrapper {
    /* border: 3px solid orange; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: auto; */
    /* max-width: 400px !important; */
    height:100%;
    margin: 0;
    flex-direction: row;
    flex-wrap:wrap;
}

.image-container {
    /* border: 2px solid blue; */
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    max-width: 500px;
    overflow-x: hidden;
    padding-top: 10px;
    
}

.image-item {
    flex: 0 0 auto;
    width: 100%;
    scroll-snap-align: start;
}

.slider-wrapper .slider .slide-button {
    /* border: 3px solid green; */
    position: absolute;
    top: 50%;
    outline: none;
    border: none;
    height: 50px;
    width: 100px;
    z-index: 5;
    color: #fff;
    display: flex;
    cursor: pointer;
    font-size: 2.2rem;
    /* background: #000; */
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transform: translateY(-50%);
}

/* .slider-wrapper .slide-button:hover {
    background: #404040;
} */

.slider-wrapper .slide-button#prev-slide {
    left: -0px;
}

.slider-wrapper .slide-button#next-slide {
    right: -0px;
}

.slider-wrapper .image-list {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 18px;
    font-size: 0;
    list-style: none;
    /* margin-bottom: 30px; */
    overflow-x: auto;
    scrollbar-width: none;
}

.slider-wrapper .image-list::-webkit-scrollbar {
    display: none;
}

.slider-wrapper .image-list .image-item {
    width: 100%;
    height: 100%;
    /*  object-fit: cover; */
}

.container .slider-scrollbar {
    height: 24px;
    width: 100%;
    display: flex;
    align-items: center;
}

.slider-scrollbar .scrollbar-track {
    background: #ccc;
    width: 100%;
    height: 2px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    position: relative;
}

.slider-scrollbar:hover .scrollbar-track {
    height: 4px;
}

.slider-scrollbar .scrollbar-thumb {
    position: absolute;
    background: #000;
    top: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
    cursor: grab;
    border-radius: inherit;
}

.slider-scrollbar .scrollbar-thumb:active {
    cursor: grabbing;
    height: 8px;
    top: -2px;
}

.slider-scrollbar .scrollbar-thumb::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -10px;
    bottom: -10px;
}

/* @media only screen and (max-width: 1023px) {

    .slider-wrapper .image-list {
        gap: 10px;
        margin-bottom: 15px;
        scroll-snap-type: x mandatory;
    }

    .slider-wrapper .image-list .image-item {
        width: 100%;
        height: 100%;
    }

    .slider-scrollbar .scrollbar-thumb {
        width: 20%;
    }
}
 */


:focus {
    outline: 0;
    border-color: #2260ff;
    box-shadow: 0 0 0 4px #b5c9fc;
}

.mydict div {
    flex-wrap: wrap;
    margin: 0.5rem 0.5rem;
    justify-content: center;
    display: none;
}

.mydict input[type="radio"] {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.mydict input[type="radio"]:checked+span {
    box-shadow: 0 0 0 0.0625em #0043ed;
    background-color: #dee7ff;
    z-index: 1;
    color: #0043ed;
}

label span {
    display: block;
    cursor: pointer;
    background-color: #fff;
    padding: 0.375em .75em;
    position: relative;
    margin-left: .0625em;
    box-shadow: 0 0 0 0.0625em #b5bfd9;
    letter-spacing: .05em;
    color: #3e4963;
    text-align: center;
    transition: background-color .5s ease;
}

label:first-child span {
    border-radius: .375em 0 0 .375em;
}

label:last-child span {
    border-radius: 0 .375em .375em 0;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}


@media (max-width: 800px) {
  .contenedor .botones {
    display:none;
    width: 0;
  }

  .image-container {
    /* border: 2px solid red; */
    max-width: 450px;
    }

    .slider-wrapper {
    flex-direction: column;
}

.mydict div {
    display: flex;
}

.contenedor {
    margin: 10px;
    flex-direction: column;
}

}

/* @media (min-width: 1600px) {
    .image-container {
        border: 2px solid green;
        max-width: 900px;
    }

    .mydict {
    display: flex;
    }

} */
</style>