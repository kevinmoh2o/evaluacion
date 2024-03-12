<template>
    <div class="radio-input">
        <input value="value-1" name="value-radio" id="value-1" type="radio" class="star s1 strella"
            @click="presionar(5)" />
        <input value="value-2" name="value-radio" id="value-2" type="radio" class="star s2 strella"
            @click="presionar(4)" />
        <input value="value-3" name="value-radio" id="value-3" type="radio" class="star s3 strella"
            @click="presionar(3)" />
        <input value="value-4" name="value-radio" id="value-4" type="radio" class="star s4 strella"
            @click="presionar(2)" />
        <input value="value-5" name="value-radio" id="value-5" type="radio" class="star s5 strella"
            @click="presionar(1)" />
    </div>
    <div class="etiqueta">
        <h6>{{ etiqueta(indice) }}</h6>
    </div>
</template>

<script>
import { ref, defineEmits } from 'vue'


export default {

    name: 'estrella-satisfaction',
    components: {
    },
    props: ['repuesta'],
    emits: ['selectedIndexEmit'],
    setup(props, context) {
        console.log("props.repuesta: ", props.repuesta)
        const indice = ref(0);
        defineEmits(['selectedIndexEmit']);

        const format = (date) => {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        };

        const etiqueta = (value) => {
            switch (value) {
                case 1:
                    return "Muy Insatisfecho";
                case 2:
                    return "Insatisfecho";
                case 3:
                    return "Neutral";
                case 4:
                    return "Satisfecho";
                case 5:
                    return "Muy Satisfecho";
                default:
                    return "";
            }
        };

        const setNombre = (nombre) => {
            return nombre;
        };

        const setType = (type) => {
            return type;
        };

        const presionar = (value) => {
            indice.value = value;
            context.emit('selectedIndexEmit', value, null)
        };

        return {
            indice,
            format,
            setNombre,
            setType,
            presionar,
            etiqueta,
        }

    },

}
</script>


<style lang="scss">
@import '@/styles/styles.scss';

.strella {
    margin: 10px 20px 0px 20px;
}


.radio-input {
    max-width: 170px;
    max-height: 50px;
    display: flex;
    scale: 0.07;
    transform: rotate(180deg);
    justify-content: center;
}


.star {
    //margin: 20px;
    appearance: none;
    --color: rgb(183, 180, 180);
    border-left: 6.4721359549996em solid transparent;
    border-right: 6.4721359549996em solid transparent;
    border-bottom: 4em solid var(--color);
    transform: rotate(0deg);
    cursor: pointer;
}


.star:before {
    content: "";
    border-left: 6.4721359549996em solid transparent;
    border-right: 6.4721359549996em solid transparent;
    border-top: 4em solid var(--color);
    position: absolute;
    left: -6.4721359549996em;
    transform: rotate(108deg);
}

.star:after {
    content: "";
    border-left: 6.4721359549996em solid transparent;
    border-right: 6.4721359549996em solid transparent;
    border-top: 4em solid var(--color);
    position: absolute;
    left: -6.4721359549996em;
    transform: rotate(253deg);
}

.radio-input>.star:hover~.star,
.radio-input>.star:hover,
.radio-input>.star:checked~.star,
.radio-input>.star:checked {
    --color: #F2B749;
}

.radio-input>.star:checked~.star,
.radio-input>.star:checked {
    animation: rotate 0.5s linear forwards;
    transform: rotate(360deg);
    transition: transform 0.3s;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    50% {
        scale: 2;
    }

    100% {
        transform: rotate(360deg);
    }
}

.etiqueta {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
</style>