<template>
    <div class="page-login">
        <div class="cabecera">
            <Navbar :estadoTitulo="true" :estadoFlecha="false" @volver="onBackHandle"></Navbar>
        </div>

        <div class="contenedor-body">

            <div class="auth" role="document">
                <div class="loginBox">
                    <!-- <h2 class="text-white">PLATAFORMA VIRTUAL</h2> -->
                    <div class="icono">
                        <img src="https://cdn-icons-png.flaticon.com/512/536/536255.png" width="100" height="100">
                    </div>

                    <div class="formulario">
                        <form class="">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control rounded-3" id="floatingInput" maxlength="15"
                                    placeholder="name@example.com" v-model="email" required />
                                <label for="floatingInput">DNI del usuario...</label>
                            </div>

                            <div class="form-floating mb-3 mt-4">
                                <input :type="showPassword ? 'text' : 'password'" class="form-control rounded-3"
                                    id="floatingPassword" placeholder="Password" v-model="password" maxlength="15"
                                    required />
                                <label for="floatingPassword">Contraseña...</label>
                            </div>

                            <label class="cont-check">
                                <input checked="checked" type="checkbox" v-model="showPassword"
                                    @change="handleCheckboxChange">
                                <div class="checkmark"></div>
                                <span>Mostar Contraseña</span>
                            </label>

                            <button class="boton" @click="navegar">Iniciar Sesión</button>
                            <hr class="my-4 text-white">


                            <div class="text-link">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#modalCambioPassword"
                                    data-bs-whatever="@mdo">¿Ha olvidado la contraseña?</a>
                            </div>

                            <div class="text-link">
                                <router-link to="/crear-cuenta" class="nav-link">Crear cuenta</router-link>
                            </div>

                            <div class="creditos">
                                <i class="fas fa-copyright"></i>
                                <i class="fas fa-info-circle"></i>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <div class="logo">
                <img class="responsive-image" src="@/assets/login.jpg" alt="Imagen" />
            </div>


        </div>

    </div>

    <ModChangePass></ModChangePass>



    <div v-if="loadingData.status === true">
        <LoadingOverlay :loading="loadingData" />
    </div>
    <div v-else>
        <div v-if="apiResponse.status === true">
            <SuccessView :reponse="apiResponse" />
        </div>
        <div v-if="apiResponse.status === false">
            <ErrorView :reponse="apiResponse" @cerrar-indicador="hadlerCloseIndicator" />
        </div>
    </div>
</template>

