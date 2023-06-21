<template>
    <div class="container">
      <div class="ctnIpt">
            <label class="lbl" for="dropdown" >{{titulo}}</label>
            <select class="ipt" name="idSelector" id="idSelector"  v-model="title" onchange="" required="">>
                <option value="" disabled selected hidden>{{valorInit}}</option>
                <option v-for="nombre in nombres" :key="nombre.id" :value="nombre.valor">{{ nombre.valor }}</option>
            </select>
        </div>
    </div>
</template>


<script>

export default {
    props: {
        titulo: String,
        valorInit:String,
        valores: {
            type: Array,
            required: true
        },
    },
    data() {
    
    return {
      title:'',
      nombres: this.valores,
      format: 'hh:mm'
    }
  },
    setup() {
        return{
            
        }

    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';
  .container{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    max-width: none;
    padding: 0px 0px 0px 0px;
    /* padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px; */
    width: 100%;
  }

    .lbl{
        justify-self: start;
        align-self: start;
        align-items: start;
        grid-area:lbl;
        font-weight: 600;
        font-family: sans-serif;
        padding-bottom:5px ;
    }

    .ipt{
        background-color: map-get($theme-colors, "azul");
        color: white;
        grid-area:ipt;
        border: 1.5px solid transparent;
        border-radius: 5px;
        width: 100%;
        font-family: sans-serif;
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
    option{
        text-align: center;
    }
</style>
