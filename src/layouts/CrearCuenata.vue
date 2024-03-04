<template>
    <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="'Crear Cuenta'" @volver="onBackHandle"></Navbar>

    <form @submit="onPressCrear" class="pagina" novalidate>
        <div class="seccion">
            <h4>DATOS PERSONALES</h4>
            <hr class="hr-estilo" />
            <div class="form-crear ">

                <div class="box">
                    <label for="validationCustom01" class="form-label"><span>*</span> Primer Nombre:</label>
                    <input type="text" class="form-control" id="validationCustom01" v-model.trim="data.firstName"
                        required>
                    <div class="invalid-feedback">
                        Escriba un nombre válido.
                    </div>
                </div>

                <div class="box">
                    <label for="validationCustom02" class="form-label">Segundo Nombre:</label>
                    <input type="text" class="form-control" v-model.trim="data.secondName">

                </div>

                <div class="box">
                    <label for="validationCustom03" class="form-label"><span>*</span> Apellido Paterno:</label>
                    <input type="text" class="form-control" id="validationCustom03" v-model.trim="data.apelPaterno"
                        required>
                    <div class="invalid-feedback">
                        Escriba un apellido válido.
                    </div>
                </div>

                <div class="box">
                    <label for="validationCustom04" class="form-label"><span>*</span> Apellido Materno:</label>
                    <input type="text" class="form-control" id="validationCustom04" v-model.trim="data.apelMaterno"
                        required>
                    <div class="invalid-feedback">
                        Escriba un apellido válido.
                    </div>
                </div>


                <div class="box">
                    <label for="validationCustom06" class="form-label"><span>*</span> Sexo:</label>
                    <select class="form-select" id="validationCustom06" v-model="data.gender" required>
                        <option selected disabled value="">Seleccionar</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                    <div class="invalid-feedback">
                        Seleccione un valor.
                    </div>
                </div>

                <div class="box">
                    <label for="startDate" class="form-label"><span>*</span> Fecha de Nacimiento</label>
                    <input id="startDate" class="form-control" type="date" v-model="data.birthDate" required />
                    <span id="startDateSelected"></span>
                    <div class="invalid-feedback">
                        Fecha incorrecta.
                    </div>
                </div>

                <div class="box">
                    <label for="valiEmail" class="form-label"><span>*</span> Email:</label>
                    <input type="email" class="form-control" id="valiEmail" v-model.trim="data.email" required>
                    <div class="invalid-feedback">
                        Escriba un dirección de correo electrónico válida.
                    </div>
                </div>

            </div>
        </div>




        <div class="seccion">
            <h4>DATOS GEOGRÁFICOS</h4>
            <hr class="hr-estilo" />
            <div class="form-crear">

                <div class="box">
                    <label for="validationCustom08" class="form-label"><span>*</span> Centro de Salud:</label>
                    <select class="form-select" id="validationCustom08" v-model="data.centroSalud" required>
                        <option selected disabled value="">Seleccionar</option>
                        <option value="2">La Perla</option>
                        <option value="3">San Pedro</option>
                        <option value="3">San Lucas</option>
                    </select>
                    <div class="invalid-feedback">
                        Seleccione un valor.
                    </div>
                </div>

                <div class="box">
                    <label for="validationCustom09" class="form-label"><span>*</span> Distrito:</label>
                    <select class="form-select" id="validationCustom09" v-model="data.distrito" required>
                        <option selected disabled value="">Seleccionar</option>
                        <option value="2">Norte</option>
                        <option value="3">Centro</option>
                        <option value="3">Sur</option>
                        <option value="4">Callao</option>
                    </select>
                    <div class="invalid-feedback">
                        Seleccione un valor.
                    </div>
                </div>

                <div class="box">
                    <label for="validationCustom10" class="form-label"><span>*</span> Diris/Diresa:</label>
                    <select class="form-select" id="validationCustom10" v-model="data.diris" required>
                        <option selected disabled value="">Seleccionar</option>
                        <option value="2">Diris-Norte</option>
                        <option value="3">Diris-Centro</option>
                        <option value="3">Diris-Sur</option>
                        <option value="4">Diresa-Callao</option>
                    </select>
                    <div class="invalid-feedback">
                        Seleccione un valor.
                    </div>
                </div>

            </div>
        </div>


        <div class="seccion">
            <h4>MIS CREDENCIALES</h4>
            <hr class="hr-estilo" />
            <div class="form-crear">

                <div class="box">
                    <label for="validationCustom13" class="form-label"><span>*</span> DNI:</label>
                    <input type="text" class="form-control" id="validationCustom13" v-model.trim="data.dni"
                        maxlength="8" minlength="8" required>
                    <div class="invalid-feedback">
                        Escriba un DNI válido.
                    </div>
                </div>

                <div class="box">
                    <label for="validationCustom11" class="form-label"><span>*</span> Contraseña:</label>
                    <input type="password" class="form-control" id="validationCustom11" maxlength="12" minlength="6"
                        autocomplete="new-password" v-model.trim="data.password" required>
                    <div class="invalid-feedback">
                        Entre 6-12 caracteres.
                    </div>
                </div>

                <div class="box">
                    <label for="validationCustom12" class="form-label"><span>*</span> Confirmar Contraseña:</label>
                    <input type="password" class="form-control" id="validationCustom12" maxlength="12" minlength="6"
                        autocomplete="new-password" v-model.trim="data.verifyPassword" required>
                    <div class="invalid-feedback">
                        Entre 6-12 caracteres.
                    </div>
                </div>

            </div>
        </div>


        <hr class="hr-estilo">

        <div class="btn-estilo">
            <button type="submit" class="btn btn-success">Crear</button>
        </div>

    </form>



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

