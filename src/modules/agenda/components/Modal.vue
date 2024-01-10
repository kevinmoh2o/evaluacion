<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md modal-lg modal-xl modal-xxl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Agendar una cita</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">


                    <form @submit="submitForm" class="needs-validation" novalidate>

                        <div class="row px-2 m-0">
                            <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 row m-0 p-0">
                                <div
                                    class="col-1 my-0 my-sm-1 my-md-1 my-lg-1 my-xl-1 my-xxl-1 d-flex align-items-center p-0">
                                    <i class="fas fa-user-md"></i>
                                </div>
                                <div class="col-11 m-0 p-0">
                                    <label for="recipient-name" class="col-12 fw-semibold px-1 align-left">Licenciado a
                                        Cargo:</label>
                                    <label for="recipient-name" class="col-12 px-1 align-left">Kevin Basilio Montañez
                                        Huamán</label>
                                </div>
                            </div>

                            <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 row m-0 p-0">
                                <div
                                    class="col-1 my-0 my-sm-1 my-md-1 my-lg-1 my-xl-1 my-xxl-1 d-flex align-items-center p-0">
                                    <i class="bi bi-calendar-event-fill"></i>
                                </div>
                                <div class="col-11 m-0 p-0">
                                    <label for="recipient-name" class="col-12 fw-semibold px-1 align-left">Fecha de
                                        cita:</label>
                                    <label for="recipient-name" class="col-12 px-1 align-left">20/01/2023</label>
                                </div>
                            </div>
                        </div>

                        <hr class="solid">



                        <div class="row m-0 p-0">
                            <div class="row col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 m-0 p-1">
                                <div class="col-auto mx-2 d-flex align-items-center p-0"><i class="bi bi-person-fill"></i>
                                </div>
                                <div class="col-10 m-0 p-0">
                                    <select class="form-select" aria-label="Default select example" required>
                                        <option value="" disabled selected hidden>Paciente</option>
                                        <option value="1">Maria</option>
                                        <option value="2">Pedro</option>
                                        <option value="3">Ana</option>
                                        <option value="3">Isabel</option>
                                    </select>
                                </div>
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>


                            <div class="row col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 m-0 p-1">
                                <div class="col-auto mx-2 d-flex align-items-center p-0">
                                    <i class="bi bi-alarm-fill"></i>
                                </div>
                                <div class="col-10 m-0 p-0">
                                    <select id="startTime" class="form-select" v-model="selectedTime" required>
                                        <option value="" disabled selected>Elija una hora</option>
                                        <option v-for="(time, index) in timeOptions" :key="index" :value="time">{{ time }}
                                        </option>
                                    </select>
                                </div>
                            </div>


                            <div class="row col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 m-0 p-1">
                                <div class="col-auto mx-2 d-flex align-items-center p-0"><i class="bi bi-bell-fill"></i>
                                </div>
                                <div class="col-10 m-0 p-0">
                                    <select class="form-select" aria-label="Default select example" required>
                                        <option value="" disabled selected hidden>Recordatorio</option>
                                        <option value="1">No</option>
                                        <option value="2">1 día antes</option>
                                        <option value="3">1 hora antes</option>
                                    </select>
                                </div>
                            </div>


                            <div class="row col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 m-0 p-1">
                                <div class="col-auto mx-2 d-flex align-items-center p-0"><i
                                        class="bi bi-life-preserver"></i></div>
                                <div class="col-10 m-0 p-0">
                                    <select class="form-select" aria-label="Default select example" required>
                                        <option value="" disabled selected hidden>Asistió</option>
                                        <option value="1">No</option>
                                        <option value="2">Si</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 m-0 p-1 align-items-center"
                                style="height: 41.6px;">
                                <div class="col-auto mx-2 d-flex align-items-center p-0"><i class="fas fa-link"></i></div>
                                <div class="col-10 m-0 p-0 align-left">
                                    <!-- <a href="https://calendar.google.com/calendar/u/0/r/eventedit?state=%5Bnull%2Cnull%2Cnull%2Cnull%2C%5B13%5D%5D"
                                        class="link-success">Link de la reunión</a> -->
                                        <router-link to="/video-conference" class="link-success">Link de la reunión</router-link>
                                </div>
                            </div>


                            <div class="my-3">
                                <textarea class="form-control" id="message-text" placeholder="Notas"
                                    maxlength="200"></textarea>
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
</template>

<script>
export default {
    name: 'Model-Component',
    props: {
        msg: String
    },
    data() {
        return {
            selectedTime: '',
            timeOptions: [],
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

i {
    color: var(--warning);
    font-size: 20px;
}</style>
