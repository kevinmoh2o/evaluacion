<template>
    <div class="contenedor">
            <div class="card-color">
                <img src="@/assets/images/confirmacion.png" alt="" width="100" height="100">
                <div class="grid-flow">
                    <p class="result-rank">¡ Genial !</p>
                    <p>Los cambios se han grabado correctamente</p>
                </div>
                <button class="button">Continuar</button>
            </div>
        </div>
    
</template>


<script>

</script>

<style lang="scss" scoped>
.contenedor{
  --padding: 2.5rem;
  --border-radius: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 46rem;
}

.card-color{
  height: 100%;
  background: var(--clr-neutral-100);
  /* color: hsl(var(--clr-neutral-hsl-100), .7); */
  border-radius: 30px;
  border: 1px solid #fff;
  width: 400px;
  padding: 40px 60px 40px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.grid-flow[data-spacing="large"] {
  gap: 2rem;
}

.grid-flow {
  display: grid;
  align-content: start;
  gap: 1rem;
}

.result-rank {
  color: var(--clr-neutral-300);
  font-size: var(--fs-700);
  font-weight: var(--fw-bold);
}


.button {
  color: var(--clr-neutral-100); 
  line-height: 1;
  background: var(--clr-neutral-300);
  padding: 1rem 2rem;
  border: 0;
  border-radius: 100vw;
  cursor: pointer;
  width: 300px;
  margin: 20px 0 0 0;
}

.button:hover,
.button:focus-visible {
  background: var(--gradient-primary);
}
</style>