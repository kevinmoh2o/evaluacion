<template>

<!--     <div class="container"> -->
      <div class="row">
        <div class="col">
            <label for="dropdown" class="label">{{titulo}}</label>
        </div>
        <div class="col">
          <div class="container-1">
            <div class="dropdown-wrapper">
                <select name="idSelector" id="idSelector" class="dropdown" v-model="title" onchange="" required="">
                    <option v-for="nombre in nombres" :key="nombre.id" :value="nombre.valor">{{ nombre.valor }}</option>
                </select>
                    <i class="fa fa-caret-down"></i>
                </div>
          </div>
        </div>
      </div>
   <!--  </div> -->
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

.container {
    width: 500px;
    padding: 0;
    margin: 0;
    align-items: center;
    align-content: center;
    //background-color: red

}

.container-1{
    width: 300px;
    padding: 0;
    margin: 0;
    //background-color: green;
}
.row {

margin: 0;
padding: 0;


}

.col{
    display: flex;
  align-items: center; 
    margin: 0;
    padding: 0;
}

label {
    padding: 10px;
    display: block;
    font-weight: bold;
}
.dropdown-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 300px;
   

    .dropdown {
        width: 100%;
        height: 50px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: transparent;
        font-size: 14px;
        cursor: pointer;
        
    }
    

    i {
        margin-left: -30px;
        color: #aaa;
    }
} 
/* .row {

  display: flexbox;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  margin: 0;
  padding: 0;
  list-style: none;
 
}
.form-group-1 {
    padding: 0;
    background-color: red;
}

.form-group-2 {
    padding: 0;
    flex: 1;
    background-color: blue;
}

.label {
    font-weight: bold;
    margin-right: 10px;
}
.col {
    flex: 1 0 0;
}
*/
</style>