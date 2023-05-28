<template>
    
        <button class="confirmButton">Confirmar</button>
    
</template>


<script>

export default {
    name:"boton-vue",
    props: {
        titulo: String,
        valores: []
    },
    data() {
    
    return {
      title:'',
      nombres: this.valores,
      format: 'hh:mm',
      indicadorTotalTime:""
    }
  },
    setup() {
        return{
            
        }

    },
    components: {

    }
}
</script>

<style lang="scss" scoped>
.buttons{
    width: 500px;
}
.confirmButton {
    /* width: 100%; */
    height: 50px;
    color: #13ae4b;
    border: 1.7px solid #13ae4b;
    background-color: white;
    border-radius: 7px; 
    transition: color 0.5s ease;
    font-weight: 500;
    transition: opacity 0.5s ease;
  }

  .confirmButton:hover {
    color: white;
    background-color: #13ae4b;
  }

</style>
