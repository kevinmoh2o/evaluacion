<template>
    <div class="pantalla">
        <div class="imgAb">
            <i class="fa-solid fa-user fa-2xl zizeI"></i>
        </div>
        
        <div class="titulo">
            <label class="">{{intitulo}}</label>
        </div>

        <div class="decripcion">
            <label class="">{{inDescripcion}}</label>
        </div>
    </div>
</template>


<script>
export default {
    name: 'info-ux',
    components: {
    },
    props:{
        intitulo:String,
        inDescripcion:String
    },  
    methods:{
    }
}
</script>
<style lang="scss" scoped>


    .pantalla {
        
        /* box-shadow: -1px 1px 5px 0px rgba(0, 0, 0, 0.75); */
        display: grid;
        grid-template:
            "imgAb titulo" 50px
            ". decripcion" 20px/
            50px auto
        ; 
    }
    .imgAb{
        margin: 10px;
        grid-area: imgAb;
    }

    .titulo{
        display: flex;
        grid-area: titulo;
        align-content: center;
        align-items: center;
        text-align: center;
        font-weight: 700;

    }

    .decripcion{
        display: flex;
        grid-area: decripcion;
        align-content: center;
        align-items: center;
        text-align: center;
        font-weight: 400;
    }

    .zizeI{
        color: rgb(71, 70, 70);
        font-size: 25px;
    }

</style>