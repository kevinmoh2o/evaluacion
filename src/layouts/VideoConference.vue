<template>
    <div>
        <Navbar class="card-wrap" :estadoTitulo="true" :estadoFlecha="true" :titulo="'Video Conferencia'"
            @volver="onBackHandle"></Navbar>
    </div>
    <iframe allow="camera; microphone; fullscreen; display-capture; autoplay"
        :src="urlMeet"
        style="height: calc(100vh - 80px); width: 100%; border: 0;"
        ref="iframeRef"
        >
    </iframe>
</template>

<script>
import Navbar from '../components/compose/Navbar.vue';

export default {
    name: 'video-conference',
    /*     props: {
            evento: {
                type: Object,
                required: true,
            },
        }, */
    created() {
        const eventoString = this.$route.query.valor;
        const reunion = this.$route.query.meeting;
        
        if (eventoString) {
            const evento = JSON.parse(decodeURIComponent(eventoString));
            console.log("this.evento", evento);
            this.evento = evento;
        }
        this.urlMeet =`https://jitsi.techkevmoh2o.com/${reunion}#config.prejoinPageEnabled=false&config.startWithAudioMuted=true&config.startWithVideoMuted=true`;
    },
    data() {
        return {
            evento: {},
            urlMeet:'EmergencyMeet',
        }

    },
    
    methods: {
        onBackHandle() {
            this.$router.push('/agenda');
        }
    },
    components: {
        Navbar,
    }
}
</script>

<style lang="scss" scoped>
.card-wrap {
    height: 80px;
}
</style>