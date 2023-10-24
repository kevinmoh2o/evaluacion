<template>
<div class="modal fade" id="modalCuidadorSeleccion" tabindex="-1" aria-labelledby="modalCuidadorLabel" aria-hidden="true">
      <div class="modal-dialog modal-md modal-lg modal-xl modal-xxl">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Sleccione un Cuidador</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body" >

                <div class="contenedor">
                    <div class="caja" v-for="index in 5" :key="index">
                        <label class="etq-soft">45484298</label>
                        <!-- <i class="fas fa-user-md"></i> -->
                        <label class="etq-bold">Emilio Pedragón Montero</label>
                        <hr class="solid white-line">
                        <Label class="etq-normal">Enfermero</Label>
                    </div>
                    <!-- <div class="caja">
                        <h2>Emilio Pedragón</h2>
                        <i class="fas fa-user-md"></i>
                        <label>Primo</label>
                    </div> -->
                </div>
                
                  
              </div>
              
          </div>
      </div>
  </div>
</template>


<script>
export default {
    name: 'Modal-Cuidador',
    components: {
    },
    props:{
        intitulo:String,
        inDescripcion:String
    },  
    methods:{
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
    }
}
</script>
<style lang="scss" scoped>
$color-azul: #1B62BF;
.contenedor{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
}
.caja {
    border-radius: 10px ;
    background: $color-azul;
    display: flex;
    width: 400px;
    align-items: start;
    flex-direction: column;
    margin: 10px 10px 10px 10px;
    padding: 10px 10px 10px 10px;
}

.etq-soft{
    font-weight: 500;
    font-size: 14px;
    word-spacing: 0px;
    letter-spacing: 1px;
    color: rgb(215, 213, 213);
}


.etq-bold{
    font-weight: 700;
    font-size: 20px;
    word-spacing: 0px;
    letter-spacing: 0;
    color: white;
}

.etq-normal{
    color: white;
}

.white-line {
    background-color: white;
    height: 1px;
    border: none;
  }


/* .caja i{
    width: 40px;
    margin: 0 10px 0 10px;
    font-size: 25px;
    color:--primary;
} */
</style>