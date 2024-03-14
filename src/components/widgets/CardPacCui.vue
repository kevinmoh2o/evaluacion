<template>
  <div class="contenedor">
    <div class="flip-card ">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="notification">
            <div class="notititle">Cuidador</div>
            <div class="notibody">{{nombreCon}}</div>
            <br>
            <div class="notititle">Paciente</div>
            <div class="notibody">{{nombrePac}}</div>
          </div>
        </div>
        <div class="flip-card-back">
          <p class="title" lin>N° <br>CONSEJERIA</p>
          <p class="nro-consejeria">{{ consejeria }}</p>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
export default {
  props: {
    nombrePac: String,
    nombreCon: String,
    consejeria: Number,

  },
  setup() {
    //const router = useRouter()
    return {
      titulo: 'Nosotros',

    }
  },
  methods: {


  }
}
</script>

<style scoped>
.contenedor {
  margin: 10px;
  width: auto;
}

.nro-consejeria {
  font-size: 50px;
  font-weight: bold;
  color: white;
}


.notification {
  display: flex;
  flex-direction: column;
  isolation: isolate;
  /* position: relative; */
  border-radius: 10px;
  padding-top: 10px;
  width: auto;
  height: auto;
  background: #29292c;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 16px;
  --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
  --color: #32a6ff
}

.notification:before {
  /* position: absolute; */
  content: "";
  inset: 0.0625rem;
  /* border-radius: none; */
  background: #18181b;
  z-index: 2
}

.notification:after {
  position: absolute;
  content: "";
  width: 0.25rem;
  inset: 0.65rem auto 0.65rem 0.5rem;
  /* border-radius: none; */
  background: var(--gradient);
  transition: transform 300ms ease;
  z-index: 4;
}

.notification:hover:after {
  transform: translateX(0.15rem)
}

.notititle {
  color: var(--color);
  padding: 0 0.25rem 0.4rem 1.25rem;
  font-weight: 500;
  font-size: 1.1rem;
  transition: transform 300ms ease;
  z-index: 5;
}

.notification:hover .notititle {
  transform: translateX(0.15rem)
}

.notibody {
  color: #99999d;
  padding: 0 1.25rem;
  transition: transform 300ms ease;
  z-index: 5;
}

.notification:hover .notibody {
  transform: translateX(0.25rem)
}

.notiglow,
.notiborderglow {
  position: absolute;
  width: 20rem;
  height: 20rem;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle closest-side at center, white, transparent);
  opacity: 0;
  transition: opacity 300ms ease;
}

.notiglow {
  z-index: 3;
}

.notiborderglow {
  z-index: 1;
}

.notification:hover .notiglow {
  opacity: 0.1
}

.notification:hover .notiborderglow {
  opacity: 0.1
}

.note {
  color: var(--color);
  position: fixed;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 0.9rem;
  width: 75%;
}







.flip-card {
  background-color: transparent;
  width: 190px;
  height: 150px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1em;
  font-weight: 900;
  text-align: center;
  margin: 0;
  color: white;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid #18181b;
  border-radius: 1rem;
  cursor: pointer;
}

.flip-card-front {
  background: #18181b;
  color: #18181b;
}

.flip-card-back {
  /* background: linear-gradient(120deg, #efbc21 30%, #ffbf00 88%, #f2e3b7 40%, #eacb6e 78%); */
  background: #24242b;
  color: white;
  transform: rotateY(180deg);
}
</style>