<script>
import { useAppStore } from "../stores/app";
import { mapActions } from "pinia";

export default {
  name: "RegisterForm",
  components: {},
  data() {
    return {
      dataRegister: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions(useAppStore, ["registerCust"]),

    handelRegister() {
      this.registerCust({
        username: this.dataRegister.username,
        email: this.dataRegister.email,
        password: this.dataRegister.password,
        phoneNumber: this.dataRegister.phoneNumber,
        address: this.dataRegister.address,
      });
    },
  },
};
</script>

<template>
  <div class="col-6 mx-auto">
    <h1 class="text-center text-white">Please Register</h1>
    <div class="card text-white bg-dark mb-3">
      <form class="px-md-2" @submit.prevent="handelRegister">
        <div class="p-3">
          <label class="form-label">Username</label>
          <input
            type="text"
            v-model="dataRegister.username"
            class="form-control"
            placeholder="Username"
          />
        </div>
        <div class="p-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            v-model="dataRegister.email"
            class="form-control"
            placeholder="Email"
          />
        </div>
        <div class="p-3">
          <label class="form-label">Password</label>
          <input
            type="password"
            v-model="dataRegister.password"
            class="form-control"
            placeholder="Password"
          />
        </div>
        <div class="p-3">
          <label class="form-label">Phone Number</label>
          <input
            type="text"
            v-model="dataRegister.phoneNumber"
            class="form-control"
            placeholder="phone number"
          />
        </div>
        <div class="p-3">
          <label class="form-label">Address</label>
          <input
            type="text"
            v-model="dataRegister.address"
            class="form-control"
            placeholder="address"
          />
        </div>
        <button type="submit" class="btn btn-primary mb-3 mx-3">
          Register
        </button>
      </form>
    </div>
  </div>
</template>
