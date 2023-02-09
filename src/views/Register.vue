<script>
import { mapActions } from "pinia";
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["handleRegister"]),
   
  },
};
</script>

<template>
  <div
    class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
  >
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div
        class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
      >
        <form @submit.prevent="handleRegister({username, email, password})" action="">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">Register Form</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div
                class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div class="relative">
                  <label
                  for="email"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >User Name</label
                  >
                  <input
                    v-model="username"
                    autocomplete="off"
                    id="username"
                    name="username"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="User Name"
                  />
                </div>

                <div class="relative">
                  
                  <label
                    for="email"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Email Address</label
                  >
                  <input
                    v-model="email"
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                </div>

                <div class="relative">
                  <label
                  for="password"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >Password</label
                  >
                  <input
                    v-model="password"
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                </div>

                <div class="relative space-x-4">
                 
                    <button
                      class="bg-blue-500 text-white rounded-md px-2 py-1 ml-6"
                    >
                      Submit
                    </button>
                    <RouterLink to="/login">

                    <button class="bg-blue-500 text-white rounded-md px-2 py-1">
                      Cancel
                    </button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
