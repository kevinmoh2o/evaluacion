<template>
    <div class="modal fade" id="modalCuidadorPaciente" ref="modalCuidadorPaciente" tabindex="-1"
        aria-labelledby="modalCuidadorPaciente" aria-hidden="true">
        <div class="modal-dialog modal-md modal-lg modal-xl modal-xxl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Datos del Cuidador</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">


                    <form @submit="submitForm" class="needs-validation" novalidate>
                        <div class="cuidador-box">

                            <div class="caja">
                                <i class="fas fa-id-card"></i>
                                <select class="form-select" id="validationCustom06" aria-placeholder="Tipo de documento"
                                    v-model="perCui.tipoDoc" required>
                                    <option selected disabled value="">Tipo de documento</option>
                                    <option value="2">DNI</option>
                                    <option value="3">Carne de Extranjeria</option>
                                </select>
                            </div>

                            <div class="caja">
                                <i class="fas fa-id-card"></i>
                                <input type="number" class="form-control" id="validationCustom01"
                                    placeholder="Documento de Identidad" min="0" max="1000000000000000" v-model="perCui.dni"
                                    required>
                            </div>

                            <div class="caja">
                                <i class="fas fa-calendar"></i>
                                <input id="startDate" class="form-control" type="date" v-model="perCui.birthDate"
                                    required />
                                <span id="startDateSelected"></span>
                            </div>

                           <!--  <div class="caja">
                                <i class="fas fa-user"></i>
                                <input type="number" class="form-control" id="validationCustom01" placeholder="Edad"
                                    min="18" max="100" v-model="perCui.age" required>
                            </div> -->

                            <div class="caja">
                                <i class="fas fa-mars"></i>
                                <select class="form-select" id="validationCustom06" v-model="perCui.gender" required>
                                    <option selected disabled value="">Sexo</option>
                                    <option value="2"> Masculino</option>
                                    <option value="3">Femenino</option>
                                </select>
                            </div>


                            <div class="caja">
                                <i class="fas fa-briefcase"></i>
                                <select class="form-select" name="ocupacion" id="ocupacion" v-model="perCui.ocupation"
                                    required>
                                    <option selected disabled value="">Ocupación</option>
                                    <option value="estudiante">Estudiante</option>
                                    <option value="empleado">Empleado</option>
                                    <option value="desempleado">Desempleado</option>
                                    <option value="freelancer">Freelancer</option>
                                </select>
                            </div>

                            <div class="caja">
                                <i class="fas fa-phone"></i>
                                <input type="number" class="form-control" id="validationCustom01" placeholder="Celular"
                                    min="0" v-model="perCui.phone" required>
                            </div>

                        </div>

                        <hr class="solid">
                        <!-- <div class="modal-header"> -->
                        <h5 class="modal-title" id="exampleModalLabel">Datos del Paciente</h5>
                        <!-- </div> -->
                        <hr class="solid">

                        <div class="cuidador-box">

                            <div class="caja">
                                <i class="fas fa-id-card"></i>
                                <select class="form-select" id="validationCustom06" aria-placeholder="Tipo de documento"
                                    v-model="perPac.tipoDoc" required>
                                    <option selected disabled value="">Tipo de documento</option>
                                    <option value="2">DNI</option>
                                    <option value="3">Carne de Extranjeria</option>
                                </select>
                            </div>

                            <div class="caja">
                                <i class="fas fa-id-card"></i>
                                <input type="number" class="form-control" id="validationCustom01"
                                    placeholder="Documento de Identidad" min="0" max="1000000000000000" v-model="perPac.dni"
                                    required>
                            </div>

                            <div class="caja">
                                <i class="fas fa-calendar"></i>
                                <input id="startDate" class="form-control" type="date" v-model="perPac.birthDate"
                                    required />
                                <span id="startDateSelected"></span>
                            </div>

                            <!-- <div class="caja">
                                <i class="fas fa-user"></i>
                                <input type="number" class="form-control" id="validationCustom01" placeholder="Edad"
                                    min="18" max="100" v-model="perPac.age" required>
                            </div> -->

                            <div class="caja">
                                <i class="fas fa-mars"></i>
                                <select class="form-select" id="validationCustom06" v-model="perPac.gender" required>
                                    <option selected disabled value="">Sexo</option>
                                    <option value="2"> Masculino</option>
                                    <option value="3">Femenino</option>
                                </select>
                            </div>

                            <div class="caja">
                                <i class="fas fa-envelope"></i>
                                <input type="email" class="form-control" id="validationCustom01"
                                    placeholder="Correo electrónico" v-model="perPac.email" required>
                            </div>

                            <div class="caja">
                                <i class="fas fa-briefcase"></i>
                                <select class="form-select" name="ocupacion" id="ocupacion" v-model="perPac.ocupation"
                                    required>
                                    <option selected disabled value="">Ocupación</option>
                                    <option value="estudiante">Estudiante</option>
                                    <option value="empleado">Empleado</option>
                                    <option value="desempleado">Desempleado</option>
                                    <option value="freelancer">Freelancer</option>
                                </select>
                            </div>

                            <div class="caja">
                                <i class="fas fa-phone"></i>
                                <input type="number" class="form-control" id="validationCustom01" placeholder="Celular"
                                    min="0" v-model="perPac.phone" required>
                            </div>

                            <div class="caja">
                                <i class="fas fa-users"></i>
                                <select class="form-select" name="ocupacion" id="ocupacion" v-model="perPac.relationship"
                                    required>
                                    <option selected disabled value="">Selecciona un parentesco</option>
                                    <option value="padre">Padre</option>
                                    <option value="madre">Madre</option>
                                    <option value="hijo">Hijo</option>
                                    <option value="hija">Hija</option>
                                    <option value="abuelo">Abuelo</option>
                                    <option value="abuela">Abuela</option>
                                    <option value="tío">Tío</option>
                                    <option value="tía">Tía</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            <button type="submit" class="btn btn-success">Guardar</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    </div>
    <!-- <LoadingOverlay :loading="loadingData" />
    <SuccessView :reponse="successApi" />
    <ErrorView :reponse="errorApi" @cerrar-indicador="hadlerCloseIndicator" /> -->
