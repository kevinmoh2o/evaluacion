<template>
  <div class="contenedor">
    <img src="@/assets/workteam/uno.png" class="scaled-image" alt="Italian Trulli">
    <img src="@/assets/workteam/dos.png" class="scaled-image" alt="Italian Trulli">
    <img src="@/assets/workteam/tres.png" class="scaled-image" alt="Italian Trulli">
    <img src="@/assets/workteam/cuatro.png" class="scaled-image" alt="Italian Trulli">
  </div>
</template>
  
  
<script>
export default {
  props: {

  },
  data() {
    return {

    };
  },
  methods: {
    onPress() {
      this.$emit('cerrar-indicador', false);
    }
  }
}
</script>
  
<style lang="scss" scoped>
.scaled-image {
  max-width: 100%;
  height: auto;
}

@media only screen and (min-width: 1201px) {
  .contenedor {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .scaled-image {
    max-width: 85%;
    height: auto;
  }
}
</style>