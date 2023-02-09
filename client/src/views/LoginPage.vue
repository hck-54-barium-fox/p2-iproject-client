<script>
import { mapActions } from "pinia";
import { useAppStore } from "../stores/appStore";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useAppStore, ["doLogin", "isLoginToggle"]),
    // =======================
    handleLogin() {
      this.doLogin({
        email: this.email,
        password: this.password,
      });
    },
    isLoginToggleHandle() {
      this.isLoginToggle(false);
    },
  },
  created() {},
};
</script>

<template>
  <!-- Login Section -->

  <section class="vh-95" style="background-image: url(https://cdnb.artstation.com/p/assets/images/images/033/008/289/large/anastasia-ermakova-coffeeshop-sunset.jpg?1608128605)" id="login-section">
    <div class="container py-5 h-95">
      <div class="row d-flex justify-content-center align-items-center h-95 my-3">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-1">
              <div class="col-md-5 col-lg-4 d-none d-md-block me-3">
                <img src="https://i.pinimg.com/736x/ba/21/28/ba21281cb0e24dbccb4c8fac17d262f7.jpg" alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem" />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-2 p-lg-1 text-black">
                  <form id="login-form" @submit.prevent="handleLogin">
                    <div class="d-flex align-items-center">
                      <img src="../assets/kakek.png" alt="" style="width: 200px; height: 200px" />
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">Sign into your account</h5>

                    <div class="form-outline mb-1">
                      <input v-model="email" id="login-email" type="email" class="form-control form-control-lg" />
                      <label class="form-label">Email address</label>
                    </div>

                    <div class="form-outline mb-1">
                      <input v-model="password" id="login-password" type="password" class="form-control form-control-lg" />
                      <label class="form-label">Password</label>
                    </div>

                    <div class="pt-1 mb-2">
                      <button class="btn btn-dark btn-lg btn-block" type="submit" style="width: 100%">Login</button>
                      <!-- <ButtonLogin label="Login" :currentPage="currentPage" /> -->

                      <hr class="my-2" />

                      <!-- <button id="buttonDiv" class="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39; width: 100%" type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button> -->

                      <!-- <pre>{{ log.credential }}</pre> -->
                    </div>
                    <p class="mb-1 pb-lg-1" style="color: #393f81">Don't have an account? <a @click.prevent="$router.push('/register')" id="register-link" href="" style="color: #393f81">Register here</a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Login Section -->
</template>

<style></style>
