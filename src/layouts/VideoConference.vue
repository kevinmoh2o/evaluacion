<template>
    <div>
        <Navbar class="card-wrap" :estadoTitulo="true" :estadoFlecha="true" :titulo="'Video Conferencia'"
            @volver="onBackHandle"></Navbar>

        <iframe allow="camera; microphone; fullscreen; display-capture; autoplay"
            src="https://jitsi.techkevmoh2o.com/legendarywatchesdarelow#config.prejoinPageEnabled=false&config.startWithAudioMuted=true&config.startWithVideoMuted=true"
            style="height: calc(100vh - 80px); width: 100%; border: 0;"></iframe>
    </div>
</template>

<script>
import Navbar from '../components/compose/Navbar.vue';

export default {
    name: 'video-conference',
    data() {
        return {
            idParent: 0,
            link1: "calendario",
            link2: "chat",
            link3: "cuidador",
            link4: "equipo",
        }

    },
    methods: {
        onBackHandle() {
            this.$router.push('/menu');
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