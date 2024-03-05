<template>
    <div class="modal fade" id="exampleModal" ref="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-md modal-lg modal-xl modal-xxl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Agendar una cita</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <form @submit.prevent="store" class="needs-validation" novalidate>

                        <div class="form-crear">
                            <div class="box-sup">
                                <div class="img-mod">
                                    <i class="fas fa-user-md"></i>
                                </div>
                                <div class="col-11 m-0 p-0">
                                    <label for="recipient-name" class="col-12 fw-semibold px-1 align-left">Licenciado a
                                        Cargo:</label>
                                    <label for="recipient-name" class="col-12 px-1 align-left">{{ usuarioData.fullName
                                        }}</label>
                                </div>
                            </div>

                            <div class="box-sup">
                                <div class="img-mod">
                                    <i class="bi bi-calendar-event-fill"></i>
                                </div>
                                <div class="col-11 m-0 p-0">
                                    <label for="recipient-name" class="col-12 fw-semibold px-1 align-left">Fecha de
                                        cita:</label>
                                    <label for="recipient-name" class="col-12 px-1 align-left">{{
                        Formatos.ymdFechaToView(inFecha) }}</label>
                                </div>
                            </div>
                        </div>

                        <hr class="solid">



                        <div class="form-crear">
                            <div class="box">
                                <div class="img-mod"><i class="bi bi-person-fill"></i>
                                </div>
                                <div class="col-10 m-0 p-0">
                                    <select class="form-select" v-model="selectedCuidador"
                                        aria-label="Default select example" @change="updateOutput" required>
                                        <option value="" disabled selected hidden>Cuidador</option>
                                        <option v-for="paciente in listPaciente" :key="paciente.value"
                                            :value="paciente.value">{{ paciente.label }}</option>
                                    </select>
                                </div>
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>


                            <div class="box">
                                <div class="img-mod">
                                    <i class="bi bi-alarm-fill"></i>
                                </div>
                                <div class="col-10 m-0 p-0">
                                    <select id="startTime" class="form-select" v-model="selectedTime" required>
                                        <option value="" disabled selected>Elija una hora</option>
                                        <option v-for="(time, index) in timeOptions" :key="index" :value="time">{{ time
                                            }}
                                        </option>
                                    </select>
                                </div>
                            </div>


                            <div class="box">
                                <div class="img-mod"><i class="bi bi-bell-fill"></i>
                                </div>
                                <div class="col-10 m-0 p-0">
                                    <select class="form-select" v-model="output.extendedProps.recordar"
                                        aria-label="Default select example" required>
                                        <option value="" disabled selected hidden>Recordatorio</option>
                                        <option v-for="index in listRecordar" :key="index.label" :value="index.value">
                                            {{ index.value }}</option>
                                    </select>
                                </div>
                            </div>


                            <!-- <div class="box">
                                <div class="img-mod"><i class="bi bi-life-preserver"></i></div>
                                <div class="col-10 m-0 p-0">
                                    <select class="form-select" v-model="output.extendedProps.asistencia"
                                        aria-label="Default select example">
                                        <option value="" disabled selected hidden>¿Asistió?</option>
                                        <option v-for="index in listAsistio" :key="index.label" :value="index.value">{{
                                            index.value }}</option>
                                    </select>
                                </div>
                            </div> -->

                            <!-- <div class="box" style="height: 41.6px;">
                                <div class="img-mod"><i class="fas fa-link"></i></div>
                                <div class="img-mod">
                                    <router-link to="/video-conference" class="link-success">Link de la
                                        reunión</router-link>
                                </div>
                            </div> -->

                        </div>

                        <div class="my-3">
                            <textarea class="form-control" v-model="output.extendedProps.description" id="message-text"
                                placeholder="Notas" maxlength="200"></textarea>
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { Formatos } from '@/utils/Formatos.js';
import { list } from 'postcss';

