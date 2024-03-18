<template>

  <div class="filtro">


    <div class="form-input">
      <input type="search" placeholder="Buscar...">
      <button class="search-btn" type="submit" data-bs-toggle="modal" data-bs-target="#modalCuidadorSeleccion"
        data-bs-whatever="@mdo"><i class="bx bx-search"></i></button>
    </div>

    <div class="form-input">
      <select class="form-select" aria-label="Default select example">
        <option selected disabled class="placeholder">Nro de Consejería</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>

  </div>


  <ModConsejeria :lista="nroConsejeria" @selectedObjConsejeria="selectedObjConsejeria">
  </ModConsejeria>
</template>

<script>
  import ModConsejeria from '@/components/modals/ModConsejeria.vue';
  import { ref, onMounted, watchEffect } from 'vue';

  export default {
    name: 'filter-component',
    props: {
      lista: Array,
    },
    setup(props) {
      const nroConsejeria = ref(props.lista);

      watchEffect(() => {
        nroConsejeria.value = props.lista;
      });

      return {
        nroConsejeria
      };
    },
    components: {
      ModConsejeria,
    },
    methods: {
      realizarConsulta(terminoBusqueda) {
        console.log('Realizando consulta con:', terminoBusqueda);
      },
      agregarConsulta(terminoBusqueda) {
        console.log('Presionando PLUS:', terminoBusqueda);
      },
      selectedObjConsejeria(val) {
        //console.log("val consejeria en padre: ", val);
        this.$emit('selectedObjConsejeriaByFilter', val);
      }
    }
  }

</script>


<style lang="scss" scoped>
  hr {
    margin: 5px 0 5px 0;
  }

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

</style>