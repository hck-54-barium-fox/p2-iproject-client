<script>
import { mapState } from 'pinia';
import { useAppStore } from '../stores/app';
import { mapWritableState } from 'pinia';
import { mapActions } from 'pinia';

export default {

    computed:{
    ...mapWritableState(useAppStore, ['isLogin']),

  },
    methods: {
        ...mapActions(useAppStore, ['logout']),
        async doLogout(){
            this.logout()
            this.isLogin=false
            this.$router.push('/login')
        }
    },
    created(){
        if(localStorage.getItem.access_token){
            this.isLogin=true
        }
    }

}
</script>
<template >
    <header id="header" class="fixed-top header-transparent" style="background-color: darkseagreen;">
        <div class="container d-flex align-items-center justify-content-between position-relative">
    
          <div class="logo">
            <h1 @click.prevent="this.$router.push('/')" class="text-light"><a href=""><span>Animal World</span></a></h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a href="index.html"><img src="./assets/img/logo.png" alt="" class="img-fluid"></a>-->
          </div>
    
          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto active" @click.prevent="$router.push('/')" href="#hero">Home</a></li>
              <li><a class="nav-link scrollto" @click.prevent="$router.push('/findAnimal')" href="#about">Find Animal</a></li>
              <li class="dropdown"><a href="#"><span>Cat</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a  @click.prevent="$router.push('/findCat')" href="#">Cat Race</a></li>
                  <li><a href="#">Random Fact About Cat</a></li>
    
                </ul>
              </li>
              <li><a class="nav-link scrollto" @click.prevent="$router.push('/store')" href="#contact">Store</a></li>
              <li><a class="nav-link scrollto" @click.prevent="$router.push('/checkout')"  href="#contact">Cart</a></li>
              <!-- <li><a class="nav-link scrollto" @click.prevent="$router.push('/login')" v-if="isLogin===false" href="#portfolio">Login</a></li> -->
              <li><a class="nav-link scrollto" @click.prevent="logout">Logout</a></li>
            </ul>
            <i  class="bi bi-list mobile-nav-toggle"></i>
          </nav><!-- .navbar -->
    
        </div>
      </header><!-- End Header -->
</template>
<style >
    
</style>