<template>
  <div v-if="isLoading" class="loading-indicator">
    <LoadingView></LoadingView>
  </div>

  <div v-else-if="isSuccess" class="loading-indicator">
    <SuccessView></SuccessView>
  </div>

  <div v-else-if="isError" class="loading-indicator">
    <ErrorView></ErrorView>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { defineAsyncComponent } from 'vue'

export default {
  name: 'indicador-layout',
  components: {
    SuccessView: defineAsyncComponent(() => import('@/components/indicadores/SuccessView.vue')),
    ErrorView: defineAsyncComponent(() => import('@/components/indicadores/ErrorView.vue')),
    LoadingView: defineAsyncComponent(() => import('@/components/indicadores/LoadingView.vue')),
  },
  computed: {
    isLoading() {
      return this.getEstado().loading;
    },
    isSuccess() {
      return this.getEstado().success;
    },
    isError() {
      return this.getEstado().error;
    },
  },
  mounted() {
    this.initializeState();
  },
  methods: {
    ...mapActions('programacionModule', ['deleteEntry', 'setIsLoading']),
    ...mapGetters('programacionModule', ['getEstado']),
    async onPressCrear() {
      // Tu lógica aquí
    },
    async sleep(ms) {
      return await new Promise(resolve => setTimeout(resolve, ms));
    },
    async initializeState() {
      console.log("created");
      console.log(this.getEstado());
      this.setIsLoading({ loading: true, success: false, error: false });
      console.log(this.getEstado());
      await this.sleep(3000);
      this.setIsLoading({ loading: false, success: true, error: false });
    },
  },
}
</script>

<style lang="scss" scoped></style>
