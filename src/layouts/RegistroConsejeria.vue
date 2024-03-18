<template>
    <form class="formDP">
        <div class="cabecera">
            <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="titulo" @volver="onBackHandle"></Navbar>
        </div>

        <div class="filtro">

            <div class="form-input">
                <input type="search" placeholder="Buscar...">
                <button class="search-btn" type="submit" data-bs-toggle="modal" data-bs-target="#modalCuidadorSeleccion"
                    data-bs-whatever="@mdo"><i class="bx bx-search"></i></button>
            </div>

            <!-- <div class="form-input">
                <select class="form-select" aria-label="Default select example">
                    <option selected disabled class="placeholder">Nro de Consejería</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div> -->

        </div>



        <div class="mentoria">
            <div class="participante" v-on:click="select(1)">
                <div :class="{ 'contenido': !selectedValue }">

                    <div class="elemento">
                        <span class="value">CUIDADOR:</span>
                        <span class="content">{{ selectedValue ? funConcatName(selectedValue.cuidador) : null }}</span>
                    </div>

                    <div class="elemento">
                        <span class="value">D. N. I.:</span>
                        <span class="content">{{ selectedValue ? selectedValue.cuidador.dni : null }}</span>
                    </div>

                    <div class="elemento">
                        <span class="value">Fecha de Nacimiento:</span>
                        <span class="content">{{ selectedValue ? funCalcAge(selectedValue.cuidador) : null }}</span>
                    </div>

                    <div class="elemento">
                        <span class="value">Sexo:</span>
                        <span class="content">{{ selectedValue ? funGender(selectedValue.cuidador) : null }}</span>
                    </div>

                    <div class="elemento">
                        <span class="value">Ocupación:</span>
                        <span class="content">{{ selectedValue ? funOcupation(selectedValue.cuidador) : null }}</span>
                    </div>

                    <div class="elemento">
                        <span class="value">Teléfono:</span>
                        <span class="content">{{ selectedValue ? funPhone(selectedValue.cuidador) : null }}</span>
                    </div>

                    <div class="elemento">
                        <span class="value">PARENTESCO:</span>
                        <span class="content">{{ selectedValue ? selectedValue.paciente.relationship.toUpperCase() :
                null }}</span>
                    </div>

                </div>


            </div>

            <div class="participante" v-on:click="select(2)">
                <div :class="{ 'contenido': !selectedValue }">

                    <div class="elemento">
                        <span class="value">PACIENTE:</span>
                        <span class="content">{{ selectedValue ? funConcatName(selectedValue.paciente) : null }}</span>
                    </div>

                    <div class="elemento">
                        <span class="value">D. N. I.:</span>
                        <span class="content">{{ selectedValue ? selectedValue.paciente.dni : null }}</span>
                    </div>

                    <div class="elemento">
                        <span class="value">Fecha de Nacimiento:</span>
                        <span class="content">{{ selectedValue ? funCalcAge(selectedValue.paciente) : null }}</span>
                    </div>

                    <div class="elemento">
                        <span class="value">Sexo:</span>
                        <span class="content">{{ selectedValue ? funGender(selectedValue.paciente) : null }}</span>
                    </div>

                    <div class="elemento">
                        <span class="value">Ocupación:</span>
                        <span class="content">{{ selectedValue ? funOcupation(selectedValue.paciente) : null }}</span>
                    </div>

                    <div class="elemento">
                        <span class="value">Teléfono:</span>
                        <span class="content">{{ selectedValue ? funPhone(selectedValue.paciente) : null }}</span>
                    </div>

                    <div class="elemento">
                        <span class="value">Email:</span>
                        <span class="content">{{ selectedValue ? selectedValue.paciente.email.toUpperCase() : null
                            }}</span>
                    </div>

                </div>
            </div>

        </div>

        <div class="btn-contendor">
            <button type="button" class="btn btn-success estilo-btn" data-bs-dismiss="modal">
                Registrar Consejería
            </button>
        </div>

    </form>

    <ModConsejeria :lista="valorTabla" @selectedObjConsejeria="selectedObjConsejeria">
    </ModConsejeria>
</template>


