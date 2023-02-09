<script>
import { useCustomerStore } from '../stores/customer'
import { mapActions, mapState, mapWritableState } from 'pinia';
export default{
    computed : {
        ...mapWritableState(useCustomerStore, ['isLogin'])
    },
    created(){
        const loginTrue = localStorage.getItem('access_token')
        if(loginTrue){
            this.isLogin = true
        }else{
            this.isLogin = false
        }
    },
    methods : {
        ...mapActions(useCustomerStore, ['doLogout']),
        hendleLogout(){
            this.doLogout()
        }
    }
}
</script>
<template>
      <!-- NAVBAR -->
    
      <header class="" >
        <div class="navbar">
        <h1 v-if="isLogin === true" style="color: white; font-weight: bold; border: 2px solid hsl(0, 79%, 63%); padding: 10px;border-radius: 20px;">THEFLIX</h1>
          <nav class="" >
            <ul class="navbar-nav">
              <li><a href="#" v-if="isLogin === true" class="navbar-link" @click.prevent="$router.push('/')">Home</a></li>
              <li> <a href="#live" v-if="isLogin === true" class="navbar-link  indicator" @click.prevent="$router.push('/trend')">Tranding</a> </li>
              
            </ul>
          </nav>


          <div class="navbar-actions">

            <button class="navbar-search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>
            <a v-if="isLogin === true" @click="hendleLogout" class="navbar-signin">
              <span>Log out</span>
              <ion-icon name="log-in-outline"></ion-icon>
            </a>
          </div> 
        </div>
      </header>

  <!-- END NAVBAR -->
</template>