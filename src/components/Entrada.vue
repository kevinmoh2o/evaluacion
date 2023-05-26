<template>
    <div class="container">
        <div class="row">
            <div class="form-group-1 col">
                <label :for="setNombre">{{label}}</label>
            </div>
            <div class="form-group-2 col">
                <input :type="setType" :name="setNombre" :placeholder= "ayuda"  />
            </div>
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
    type: String
  },
  computed: {
    ayuda() {
        console.log(this.placeholder)
      return this.placeholder || 'plaace';
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
.container {
    width: 500px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
}

.row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 3px;
    margin-bottom: 3px;

}

.form-group-1 {
    padding: 0;
}

.form-group-2 {
    padding: 0;
    flex: 0 0 300px;
}

.col {
    flex: 1 0 0;
}

label {
    padding: 10px;
    margin-left: 10px;
    display: block;
    font-weight: bold;
}

input {
    width: 300px;
    height: 50px;
    margin: 0;
    padding-left: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;

}

input:focus {
    outline: none;
    border-color: #0062cc;
    box-shadow: 0 0 0 0.2rem rgba(0, 98, 204, 0.25);
}

</style>