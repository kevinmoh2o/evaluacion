<template>
    <Navbar :estadoTitulo="true" :estadoFlecha="false" :titulo="titulo" @volver="onBackHandle"></Navbar>

    <div class="table-responsive" :class="{ 'corto': isMaxBarraLateral }">
        <div clacontainerss="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-6">
                        <h2>Cuidador - Paciente <b></b></h2>
                    </div>
                    <div class="col-6">
                        <a href="#addEmployeeModal" class="btn btn-success" data-bs-toggle="modal"
                            data-bs-target="#modalCuidadorPaciente" data-bs-whatever="@mdo"><i
                                class="material-icons">&#xE147;</i> <span>Agregar nuevo</span></a>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th class="thc">Estado</th>
                        <th class="thc">Cuidador</th>
                        <th class="thc">Paciente</th>
                        <th class="thc">Email</th>
                        <th class="thc">Celular</th>
                        <th class="thc">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in valorTabla" :key="index">
                        <td>
                            <a class="done" data-toggle="modal"><i class="material-icons" data-toggle="tooltip"
                                    title="Done">&#xe86c;</i></a>
                        </td>
                        <td>{{ item.cuidador.apelPaterno }} {{ item.cuidador.name }}</td>
                        <td>{{ item.paciente.apelPaterno }} {{ item.paciente.name }}</td>
                        <td>{{ item.paciente.email }}</td>
                        <td>{{ item.paciente.phone }}</td>
                        <td>
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons"
                                    data-toggle="tooltip" title="Edit">&#xE254;</i></a>

                        </td>
                    </tr>

                </tbody>
            </table>

        </div>
    </div>

    <ModCrearCuidador @createUSer="createUSer"></ModCrearCuidador>
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

    <!-- <section class="formulario">

        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Datos del Cuidador</h5>
        </div>
        <div class="modal-body">


            <form @submit="submitForm" class="needs-validation" novalidate>
                <div class="cuidador-box">

                    <div class="caja">
                        <i class="fas fa-id-card"></i>
                        <select class="form-select" id="validationCustom06" aria-placeholder="Tipo de documento" required>
                            <option selected disabled value="">Tipo de documento</option>
                            <option value="2">DNI</option>
                            <option value="3">Carne de Extranjeria</option>
                        </select>
                    </div>

                    <div class="caja">
                        <i class="fas fa-id-card"></i>
                        <input type="number" class="form-control" id="validationCustom01"
                            placeholder="Documento de Identidad" min="0" max="1000000000000000" required>
                    </div>

                    <div class="caja">
                        <i class="fas fa-calendar"></i>
                        <input id="startDate" class="form-control" type="date" required />
                        <span id="startDateSelected"></span>
                    </div>

                    <div class="caja">
                        <i class="fas fa-user"></i>
                        <input type="number" class="form-control" id="validationCustom01" placeholder="Edad" required
                            min="18" max="100">
                    </div>

                    <div class="caja">
                        <i class="fas fa-mars"></i>
                        <select class="form-select" id="validationCustom06" required>
                            <option selected disabled value="">Sexo</option>
                            <option value="2"> Masculino</option>
                            <option value="3">Femenino</option>
                        </select>
                    </div>


                    <div class="caja">
                        <i class="fas fa-briefcase"></i>
                        <select class="form-select" name="ocupacion" id="ocupacion" required>
                            <option selected disabled value="">Ocupación</option>
                            <option value="estudiante">Estudiante</option>
                            <option value="empleado">Empleado</option>
                            <option value="desempleado">Desempleado</option>
                            <option value="freelancer">Freelancer</option>
                        </select>
                    </div>

                    <div class="caja">
                        <i class="fas fa-phone"></i>
                        <input type="number" class="form-control" id="validationCustom01" placeholder="Celular" min="0"
                            required>
                    </div>

                    <div class="caja">
                        <i class="fas fa-envelope"></i>
                        <input type="email" class="form-control" id="validationCustom01" placeholder="Correo electrónico"
                            required>
                    </div>

                </div>

                <hr class="solid">
                <h5 class="modal-title" id="exampleModalLabel">Datos del Paciente</h5>
                <hr class="solid">

                <div class="cuidador-box">

                    <div class="caja">
                        <i class="fas fa-id-card"></i>
                        <select class="form-select" id="validationCustom06" aria-placeholder="Tipo de documento" required>
                            <option selected disabled value="">Tipo de documento</option>
                            <option value="2">DNI</option>
                            <option value="3">Carne de Extranjeria</option>
                        </select>
                    </div>

                    <div class="caja">
                        <i class="fas fa-id-card"></i>
                        <input type="number" class="form-control" id="validationCustom01"
                            placeholder="Documento de Identidad" min="0" max="1000000000000000" required>
                    </div>

                    <div class="caja">
                        <i class="fas fa-calendar"></i>
                        <input id="startDate" class="form-control" type="date" required />
                        <span id="startDateSelected"></span>
                    </div>

                    <div class="caja">
                        <i class="fas fa-user"></i>
                        <input type="number" class="form-control" id="validationCustom01" placeholder="Edad" required
                            min="18" max="100">
                    </div>

                    <div class="caja">
                        <i class="fas fa-mars"></i>
                        <select class="form-select" id="validationCustom06" required>
                            <option selected disabled value="">Sexo</option>
                            <option value="2"> Masculino</option>
                            <option value="3">Femenino</option>
                        </select>
                    </div>



                    <div class="caja">
                        <i class="fas fa-briefcase"></i>
                        <select class="form-select" name="ocupacion" id="ocupacion" required>
                            <option selected disabled value="">Ocupación</option>
                            <option value="estudiante">Estudiante</option>
                            <option value="empleado">Empleado</option>
                            <option value="desempleado">Desempleado</option>
                            <option value="freelancer">Freelancer</option>
                        </select>
                    </div>

                    <div class="caja">
                        <i class="fas fa-phone"></i>
                        <input type="number" class="form-control" id="validationCustom01" placeholder="Celular" min="0"
                            required>
                    </div>

                    <div class="caja">
                        <i class="fas fa-users"></i>
                        <select class="form-select" name="ocupacion" id="ocupacion" required>
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
                <div class="footer-form">
                    <button type="submit" class="btn btn-success">Guardar</button>
                </div>
            </form>

        </div>
    </section> -->
    <!-- <tr>
                            <td>
                                <span class="custom-checkbox">
                                    <input type="checkbox" id="checkbox2" name="options[]" value="1">
                                    <label for="checkbox2"></label>
                                </span>
                            </td>
                            <td>
                                <a href="#deleteEmployeeModal" class="cancel" data-toggle="modal"><i class="material-icons"
                                        data-toggle="tooltip" title="Done">&#xe5c9;</i></a>
                            </td>
                            <td>Dominique Perrier</td>
                            <td>Pablo Bacilio</td>
                            <td>dominiqueperrier@mail.com</td>
                            <td>(51) 123456789</td>
                            <td>
                                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons"
                                        data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <span class="custom-checkbox">
                                    <input type="checkbox" id="checkbox2" name="options[]" value="1">
                                    <label for="checkbox2"></label>
                                </span>
                            </td>
                            <td>
                                <a href="#deleteEmployeeModal" class="cancel" data-toggle="modal"><i class="material-icons"
                                        data-toggle="tooltip" title="Done">&#xe5c9;</i></a>
                            </td>
                            <td>Agustin Garcia</td>
                            <td>Nicolas Becerra</td>
                            <td>agusgar@mail.com</td>
                            <td>(51) 123456789</td>
                            <td>
                                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons"
                                        data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                            </td>
                        </tr> -->

    <!-- <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons"
                                        data-toggle="tooltip" title="Delete">&#xE872;</i></a> -->