export default {
    name: 'Model-Component',
    props: {
        msg: String,
        inFecha: String,
        listPaciente: Array
    },
    mounted() {
        //console.log("ddbOpts recibido en el componente hijo: ", this.ddbOpts);
        this.usuarioData = this.getUser();
        this.generateTimeOptions();
        //this.listPaciente = this.ddbOpts;
    },
    data() {
        return {
            usuarioData: {},
            Formatos,
            form: this.selectedOpt,
            selectedTime: '',
            timeOptions: [],
            selectedCuidador: '',
            listRecordar: [
                { label: "1", value: "No" },
                { label: "2", value: "1 día antes" },
                { label: "3", value: "1 hora antes" },
            ],
            listAsistio: [
                { label: "1", value: "Si" },
                { label: "2", value: "No" },
            ],
            output: {
                backgroundColor: "#F43E3D",
                borderColor: "#F50B00",
                end: "",
                extendedProps: {
                    description: "",
                    encargado: "",
                    link: "/video-conference",
                    recordar: "",
                    asistencia: "",
                    hora: "",
                    fecha: this.inFecha,
                    meeting: "",
                },
                groupId: "",
                start: this.selectedTime,
                title: "",
                id: ""
            }
        };
    },

    methods: {
        ...mapActions('programacionModule', ['createEntry', 'updateEntry', 'setIsLoading']),
        ...mapGetters('programacionModule', ['getEstado', 'getUser']),
        async store(event) {
            //this.setIsLoading(false);
            var validateForm = this.submitForm(event);
            var { meeting, end } = this.camposAdicionales();
            this.output.end = end;
            this.output.extendedProps.meeting = meeting;
            console.log("validateForm: ", { validateForm, output: this.output })
            this.$emit('modelProgramacion', { validateForm, output: this.output });
            /* if (this.$refs.exampleModal) {
                const closeButton = this.$refs.exampleModal.querySelector('.btn-close');
                if (closeButton) {
                    closeButton.click();
                }
            } */
            /*console.log("selectedTime: ", this.selectedTime)

            console.log({ meeting, end })

            console.log("output: ", this.output)
            this.$emit('saveAppt', form);
            console.log("this.flagUpdateMo")
            await this.createEntry(this.output) */



            /* if (this.flagUpdateMo) {
                console.log("this.grabar", this.grabar)
                try {
                    console.log("createEntry", this.update)
                    //await this.createEntry(this.grabar)
                } catch (error) {
                    console.log("Error en creacion", error);
                }
            } else {
                try {
                    console.log("update", this.update)
                    //await this.updateEntry(this.update)
                } catch (error) {
                    console.log("Error en update", error);
                }
            }
            this.setIsLoading(true); */
        },
        closeModal(valu) {
            if (this.$refs.exampleModal) {
                const closeButton = this.$refs.exampleModal.querySelector('.btn-close');
                if (closeButton) {
                    closeButton.click();
                }
            }
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
        isValid(fieldName) {
            return this.validation[fieldName];
        },
        updateOutput(event) {
            const selectedIndex = event.target.selectedIndex;
            if (selectedIndex !== -1) {
                const selectedOption = this.listPaciente[selectedIndex];
                this.output.groupId = selectedOption.value;
                this.output.title = selectedOption.label;
            }
        },
        submitForm(event) {

            const form = event.target;
            var validador = form.checkValidity();
            if (!validador) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
            return validador;
        },
        camposAdicionales() {
            return {
                meeting: `Reunión ${Formatos.fechaMeeting(this.output.start)}`,
                end: Formatos.addOneHour(this.output.start),
            }
        },


    },

    watch: {
        inFecha(newFecha) {
            // Actualizar la propiedad en el objeto output cuando inFecha cambia
            this.output.extendedProps.fecha = newFecha;
        },
        selectedTime(valor) {
            this.output.start = `${this.output.extendedProps.fecha}T${valor}:00`
            this.output.extendedProps.hora = `${valor}:00`
        },
        listPaciente: function (newListPaciente) {
            if (newListPaciente.length > 0) {
                this.output.title = newListPaciente[0].value; // Establecer el primer valor como seleccionado
            }
        }
    },
}
</script>

<style scoped>
.form-crear {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: left;
}

.box {
    width: 200px;
    padding: 5px;
    margin: 0 10px 0 10px;
    display: flex;
    flex-direction: row;
}

.box-sup {
    width: auto;
    padding: 5px;
    margin: 0 10px 0 10px;
    display: flex;
    flex-direction: row;

}

.custom-modal {
    max-width: 800px !important;
}

.input-group-append {
    cursor: pointer;
}

.align-left {
    text-align: left;
}

i {
    color: var(--warning);
    font-size: 20px;
}

.img-mod {
    margin: 0 10px 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
<!-- <a href="https://calendar.google.com/calendar/u/0/r/eventedit?state=%5Bnull%2Cnull%2Cnull%2Cnull%2C%5B13%5D%5D"
                                        class="link-success">Link de la reunión</a> -->