</template>


<script>
import { defineAsyncComponent } from 'vue'
export default {
    name: 'Modal-Cuidador',
    components: {
        /* LoadingOverlay: defineAsyncComponent(() => import('@/components/indicadores/LoadingOverlay.vue')),
        SuccessView: defineAsyncComponent(() => import('@/components/indicadores/SuccessView.vue')),
        ErrorView: defineAsyncComponent(() => import('@/components/indicadores/ErrorView.vue')), */
    },
    props: {
        intitulo: String,
        inDescripcion: String
    },
    data() {
        return {
            showModal: false,
            loading: {
                statusLodingData: false,
                statusSuccessApi: false,
                statusErrorApi: false,
                descripccion: 'Usuario correctmente autenticado',
                btnText: 'Continuar',
                navTo: '',
            },
            /* loadingData: {
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
            }, */
            perPac: {
                dni: '',
                tipoDoc: "",
                nombre: "",
                apelPaterno: "",
                apelMaterno: "",
                birthDate: "",
                //age: "",
                gender: "",
                ocupation: "",
                phone: "",
                relationship: "",
                email: "",
                tipo: "1",
            },
            perCui: {
                dni: '',
                tipoDoc: "",
                nombre: "",
                apelPaterno: "",
                apelMaterno: "",
                birthDate: "",
                //age: "",
                gender: "",
                ocupation: "",
                phone: "",
                relationship: "",
                email: "",
                tipo: "0",
            }
        }
    },
    methods: {
        isValid(fieldName) {
            return this.validation[fieldName];
        },
        async onPressCrear() {
            this.$emit('createUSer', { state: true, perPac: this.perPac, perCui: this.perCui });
        },
        submitForm(event) {
            event.preventDefault(); // Prevent default form submission
            event.stopPropagation();
            const form = event.target;
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
            //console.log("validando submitForm");
            //console.log(form);
            this.onPressCrear()
        },
        hadlerCloseIndicator(value) {
            this.errorApi.status = value;
        },
        closeModal() {
            this.showModal = false;
        },
        async sleep(ms) {
            return await new Promise(resolve => setTimeout(resolve, ms));
        },
    }
}
</script>
<style lang="scss" scoped>
.cuidador-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.caja {
    display: flex;
    width: 300px;
    align-content: center;
    align-items: center;
    flex-direction: row;
    margin: 15px 10px 15px 10px;
}


.caja i {
    width: 40px;
    margin: 0 10px 0 10px;
    font-size: 25px;
    //color: grey;
}

i {
    color: var(--warning);
}
</style>