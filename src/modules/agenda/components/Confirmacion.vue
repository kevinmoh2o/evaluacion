<template>
    <div class="confirmation-dialog">
      <div class="dialog-content">
        <i class="fa-sharp fa-solid fa-trash fa-shake fa-2xl" style="color: #dc3a49;"></i>
        <h2>{{ title }}</h2>
        <div class="mensajito">
          <p>{{ message }}</p>
        </div>
        
        <div class="buttons">
          <button @click="cancel"  class="cancel-button">Cancelar</button>
          <button @click="confirm" class="confirm-button">Confirmar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'confirmation-dialog',
    props: {
      title: String,
      message: String,
      onConfirm: Function,
      onCancel: Function
    },
    methods: {
      confirm() {
        this.onConfirm();
        console.log("elimiandr desde adentro")
      },
      cancel() {
        this.onCancel();
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  @import '@/styles/styles.scss';
.mensajito{
  margin: 20px;
  /* padding: 20px; */
  width: 300px;
}


.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Ajusta la opacidad según tus necesidades */
  z-index: 999; /* Asegúrate de que la capa esté por encima del contenido principal */
}
  .confirmation-dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: transparent;
    /* background-color: #fbc02d; */
  }
  
  .dialog-content {
    background-color: white;
    padding: 20px;
    border-radius: 9px;
    text-align: center;
    background-color: map-get($theme-colors, "amarillo");
  }
  
  h2 {
    margin-top: 0;
  }
  
  .buttons {
    margin-top: 20px;
  }
  
  button {
    margin: 0 10px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .botonux1{
    border-radius: 10px; 
    transition: color 0.5s ease;
    font-weight: 500;
    transition: opacity 0.5s ease;
  }
  .confirm-button {
    color: #13ae4b;
    border: 1.7px solid #13ae4b;
    background-color: white;
    @extend .botonux1
  }

  .confirm-button:hover {
    color: white;
    background-color: #13ae4b;
  }


  .cancel-button {
    color: #ef4b4c;
    border: 1.7px solid #ef4b4c;
    background-color: white;
    @extend .botonux1
    
  }

  .cancel-button:hover {
    color: white;
    background-color: #ef4b4c;
  }

  p{
    color:white
  }



  </style>
  