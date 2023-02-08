<script>
import { useAppStore } from "../stores/app";
import { mapActions } from "pinia";
export default {
  name: "LoginForm",
  data() {
    return {
      dataLogin: {
        email: "",
        password: "",
      },
    };
  },
  components: {},
  methods: {
    ...mapActions(useAppStore, ["doLogin"]),

    handelLogin() {
      this.doLogin({
        email: this.dataLogin.email,
        password: this.dataLogin.password,
      });
    },
  },
};
</script>

<template>
  <div class="col-6 mx-auto">
    <h1 class="text-center text-white">Please Login</h1>
    <div class="card text-white bg-dark mb-3">
      <form @submit.prevent="handelLogin">
        <div class="p-3">
          <label class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            v-model="dataLogin.email"
            placeholder="Email Address"
          />
        </div>
        <div class="p-3">
          <label class="form-label">Password</label>
          <input
            type="password"
            v-model="dataLogin.password"
            class="form-control"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary mb-3 mx-3">Login</button>
      </form>
    </div>
  </div>
</template>
