<template>
    <div class="container">
        <div class="ctnIpt">
            <label class="lbl" :for="setNombre">{{label}}</label>
            <input class="ipt"  :type="setType" :name="setNombre" :placeholder= "ayuda" @input="handleInput"  
            :maxlength="maxlength" :pattern="pattern" v-model="valor"
            />          
        </div>
    </div>
</template>

<script>
export default {
  name: 'entrada-component',
  props: {
    label: String,
    placeholder: String,
    nombre: String,
    type: String,
    maxlength: {
      type: Number,
      default: Infinity
    },
    pattern: String,
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput(event) {
      const inputValue = event.target.value;
      this.$emit('change', inputValue);
    }
  },
  data() {
    
    return {
      valor:this.value,
    }
  },
  computed: {
    ayuda() {
      return this.placeholder || ' ';
    },
    setNombre(){
        return this.nombre;
    },
    setType(){
       return this.type 
    }
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
  