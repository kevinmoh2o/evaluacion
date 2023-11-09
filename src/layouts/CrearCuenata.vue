<template>
    <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="'Crear Cuenta'" 
            @volver="onBackHandle"></Navbar>
    <div class="container-fluid px-3">
        <form @submit="submitForm" class="needs-validation" novalidate>
            <h4>DATOS PERSONALES</h4>
            <hr class="hr" />
            <div class="row p-0 m-0">
                <div class="col-sm-6 col-lg-4 align-left mt-2">
                    <label for="validationCustom01" class="form-label">Primer Nombre:</label>
                    <input type="text" class="form-control" id="validationCustom01" required>
                    <div class="invalid-feedback">
                    Escriba un nombre válido.
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 align-left mt-2">
                    <label for="validationCustom02" class="form-label">Segundo Nombre:</label>
                    <input type="text" class="form-control">
                    
                </div>
                <div class="col-sm-6 col-lg-4 align-left mt-2">
                    <label for="validationCustom03" class="form-label">Apellido Paterno:</label>
                    <input type="text" class="form-control" id="validationCustom03" required>
                    <div class="invalid-feedback">
                    Escriba un apellido válido.
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 align-left mt-2">
                    <label for="validationCustom04" class="form-label">Apellido Materno:</label>
                    <input type="text" class="form-control" id="validationCustom04" required>
                    <div class="invalid-feedback">
                    Escriba un apellido válido.
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 align-left mt-2">
                    <label for="validationCustom05" class="form-label">Edad:</label>
                    <input type="number" class="form-control" id="validationCustom05" max="80" min="18" maxlength="2" required>
                    <div class="invalid-feedback">
                    Escriba una edad válida.
                    </div>
                </div>

                <div class="col-sm-6 col-lg-4 align-left mt-2">
                    <label for="validationCustom06" class="form-label">Sexo:</label>
                    <select class="form-select" id="validationCustom06" required>
                    <option selected disabled value="">Seleccionar</option>
                        <option value="2">Masculino</option>
                        <option value="3">Femenino</option>
                    </select>
                    <div class="invalid-feedback">
                    Seleccione un valor.
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 align-left mt-2">
                    <label for="startDate" class="form-label">Fecha de Nacimiento</label>
                    <input id="startDate" class="form-control" type="date" required/>
                    <span id="startDateSelected"></span>
                    <div class="invalid-feedback">
                    Fecha incorrecta.
                    </div>
                </div>
            </div>

            
            <h4 class="mt-5">DATOS GEOGRÁFICOS</h4>
            <hr class="hr" />
            <div class="row p-0 m-0">
                <div class="col-sm-6 col-lg-4 align-left mt-2">
                    <label for="validationCustom08" class="form-label">Centro de Salud:</label>
                    <select class="form-select" id="validationCustom08" required>
                    <option selected disabled value="">Seleccionar</option>
                        <option value="2">La Perla</option>
                        <option value="3">San Pedro</option>
                        <option value="3">San Lucas</option>
                    </select>
                    <div class="invalid-feedback">
                    Seleccione un valor.
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 align-left mt-2">
                    <label for="validationCustom09" class="form-label">Distrito:</label>
                    <select class="form-select" id="validationCustom09" required>
                    <option selected disabled value="">Seleccionar</option>
                        <option value="2">La Perla</option>
                        <option value="3">San Pedro</option>
                        <option value="3">San Lucas</option>
                    </select>
                    <div class="invalid-feedback">
                    Seleccione un valor.
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 align-left mt-2">
                    <label for="validationCustom10" class="form-label">Diris/Diresa:</label>
                    <select class="form-select" id="validationCustom10" required>
                    <option selected disabled value="">Seleccionar</option>
                        <option value="2">La Perla</option>
                        <option value="3">San Pedro</option>
                        <option value="3">San Lucas</option>
                    </select>
                    <div class="invalid-feedback">
                    Seleccione un valor.
                    </div>
                </div>
            </div>


            <h4 class="mt-5">MIS CREDENCIALES</h4>
            <hr class="hr" />
            <div class="row p-0 m-0">
                <div class="col-sm-6 col-lg-4 align-left mt-2">
                    <label for="validationCustom11" class="form-label">Contraseña:</label>
                    <input type="password" class="form-control" id="validationCustom11" maxlength="12" minlength="6" autocomplete="new-password" required>
                    <div class="invalid-feedback">
                    Entre 6-12 caracteres.
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 align-left mt-2">
                    <label for="validationCustom12" class="form-label">Confirmar Contraseña:</label>
                    <input type="password" class="form-control" id="validationCustom12" maxlength="12" minlength="6" autocomplete="new-password" required>
                    <div class="invalid-feedback">
                    Entre 6-12 caracteres.
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 align-left mt-2">
                    <label for="validationCustom13" class="form-label">Usuario:</label>
                    <input type="text" class="form-control" id="validationCustom13" required>
                    <div class="invalid-feedback">
                    Escriba un apellido válido.
                    </div>
                </div>  
            </div>

            <hr class="solid">

            <div class="container-fluid my-5 align-items-center align-center">
                <button type="submit" class="btn btn-success btn-150">Crear</button>
            </div>
            <hr/>
            <hr/>
        </form>

    </div>
</template>
  
<script>
import Navbar from '@/components/compose/Navbar.vue';
import { useRouter } from 'vue-router'
export default {
    name: 'Crear-Cuenta',
    components: {
        Navbar,
    },
    props: {
        msg: String
    },
    data() {
        const router = useRouter()
        return {
            selectedTime: '',
            timeOptions: [],
            router: router
        };
    },
    mounted() {
        // Genera las opciones de tiempo al montar el componente
        this.generateTimeOptions();
    },
    methods: {
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
        isValid(fieldName) {
            return this.validation[fieldName];
        },
        submitForm(event) {
            const form = event.target;
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        },
        async onBackHandle(){
            console.log("navegando")
            await this.router.push('/')
        }
    },
}
</script>
  
<style scoped>
.custom-modal {
    max-width: 800px !important;
}

.input-group-append {
    cursor: pointer;
}

.align-left {
    text-align: left;
}

.align-center{
    text-align: center;
}

.btn-150{
    width: 200px;
}
</style>
  

<!-- <template>
    <div class="pantalla">
        <div class="cabecera">
            <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="titulo" 
            @volver="onBackHandle"></Navbar>
        </div>
            <FormSectionDatosPersonales></FormSectionDatosPersonales>
        </div>
</template>


<script>
import Navbar from '@/components/compose/Navbar.vue';
import FormSectionDatosPersonales from '@/components/compose/FormSectionDatosPersonales.vue';
import { useRouter } from 'vue-router'

export default {
    name: 'create-layout',
    setup() {
        const router = useRouter()
        return {
            titulo: 'Crear Cuenta',
            router: router
        }
    },
    components: {
        Navbar,
        FormSectionDatosPersonales,
    },
    methods:{

        async onBackHandle(){
            console.log("navegando")
            await this.router.push('/')
        }
    
    }
}
</script>
<style lang="scss" scoped>
$color-azul: #1B62BF;
$color-azul-ligth: #62A1D9;
$color-azul-intermedio: #616C8C;
$color-placeholder: #4f4d4db5;
$color-negro: #2c3e50;
.pantalla {
    display: flex;
    flex-direction: column;   
    max-width: 2000px;
}

 .button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
 width: 100%;
}


.cabecera {
    height: 100px;
}

.cuerpo {
    flex: 1;
}

button{
    
    width: 10%;
}

.form-section {
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}

.button-guardar {
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


</style> -->