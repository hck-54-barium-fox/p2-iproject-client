<script>
import { mapActions } from 'pinia';
import { useBookingStore } from '../stores/counter';


import Navbar from '../components/Navbar.vue'

export default {
  data() {
    return {
      userPassword: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(useBookingStore, ['resetPassword', 'handleResetPassword']),
    handleReset() {
      if (this?.$route?.query?.token) {
        this.handleResetPassword(this.userPassword, this?.$route?.query?.token)
      } else {
        this.resetPassword(this.userPassword)

      }
    }
    ,
    passwordRender() {
      return this.$route?.query?.token ? 'Input Reset Password' : 'find your account'
    }
  },
  components: {
    Navbar
  },
  created() {
    console.log(this.$route.query)
  }

}

</script>

<template>
  <Navbar />
  <div class="lg:flex justify-center mt-28">
    <div class="lg:w-1/2 xl:max-w-screen-sm">
      <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          class="text-center text-3xl text-sky-900 font-display font-semibold lg:text-left xl:text-3xl xl:text-bold mt-20">
          {{ passwordRender() }}
        </h2>
        <div class="mt-12 relative">
          <form @submit.prevent="handleReset">
            <div v-if="!$route?.query?.token">
              <div class="text-sm font-bold text-gray-700 tracking-wide">
                Email Address
              </div>
              <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-sky-500"
                type="email" placeholder="name@gmail.com" name="email" v-model="userPassword.email" />
            </div>
            <div class="mt-8" v-if="$route?.query?.token">
              <div class="flex justify-between items-center">
                <div class="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>

              </div>
              <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-sky-500"
                type="password" name="password" placeholder="Enter your password" v-model="userPassword.password" />
            </div>
            <div class="mt-10">
              <button
                class="bg-sky-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-sky-600 shadow-lg"
                type="submit">
                submit
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>