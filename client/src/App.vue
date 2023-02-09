<script >
import { mapActions, mapState ,mapWritableState} from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import { useAppStore } from './stores/app';

export default{
    
    computed:{
        ...mapWritableState(useAppStore, ['isAuth'])
    },
    created(){
      if(localStorage.access_token)
      // console.log("MASUK",);
        this.isAuth = true
    }
  }

</script>

<template>
  <RouterView />
</template>

