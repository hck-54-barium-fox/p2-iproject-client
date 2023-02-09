<script>
import { mapActions } from "pinia";
import { useAppStore } from "../stores/app";

export default {
  data() {
    return {
      formLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useAppStore, ["doLogin"]),
    handleLogin() {
      this.doLogin(this.formLogin);
    },
  },
};
</script>

<template>
  <form
    @submit.prevent="handleLogin"
    class="flex flex-col px-[35%] gap-[20px] min-h-screen justify-center"
  >
    <div class="flex flex-col gap-3">
      <span class="text-3xl font-bold text-center italic">hafood</span>
      <span class="text-center text-primaryColor text-sm"
        >Please login here</span
      >
    </div>
    <input
      v-model="formLogin.email"
      type="text"
      name="email"
      id="email"
      class="rounded-lg placeholder:text-sm border-primaryColor"
      placeholder="Type email here"
    />
    <input
      v-model="formLogin.password"
      type="password"
      name="password"
      id="password"
      class="rounded-lg placeholder:text-sm border-primaryColor"
      placeholder="Type password here"
    />
    <button
      type="submit"
      class="bg-primaryColor py-[10px] rounded-lg text-white font-bold"
    >
      Sign In
    </button>
  </form>
</template>
