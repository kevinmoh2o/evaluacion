<template>
    <div class="pantalla">
        <div class="cabecera">
            <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="titulo"></Navbar>
        </div>
        <div class="form-container">
            <!-- <form>
                <div class="form-group">
                    <label for="name">Nombres y Apellidos:</label>
                    <input type="text" id="name" name="name" placeholder="Ingresa tu nombre..." />
                </div>
                <div class="form-group">
                    <label for="email">Contraseña:</label>
                    <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña..." />
                </div>


                <ComboBox :titulo="'Edad'"></ComboBox>
                <br>
                <ComboBox :titulo="'Sexo'"></ComboBox>
                <br>
                <ComboBox :titulo="'Centro de Salud'"></ComboBox>
                <br>
                <ComboBox :titulo="'Distrito'"></ComboBox>
                <br>
                <ComboBox :titulo="'Diresa'"></ComboBox>
                <br>


                <br>
                <button type="submit">Enviar</button>


            </form> -->
        </div>
    </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue';
//import ComboBox from '@/components/ComboBox.vue';
export default {
    setup() {
        return {
            titulo: 'Crear Cuenta'
        }
    },
    components: {
        Navbar,
        //ComboBox
    }
}
</script>
<style lang="scss" scoped>
.pantalla {
    display: flex;
    /* activa el modo flexible en el contenedor */
    flex-direction: column;
    /* establece la dirección de los elementos en vertical */
    height: 100vh;
    /* establece la altura del contenedor al 100% de la pantalla */
    width: 100vw;
    padding: 0;
    margin: 0;
    max-width: 100%;
}

.cabecera {
    height: 100px;
    /* establece la altura fija del primer div */
    //background-color: red;
}

.cuerpo {
    flex: 1;
    /* indica que el segundo div debe tomar todo el espacio disponible */
    //background-color: blue;
}



.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f2f2f2;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

        .label {
            margin-bottom: 10px;
            font-weight: bold;
            font-size: 14px;
        }

        .dropdown-wrapper {
            position: relative;
            display: inline-block;
            width: 100%;
            max-width: 300px;

            .dropdown {
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                background: transparent;
                font-size: 14px;
                cursor: pointer;
            }

            i {
                position: absolute;
                top: 50%;
                right: 10px;
                transform: translateY(-50%);
                color: #aaa;
            }
        }

        .form-group {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 20px;
            width: 100%;

            label {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 10px;
            }

            input {
                width: 100%;
                padding: 10px;
                border: none;
                border-bottom: 2px solid #ccc;
                font-size: 16px;

                &:focus {
                    outline: none;
                    border-bottom: 2px solid #1b62bf;
                }

                &::placeholder {
                    color: #ccc;
                }
            }
        }

        button[type="submit"] {
            background-color: #1b62bf;
            color: #fff;
            font-size: 18px;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;

            &:hover {
                background-color: #0d3c7c;
            }
        }

    }

}
</style>