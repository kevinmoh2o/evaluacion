<template>
  <div class="card-inkwell"  @click.prevent="$emit('clickbutton')">
    <div class="card-container"  style="background: var(--primary);">

      <div class="imagen">
          <img class="m-3" :src="require(`@/assets/menu/${ruta}.png`)" alt="Imagen PNG" width="70" height="70">
      </div>

      <div class="titulo">
        <h5 class="m-2 p-0 text-light">{{titulo}}</h5>
      </div>
      
    </div>
  </div>

</template>

<script>

export default {
    props:{
        idCard: Number,
        titulo:String,
        ruta: {
            type: String,
            default: "calendario" 
        },
    },
    created() {
        console.log("ruta",this.ruta);
    }, 
    data() {
        return {
            cards: [
                
            ]
        }
    },
    components: {
        
    },
    methods:{
        presionar() {
            console.log("id hijo",this.idCard)
            this.$emit('presionado');
        },
        clickbutton(val) {
            console.log(val)
            console.log('Se ha hecho clic en la tarjeta del menú');
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../../styles/styles.scss';

.card-container{
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  width: 200px;
  height: 200px;
  box-shadow: 10px 5px 5px #F2B749;
}

.h-145 {
  height: 145px;
}

.imagen{
  border-radius: 15px 15px 0 0;
  height: 100px;
  background-color: rgb(255, 255, 255); 
  //color: #ffa600;
}

.card-inkwell{
  transition: all .55s ease;
}

.card-inkwell:hover{
  transform: translateY(-15px);
}

.titulo{
  padding: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  height: 100%;
}
</style>