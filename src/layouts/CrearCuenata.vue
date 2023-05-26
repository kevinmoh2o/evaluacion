<template>
    <div class="pantalla">
        <div class="cabecera">
            <Navbar :estadoTitulo="true" :estadoFlecha="true" :titulo="titulo" @volver="onBack"></Navbar>
        </div>
        <div class="form-container">
                <FormSectionDatosPersonales></FormSectionDatosPersonales>
                <FormSectionUbicacion></FormSectionUbicacion>
        </div>
        <div class="button-container">
            <button class="button-guardar">Guardar</button>
        </div>
        
    </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue';
import FormSectionDatosPersonales from '@/components/FormSectionDatosPersonales.vue';
import FormSectionUbicacion from '@/components/FormSectionUbicacion.vue';
import { useRouter } from 'vue-router'
//import ComboBox from '@/components/ComboBox.vue';
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
        FormSectionUbicacion
    },
    methods:{

        async onBack(){
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
    /* activa el modo flexible en el contenedor */
    flex-direction: column;
    /* establece la dirección de los elementos en vertical */
    
    max-width: 2000px;
}

 .button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
 width: 100%;
}
/*
button {
  width: 150px;

} */

.cabecera {
    height: 100px;
    /* establece la altura fija del primer div */
    //background-color: red;
}

.cuerpo {
    flex: 1;
    /* indica que el segundo div debe tomar todo el espacio disponible */
    //background-color: blue;
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


</style>