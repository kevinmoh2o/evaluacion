
<template>
    <div v-if="loading.status" class="loading-overlay">
        <div class="loader"></div>
        <label class="txtLoading">{{ loading.title }}</label>
    </div>
</template>
  

<script>
export default {
  props: {
    loading: Object,
  },
}
</script>

<style scoped>
.loading-overlay {
    --clr-primary-hsl-400: 0, 0%, 100%; 
    --clr-secondary-hsl-400: 0, 0%, 100%;
    --clr-primary-400: hsl(var(--clr-primary-hsl-400));
    --clr-secondary-400: hsl(var(--clr-secondary-hsl-400));
    --gradient-primary: linear-gradient(
        var(--clr-primary-400), 
        var(--clr-secondary-400));
    background: var(--gradient-primary);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.loader{
  display:flex;
  flex-direction: column;
  justify-content:center;
  text-align: end;
  align-items:center;
  background-color:#f7f9fb;
  transition:opacity 0.75s, visibility 0.75s;
}

.loader::after{
  content:"";
  width: 120px;
  height: 120px;
  border: 3px solid #dddddd;
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: loading 0.75s ease infinite;  
}

@keyframes loading{
  from{
    transform: rotate(0turn);
  }
  to{
    transform: rotate(1turn);
  }
}


.txtLoading{
  font-weight: 300;
  color: black;
  font-size: 18px;
  letter-spacing: 2px;
  font-family:  Arial, sans-serif;
  text-align: center;
  justify-content: center;
  background-color:white ;
  margin: 30px 0 30px 0;
}
</style>
  