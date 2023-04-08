<template>
  <div class="container-ubicacion">
    <h2 class="form-section__title">Ubicación</h2>
    <div class="row">
      <div class="col-md-4">
        <ComboBox :titulo="'Centro de Salud'"></ComboBox>
      </div>
      <div class="col-md-4">
        <ComboBox :titulo="'Distrito'"></ComboBox>
      </div>
      <div class="col-md-4">
        <ComboBox :titulo="'Diris/Diresa'"></ComboBox>
      </div>
    </div>
  </div>
</template>
  
<script>
import ComboBox from '@/components/ComboBox.vue';
export default {
  props: {
    title: {
      type: String,
      default: 'Ubicación'
    }
  },
  components: {
    ComboBox
  }
}
</script>
  
<style lang="scss" scoped>
$accent-color: #d4af37; // Amarillo oscuro o dorado
$complementary-color: #333; // Gris oscuro

$form-background-color: #fff;
$border-radius: 10px;
$border-color: #ccc;
$form-padding: 2rem;

.container-ubicacion {
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 10px;
  display: grid;
  background-color: $form-background-color;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  
}



.row {
  width: 100%;
  max-width: 1600px;
  margin: 0;
  padding: 0;

}

h2{
  margin-left: 20px;
  margin-top: 10px;
}

.form-section {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 100vw;

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &--ubicacion {
    border-color: #00FF77;
  }
}
</style>