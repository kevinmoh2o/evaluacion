/* eslint-disable */

<template>
    <div class="book" v-if="!confirmacionOperation">
        <Calendar class="book" @dateClick="dateClick" @editarPadre="escucharHijo" :usuario="userId"
            @saveAppt="saveAppt">
        </Calendar>
        <Modal ref="modalPrincipal" :inFecha="fechaProgramar" @modelProgramacion="modelProgramacion"
            :listPaciente="ddbOpts"></Modal>
    </div>



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

    <v-snackbar v-model="snackbar" :multi-line="multiLine" :timeout="4000" color="success">
        {{ text }}

        <template v-slot:action="{ attrs }">
            <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>

</template>

<script>
import { defineAsyncComponent, ref } from 'vue'
//import { Formatos } from '@/utils/Formatos.js';
import { Hardware } from '@/utils/Hardware.js';
import { mapActions, mapGetters } from 'vuex'
import { Modal } from 'bootstrap';
import jQuery from "jquery";
//import { Vue3Snackbar, useSnackbar } from "vue3-snackbar";


const $ = jQuery;
window.$ = $;

export default {
    name: 'book-list',
    props: {
    },
    async mounted() {
        var usertest = localStorage.user;
        this.usuarioData = usertest !== null ? JSON.parse(usertest) : null;
        //this.usuarioData = this.getUser();
        //console.log("userProv mounted books: ", this.usuarioData);

        this.ddbOpts = await this.getListaRelacionesDdb({ id: this.usuarioData.id, isActive: true });
        //console.log("this.ddbOpts: ",this.ddbOpts)
    },
    components: {
        Calendar: defineAsyncComponent(() => import('./components/Calendar.vue')),
        //CalendarModal: defineAsyncComponent(() => import('./components/CalendarModal.vue')),
        Modal: defineAsyncComponent(() => import('./components/Modal.vue')),
        //Cargando: defineAsyncComponent(() => import('./components/Cargando.vue')),
        //Confirmacion: defineAsyncComponent(() => import('./components/Confirmacion.vue')),
        LoadingOverlay: defineAsyncComponent(() => import('@/components/indicadores/LoadingOverlay.vue')),
        SuccessView: defineAsyncComponent(() => import('@/components/indicadores/SuccessView.vue')),
        ErrorView: defineAsyncComponent(() => import('@/components/indicadores/ErrorView.vue')),
        //Vue3Snackbar,

    },
    created() {
        this.licenciado = 'Kevin Montañez Huamán.';//"Pedro Laredo Chuquispuma"
        this.userId = 'kbmont';
        if (Hardware.isMobile()) {
            const screenWidth = Hardware.getScreenWidth();
            console.log("Se está abriendo desde un dispositivo móvil");
            console.log("Ancho de la pantalla: " + screenWidth + "px");

        } else {
            console.log("No se está abriendo desde un dispositivo móvil en mi phone");
        }
    },
    setup() {
        //const snackbar = useSnackbar();
        const bottom = ref(true);
        const right = ref(true);

        const loadingData = ref({
            status: false,
            title: "Creando programación de reunión ..."
        });

        const apiResponse = ref({ status: null });

        const usuarioData = ref({});

        const eliminandoStatus = ref(true);

        const licenciado = ref('');

        const userId = ref('');

        const flagUpdate = ref(false);

        const eliminatedId = ref('');

        const confirmacionOperation = ref(false);

        const showModal = ref(false);

        const estadoModalOptPa = ref(false);

        const fechaProgramar = ref('');

        const itemVar = ref({});
        const ddbOpts = ref([]);

        const newEvent = ref({
            title: " ",
            date_at: " ",
            hour: " ",
            user_id: " ",
            session: 1800,
        });

        const nombreOpt = ref([
            { id: 1, nombre: 'Juan' },
            { id: 2, nombre: 'Maria' },
            { id: 3, nombre: 'Pedro' }
        ]);

        const multiLine = ref(true);
        const snackbar = ref(false);
        const text = ref(`Programación creada correctamente`);

        return {
            //snackbar,
            bottom,
            right,
            loadingData,
            apiResponse,
            usuarioData,
            eliminandoStatus,
            licenciado,
            userId,
            flagUpdate,
            eliminatedId,
            confirmacionOperation,
            showModal,
            estadoModalOptPa,
            fechaProgramar,
            itemVar,
            newEvent,
            nombreOpt,
            multiLine,
            snackbar,
            text,
            ddbOpts,
        };
    },
    methods: {
        ...mapActions('programacionModule', ['createProgramacion', 'setIsLoading', 'getUserByEmail', 'getListaRelacionesDdb']),
        ...mapGetters('programacionModule', ['getUser']),
        dateClick(arg1, arg2) {
            this.showModal = true;
            this.flagUpdate = true;

            console.log('Recibiendo datos arg1: ', arg1);
            console.log('Recibiendo datos arg2: ', arg2);
            const modalEl = document.getElementById('exampleModal');
            const modal = new Modal(modalEl);
            modal.show();
            if (arg2) {
                console.log("Crear nuevo programa")
                this.itemVar = {
                    backgroundColor: "#FD1F64",
                    borderColor: "#FD1F64",
                    end: "",
                    extendedProps: {
                        description: "",
                        encargado: this.licenciado,
                        link: "",
                    },
                    groupId: this.userId,
                    start: "",
                    title: "",
                    id: ""
                };
            } else {
                console.log("EDITAR programa")
                this.itemVar = arg1.event
                this.flagUpdate = false;
            }
            //const {date} = arg1;

            console.log('itemVar: ', this.itemVar);

            this.fechaProgramar = arg1.dateStr;

            this.estadoModalOptPa = arg2;
            //this.fechaProgramar=Formatos.soloFechaDMY(date);
            console.log("this.fechaProgramar", this.fechaProgramar);
        },
        async modelProgramacion(value) {

            var { validateForm, output } = value;
            console.log("value: ", value);
            if (!validateForm) {
                this.apiResponse = Object.assign({ status: false, data: null, message: 'Por favor, completa todos los campos obligatorios' }, { title: '¡ OoPs !', btnText: 'Cerrar', navTo: '' });
                this.loadingData.status = false;
                return null;
            }
            this.$refs.modalPrincipal.closeModal("ejecutar cerrar modal");
            this.loadingData.status = true;
            output.id = this.usuarioData.id;

            try {
                const { message, status } = await this.createProgramacion(output);
                console.log("this.usuarioData ", { message, status, output })
                if (status) {
                    this.snackbar = true;
                    //this.apiResponse = { status, data: null, message, title: '¡Genial!', btnText: 'Continuar', navTo: '/' };
                } else {
                    this.apiResponse = { status, data: null, message, title: '¡ OoPs !', btnText: 'Cerrar', navTo: '' };
                }
            } catch (error) {
                console.log("error: " + error)
            }

            this.loadingData.status = false;
            /* this.snackbar.add({
                type: 'success',
                text: 'Programación creada correctamente'
            }) */

        },
        async registrarUser() {
            // var respuesta = await createUserWithEmailAndPassword(auth,'kevsssinmohu@gmail.com',"1234567");
            // console.log("consultando xD",respuesta)
        },
        hadlerCloseIndicator(value) {
            this.apiResponse.status = null;
        },
        async autenticar() {

            //var respuesta = await counterStore.login('kevinmohu@gmail.com',"1234567");
            //console.log("respuesta",respuesta)
            //console.log(counterStore.user)


            //console.log(await counterStore.insert('sexo',{ label: "0", value: 'Femenino' }));
            //console.log(await counterStore.insert('sexo',{ label: "1", value: 'Masculino' }));
            //console.log(await counterStore.getColletionById('sexo',0));
            //console.log(await counterStore.getColletion('sexo'));
            //console.log(await counterStore.update('sexo',"aFPROV8y3KHsnBsxN4x6",{ id: '1', valor: "Masculino" }));
            //console.log(await counterStore.deleteCollection('sexo'));
            //console.log(await counterStore.deleteDocument('sexo',"OKPvmXuEB0hPNeyoudR0"));
        },
        /* closeModal() {
            console.log("calendar closeModal")
            this.showModal = false;
            this.flagUpdate = true;
        }, */
        recortarFecha(fecha) {
            const fechaOriginal = new Date(fecha);
            const dia = fechaOriginal.getDate();
            const mes = fechaOriginal.getMonth() + 1;
            const anio = fechaOriginal.getFullYear();
            return `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${anio}`;
        },
        escucharHijo(valor) {
            console.log("escucharhijo", valor);
            this.$data.showModal = true;
            this.itemVar = valor
        },
        saveAppt(param) {
            console.log("param")
            console.log({ param })
            this.$data.showModal = false;
        },
        editarModal() {

            this.estadoModalOptPa = true;
            console.log("editarModalPa", this.estadoModalOptPa);
        },
        eliminarM1(value) {

            console.log("eliminarM1 Books", value);
            this.eliminatedId = value;
            this.confirmacionOperation = true;

            //this.createEntry(objeto)
        },
        async handleConfirm() {
            // Lógica para confirmar la acción
            this.setIsLoading(false);
            this.confirmacionOperation = false;
            console.log('Confirmado');
            try {
                var rptaDelete = await this.deleteEntry(this.eliminatedId)
                console.log("DELETE rptaDelete", rptaDelete)
                if (rptaDelete.statusCode == 200) {
                    this.showModal = false
                }
            } catch (error) {
                console.log('error', error);
            }

            this.setIsLoading(true);
        },
        handleCancel() {
            // Lógica para cancelar la acción
            console.log('Cancelado');
            this.confirmacionOperation = false;
        },


    },
    computed: {
        estadoCargando() {
            console.log("setIsLoading", this.setIsLoading())
            return this.setIsLoading()
        }
    }
};

