<script>
// import  defineComponent  from '@vue/composition-api'
import {mapActions, mapWritableState} from 'pinia'
import {useAppStore} from '../stores/app'
export default {
  data(){
    return{

    }
  },
  methods : {
     ...mapActions(useAppStore, ['doLogout']),
     handleLogout(){
      this.doLogout()
      this.isLogin = false
     }
  },
  computed  : {
    ...mapWritableState(useAppStore, ['isLogin'])
  },
  created(){
    if(localStorage.access_token){
      this.isLogin = true
    }else if(!localStorage.access_token){
      this.isLogin = false
    }
  }
  
};
</script>

<template>
  <header>
     <nav class="navbar bg-light">
        <div class="container-fluid">
          <h2><a class="navbar-brand">Calculate Carbon Footprint</a></h2>
          <div class="d-flex gap-3">
            <div v-if="isLogin === true">
            <button @click.prevent="handleLogout" type="submit" class="btn btn-danger  ">Logout</button>
            </div>
            <div v-if="isLogin === false">
            <router-link to="/login"><button type="submit" class="btn btn-primary ">Login</button> </router-link>
            <router-link to="/register"><button type="submit" class="btn btn-primary ">Register</button> </router-link>
            </div>
          </div>
        </div>
      </nav>
  </header>
</template>

<style scoped>
.navbar-brand {
  margin-left: 50px;
  align-items: center;
  font-family: monospace;
  position: sticky;
  display: flex;
  justify-content: center;
  /* color: rgb(0, 0, 0); */
  font-size: 40px;
}

.text-brand {
  color: rgb(0, 0, 0);
  align-items: flex-end;
}
</style>
