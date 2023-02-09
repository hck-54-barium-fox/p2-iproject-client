<script>
import { mapActions, mapState } from 'pinia';

import { useBookingStore } from './stores/counter'
import Loader from './components/Loader.vue';
export default {
  methods: {
    ...mapActions(useBookingStore, ['stillLogin'])
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.stillLogin()
    }
    console.log(this.isLoading)
  },
  components: {
    Loader
  },
  computed: {
    ...mapState(useBookingStore, ['isLoading'])
  },


}
</script>
<template>
  <Loader v-if="isLoading" />
  <RouterView />
</template>