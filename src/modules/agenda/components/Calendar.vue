<template>
  <div class="column-container">
    <Fullcalendar ref="fullCalendar" :options="calendarOptions" class="full-calendar">

      <template #eventContent="arg">
        <div class="event-container">
          <p class="card-box" @mouseenter="handleEventMouseEnter(arg)">
          <span>
            <div class="fc-content">
              <i class="fa fa-check-circle fc-content"></i>
              <span class="fc-title">{{ arg.event.title }}</span>
            </div>
            <span class="card-popup popover">
              <CalendarModal2 v-if="popoverVisible" :eventData="selectedEventData" :evento="eventoPopover"></CalendarModal2>
            </span>
          </span>
        </p>
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
      eventMouseEnter: this.handleEventMouseEnter,
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
    var popoverVisible = false;
    var selectedEventData = null;
    var eventoPopover = {};
    return {
      calendarOptions,
      showModal,
      selectedItem,
      mobileSet,
      popoverVisible,
      selectedEventData,
      eventoPopover,
    }
  },
  methods: {
    handleEventMouseEnter({ event }) {
      this.showPopover(event);
      console.log("method handleEventMouseEnter", event);
      this.eventoPopover = event
      console.log(event.title);
    },
    showPopover(event) {
      this.popoverVisible = true;
      this.selectedEventData = event;
      console.log("method showPopover", event);
    },
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
@import '@/styles/styles.scss';


.full-calendar {
  position: relative; /* Asegura que el Fullcalendar tenga posición relativa */
  z-index: 1; /* Establece el z-index del Fullcalendar */
}

.column-container {
  display: flex;
  flex-direction: column;
  position: relative;
}

.event-container {
  position: absolute; /* Cambiado a absolute */
  z-index: 2; /* Establece un z-index mayor para los eventos */
  cursor: pointer;
  height: auto;
}

.card-box {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: transparent;
  font-weight: 500;
  color: rgb(64, 60, 60);
  font-size: 12.5px;
  cursor: pointer;
  text-decoration: underline;
}

.card-popup {
  //box-sizing: border-box;
  position: absolute;
  top: 30px;
  left: -85px;
  z-index: 1002;
  /* Añadido: Asegura que el z-index del popover sea mayor que el del Fullcalendar */
  //background: purple;
  color: rgb(42, 39, 39);
  font-weight: normal;
  //width: 250px;
  //height: auto;
  padding: 10px;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: normal;
  cursor: text;
  visibility: hidden;
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  /* z-index: 1; */
  transition: .5s;
}

.card-popup:before {
  position: absolute;
  content: '';
  background: map-get($theme-colors, amarillo);
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

.fc-content {
  margin: 0 5px 0 5px;
  //padding: 0 5px 0 5px;
}

.popover {
  position: absolute;
  z-index: 1002;

}
</style>