<script lang="js">

    import Navbar from '../components/compose/Navbar.vue';
    import { defineAsyncComponent } from 'vue'
    import ModChangePass from '@/components/modals/ModChangePass.vue';
    //import { useRouter } from 'vue-router'
    import { mapActions, mapGetters } from 'vuex'
    import { authService } from '@/services/authService';


    export default {
        name: 'login-layout',
        data() {
            return {
                loadingData: {
                    status: false,
                    title: "Autenticando usuario..."
                },
                apiResponse: { status: null, },
                email: '',
                password: '',
                showPassword: false,
            };
        },
        mounted() {
            //this.getStatte();

            /* var userProv = this.getUser;
            console.log("userProv: ",userProv); */
            localStorage.setItem('user', JSON.stringify(null));
            localStorage.setItem('entries', JSON.stringify(null));
            //localStorage.setItem('entries', JSON.stringify(null));
        },
        setup() {
            //const router = useRouter()
            return {
                //router: router
            }
        },
        components: {
            Navbar,
            ModChangePass,
            LoadingOverlay: defineAsyncComponent(() => import('@/components/indicadores/LoadingOverlay.vue')),
            SuccessView: defineAsyncComponent(() => import('@/components/indicadores/SuccessView.vue')),
            ErrorView: defineAsyncComponent(() => import('@/components/indicadores/ErrorView.vue')),
        },
        methods: {
            ...mapActions('programacionModule', ['deleteEntry', 'setIsLoading', 'getUserByEmail', 'resetValues']),
            ...mapGetters('programacionModule', ['getEstado', 'getUser', 'getStatte']),
            async sleep(ms) {
                return await new Promise(resolve => setTimeout(resolve, ms));
            },
            onBackHandle() {

            },
            async navegar() {
                this.loadingData.status = true;
                const { status, data, message } = await this.getUserByEmail({ dni: this.email, password: this.password });
                console.log("Auth: ", { status, data, message });
                if (status) {
                    this.apiResponse = Object.assign({ status, data, message }, { title: '¡Genial!', btnText: 'Continuar', navTo: '' });
                    this.$router.push('/menu-main');
                    this.resetValues(null);
                } else {
                    this.apiResponse = Object.assign({ status, data, message }, { title: '¡ OoPs !', btnText: 'Cerrar', navTo: '' });
                }
                this.loadingData.status = false;
            },
            hadlerCloseIndicator(value) {
                this.apiResponse.status = null;
            },
            handleCheckboxChange() {
                // Este método se ejecutará cada vez que cambie el estado del checkbox
                console.log("El estado del checkbox ha cambiado:", this.showPassword);
            }
        }
    }
    /* if (error != null) {
        msgLoading=error;
    } else {
        if (message.includes("auth/invalid-email")) {
            msgLoading = "DNI invalido";
        } else if (message.includes("auth/user-not-found")) {
            msgLoading = "No hay cuenta creada con ese DNI";
        } else if (message.includes("auth/wrong-password")) {
            msgLoading = "Contraseña Incorrecta";
        } else {
            msgLoading = "DNI o Contraseña incorrectos";
        }
    } */

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

    .formulario {
        width: 70%;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .cont-check input {
        display: none;
    }

    .cont-check {
        //padding-top: 5px;
        padding-bottom: 5px;
        margin-bottom: 10px;
        display: flex;
        position: relative;
        cursor: pointer;
        font-size: 20px;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }

    .cont-check span {
        display: flex;
        align-items: center;
        justify-content: start;
        padding-left: 10px;
        font-size: 14px;
        color: white;
    }

    /* Create a custom checkbox */
    .checkmark {
        position: relative;
        top: 0;
        left: 0;
        height: 1.3em;
        width: 1.3em;
        background-color: white;
        border-radius: 0.25em;
        transition: all 0.25s;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* When the checkbox is checked, add a blue background */
    .cont-check input:checked~.checkmark {
        background-color: #2196F3;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        transform: rotate(0deg);
        border: 0.1em solid white;
        left: 0;
        top: 0;
        width: 1.05em;
        height: 1.05em;
        border-radius: 0.25em;
        transition: all 0.25s, border-width 0.1s;

    }

    /* Show the checkmark when checked */
    .cont-check input:checked~.checkmark:after {
        left: 0.45em;
        top: 0.25em;
        width: 0.3em;
        height: 0.7em;
        border-color: #fff0 white white #fff0;
        border-width: 0 0.15em 0.15em 0;
        border-radius: 0em;
        transform: rotate(45deg);
    }



    .cabecera {
        margin-bottom: 10px;
    }


    .auth {
        /* margin: 10px; */
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loginBox {
        width: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #1B62BF;
        border-radius: 25px;
    }


    .page-login {
        /* border: 2px solid red; */
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
    }

    .icono {
        font-size: 50px;
        margin: 25px;
    }


    .pantalla {
        /* border: 2px solid red; */
        height: 100%;
        overflow: hidden;
    }

    .nav-link {
        transition: color 0.3s ease-in-out;
    }

    .contenedor-body {
        /* border: 2px solid blue; */
        width: 100%;
        display: flex;
        flex-direction: row;
        height: 100%;
    }

    .boton {
        width: 100%;
        height: 50px;
        border-radius: 10px;
        background-color: $color-negro;
        color: white;
    }

    i {
        padding: 10px;
        color: var(--light);
        font-size: 20px;
        transition: all .55s ease;

        &:hover {
            font-size: 30px;
        }
    }

    .creditos {
        display: flex;
        justify-content: center;
    }

    .text-link a {
        padding: 5px 0 5px 0;
        justify-content: center;
        display: flex;
        transition: all .55s ease;
        text-decoration: none;
        color: $color-blanco;
        font-size: 14px;
    }

    .text-link a:hover {
        transform: translateY(-10px);
        text-decoration: underline;
        font-size: 16px;
        color: $color-amarillo;
    }

    button {
        transition: all .55s ease;
    }

    button:hover {
        transform: translateY(-10px);
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
        width: 300px;
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

    }

    .custom-center {
        text-align: center !important;
    }

    .responsive-image {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }

    .modal-dialog {
        width: 380px;
        height: 100%;
        transition: bottom .75s ease-in-out;
    }

    .modal-sheet .modal-footer {
        padding-bottom: 2rem;
    }

    .responsive-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    /* * {
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

} */



    /* .cabecera {
    height: 100px;
    //background-color: red;
} */
</style>
