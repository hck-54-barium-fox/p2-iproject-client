<script>
  import { mapActions } from 'pinia';
  import { useCounterStore } from '../stores/counter';
  export default{
      data(){
        return {
          value: {
            email: '',
            password: '',
            phoneNumber: '',
            noIdentity: '',
            image: ''
          }
        }
      },
      methods: {
        ...mapActions(useCounterStore, ['handleRegister']),
        changeFile(){
          this.value.image = this.$refs.file.files[0]
        }      
      }
  }
</script>

<template>
    <!--regist-->
<section class="min-100vh" style="background-color: #eee;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center ">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4" @submit.prevent="handleRegister(this.value)" >

                  <div class="d-flex flex-row align-items-center mb-4 bg-warning" style="border-radius: 10px;">
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" style="padding-left: 10px;" for="form3Example3c">Email</label>
                      <input type="email" id="form3Example3c"  class="form-control bg-light" v-model="value.email" />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4 bg-warning" style="border-radius: 10px;">
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" style="padding-left: 10px;" for="form3Example4c">Password</label>
                      <input type="password" id="form3Example4c" class="form-control bg-light" v-model="value.password" />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4 bg-warning" style="border-radius: 10px;">
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" style="padding-left: 10px;" for="form3Example3c">Phonenumber</label>
                      <input type="text" id="form3Example3c" class="form-control bg-light" v-model="value.phoneNumber" />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4 bg-warning" style="border-radius: 10px;">
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" style="padding-left: 10px;" for="form3Example3c">ID Card Number</label>
                      <input type="text" id="form3Example3c" class="form-control bg-light" v-model="value.noIdentity" />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4 bg-warning" style="border-radius: 10px;">
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" style="padding-left: 10px;" for="form3Example3c">Image ID Card</label>
                      <input type="file" id="form3Example3c" class="form-control bg-light" ref="file" @change="changeFile"/>
                    </div>
                  </div>
                  
                  <div class="form-check d-flex justify-content-center mb-5">
                    <label class="form-check-label" for="form2Example3">
                      <a href="#!" @click.prevent="this.$router.push('/login')">Already have account?</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://i.pinimg.com/564x/b2/60/f0/b260f0db4040a1f18077d82ac41353f2.jpg"
                  class="img-fluid" alt="Sample image">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>