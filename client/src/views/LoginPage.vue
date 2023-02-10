<script>
import FacebookButton from "../components/FacebookButton.vue"
import { mapActions } from "pinia";
import { useAppStore } from "../stores/app";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  components: {
    FacebookButton
  },
  methods: {
    ...mapActions(useAppStore, ["doLogin", "doLoginGoogle"]),
    login() {
      this.doLogin(this.form);
    },
    loginGoogle(response) {
      this.doLoginGoogle(response);
    }
  },
};
</script>

<template>
  <div style="background-image: url('')">
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 3rem">
              <div class="card-body p-5 text-center">
                <div class="mb-md-5 mt-md-2 pb-5">
                  <form @submit.prevent="login" class="user">
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>
                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">Email</label>
                      <input
                        v-model="form.email"
                        type="email"
                        id="emailUser"
                        class="form-control form-control-lg"
                        placeholder="email@email.com"
                      />
                    </div>
                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typePasswordX"
                        >Password</label
                      >
                      <input
                        v-model="form.password"
                        type="password"
                        id="passwordUser"
                        class="form-control form-control-lg"
                        placeholder="password"
                      />
                    </div>
                    <button
                      class="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>

                    <div class="mt-4">
                      <GoogleLogin :callback="loginGoogle" />
                    </div>
                   <div>
                    <FacebookButton/>
                    <!-- <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false">FB here</div> -->
                   </div>
                  </form>
                </div>
                <div>
                  <p class="mb-0">
                    Don't have an account?
                    <router-link to="/register">
                      <a class="text-white-50 fw-bold">Sign Up</a>
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.footer {
  position: absolute;
  background: #ccc;
  margin: 0;
  bottom: 0;
  width: 100%;
}
body {
  margin: 0;
}
</style>