<script>
import Navbar from '@/components/compose/Navbar.vue';
import { useRouter } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';
import { defineAsyncComponent } from 'vue';
import { authService } from '@/services/authService';

export default {
    name: 'Crear-Cuenta',
    components: {
        Navbar,
        LoadingOverlay: defineAsyncComponent(() => import('@/components/indicadores/LoadingOverlay.vue')),
        SuccessView: defineAsyncComponent(() => import('@/components/indicadores/SuccessView.vue')),
        ErrorView: defineAsyncComponent(() => import('@/components/indicadores/ErrorView.vue')),
    },
    props: {
        msg: String
    },
    data() {
        const router = useRouter()
        return {
            data: {
                firstName: '',
                secondName: '',
                apelPaterno: '',
                apelMaterno: '',
                gender: '',
                birthDate: '',
                centroSalud: '',
                distrito: '',
                diris: '',
                dni: '',
                password: '',
                verifyPassword: '',
                email: '',
                role: 'USER_ROLE',
                createdAt: '',
                state: false,
            },
            loadingData: {
                status: false,
                title: "Creando cuenta de Usuario ..."
            },
            apiResponse: { status: null, },
            selectedTime: '',
            timeOptions: [],
            router: router
        };
    },
    mounted() {
        this.generateTimeOptions();
    },
    methods: {
        ...mapActions('programacionModule', ['crearUsuario', 'deleteEntry', 'setIsLoading']),
        ...mapGetters('programacionModule', ['getEstado', 'getRptHttp']),
        async onPressCrear(event) {
            //console.log("this.data: ",this.data)

            
            var validateForm = this.submitForm(event);
            if (!validateForm) {
                this.apiResponse = Object.assign({ status: false, data: null, message: 'Por favor, completa todos los campos obligatorios' }, { title: '¡ OoPs !', btnText: 'Cerrar', navTo: '' });
                this.loadingData.status = false;
                return null;
            }
            if (this.data.password != this.data.verifyPassword) {
                this.apiResponse = Object.assign({ status: false, data: null, message: 'Las contraseñas deben de coincidir' }, { title: '¡ OoPs !', btnText: 'Cerrar', navTo: '' });
                this.loadingData.status = false;
                return null;
            }

            this.loadingData.status = true;
            try {
                await this.crearUsuario(this.data);
                var { status, message } = this.getRptHttp();
                console.log("crear usuario ", { status, message })
                if (status) {
                    this.apiResponse = { status, data: null, message, title: '¡Genial!', btnText: 'Continuar', navTo: '/' };
                } else {
                    this.apiResponse = { status, data: null, message, title: '¡ OoPs !', btnText: 'Cerrar', navTo: '' };
                }
                console.log("this.apiResponse ", this.apiResponse);
            } catch (error) {
                console.log("error: " + error)
            }

            this.loadingData.status = false;
        },
        async sleep(ms) {
            return await new Promise(resolve => setTimeout(resolve, ms));
        },
        generateTimeOptions() {
            for (let hour = 8; hour <= 20; hour++) {
                for (let minute = 0; minute < 60; minute += 10) {
                    const formattedHour = (hour < 10 ? '0' : '') + hour;
                    const formattedMinute = (minute < 10 ? '0' : '') + minute;
                    const timeValue = `${formattedHour}:${formattedMinute}`;
                    this.timeOptions.push(timeValue);
                }
            }
        },
        /* isValid(fieldName) {
            console.log()
            return this.validation[fieldName];
        }, */
        submitForm(event) {

            const form = event.target;
            var validador = form.checkValidity();
            //console.log(form.checkValidity())
            if (!validador) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
            return validador;
        },
        async onBackHandle() {
            console.log("navegando")
            await this.router.push('/')
        },
        hadlerCloseIndicator(value) {
            this.apiResponse.status = null;
        }
    },
}
</script>

<style scoped>
/* label{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;
  margin: 0;
} */
span {
    padding: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: red;
    font-weight: bolder;
    font-size: 20px;
}

.pagina {
    padding: 10px;

}

.seccion {
    width: 100%;
}

.seccion>h4 {
    padding: 20px 20px 5px 20px;
    font-weight: 600;
    color: rgb(75, 72, 72);
}

button {
    width: 200px;
}

.form-contenedor {
    width: 100%;
}

.btn-estilo {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 20px;
}

.form-crear {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.box {
    width: 250px;
    padding: 5px;
    margin: 5px 10px 5px 10px;
}

.hr-estilo {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.custom-modal {
    max-width: 800px !important;
}

.input-group-append {
    cursor: pointer;
}


.was-validated {
    width: 100%;
    padding: 0;
    margin: 0;
}
</style>
