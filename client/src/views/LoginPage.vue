<script>
  import { mapActions } from 'pinia';
  import { useCounterStore } from '../stores/counter';

  export default{
    data(){
      return {
        value: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      ...mapActions(useCounterStore, ['handleLogin'])
    }
  }
</script>

<template>
    <!--login-->
<section class="vh-100" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 2rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Sign in</h3>
            <form @submit.prevent="handleLogin(this.value)">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="value.email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="value.password" >
              </div>
              <div class="text-center pb-4">
                Don't have an account? <a href="#" @click.prevent="this.$router.push('/register')">Signup</a>
              </div>
              <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
            </form>

            <hr class="my-4">

            <button class="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39;"
              type="submit"><i class="fab fa-google me-2"></i> Sign in with google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>