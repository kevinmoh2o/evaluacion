<template>
    <div class="container">
      <div class="ctnIpt">
            <label class="lbl" for="dropdown" >{{titulo}}</label>
            <select class="ipt" name="idSelector" id="idSelector"  v-model="title" onchange="" required="">>
                <option value="" disabled selected hidden>Selecciona un valor</option>
                <option v-for="nombre in nombres" :key="nombre.id" :value="nombre.valor">{{ nombre.valor }}</option>
            </select>
        </div>
    </div>
</template>


<script>

export default {
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

  .container{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    max-width: none;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
  }

    .lbl{
        justify-self: start;
        align-self: start;
        align-items: start;
        grid-area:lbl;
        font-weight: 600;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
        padding-bottom:5px ;
    }

    .ipt{
        grid-area:ipt;
        border: 1.5px solid #5B5D6B;
        border-radius: 5px;
        width: 100%;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
        padding-left:5px ;
        height: 45px;
    }

    .ctnIpt {
        width: 100%;
        display: grid;
        grid-template-columns: 100%; 
        grid-template-areas:
            "lbl"
            "ipt"
            ; 
    }
</style>
