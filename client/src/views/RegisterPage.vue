<script>
import { mapActions } from "pinia";
import { useAppStore } from "../stores/app";
export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods:{
    ...mapActions(useAppStore, ['doRegister']),
    register(){
      this.doRegister(this.form)
    }
  }
};
</script>

<template>
  <section
    class="vh-100 bg-image"
    style="
      background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');
    "
  >
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">
                  Create an account
                </h2>

                <form @submit.prevent="register">
                  <div class="mb-3">
                    <div class="d-flex justify-content-between">
                      <label for="register-username">Username</label>
                      <label class="text-danger text-end fw-bold">*</label>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your username ..."
                      autocomplete="off"
                      required
                      v-model="form.username"
                    />
                  </div>
                  <div class="mb-3">
                    <div class="d-flex justify-content-between">
                      <label for="register-email">Email</label>
                      <label class="text-danger text-end fw-bold">*</label>
                    </div>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter email address ..."
                      autocomplete="off"
                      required
                      v-model="form.email"
                    />
                  </div>
                  <div class="mb-3">
                    <div class="d-flex justify-content-between">
                      <label for="register-password">Password</label>
                      <label class="text-danger text-end fw-bold">*</label>
                    </div>
                    <input
                      type="password"
                      class="form-control"
                      id="register-password"
                      placeholder="Enter your password ..."
                      autocomplete="off"
                      required
                      v-model="form.password"
                    />
                  </div>
                  <div class="d-flex justify-content-center">
                    <button
                      type="submit"
                      class="
                        btn btn-success btn-block btn-lg
                        gradient-custom-4
                        text-body
                      "
                    >
                      Register
                    </button>
                  </div>
                    <p class="text-center text-muted mt-5 mb-0">
                      Have already an account?
                  <router-link to="/login">
                      <a class="fw-bold text-body"><u>Login here</u></a>
                  </router-link>
                    </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>