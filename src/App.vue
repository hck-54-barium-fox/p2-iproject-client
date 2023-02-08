<script>
import { mapActions } from 'pinia';

import { useBookingStore } from './stores/counter'
export default {
  methods: {
    ...mapActions(useBookingStore, ['stillLogin'])
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.stillLogin()
    }
  }
}
</script>
<template>
  <RouterView />
</template>