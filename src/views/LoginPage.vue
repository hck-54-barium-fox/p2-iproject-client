<script>
import { mapActions } from 'pinia';
import { useBookingStore } from '../stores/counter';


export default {
  data() {
    return {
      userForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(useBookingStore, ['handleLogin']),
    login() {
      this.handleLogin(this.userForm)
    }
  }
}

</script>

<template>
  <div class="lg:flex">
    <div class="hidden lg:flex items-center justify-center bg-sky-100 flex-1 h-screen">
      <div class="max-w-7xl transform duration-200 hover:scale-110 cursor-pointer mix-blend-multiply">
        <img
          src="https://img.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_335657-2105.jpg?w=740&t=st=1675732507~exp=1675733107~hmac=573f7a9e7ab8f4cdf593b82a11cdaab3d5a03b97c7f20d85f6ce60baa07c4c86"
          alt="dashboard" class="w-[100%] mx-auto" />
      </div>
    </div>
    <div class="lg:w-1/2 xl:max-w-screen-sm">
      <div class="py-12 bg-sky-100 lg:bg-sky-50 flex justify-center lg:justify-start lg:px-12">
        <div class="cursor-pointer flex items-center">
          <div></div>
          <div class="text-2xl text-sky-800 tracking-wide ml-2 font-semibold">
            Ya Booking
          </div>
        </div>
      </div>
      <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          class="text-center text-4xl text-sky-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold mt-20">
          Log in
        </h2>
        <div class="mt-12 relative">
          <form @submit.prevent="login">
            <div>
              <div class="text-sm font-bold text-gray-700 tracking-wide">
                Email Address
              </div>
              <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-sky-500"
                type="email" placeholder="name@gmail.com" name="email" v-model="userForm.email" />
            </div>
            <div class="mt-8">
              <div class="flex justify-between items-center">
                <div class="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
                <div>
                  <a class="text-xs font-display font-semibold text-sky-600 hover:text-sky-800 cursor-pointer"
                    @click.prevent="$router.push('/forgot-password')">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-sky-500"
                type="password" name="password" placeholder="Enter your password" v-model="userForm.password" />
            </div>
            <div class="mt-10 flex gap-1">
              <button
                class="bg-red-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-lg"
                type="submit" @click="$router.push('/')">
                Cancel
              </button>
              <button
                class="bg-sky-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-sky-600 shadow-lg"
                type="submit">
                Login
              </button>
            </div>
          </form>
          <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            Don't have an account ?
            <a @click.prevent="$router.push('/register')" class="cursor-pointer text-sky-600 hover:text-sky-800">Sign
              up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>