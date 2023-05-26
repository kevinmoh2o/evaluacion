<template>
    <div class="pantalla">
        <div class="cabecera">
            <Navbar :estadoTitulo="true" :estadoFlecha="false" :titulo="titulo"></Navbar>
        </div>
        <div class="cuerpo">
            <div class="container">
                <div class="column-left">
                    <div class="login">
                        <div class="formBx">
                            <h2>PLATAFORMA VIRTUAL</h2>

                            <div class="imgBox">
                                <img src="https://cdn-icons-png.flaticon.com/512/536/536255.png" width="100" height="100">
                            </div>

                            <div class="inputBx">
                                <p>DNI</p>
                                <input type="text" placeholder="DNI del usuario..." name="dni" class="form-control"
                                    maxlength="15" />
                            </div>
                            <div class="inputBx">
                                <p>Contraseña</p>
                                <input type="password" placeholder="Contraseña..." name="pasword" class="form-control"
                                    maxlength="15" />
                            </div>
                            <button class="btnLogin" @click="navegar">Iniciar Sesión</button>
                            <a href="#">Ha olvidado la contraseña</a>
                            <router-link to="/agenda">CREAR CUENTA</router-link>


                        </div>
                    </div>
                </div>


                <div class="column-right">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    name: 'login-layout',
    setup() {
        return {
            titulo: 'Login'
        }
    },
    methods:{
        navegar:function(){
            console.log("navegar to");
            this.$router.push('/menu');
        }
    },
    components: {
        Navbar
    }
}
</script>


<style lang="scss" scoped>
$button-padding: 10px;
$button-background: #4CAF50;
$color-blanco: #f8f9fa;
$button-border-radius: 4px;
$color-amarillo: #F2B749;
$color-azul: #1B62BF;
$color-azul-ligth: #62A1D9;
$color-azul-intermedio: #616C8C;
$color-placeholder: #4f4d4db5;
$color-negro: #2c3e50;


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Popins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background: #2fbf77;

}

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

.container {
    width: 100%;
    height: 100%;
    margin: 0;
    max-width: 1600px;
    /* agregue un ancho máximo para evitar que la cuadrícula exceda el ancho de la ventana del navegador */
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.column-left {
    display: flex;
    /* establacer display flex */
    justify-content: center;
    /* centrar horizontalmente */
    align-items: center;
    /* centrar verticalmente */
}



// Crear la clase base del botón
.btnLogin {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    background-color: $color-azul-intermedio;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: $color-azul;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 5px #555;
    }

    &.secondary {
        background-color: #fff;
        color: #333;
        border: 1px solid #333;

        &:hover {
            background-color: #eee;
        }
    }

    &.large {
        padding: 15px 30px;
        font-size: 20px;
    }
}

.login {
    height: 500px;
    width: 350px;
    border-radius: 15px;
    background: $color-azul-ligth;
    display: flex;
    padding: 20px;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);

    .imgBx {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        margin-top: -130px;
        box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .formBx {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;

        h2 {
            font-size: 1.3em;
            color: #fff;
        }

        .inputBx {
            padding: 5px;
            margin: 5px 0;
            width: 70%;

            p {
                color: #fff
            }

            input {
                padding: 10px;
                background: $color-blanco;
                width: 100%;
                border: none;
                margin: 5px 0;
                outline: none;
                border-radius: 5px;
                color: $color-negro;

                &::placeholder {
                    color: $color-placeholder;
                }
            }
        }

        a {
            background: rgba(255, 255, 255, 0.0);
            ;
            color: $color-negro;
            padding: 5px 30px;
            border-radius: 5px;
            text-decoration: none;
            margin: 5px 0;
            transition: 0.5s;

            &:hover {
                letter-spacing: 2px;
                transform: translateY(-5px);
            }

        }

    }

}</style>
