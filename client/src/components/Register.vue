<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';
export default {
    methods:{
        ...mapActions(useAppStore, ['register']),
        async doRegister(){
            this.register(this.form)
            console.log(this.form);
        }
    },
    data(){
        return{
            form:{
                email:'',
                password:''
            }
        }
    },
}
</script>
<template >
    <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid" alt="Sample image">
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <h1>Register</h1>
              <form @submit.prevent="doRegister">
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input v-model="form.email" type="email" id="form3Example3" class="form-control form-control-lg"
                    placeholder="Enter a valid email address" />
                  <label class="form-label" for="form3Example3">Email address</label>
                </div>
      
                <!-- Password input -->
                <div class="form-outline mb-3">
                  <input v-model="form.password" type="password" id="form3Example4" class="form-control form-control-lg"
                    placeholder="Enter password" />
                  <label class="form-label" for="form3Example4">Password</label>
                </div>
      
                <div class="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" class="btn btn-primary btn-lg"
                    style="padding-left: 2.5rem; padding-right: 2.5rem;">Register</button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a @click.prevent="$router.push('/login')" href="#!"
                      class="link-danger">Login</a></p>
                </div>
      
              </form>
            </div>
          </div>
        </div>
      </section>
</template>
<style >
    
</style>