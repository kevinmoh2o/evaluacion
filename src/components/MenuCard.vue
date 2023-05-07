<template>
    <div class="menu">
        <div class="menu__card"  @click.prevent="$emit('clickbutton')">
            <div class="card__header">
                <img src="@/assets/cita-medica.png" height="100">
            </div>
            <div class="card__body" >
                <h2>{{titulo}}</h2>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        titulo:String
    },
    data() {
        return {
            cards: [
                {
                    title: "Card 1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed leo vitae enim dignissim bibendum vel eget ipsum."
                },
                {
                    title: "Card 2",
                    description: "Maecenas in turpis vel metus pharetra malesuada a eget massa. Nulla facilisi. Duis fringilla justo sed sem faucibus, nec eleifend tortor accumsan."
                },
                {
                    title: "Card 3",
                    description: "Fusce volutpat tincidunt quam in convallis. Sed luctus ex ut nulla tincidunt, at convallis turpis blandit. Nunc malesuada erat eu nunc auctor tincidunt."
                },
                {
                    title: "Card 4",
                    description: "Vestibulum vitae tortor ac nisl mattis molestie eget nec lacus. Donec eget gravida enim. Sed quis leo non dolor scelerisque auctor quis vel nisl."
                }
            ]
        }
    },
    components: {
        
    },
    methods:{
        clickbutton(val) {
            console.log(val)
            console.log('Se ha hecho clic en la tarjeta del menú');
        }
    }
}
</script>

<style lang="scss" scoped>
$color-azul: #1B62BF;
$color-rojo:#dc3545;
h2 {
    color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    align-items: cennter;
    align-items: center;
    max-lines: 2;
    justify-content: center;
    
}
.menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;



    &__card {
        width: calc(25% - 10px);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        padding: 0;
        position: relative;
        overflow: hidden;
        height: 200px;

        &__header {
            background-color: #0074D9;
            padding: 20px;
            border-radius: 10px 10px 0px 0px;
            align-items: center;
            height: 130px;

            
        }

        &__body {
            padding: 20px;

            p {
                color: #333333;
                font-size: 16px;
                margin: 0;
            }
        }
    }
}

.menu__card{
    width: 35%;
}
.card__header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
}

.card__body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  background-color: $color-rojo;
}

</style>