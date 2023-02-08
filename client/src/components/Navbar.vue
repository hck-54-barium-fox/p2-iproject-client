<script>
    import { mapActions, mapState } from "pinia";
    import { useCounterStore } from "../stores/counter";
    export default {
    name: "Navbar",
    computed:{
        ...mapState(useCounterStore, ['isLogin'])
    },
    methods: {
        ...mapActions(useCounterStore, ['handleLogout'])
    }
}
</script>

<template>
    <!-- Navbar-->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid justify-content-between">
    <!-- Left elements -->
    <div class="d-flex">
      <!-- Brand -->
      <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
        <img
          src="https://i.pinimg.com/564x/b2/60/f0/b260f0db4040a1f18077d82ac41353f2.jpg"
          height="20"
          alt="MDB Logo"
          loading="lazy"
          style="margin-top: 2px;"
        />RentOPhone
      </a>
    </div>
    <!-- Left elements -->

    <!-- Center elements -->
    <ul class="navbar-nav flex-row d-none d-md-flex">
      <li class="nav-item me- me-lg-1">
        <a class="nav-link" href="#" @click.prevent="this.$router.push('/')">
          <span>Home</span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#" @click.prevent="this.$router.push('/smartphones')">
          <span>Phone List</span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#" v-if="isLogin" @click.prevent="this.$router.push('/purchase')">
          <span>Purchase</span>
        </a>
      </li>
    </ul>
    <!-- Center elements -->

    <!-- Right elements -->
    <ul class="navbar-nav flex-row">
      <li class="nav-item me-3 me-lg-1" v-if="!isLogin">
        <a class="nav-link" href="#"  @click.prevent="this.$router.push('/login')">
          <span>Login</span>
        </a>
      </li>
      <li class="nav-item me-3 me-lg-1" v-if="!isLogin">
        <a class="nav-link" href="#"  @click.prevent="this.$router.push('/register')">
          <span>SignUp</span>
        </a>
      </li>
      <li class="nav-item me-3 me-lg-1" v-if="isLogin">
        <a class="nav-link" href="#"  @click.prevent="handleLogout">
          <span>Logout</span>
        </a>
      </li>
    </ul>
    <!-- Right elements -->
  </div>
</nav>
</template>