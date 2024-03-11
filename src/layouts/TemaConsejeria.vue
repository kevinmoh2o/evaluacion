<template>
    <div class="cabecera">
        <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="titulo" @volver="onBackHandle"></Navbar>
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


    <div class="container">
        <div class="slider-wrapper">
            <button id="prev-slide" class="slide-button material-icons" @click="slide(-1)">
                chevron_left
            </button>

            <div v-if="selectedOption === 'opcionOne'" class="image-container" ref="imageContainer">
                <img v-for="(image, index) in opcionOne" :key="index" :src="image.src" :alt="'img-' + (index + 1)"
                    class="image-item" />
            </div>

            <div v-if="selectedOption === 'opcionTwo'" class="image-container" ref="imageContainer">
                <img v-for="(image, index) in opcionTwo" :key="index" :src="image.src" :alt="'img-' + (index + 1)"
                    class="image-item" />
            </div>

            <div v-if="selectedOption === 'opcionThree'" class="image-container" ref="imageContainer">
                <img v-for="(image, index) in opcionThree" :key="index" :src="image.src" :alt="'img-' + (index + 1)"
                    class="image-item" />
            </div>

            <div v-if="selectedOption === 'opcionFour'" class="image-container" ref="imageContainer">
                <img v-for="(image, index) in opcionFour" :key="index" :src="image.src" :alt="'img-' + (index + 1)"
                    class="image-item" />
            </div>

            <button id="next-slide" class="slide-button material-symbols-rounded" @click="slide(1)">
                chevron_right
            </button>
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
        this.initSlider();
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
.container {
    max-width: 600px;
    width: 95%;
    overflow: hidden;
}

.slider-wrapper {
    display: flex;
    align-items: center;
}

.image-container {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
}

.image-item {
    flex: 0 0 auto;
    width: 100%;
    scroll-snap-align: start;
}

.slider-wrapper .slide-button {
    position: absolute;
    top: 50%;
    outline: none;
    border: none;
    height: 50px;
    width: 50px;
    z-index: 5;
    color: #fff;
    display: flex;
    cursor: pointer;
    font-size: 2.2rem;
    background: #000;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transform: translateY(-50%);
}

.slider-wrapper .slide-button:hover {
    background: #404040;
}

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
    margin-bottom: 30px;
    overflow-x: auto;
    scrollbar-width: none;
}

.slider-wrapper .image-list::-webkit-scrollbar {
    display: none;
}

.slider-wrapper .image-list .image-item {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

@media only screen and (max-width: 1023px) {
    /* .slider-wrapper .slide-button {
    } */

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

/* .container {
    max-width: 700px;
    width: 95%;
    overflow: hidden;
}

.slider-wrapper {
    display: flex;
    align-items: center;
}

.image-container {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
}

.image-item {
    flex: 0 0 auto;
    width: 100%;
    scroll-snap-align: start;
}

.slider-wrapper .slide-button {
    position: absolute;
    top: 50%;
    outline: none;
    border: none;
    height: 50px;
    width: 50px;
    z-index: 5;
    color: #fff;
    display: flex;
    cursor: pointer;
    font-size: 2.2rem;
    background: #000;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transform: translateY(-50%);
}

.slider-wrapper .slide-button:hover {
    background: #404040;
}

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
    margin-bottom: 30px;
    overflow-x: auto;
    scrollbar-width: none;
}

.slider-wrapper .image-list::-webkit-scrollbar {
    display: none;
}

.slider-wrapper .image-list .image-item {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

@media only screen and (max-width: 1023px) {

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
} */



:focus {
    outline: 0;
    border-color: #2260ff;
    box-shadow: 0 0 0 4px #b5c9fc;
}

.mydict div {
    display: flex;
    flex-wrap: wrap;
    margin: 0.5rem 0.5rem;
    justify-content: center;
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
</style>
  