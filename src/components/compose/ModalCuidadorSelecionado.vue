<template>
<div class="modal fade" id="modalCuidadorSeleccion" tabindex="-1" aria-labelledby="modalCuidadorLabel" aria-hidden="true">
      <div class="modal-dialog modal-md modal-lg modal-xl modal-xxl">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">SELECCIONE UN CUIDADOR-PACIENTE</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body" >

                <div class="contenedor">
                    <div class="caja" v-for="index in 5" :key="index">
                        <div class="id-box">
                            <label class="id-letter">45484298</label>
                        </div>
                        
                        <label class="etq-bold">Emilio Pedragón Montero</label>
                        <Label class="etq-normal">Enfermero</Label>

                        <hr class="separador">
                        <div class="id-box">
                            <label class="id-letter">45484298</label>
                        </div>
                        <h2 class="etq-bold">Benjamin Franklin</h2>
                        <!-- <i class="fas fa-user-md"></i> -->
                        <label class="etq-soft">Primo</label>
                    
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

.btn-close {
    color: white !important;
}
h5{
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-content: center;
}



button{
    color: white;
}

.id-letter{
    color: white;
    letter-spacing: 3px;
    font-size: 13px;
}

.id-box{
    background-color: black;
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
}
.modal-content{
    background: var(--primary);
}
.separador{
    color:var(--primary);
    //height: 2px;
    width: 100%;
    border-top: 3px solid var(--primary);
}
.contenedor{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: center;
}
.caja {
    border-radius: 10px ;
    //background: radial-gradient(circle, var(--warning), var(--primary));
    background: var(--light);
    display: flex;
    width: 350px;
    align-items: start;
    flex-direction: column;
    margin: 10px 10px 10px 10px;
    padding: 10px 10px 10px 10px;
    transition: all .55s ease;
}

.caja:hover{
    background: #d6d9dd;//
}


.etq-soft{
    font-weight: 500;
    font-size: 14px;
    word-spacing: 0px;
    letter-spacing: 1px;
    color: rgb(101, 94, 94);
}


.etq-bold{
    font-weight: 700;
    font-size: 18px;
    word-spacing: 0px;
    letter-spacing: 0;
    color: rgb(42, 38, 38);
}

.etq-normal{
    color: rgb(28, 27, 27);
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