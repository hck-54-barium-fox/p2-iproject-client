<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';

  export default {
    methods: {
      ...mapActions(useMainStore, ['doSpotifyAuth'])
    },
    created() {
      if (this.$route.query.hasOwnProperty('error')) {
          this.$router.push('/login')
      } else {
        this.doSpotifyAuth(this.$route.query.code)
      }
      
    },
  }
</script>

<template>

</template>