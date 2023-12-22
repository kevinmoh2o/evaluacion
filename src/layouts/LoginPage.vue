<template>
    <div class="pantalla">

        <Navbar :estadoTitulo="true" :estadoFlecha="false" @volver="onBackHandle"></Navbar>

        <div class="contenedor-body">
            <div class="row flex-grow-1">

                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-0">
                    <div class="modal modal-sheet position-static d-block bg-body-secondary d-flex justify-content-evenly flex-column "
                        tabindex="-1" role="dialog" id="modalSignin">
                        <div class="modal-dialog " role="document">

                            <div class="modal-content rounded-4 shadow align-items-center bg-azul pt-4">
                                <h2 class="text-white">PLATAFORMA VIRTUAL</h2>
                                <div class="imgBox mt-4">
                                    <img src="https://cdn-icons-png.flaticon.com/512/536/536255.png" width="100"
                                        height="100">
                                </div>

                                <div class="container-fluid modal-body p-5 pt-0 mt-4">
                                    <form class="">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control rounded-3" id="floatingInput"
                                                placeholder="name@example.com" v-model="email" required/>
                                            <label for="floatingInput">DNI del usuario...</label>
                                        </div>

                                        <div class="form-floating mb-3 mt-4">
                                            <input type="password" class="form-control rounded-3" id="floatingPassword"
                                                placeholder="Password" v-model="password" required/>
                                            <label for="floatingPassword">Contraseña...</label>
                                        </div>
                                        <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary mt-4"
                                            @click="navegar">Iniciar Sesión</button>
                                        <!-- <small class="text-white">By clicking Sign up, you agree to the terms of use.</small> -->
                                        <hr class="my-4 text-white">


                                        <!-- <div class="container-fluid row justify-content-center align-items-center"> -->
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
                    </div>
                </div>

                <div class="d-none d-lg-block col-lg-6 col-xl-6 col-xxl-6 p-0 m-0">
                    <img class="responsive-image" src="@/assets/login.jpg" alt="Imagen" />
                </div>


            </div>
        </div>

    </div>
    <ModalCambioPassword></ModalCambioPassword>

    <LoadingOverlay :loading="loadingData" />
    <SuccessView :reponse="successApi" />
    <ErrorView :reponse="errorApi" @cerrar-indicador="hadlerCloseIndicator"/>
</template>

<script>
import Navbar from '../components/compose/Navbar.vue';
import { defineAsyncComponent } from 'vue'
import ModalCambioPassword from '@/components/compose/ModalCambioPassword.vue';
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
            successApi: {
                status: false,
                title: '¡ Genial !',
                descripccion: 'Usuario correctmente autenticado',
                btnText: 'Continuar',
                navTo: '',
            },
            errorApi: {
                status: false,
                title: '¡ ooPs !',
                descripccion: 'Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.',
                btnText: 'Cerrar',
                navTo: '',
            },
            email: '',
            password: '',
        };
    },
    setup() {
        //const router = useRouter()
        return {
            //router: router
        }
    },
    components: {
        Navbar,
        ModalCambioPassword,
        LoadingOverlay: defineAsyncComponent(() => import('@/components/indicadores/LoadingOverlay.vue')),
        SuccessView: defineAsyncComponent(() => import('@/components/indicadores/SuccessView.vue')),
        ErrorView: defineAsyncComponent(() => import('@/components/indicadores/ErrorView.vue')),
    },
    methods: {
        ...mapActions('programacionModule', ['deleteEntry', 'setIsLoading']),
        ...mapGetters('programacionModule', ['getEstado']),
        /* async navegar() {
            this.setIsLoading({ loading: true, success: false, error: false });
            await this.sleep(3000);
            console.log("navegando")
            this.$router.push('/menu');
            this.setIsLoading({ loading: false, success: false, error: false });
        }, */
        async sleep(ms) {
            return await new Promise(resolve => setTimeout(resolve, ms));
        },
        onBackHandle() {

        },
        async navegar() {
            this.loadingData.status = true;
            const { success, user, error } = await authService.autenticar(this.email, this.password);
            if (success) {
                // Usuario registrado con éxito, puedes redirigir o realizar otras acciones
                console.log('Usuario registrado:', user);
                //this.loadingData.status = false;
                this.$router.push('/menu');
            } else {
                // Ocurrió un error durante el registro, puedes mostrar un mensaje de error
                this.errorApi.status=true;
                console.error('Error al registrar usuario:', error);
            }
            this.loadingData.status = false;
            
        },
        hadlerCloseIndicator(value){
            this.errorApi.status=value;
        }
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


.pantalla{
    height: 100vh;
}

.nav-link {
  transition: color 0.3s ease-in-out;
}

.contenedor-body {
    width: 100%;
    height: auto;
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
}

.text-link a:hover {
    transform: translateY(-10px);
    text-decoration: underline;
    font-size: 20px;
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

.modal-sheet .modal-dialog {
    width: 380px;
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