</template>

<script>
    import Navbar from '@/components/compose/Navbar.vue';
    import { useRouter } from 'vue-router'
    import ModCrearCuidador from '@/components/modals/ModCrearCuidador.vue';
    import { mapActions, mapGetters } from 'vuex'
    import { defineAsyncComponent } from 'vue'

    export default {
        name: 'regis-cuidador-paciente',
        components: {
            Navbar,
            ModCrearCuidador,
            LoadingOverlay: defineAsyncComponent(() => import('@/components/indicadores/LoadingOverlay.vue')),
            SuccessView: defineAsyncComponent(() => import('@/components/indicadores/SuccessView.vue')),
            ErrorView: defineAsyncComponent(() => import('@/components/indicadores/ErrorView.vue')),
        },
        props: {
            isMaxBarraLateral: Boolean,
        },
        async mounted() {
            var usertest = localStorage.user;
            this.userData = usertest !== null ? JSON.parse(usertest) : null;
            await this.llamarLista(this.userData.id);
        },
        data() {
            const router = useRouter()
            return {
                valorTabla: [],
                apiResponse: { status: null, },
                estadoModal: true,
                loadingData: {
                    status: false,
                    title: "¡Estamos guardando la información del paciente y del cuidador!<br><br>Por favor, espera un momento mientras asociamos estos datos al especialista."
                },
                titulo: 'REGISTROS DEL CUIDADOR PRIMARIO Y PACIENTE',
                router: router,
                userData: {},
            }
        },
        methods: {
            ...mapActions('programacionModule', ['transactionUserPeople', 'listPacienteCuidador']),
            ...mapGetters('programacionModule', ['getUserProvider', 'getTranUserPeople', 'getUsuarioPersonaList', 'getUser']),
            async onBackHandle() {
                console.log("navegando")
                await this.router.push('/menu-main')
            },

            async createUSer(value) {
                console.log("createUSer value:", value)
                this.loadingData.status = true;

                const { perPac, perCui } = value;
                await this.transactionUserPeople({ id: this.userData.id, perPac, perCui })
                const { status, data, message } = await this.getTranUserPeople();
                console.log("{ status, data,message }: ", { status, data, message })
                if (status) {
                    this.apiResponse = Object.assign({ status, data, message }, { title: '¡Genial!', btnText: 'Continuar', navTo: '/menu-main' });
                } else {
                    this.apiResponse = Object.assign({ status, data, message }, { title: '¡ OoPs !', btnText: 'Cerrar', navTo: '' });
                }
                await this.llamarLista(this.userData.id)
                this.loadingData.status = false;

            },
            submitForm(event) {
                const form = event.target;
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            },
            hadlerCloseIndicator(value) {
                this.apiResponse.status = null;
            },
            async llamarLista(value) {
                try {
                    await this.listPacienteCuidador({ id: value, isActive: true });
                    const { status, data } = this.getUsuarioPersonaList();
                    this.valorTabla = data;
                    console.log("Todo bien: ", { status, data });
                } catch (error) {
                    console.log("Todo mal: ", error);
                }

            }
        },
    }
