<template>
    <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="'Crear Cuenta'" @volver="onBackHandle"></Navbar>

    <form @submit="onPressCrear" class="pagina" novalidate>
        <div class="seccion">
            <h4>DATOS PERSONALES</h4>
            <hr class="hr-estilo" />
            <div class="form-crear ">

                <div class="box">
                    <label for="validationCustom01" class="form-label"><span>*</span> Primer Nombre:</label>
                    <input type="text" class="form-control" id="validationCustom01" required>
                    <div class="invalid-feedback">
                        Escriba un nombre válido.
                    </div>
                </div>

                <div class="box">
                    <label for="validationCustom02" class="form-label">Segundo Nombre:</label>
                    <input type="text" class="form-control">

                </div>

                <div class="box">
                    <label for="validationCustom03" class="form-label"><span>*</span> Apellido Paterno:</label>
                    <input type="text" class="form-control" id="validationCustom03" required>
                    <div class="invalid-feedback">
                        Escriba un apellido válido.
                    </div>
                </div>

                <div class="box">
                    <label for="validationCustom04" class="form-label"><span>*</span> Apellido Materno:</label>
                    <input type="text" class="form-control" id="validationCustom04" required>
                    <div class="invalid-feedback">
                        Escriba un apellido válido.
                    </div>
                </div>

                <div class="box">
                    <label for="validationCustom05" class="form-label"><span>*</span> Edad:</label>
                    <input type="number" class="form-control" id="validationCustom05" max="80" min="18" maxlength="2"
                        required>
                    <div class="invalid-feedback">
                        Escriba una edad válida.
                    </div>
                </div>

                <div class="box">
                    <label for="validationCustom06" class="form-label"><span>*</span> Sexo:</label>
                    <select class="form-select" id="validationCustom06" required>
                        <option selected disabled value="">Seleccionar</option>
                        <option value="2">Masculino</option>
                        <option value="3">Femenino</option>
                    </select>
                    <div class="invalid-feedback">
                        Seleccione un valor.
                    </div>
                </div>

                <div class="box">
                    <label for="startDate" class="form-label"><span>*</span> Fecha de Nacimiento</label>
                    <input id="startDate" class="form-control" type="date" required />
                    <span id="startDateSelected"></span>
                    <div class="invalid-feedback">
                        Fecha incorrecta.
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

                <div class="box">
                    <label for="validationCustom09" class="form-label"><span>*</span> Distrito:</label>
                    <select class="form-select" id="validationCustom09" required>
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
                    <select class="form-select" id="validationCustom10" required>
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
                    <label for="validationCustom13" class="form-label"><span>*</span> Usuario:</label>
                    <input type="text" class="form-control" id="validationCustom13" required>
                    <div class="invalid-feedback">
                        Escriba una contraseña válida.
                    </div>
                </div>

                <div class="box">
                    <label for="validationCustom11" class="form-label"><span>*</span> Contraseña:</label>
                    <input type="password" class="form-control" id="validationCustom11" maxlength="12" minlength="6"
                        autocomplete="new-password" required>
                    <div class="invalid-feedback">
                        Entre 6-12 caracteres.
                    </div>
                </div>

                <div class="box">
                    <label for="validationCustom12" class="form-label"><span>*</span> Confirmar Contraseña:</label>
                    <input type="password" class="form-control" id="validationCustom12" maxlength="12" minlength="6"
                        autocomplete="new-password" required>
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

    <LoadingOverlay :loading="loadingData" @cerrar-indicador="hadlerCloseIndicator"/>
    <SuccessView :reponse="successApi" />
    <ErrorView :reponse="errorApi" @cerrar-indicador="hadlerCloseIndicator"/>
</template>
  
<script>
import Navbar from '@/components/compose/Navbar.vue';
import { useRouter } from 'vue-router'
import { mapActions, mapGetters } from 'vuex'
import { defineAsyncComponent } from 'vue'

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
            loadingData: {
                status: false,
                title: "Creando usuario..."
            },
            successApi: {
                status: false,
                title: '¡ Genial !',
                descripccion: 'Su cuenta se creó con éxito',
                btnText: 'Continuar',
                navTo: '/',
            },
            errorApi: {
                status: false,
                title: '¡ ooPs !',
                descripccion: 'Se ha producido un error al autenticar',
                btnText: 'Cerrar',
                navTo: '',
            },
            selectedTime: '',
            timeOptions: [],
            router: router
        };
    },
    mounted() {
        this.generateTimeOptions();
    },
    methods: {
        ...mapActions('programacionModule', ['deleteEntry', 'setIsLoading']),
        ...mapGetters('programacionModule', ['getEstado']),
        async onPressCrear(event) {
            var validateForm = this.submitForm(event);
            console.log("validateForm: "+validateForm)
            if(!validateForm){
                this.errorApi.status = true;
                this.errorApi.descripccion = 'Por favor, completa todos los campos obligatorios';
                return null;
            }
            try {
                console.log("try")
                this.loadingData.status = true;
                await this.sleep(1000);
            } catch (error) {
                console.log("error: " + error)
            } finally {
                console.log("finally")
                
            }
            this.loadingData.status = false;
            //await this.sleep(3000);
            this.successApi.status=true;
            //this.$router.push("/indicador-loading");
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
        hadlerCloseIndicator(value){
            this.errorApi.status=value;
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
span{
    padding: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color:red;
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
