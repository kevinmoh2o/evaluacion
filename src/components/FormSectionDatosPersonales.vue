<template>
    <section class="form-section form-section--datos-personales">
        <h2 class="form-section__title">{{ title }}</h2>
        <form>
            <Entrada :type="'text'" :placeholder="'Ingrese su nombre aqui...'" :nombre="'nombre'" :label="'Nombres y Apellidos:'"></Entrada>
            <Entrada :type="'text'" :placeholder="'Usuario...'" :nombre="'nombre'" :label="'Usuario:'"></Entrada>
            <Entrada :type="'password'" :placeholder="'Contraseña...'" :nombre="'password'" :label="'Contraseña:'"></Entrada>
            <div class="container">
                <!-- <div class="column-left"> -->
                    <ComboBox :titulo="'Edad'"></ComboBox>
                <!-- </div>
                <div class="column-right"> -->
                    <ComboBox :titulo="'Sexo'"></ComboBox>
                <!-- </div> -->
            </div>
        </form>
    </section>
</template>
  
<script>
import Entrada from '@/components/Entrada.vue';
import ComboBox from '@/components/ComboBox.vue';
export default {
    props: {
        title: {
            type: String,
            default: 'Datos personales'
        }
    },
    components: {
        Entrada,
        ComboBox
    }
}
</script>
  
<style lang="scss" scoped>
$accent-color: #d4af37; // Amarillo oscuro o dorado
$complementary-color: #333; // Gris oscuro

$form-background-color: #fff;
$border-radius: 10px;
$border-color: #ccc;
$form-padding: 2rem;


.container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    max-width: 1600px;
    /* agregue un ancho máximo para evitar que la cuadrícula exceda el ancho de la ventana del navegador */
    display: grid;
   
}

.column-left {
    width: 100%;
}

.column-right {
    //background-color: blue;
}
.form-section {
    background-color: $form-background-color;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    margin-bottom: 2rem;
    margin-right: 15px;
    margin-left: 15px;

    &__title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

   /*  &--datos-personales {
        border-color: $accent-color;
    } */

    form {
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 1rem;
        }

        input {
            border-radius: $border-radius;
            border: 1px solid $border-color;
            padding: 0.5rem;
            margin-bottom: 1rem;
            font-size: 1rem;

            &:focus {
                outline: none;
                border-color: $accent-color;
            }
        }

        button {
            border-radius: $border-radius;
            border: none;
            background-color: $accent-color;
            color: #fff;
            padding: 0.5rem;
            font-size: 1rem;
            cursor: pointer;

            &:hover {
                background-color: darken($accent-color, 10%);
            }

            &:active {
                background-color: darken($accent-color, 20%);
            }
        }
    }
}

</style>