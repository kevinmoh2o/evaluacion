<template>
  <!-- <div class="column-container">
    <Fullcalendar id="YourCalendar" ref="fullCalendar" :options="calendarOptions" class="full-calendar" />
  </div> -->
  <div class="column-container">
    <Fullcalendar ref="fullCalendar" :options="calendarOptions" class="full-calendar">
      <template #eventContent="arg">
        <p><span class="card-box">consectetur<span class="card-popup">
          <CalendarModal2></CalendarModal2>
            </span>
          </span>
        </p>
        <div class="fc-content">
          <i class="fa fa-check-circle"></i>
          <span class="fc-title">{{ arg.event.title }}</span>
        </div>
      </template>
    </Fullcalendar>
  </div>
</template>

  
<script>
import '@fullcalendar/core'
import Fullcalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import esLocale from "@fullcalendar/core/locales/es";
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'
import '@fortawesome/fontawesome-free/css/all.css';

import { Hardware } from '@/utils/Hardware.js';
import CalendarModal2 from '@/modules/agenda/components/CalendarModal2.vue';
/* import jQuery from "jquery";

const $ = jQuery;
window.$ = $; */
export default {
  name: 'calendario-dos',
  components: {
    Fullcalendar,
    CalendarModal2,
  },
  props: {
    usuario: {
      type: String,
      required: true
    },
  },
  async mounted() {
    await this.loadEntries(this.usuario);
    this.calendarOptions.events = this.getentriesTest();
    if (Hardware.isMobile()) {
      const screenWidth = Hardware.getScreenWidth();
      console.log("Se está abriendo desde un dispositivo móvil");
      console.log("Ancho de la pantalla: " + screenWidth + "px");
      this.calendarOptions.headerToolbar.right = 'timeGridWeek,dayGridMonth';
    } else {
      console.log("No se está abriendo desde un dispositivo móvil");
      this.calendarOptions.headerToolbar.right = 'timeGridDay,timeGridWeek,dayGridMonth,listDay';
    }
    console.log("calendarOptions", this.calendarOptions.headerToolbar.right);

    /* $("#YourCalendar").fullCalendar({
      eventRender: function (event, element) {
        element.find(".fc-event-time").after($("<span class=\"fc-event-icons\"></span>").html("Whatever you want the content of the span to be"));
      }
    }); */
  },
  data() {
    const calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      locale: esLocale,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridDay,timeGridWeek,dayGridMonth',
      },
      allDaySlot: false,
      nowIndicator: true,
      editable: true,
      selectable: true,
      weekends: true,
      themeSystem: 'bootstrap5',
      slotMinTime: "08:00:00",
      events: [],
      dateClick: this.handleDateclick,
      eventChange: this.eventChangeClick,
      eventClick: this.handleEventClick,
      contentHeight: 'auto',
      eventRender: this.eventRender,
      eventAdd: (info) => {
        console.log('create')
        console.log(info)
      },
      eventRemove: (arg) => {
        console.log('eventRemove')
        console.log(arg)
      },
    };
    var showModal = false;
    var selectedItem = {};
    var mobileSet = [];
    return {
      calendarOptions,
      showModal,
      selectedItem,
      mobileSet
    }
  },
  methods: {
    handleEventClick(info) {
      const cal = info.event;
      console.log('selected SCHEDULE', cal)
      this.selectedItem = cal;
      this.$emit('dateClick', info, false)
    },
    handleDateclick(clickInfo) {
      this.$emit('dateClick', clickInfo, true)
      console.log("dateClick")
    },
    eventChangeClick(arg) {
      console.log('eventChange')
      console.log("arg", arg);
    },
    ...mapActions('programacionModule', ['loadEntries']),
    ...mapGetters('programacionModule', ['getEvents']),
    ...mapMutations('programacionModule', ['setEntries']),
    getentriesTest() {
      return this.getEvents()
    },
    setearInicio(value) {
      return value;
    },
    editarModal() {
      this.$emit('editarPadre', this.selectedItem);
      console.log("editarModal")
      this.showModal = true;
    },
    closeModal() {
      console.log("closeModal")

      this.showModal = false;
    },
    recortarTexto(texto) {
      if (texto.length > 30) {
        return texto.substring(0, 30);
      }
      return texto;
    },
    eliminarM3() {
      console.log("eliminarM3")
    },

  },
  computed: {
    ...mapState('programacionModule', ['isLoading']),
  },
  async created() {
    //await this.loadEntries(this.usuario);
    //this.calendarOptions.events = this.getentriesTest();
  },
  watch: {
    entries() {
      this.calendarOptions.events = this.entries;
    },
    getEventsWatch() {
      this.calendarOptions.events = this.getEvents();
    }
  }

}
</script>

<style lang="scss" scoped>
.column-container {
  display: flex;
  flex-direction: column;
}

.card-box {
	position: relative;
	font-weight: 900;
	font-size: 14px;
	cursor: pointer;
	text-decoration: underline;
}

.card-popup {
	box-sizing: border-box;
	position: absolute;
	top: 30px;
	left: -85px;
	z-index: 9;
	background: purple;
	color: #fff;
	font-weight: normal;
	width: 250px;
	height: auto;
	padding: 10px;
	font-size: 12px;
	line-height: 22px;
	letter-spacing: normal;
	cursor: text;
	visibility: hidden;
	opacity: 0;
	transform: translate3d(0, 20px, 0);
	z-index: 1;
	transition: .5s;
}

.card-popup:before {
	position: absolute;
	content: '';
	width: 25px;
	height: 25px;
	background: purple;
	top: -5px;
	left: 0;
	right: 0;
	margin: auto;
	transform: rotate(45deg);
	z-index: -1;
}

.card-popup img {
	width: 100%;
	height: auto;
	margin-bottom: 20px;
}

/*Hover-Section*/
.card-box:hover .card-popup {
	visibility: visible;
	opacity: 1;
	transform: translate3d(0, 0px, 0);
	transition: .5s;
}

</style>

