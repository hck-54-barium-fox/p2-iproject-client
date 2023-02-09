<script>
import { mapActions } from "pinia";
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapActions(useCounterStore, ["handleLogin"])
  }
};
</script>

<template>
  <div
    class="min-h-screen bg-black-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div
        class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <form @submit.prevent="handleLogin({email, password})" action="">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold text-black">Login Form</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div
                class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input
                    v-model="email"
                    autocomplete="on"
                    id="email"
                    name="email"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="User Name" />
                  <label
                    for="email"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"></label>
                </div>
                <div class="relative">
                  <input
                    v-model="password"
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password" />
                  <label
                    for="password"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Password</label
                  >
                </div>

                <div class="relative">
                  <button
                    type="submit"
                    class="bg-blue-500 text-white rounded-md px-2 py-1">
                    Submit
                  </button>
                  <div>
                    <router-link
                      to="/register"
                      class="mt-4 space-y-4 mb-8 text-cyan-900">
                      Don't have account? please <a href="">Register</a> here..!
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="grid space-">
          <!-- <GoogleLogin
            :callback="callback"
            class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
          /> -->

          <GoogleLogin
            class="d-flex justify-content-center"
            :callback="callback"
            prompt />
          <pre>{{ log }}</pre>
          <div
            class="relative flex items-center space-x-4 justify-center"></div>
        </div>
      </div>
    </div>
  </div>
</template>
