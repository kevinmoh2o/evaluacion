<template>
    <div class="formulario">
      <FormSectionDatosPersonales />
      <FormSectionUbicacion />
    </div>
  </template>
  
  <script>
  import FormSectionDatosPersonales from '@/components/FormSectionDatosPersonales.vue';
  import FormSectionUbicacion from '@/components/FormSectionUbicacion.vue';
  
  export default {
    name: 'Formulario',
    components: {
      FormSectionDatosPersonales,
      FormSectionUbicacion
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .formulario {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>