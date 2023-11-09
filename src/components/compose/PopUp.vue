<template>
    <div id="pop-up">
        <div class="pop-up-inner">
            <div class="pop-up-close" @click="close">
                &times;
            </div>
            
            <h1>
                Hello for watch my
            </h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, facere voluptatibus, reprehenderit velit libero enim rem natus impedit, illo tempora maxime numquam deserunt dolore nulla at cupiditate repellendus suscipit sapiente.
            </p>

            <button class="btn mx-2"  @click="close">
                close pop up
            </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'component-pop-up',
  props: {
    

  },
  setup() {
    return {
        popUp: false
    }
  },
  methods:{
    close(){
      this.$emit('close')
      console.log("Close")
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
    .pop-up{
        position: relative;
        top: 0;
        left: 0;
        z-index: 10;
        padding: 32px 16px 120px;
        margin: 32px 50px 120px 50px;
        height: 100vh;
        width: 70%;
        //background-color: rgba($color:#52a07e,$alpha:0.5);
        background-color: red;
        align-content: center;
        justify-content: center;
        align-items: center;
        align-self: center;
        justify-items: center;
        justify-self: center;
        

        &-close{
            position: absolute;
            height: 52px;
            width: 52px;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0;
            right: 0;
            font-size: 3rem;
            cursor: pointer;
        }

        &-inner{
            background-color: #fff;
            color: #000;
            position: relative;
            width: 100%;

            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 5px 5px #000;
            transition: all 250ms ease-in-out;
            
        }

        .fade-enter,
        .fade-leave-to{
            opacity: 0;

            .pop-up-inner{
                opacity: 0;
                transform: translateY(-32px);
            }
        }

        .fade-enter-active,
        .fade-leave-active{
            transition: all 250ms ease-in-out;
        }
}

/* .pop-up-inner{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-items: center;
    justify-self: center;
} */


</style>