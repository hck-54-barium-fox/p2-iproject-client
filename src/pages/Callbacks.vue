<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';

  export default {
    methods: {
      ...mapActions(useMainStore, ['doSpotifyAuth'])
    },
    created() {
      console.log('testtt masukkk siniii', this.$route.query);
      this.doSpotifyAuth(this.$route.query.code)
    }
  }
</script>

<template>

</template>