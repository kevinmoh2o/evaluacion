<template>
    <section class="form-section form-section--datos-personales">
        <Form @submit="onSubmit" class="formDP">
            <div class="row">
                
                    <h2 class="lblTitulo">Datos personales</h2>
                    <!-- <Entrada :idf="'id1'" class="inpE1" :type="'text'" :placeholder="''" :nombre="'nombre'" :label="'Nombres y Apellidos:'"
                    @validate="validarNombre"
                    ></Entrada> 
                    <Entrada :idf="'id2'" class="inpE3" :type="'number'" :placeholder="''" :nombre="'telefono'" :label="'Teléfono:'"></Entrada>
                    -->
                    <div class="inpE1 col-12 col-sm-6 col-xl-4 my-3">
                        <label class="form-label form-label-top" for="first_name">Nombres y Apellidos<span class="form-required">*</span></label>
                        <Field  name="first_name"
                            type="text"
                            class="form-control"
                            v-model="employee.last_name"
                            placeholder="Nombres y Apellidos"
                            :rules="isRequired" 
                        />
                        <ErrorMessage class="form-required" name="first_name" />
                    </div>
                    <div class="inpE2 col-12 col-sm-6 col-xl-4 my-3">
                        <label class="form-label form-label-top" for="email">Email<span class="form-required">*</span></label>
                        
                        <Field  name="email"
                            type="email"
                            class="form-control"
                            v-model="employee.email"
                            placeholder="Email"
                            :rules="validateEmail" 
                        />
                        <ErrorMessage class="form-required" name="email" />
                    </div>
                    <div class="inpE3 col-12 col-sm-6 col-xl-4 my-3">
                        <label class="form-label form-label-top" for="telefono">Teléfono<span class="form-required">*</span></label>
                        
                        <Field  name="telefono"
                            type="number"
                            class="form-control"
                            v-model="employee.phone"
                            placeholder="Teléfono"
                            :rules="isRequired" 
                        />
                        <ErrorMessage class="form-required" name="telefono" />
                    </div>
                
                <div class="inpE4 col-12 col-sm-6 col-xl-4 my-3">
                    <label class="form-label form-label-top" for="contrasenia">Contraseña<span class="form-required">*</span></label>
                    <Field  name="contrasenia"
                        type="password"
                        class="form-control"
                        v-model="employee.password"
                        placeholder="Contraseña"
                        :rules="isRequired" 
                    />
                    <ErrorMessage class="form-required" name="contrasenia" />
                </div>
                <div class="inpE5 col-12 col-sm-6 col-xl-4 my-3">
                    <label class="form-label form-label-top" for="passwordConfirm">Confirmar Contraseña<span class="form-required">*</span></label>
                    <Field  name="passwordConfirm"
                        type="password"
                        class="form-control"
                        v-model="employee.passwordConfirm"
                        placeholder="Confirmar Contraseña"
                        :rules="isRequired" 
                    />
                    <ErrorMessage class="form-required" name="passwordConfirm" />
                </div>

                <div class="cboxE1 col-12 col-sm-6 col-xl-4 my-3">
                    <label class="form-label form-label-top" for="edad">Teléfono<span class="form-required">*</span></label>
                        
                    <Field  name="edad"
                        type="number"
                        class="form-control"
                        v-model="employee.edad"
                        placeholder="Edad"
                        :min="18"
                        :max="60"
                        :rules="validarEdad" 
                    />
                    <ErrorMessage class="form-required" name="edad" />
                    <!-- <label class="form-label form-label-top" for="centrosalud">Edad<span class="form-required">*</span></label>              
                    <div class="col-12 h-75" >
                        <Field name="edad" as="select" class="form-control ddbtn" v-model="employee.age">
                            <option value="" disabled selected hidden>Seleccione un valor</option>
                            <option v-for="nombre in edad" :key="nombre.id" :value="nombre.valor">{{ nombre.valor }}</option>
                        </Field>
                    </div>
                    <ErrorMessage name="edad" /> -->
                </div>
                <div class="cboxE2 col-12 col-sm-6 col-xl-4 my-3">
                    <label class="form-label form-label-top" for="centrosalud">Sexo<span class="form-required">*</span></label>              
                    <div class="col-12 h-75" >
                        <Field name="sexo" as="select" class="form-control ddbtn" v-model="employee.gender">
                            <option value="" disabled selected hidden>Seleccione un valor</option>
                            <option v-for="nombre in sexo" :key="nombre.id" :value="nombre.valor">{{ nombre.valor }}</option>
                        </Field>
                    </div>
                    <ErrorMessage name="sexo" />
                </div>

                <div class="inpE6 col-12 col-sm-6 col-xl-4 my-3">
                    <!-- <div class="cs-form">
                        <input type="time" class="form-control" value="10:05 AM" />
                    </div> -->
                    <div class="cs-form">
                        <label class="form-label form-label-top" for="centrosalud">Fecha de nacimiento<span class="form-required">*</span></label>              
                        <input type="date" class="form-control " value="10:05 AM" />
                    </div>
                    
                    <!-- <DatePickerW :title="'Fecha de nacimiento'"></DatePickerW> -->
                </div>
                
                
                <hr class="divider">
                <h2 class="lblSubTitulo">Ubicación</h2>
                <div class="cboxE3 col-12 col-sm-6 col-xl-4 my-3">
                    <label class="form-label form-label-top" for="centrosalud">Centro de Salud<span class="form-required">*</span></label>              
                    <div class="col-12 h-75" >
                        <Field name="centro" as="select" class="form-control ddbtn" v-model="employee.centro">
                            <option value="" disabled selected hidden>Seleccione un valor</option>
                            <option v-for="nombre in centroList" :key="nombre.id" :value="nombre.valor">{{ nombre.valor }}</option>
                        </Field>
                    </div>
                    <ErrorMessage name="centro" />
                </div>
                <div class="cboxE4 col-12 col-sm-6 col-xl-4 my-3">
                    <label class="form-label form-label-top" for="centrosalud">Distrito<span class="form-required">*</span></label>              
                    <div class="col-12 h-75" >
                        <Field name="distrito" as="select" class="form-control ddbtn" v-model="employee.distrito">
                            <option value="" disabled selected hidden>Seleccione un valor</option>
                            <option v-for="nombre in distritoList" :key="nombre.id" :value="nombre.valor">{{ nombre.valor }}</option>
                        </Field>
                    </div>
                    <ErrorMessage name="distrito" />
                </div>
                <div class="cboxE5 col-12 col-sm-6 col-xl-4 my-3">
                    <label class="form-label form-label-top" for="centrosalud">Diris/Diresa<span class="form-required">*</span></label>              
                    <div class="col-12 h-75" >
                        <Field name="diresa" as="select" class="form-control ddbtn" v-model="employee.diris">
                            <option value="" disabled selected hidden>Seleccione un valor</option>
                            <option v-for="nombre in diresaList" :key="nombre.id" :value="nombre.valor">{{ nombre.valor }}</option>
                        </Field>
                    </div>
                    <ErrorMessage name="diresa" />
                </div>
            
            </div>
            <div class="btnGuardar">
                <button class="btn btn-primary w-25 m-2" type="submit">Crear</button>
            </div>
            
        </Form>
    </section>
