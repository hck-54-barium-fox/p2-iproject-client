<script>
// import { mapActions } from 'pinia'
// import { useFoodStore } from '../stores/food';
import Btn from '../components/Btn.vue';
import Navbar from '../components/Navbar.vue';
export default {
  components: {
    Navbar,
    Btn
  },
  data() {
    return {
      customer: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    // ...mapActions(useFoodStore, ['submitLogin', 'googleLogin']),
    // handleLogin() {
    //   this.submitLogin(this.customer)
    // }
  }
}
</script>

<template>
  <Navbar />
  <div class=" mb-5">
    <section class="login-section">
      <div class="container con-register pb-5">
        <div class="login-form">
          <div class="header">
            <h1>Sign in </h1>
            <div class="signup text-decoration-none">
              Don't have an account?
              <router-link to="/register" class="signup text-decoration-none"><b>Sign
                  up</b></router-link>
            </div>
          </div>
          <form class="login-form" >
            <label for="email-login" class="form-label"></label>
            <input v-model="this.customer.email" type="email" class="form-control" id="email-login" placeholder="Email">

            <label for="password-login" class="form-label"></label>
            <input v-model="this.customer.password" type="password" class="form-control" id="password-login"
              placeholder="Password">

            <Btn label="Sign in" />
            <p class="signup text-decoration-none" style="text-align: center;">Or Sign in with Your Clash Royale ID</p>
            <div class="mt-3">
              <GoogleLogin :callback="callback" />
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>