</script>

<style lang="scss" scoped>
    i {
        color: var(--warning);
    }


    .table-responsive {
        position: fixed;
        width: calc(100% - 90px);
        font-size: 15px;
        padding: 10px;
        margin: 10px;
    }

    .table-wrapper {
        width: 100%;
        //min-width: 1000px;
        background: #fff;
        padding: 25px;
        border-radius: 3px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    }

    .corto {
        width: calc(100% - 260px);
    }

    .table-title {
        box-sizing: border-box;
        position: sticky;
        /* left: 90px;
    top: 80px; */
        //width: 100%;
        //margin: 10px;
        //width: calc(100% - 100px);
        //padding-top: 10px;
        //padding-bottom: 10px;
        background: #435d7d;
        color: #fff;
        padding: 10px;
        //margin: 10px;
        border-radius: 3px 3px 0 0;
    }

    .table-title h2 {
        margin: 5px 0 0;
        font-size: 20px;
    }

    .table-title .btn-group {
        float: right;
    }

    .table-title .btn {
        color: #fff;
        float: right;
        font-size: 13px;
        border: none;
        min-width: 50px;
        border-radius: 2px;
        border: none;
        outline: none !important;
        margin-left: 10px;
    }

    .table-title .btn i {
        float: left;
        font-size: 21px;
        margin-right: 5px;
    }

    .table-title .btn span {
        float: left;
        margin-top: 2px;
    }

    /* .thc{
    font-size: 15px !important;
} */

    table.table tr th,
    table.table tr td {
        font-size: 13px !important;
        border-color: #e9e9e9;
        padding: 12px 15px;
        vertical-align: middle;
    }

    table.table tr th:first-child {
        width: 60px;
    }

    table.table tr th:last-child {
        width: 100px;
    }

    table.table-striped tbody tr:nth-of-type(odd) {
        background-color: #fcfcfc;
    }

    table.table-striped.table-hover tbody tr:hover {
        background: #f5f5f5;
    }

    table.table th i {
        font-size: 10px;
        margin: 0 5px;
        cursor: pointer;
    }

    table.table td:last-child i {
        opacity: 0.9;
        font-size: 22px;
        margin: 0 5px;
    }

    table.table td a {
        font-weight: bold;
        color: #566787;
        display: inline-block;
        text-decoration: none;
        outline: none !important;
    }

    table.table td a:hover {
        color: #2196F3;
    }

    table.table td a.edit {
        color: #FFC107;
    }

    table.table td a.delete {
        color: #F44336;
    }

    .done i {
        color: #039555 !important;
    }

    .cancel i {
        color: #F44336 !important;
    }

    table.table td i {
        font-size: 19px;
    }

    table.table .avatar {
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 10px;
    }

    .hint-text {
        float: left;
        margin-top: 10px;
        font-size: 13px;
    }

    /* Custom checkbox */
    .custom-checkbox {
        position: relative;
    }

    .custom-checkbox input[type="checkbox"] {
        opacity: 0;
        position: absolute;
        margin: 5px 0 0 3px;
        z-index: 9;
    }

    .custom-checkbox label:before {
        width: 18px;
        height: 18px;
    }

    .custom-checkbox label:before {
        content: '';
        margin-right: 10px;
        display: inline-block;
        vertical-align: text-top;
        background: white;
        border: 1px solid #bbb;
        border-radius: 2px;
        box-sizing: border-box;
        z-index: 2;
    }

    .custom-checkbox input[type="checkbox"]:checked+label:after {
        content: '';
        position: absolute;
        left: 6px;
        top: 3px;
        width: 6px;
        height: 11px;
        border: solid #000;
        border-width: 0 3px 3px 0;
        transform: inherit;
        z-index: 3;
        transform: rotateZ(45deg);
    }

    .custom-checkbox input[type="checkbox"]:checked+label:before {
        border-color: #03A9F4;
        background: #03A9F4;
    }

    .custom-checkbox input[type="checkbox"]:checked+label:after {
        border-color: #fff;
    }

    .custom-checkbox input[type="checkbox"]:disabled+label:before {
        color: #b8b8b8;
        cursor: auto;
        box-shadow: none;
        background: #ddd;
    }

    /* Modal styles */
    .modal .modal-dialog {
        max-width: 400px;
    }

    .modal .modal-header,
    .modal .modal-body,
    .modal .modal-footer {
        padding: 20px 30px;
    }

    .modal .modal-content {
        border-radius: 3px;
    }

    .modal .modal-footer {
        background: #ecf0f1;
        border-radius: 0 0 3px 3px;
    }

    .modal .modal-title {
        display: inline-block;
    }

    .modal .form-control {
        border-radius: 2px;
        box-shadow: none;
        border-color: #dddddd;
    }

    .modal textarea.form-control {
        resize: vertical;
    }

    .modal .btn {
        border-radius: 2px;
        min-width: 100px;
    }

    .modal form label {
        font-weight: normal;
    }

    @media (max-width:600px) {
        .table-responsive {
            //position: fixed;
            width: calc(100% - 20px);
        }

        /* .table-wrapper {
            position: relative;
            width: calc(100% - 50px);
        }


        .corto {
            width: calc(100% - 50px);
        } */

        .table-title {
            position: fixed;
            left: 0;
            top: 80px;
            width: calc(100% - 20px);
            margin: 10px;
            background: #435d7d;
            color: #fff;
            border-radius: 3px 3px 0 0;
        }
    }
</style>