</template>
  
<script>
//import Entrada from '@/components/atomic/Entrada.vue';
//import ComboBox from '@/components/atomic/ComboBox.vue';
//import BotonVue from '@/components/atomic/BotonVue.vue';
//import DatePickerW from '@/components/atomic/DatePickerW.vue';
import { Form, Field,ErrorMessage  } from 'vee-validate';
//import HourPickerW from '@/components/atomic/HourPickerW.vue';
export default {
    props: {
        title: {
            type: String,
            default: 'Datos personales'
        }
    },
    components: {
        //Entrada,
        //ComboBox,
        //BotonVue,
        //DatePickerW,
        Form,
        Field,
        ErrorMessage,
    
    },
    data() {
    
    return {
      edad:[
       { id: 1, valor:  "18" },
       { id: 2, valor: "25" },
       { id: 3, valor: "35" }
      ],
      sexo:[
       { id: 1, valor: "Masculino" },
       { id: 2, valor: "Femenino" },
     
      ],
      centroList:[
       { id: 1, valor:  "La Perla" },
       { id: 2, valor: "San Pedro" },
       { id: 3, valor: "San Lucas" }
      ],
      distritoList:[
       { id: 1, valor: "Norte" },
       { id: 2, valor: "Centro" },
       { id: 2, valor: "Sur" },
       { id: 2, valor: "Diresa Callao" },
      ],
      diresaList:[
       { id: 1, valor: "Norte" },
       { id: 2, valor: "Centro" },
       { id: 2, valor: "Sur" },
       { id: 2, valor: "Diresa Callao" },
      ],
      'employee': {
            'nombres':'',
            'last_name':'',
            'email':'',
            'phone':'',
            'password':'',
            'passwordConfirm':'',
            'city':'',
            'current_experience':'',
            'age':'',
            'centro':'',
            'distrito':'',
            'diris':'',
            'gender':''
        }
    }
    },
    methods:{
        onSubmit(values) {
        console.log(values);
        },
        isRequired(value) {
            if (value && value.trim()) {
                return true;
            }
            return 'This is required';
        },
        validateEmail(value) {
        if (!value) {
            return 'Este campo es obligatorio';
        }
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!regex.test(value)) {
            return 'Ingrese un email válido';
        }
        return true;
        },
        validarNombre(value){
            if (!value) {
                return 'Este campo es obligatorio';
            }
            console.log(`validar value: ${value}`);
            return "ERF"
        },
        validarEdad(value){
            if(value<18){
                return 'Ingrese un número mayor que 18'
            }
            if(value>60){
                return 'Ingrese un número menor que 60'
            }

        }
    }

}
</script>
  
<style lang="scss" scoped>

input.form-control {
    height: 45px;
}

select.form-control.ddbtn{
    margin: 0;
    height: 45px;

}

.control2{
    width:100%;
    border: white;
}


.control2:focus {
  outline: none;
}
.arrow-icon {
  position: static;
  top: -5px;
  //right: 10px;
  align-content: center;
  display: flex;
  transform: translateX(-50px);

}
.custom-select {
  position: relative;
  display: inline-block;
}

.custom-select select {

}
.form-label-top {
    width: 100%;
    margin-left: 2px;
    //margin-bottom: 10px;
    //margin: 0;
    padding: 0;
}

.form-label {

}

.form-required {
    color: #f23a3c;
}

.btnGuardar{
        //grid-area:btnGuardar;
        justify-self: center;
        align-self: center;
        //margin: 0 15px 0 15px;
        //width: 400px;
        align-content: center;
        display: flex;
        justify-content: space-around;
    }




</style>