</script>

<style lang="scss" scoped>
.book {
    width: auto;
}

@media (max-width:750px) {

    .book {
        width: calc(100vw);
        // z-index: 1000;
    }
}

a {
    text-decoration: none !important;
    color: inherit !important;
}

.div1 {
    z-index: 1;
    /* position: absolute; */
    /* background-color:green ; */
    height: 100%;
    width: 100%;
}

.div2 {
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.py-12 {
    position: relative;
    overflow: visible;
}

.component-a {
    position: absolute;
    top: 200;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.component-b {
    position: relative;


    width: 100%;
    max-width: 500px;
    height: 50%;
    background-color: transparent;
    z-index: 2;
}

._2H35C-container {
    -moz-box-align: center;
    -moz-box-flex: 1;
    -moz-box-orient: vertical;
    -ms-flex: 1;
    -ms-flex-align: center;
    -ms-flex-direction: column;
    -o-box-align: center;
    -o-box-flex: 1;
    -o-box-orient: vertical;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -webkit-box-flex: 1;
    -webkit-box-orient: vertical;
    -webkit-flex: 1;
    -webkit-flex-direction: column;
    align-items: center;
    box-flex: 1;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    /* display: flex; */
    display: center;
    flex: 1;
    flex-direction: column;
    padding: 40px 0 0;
    position: absolute;
    z-index: 2;
    width: 100%;
}

/* this.itemVar={
    backgroundColor: "#3484F0",
    borderColor: "#C4DBFA",
    end: "2023-05-10T09:10:00",
    extendedProps: {
        description: "El paciente Juan Pérez se presenta hoy a la consulta con quejas de dolor abdominal persistente en el área del abdomen inferior derecho. El dolor comenzó hace aproximadamente dos días y ha ido empeorando gradualmente. No se observan síntomas adicionales como fiebre, náuseas o vómitos."
    },
    link: "https://7-h98mb4b3d2sbt1-applicationdevelopment.lcnc.cfapps.eu10.hana.ondemand.com/lobby",
    start: "2023-05-10T08:10:00",
    title: "Juan",
    userid: "kbmont",
    encargado:"Carlos Sipan Seminario",
    id:"asdasd"
}; 

<!-- </div>
            <div class="div2"> -->
                <!-- <CalendarModal v-if="showModal" 
                :fechaProgramar="fechaProgramar" :estadoModalOpt="estadoModalOptPa" :item="itemVar" :forma="newEvent"
                :nombreOpt="nombreOpt" :selectedOpt="itemVar" :flagUpdateMo="flagUpdate"
                @closeModal="closeModal" @saveAppt="saveAppt" @editarModal="editarModal" @eliminarM1="eliminarM1"
                ></CalendarModal>     -->
                <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
      data-bs-whatever="@mdo">Open modal for @mdo</button> -->
*/
</style>
