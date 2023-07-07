<template>
    <!-- <div class="container">
        <div class="ctnIpt">
            <label class="lbl" :for="setNombre">{{label}}</label>
            <input class="ipt"  :type="setType" :name="setNombre" :placeholder= "ayuda" @input="handleInput"  
            :maxlength="maxlength" :pattern="pattern" v-model="valor" autocomplete="new-password"
            />          
        </div>
    </div> -->
    <div class="col-12">
        <label class="form-label form-label-top" :for="setId">{{label}}<span class="form-required">*</span></label>
        <Field  
            :name="setId"
            :type="setType"
            v-model="valor"
            class="form-control"
            :placeholder="placeholder"
            :rules="validateEmail" 
        />
        <ErrorMessage class="form-required" :name="setId" />
    </div>
</template>

<script>
import { Field,ErrorMessage  } from 'vee-validate';
export default {
  name: 'entrada-component',
  props: {
    idf:String,
    label: String,
    placeholder: String,
    nombre: String,
    type: String,
    maxlength: {
      type: Number,
      default: Infinity
    },
    rule:Function,
    pattern: String,
    value: {
      type: [String, Number],
      default: ''
    }
  },
  components: {
        Field,
        ErrorMessage,
    },
    async created() {
      console.log(`id: ${this.idf}`)
    }, 
  methods: {
    handleInput(event) {
      const inputValue = event.target.value;
      this.$emit('change', inputValue);
    },
    validateEmail(value){
      this.$emit('validate', value);
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
    },
    setId(){
       return this.idf 
    }

  }
}
</script>


<style lang="scss" scoped>

input.form-control {
    height: 45px;
}


.custom-select select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 25px;
}
.form-label-top {
    width: 100%;
    margin-left: 2px;
    //margin-bottom: 10px;
    //margin: 0;
    padding: 0;
}

.form-label {
    color: #2c3345;
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    word-break: break-word;
}

.form-required {
    color: #f23a3c;
}
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
  