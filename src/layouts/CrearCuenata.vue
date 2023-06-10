<template>
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


</style>