<script>
    import Navbar from '@/components/compose/Navbar.vue';
    import { useRouter } from 'vue-router';
    import { mapActions, mapGetters, useStore } from 'vuex';
    import { ref, onMounted } from 'vue';
    import ModConsejeria from '@/components/modals/ModConsejeria.vue';

    export default {
        name: 'regiconsejeria-layout',
        setup() {
            const router = useRouter();
            const store = useStore();
            const titulo = 'REGISTROS DE CONSEJERÍA';
            const valorTabla = ref([]);
            const userData = ref(null);
            const selectedValue = ref(null);
            const vSelectedValueBool = ref(false);

            const onBackHandle = async () => {
                console.log("navegando")
                await router.push('/menu-main')
            };

            const llamarLista = async (value) => {
                try {
                    await store.dispatch('programacionModule/listPacienteCuidador', { id: value, isActive: true });
                    const { status, data } = store.getters['programacionModule/getUsuarioPersonaList'];
                    valorTabla.value = data;
                    console.log("Todo bien: ", { status, data });
                } catch (error) {
                    console.log("Todo mal: ", error);
                }
            };

            const selectedObjConsejeria = (val) => {
                selectedValue.value = val;
                console.log("val consejeria en padre-padre: ", val)
                return val;
            };

            const select = (index) => {
                // Tu lógica para manejar la selección
            };

            onMounted(async () => {
                const usertest = localStorage.user;
                userData.value = usertest !== null ? JSON.parse(usertest) : null;
                await llamarLista(userData.value.id);
            });

            const funConcatName = (val) => {
                return `${val.apelPaterno} ${val.apelMaterno} ${val.name}`.toUpperCase();
            }

            const funCalcAge = (val) => {
                const date1 = new Date();
                const date2 = new Date(val.birthDate);
                const differenceMs = date1 - date2;
                const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
                return `${val.birthDate.split("-").reverse().join("/")}  (${Math.round(differenceMs / millisecondsPerYear)} años)`;
            }

            const funGender = (val) => `${val.gender == "2" ? 'Masculino' : 'Femenino'}`;
            const funOcupation = (val) => val.ocupation.toUpperCase();
            const funPhone = (val) => val.phone;

            return {
                vSelectedValueBool,
                titulo,
                router,
                valorTabla,
                userData,
                onBackHandle,
                selectedObjConsejeria,
                select,
                selectedValue,
                funConcatName,
                funCalcAge,
                funGender,
                funOcupation,
                funPhone,
            };
        },
        components: {
            Navbar,
            ModConsejeria,
        }
    };
</script>
<style lang="scss" scoped>
    $color-azul: #1B62BF;
    $color-azul-ligth: #62A1D9;
    $color-azul-intermedio: #616C8C;
    $color-placeholder: #4f4d4db5;
    $color-negro: #2c3e50;
    $color-amarillo: #F2B749;


    .contenido {
        display: none;
    }


    .elemento {
        /* border: 2px solid red; */
        display: flex;
        flex-direction: row;
        width: 100%;
    }


    .elemento .value {
        text-align: left;
        /*  border: 2px solid blue; */
        height: auto;
        width: 125px;
        margin: 5px;
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        font-weight: bold;
        font-size: 15px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: rgb(235, 235, 241);
        border-radius: 10px;
    }

    .elemento .content {
        /* border: 2px solid green; */
        /* height: 40px; */
        margin: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: start;
    }



    /* .pacusr {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
    } */

    .mentoria {
        width: 100%;
        height: 100%;
        display: flex;
        padding: 5px 30px 5px 30px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .participante {
        border: 2px dashed $color-amarillo;
        border-radius: 15px;
        width: 45%;
        text-align: center;
        padding: 5px 10px 5px 10px;
        min-height: 400px;
        margin: 10px;
    }

    @media (max-width:777px) {
        .participante {
            width: 100%;
            flex-direction: row;
        }

    }


    .btn-contendor {
        width: 100%;
        display: flex;
        justify-content: center;

    }

    .estilo-btn {
        margin: 10px 0 20px 0;
        border-radius: 15px;
        width: 250px;
        height: 40px;
    }



    /* Filtro para seleccionar usuario y asignarle consejeria */

    .filtro {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 5px 10px 5px 10px;
        padding: 5px 0 5px 0;
    }

    .filtro .form-input {
        margin: 0 10px 0 10px;
        padding: 5px 0 5px 0;
    }

    .contenedor {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: row;
    }

    .contenedor .imagen {
        display: flex;
        width: 300px;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin: 5px 10px 5px 10px;
        padding: 5px 0 5px 0;
    }

    .contenedor .imagen img {
        height: 50px;
        width: 50px;
    }

    .imagen {
        border-radius: 15px;
        border-color: rgb(185, 176, 176);
        border-style: solid;
        background: white;
    }

    .bx {
        font-size: 1.7rem;
    }

    .form-input select {
        border-style: solid;
        border-radius: 10px 10px 10px 10px;
        height: 45px;
    }

    .form-input input {
        height: 45px;
        border-radius: 10px 0 0 10px;
    }

    .form-input {
        width: 300px;
    }

    .form-input button {
        width: 80px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--color-primary);
        color: var(--color-white);
        font-size: 18px;
        border: none;
        outline: none;
        border-radius: 0 10px 10px 0;
        cursor: pointer;
    }

    .form-input {
        display: flex;
        align-items: center;
    }

    input {
        flex-grow: 1;
        padding: 0 16px;
        height: 100%;
        border: none;
        background: var(--grey);
        border-radius: 36px 0 0 36px;
        outline: none;
        width: 100%;
        color: var(--dark);
    }

</style>s