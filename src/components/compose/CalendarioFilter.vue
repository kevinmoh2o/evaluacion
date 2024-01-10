<template>
   <div class="wrapper">
    <header>
      <p class="current-date">{{ currentMonth }}</p>
      <div class="icons">
        <span @click="changeMonth(-1)" class="material-symbols-rounded">chevron_left</span>
        <span @click="changeMonth(1)" class="material-symbols-rounded">chevron_right</span>
      </div>
    </header>
    <div class="calendar">
      <ul class="weeks">
        <li>Dom</li>
        <li>Lun</li>
        <li>Mar</li>
        <li>Mie</li>
        <li>Jue</li>
        <li>Vie</li>
        <li>Sab</li>
      </ul>
      <ul class="days">
        <li v-for="(day, index) in calendarDays" :key="index" :class="{ inactive: day.inactive,active:day.active }">{{ day.day }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: "Holi",
      calendarDays: [],
      currYear: 0,
      currMonth: 0,
      months: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    };
  },
  mounted() {
            this.currentDate   = document.querySelector(".current-date"),
            this.dayTag        = document.querySelector(".days"),
            this.prevNextIcon  = document.querySelectorAll(".icons span");
            let date = new Date();
            this.currYear = date.getFullYear();
            this.currMonth = date.getMonth();
            this.renderCalendar();
  },
  methods: {
    renderCalendar() {
      let firstDayOfMonth = new Date(this.currYear, this.currMonth, 1).getDay();
      let lastDateofMonth = new Date(this.currYear, this.currMonth + 1, 0).getDate();
      let lastDayofMonth = new Date(this.currYear, this.currMonth, lastDateofMonth).getDay();
      let lastDateofLastMonth = new Date(this.currYear, this.currMonth, 0).getDate();
      let calendarDays = [];

      for (let i = firstDayOfMonth; i > 0; i--) {
        calendarDays.push({ day: lastDateofLastMonth - i + 1, inactive: true });
      }

      for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === new Date().getDate() && this.currMonth === new Date().getMonth()
                      &&this.currYear === new Date().getFullYear()?"active":"";
        //console.log(isToday,this.currMonth,this.currYear,i,"dasd");
        let decidir = isToday?{ day: i, active: isToday, today: isToday }:{ day: i, inactive: isToday, today: isToday };
        calendarDays.push(decidir);
      }

      for (let i = lastDayofMonth; i < 6; i++) {
        calendarDays.push({ day: i - lastDayofMonth + 1, inactive: true });
      }

      //this.currentDate = `${this.months[this.currMonth]} ${this.currYear}`;
      this.currentDate.innerText = `${this.months[this.currMonth]} ${this.currYear}`;
      this.calendarDays = calendarDays;
    },
    changeMonth(step) {
      this.currMonth += step;
      if (this.currMonth < 0 || this.currMonth > 11) {
        let date = new Date(this.currYear, this.currMonth);
        this.currYear = date.getFullYear();
        this.currMonth = date.getMonth();
      }
      //this.currentDate = `${this.months[this.currMonth]} ${this.currYear}`
      this.renderCalendar();
    },
    //current(){
    //  this.currentDate = `${months[this.currMonth]} ${this.currYear}`
    //}
  },
  computed:{
    
  }
};
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

/* *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
} */

/* body{
    background-color: #9b59b6;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
} */

.wrapper{
    width: 350px;
    background: #fff;
    border-radius: 10px;
}

.wrapper header{
    display: flex;
    align-items: center;
    padding: 25px 30px 10px;
    justify-content: space-between;
}

header .current-date{
    font-size: 1.45rem;
    font-weight: 500;
}

header .icons span{
    height: 38px;
    width: 38px;
    margin: 0 1px;
    text-align: center;
    line-height: 38px;
    cursor: pointer;
    border-radius: 50%;
    background: #f2f2f2;
    color: #878787;
    font-size: 1.9rem;
}

header .icons span:hover{
    background: #f2f2f2;
}

header .icons span:last-child{
    margin-right: -10px;
}

.calendar{
    padding: 20px;
}

.calendar ul{
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    text-align: center;
} 

.calendar .days{
    margin-bottom: 10px;
}

.calendar .weeks li{
    font-weight: 500;
}

.calendar ul li{
    position: relative;
    width: calc(100% / 7);
}

.calendar .days li{
    z-index: 1;
    cursor: pointer;
    margin-top: 30px;
}

.days li.inactive{
    color: #aaa;
}

.days li.active{
    color: #fff;
}

.calendar .days li::before{
    position: absolute;
    content: "";
    height: 35px;
    width: 35px;
    top: 50%;
    left: 50%;
    z-index: -1;
    border-radius: 50%;
    transform: translate(-50%,-50%);
    //background: #f2f2f2;
    background: rgba($color:#F2B749,$alpha:0.1);
}

.days li:hover::before{
    background: #f2f2f2;
}

.days li.active::before{
    background: #F2B749;
}
</style>
  