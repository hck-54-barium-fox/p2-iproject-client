<script>
import { useCustomerStore } from '../stores/customer'
import { mapActions } from 'pinia';
export default {
    data(){
        return {
            email : '',
            password : ''
        }
    },
    methods : {
        ...mapActions(useCustomerStore, ['loginCustomers']),
        hendleLogin(){
            this.loginCustomers({
                email : this.email,
                password :this.password
            })
        },
    }

}
</script>
<template>
     <!-- LOGIN FORM -->

    <!-- LOGIN -->
    <div class="vh-100 gradient-custom" style="border-radius: 1rem; background-color: #f93208;" >
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem; background-color: #f93208;">
              <div class="card-body p-5 text-center">

                <div class="mb-md-5 mt-md-4 pb-5">

                  <h2 class="fw-bold mb-2 text-uppercase" style="color:#f93208; font-weight: bold;font-size: 50px; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Sign In</h2>
                  <p class="text-white-50 mb-5" >Please enter your login and password!</p>
                  <form method="post" @submit.prevent="hendleLogin" >
                    <div class="form-outline form-white mb-4">
                      <input v-model="email" type="email" id="email-login" class="form-control form-control-lg" />
                      <label class="form-label" for="emali-login"  >Email</label>
                    </div>
  
                    <div class="form-outline form-white mb-4">
                      <input v-model="password" type="password" id="password-login" class="form-control form-control-lg" />
                      <label class="form-label" for="password-login"  >Password</label>
                    </div>
                    <button class="btn btn-outline-light btn-lg px-5" type="submit" style="background-color: black;">Login</button>
                </form>
                <br>
            
               
                  </div>
                <div>
                  <p class="mb-0" >Don't have an account? <a @click.prevent="$router.push('/register')" href="#!" class="text-white-50 fw-bold" style="color: black;">Sign Up</a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- LOGIN END -->


 


<!-- END LOGIN -->
</template>