<script>
import axios from 'axios'
import { mapActions, mapState } from 'pinia'
import { useBookingStore } from '../stores/counter'
export default {
 data() {
  return {
   userForm: {
    email: '',
    name: '',
    password: ''
   }
  }
 },
 methods: {
  doRegister() {
   console.log(this.userForm, 'sebelum')
   this.handleRegister(this.userForm)
   console.log(this.userForm, 'sesudah')

  },
  ...mapActions(useBookingStore, ['handleRegister'])
 }
}
</script>

<template>
 <div class="lg:flex">
  <div class="hidden lg:flex items-center justify-center bg-sky-100 flex-1 h-screen">
   <div class="max-w-7xl transform duration-200 hover:scale-110 cursor-pointer mix-blend-multiply">
    <img
     src="https://img.freepik.com/free-vector/electrician-service_335657-3186.jpg?w=1060&t=st=1675732520~exp=1675733120~hmac=29782079b38be4c5aa4b82ea5ac09d9f10c348e3a5131092e52378ed3b5bc02b"
     alt="dashboard" class="w-[100%] mx-auto" />
   </div>
  </div>
  <div class="lg:w-1/2 xl:max-w-screen-sm">
   <div class="py-12 bg-sky-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
    <div class="cursor-pointer flex items-center">
     <div></div>
     <div class="text-2xl text-sky-800 tracking-wide ml-2 font-semibold">
      Ya Boking
     </div>
    </div>
   </div>
   <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
    <h2
     class="text-center text-4xl text-sky-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold mt-20">
     Register
    </h2>
    <div class="mt-12 relative">
     <form @submit.prevent="doRegister">
      <div>
       <div class="text-sm font-bold text-gray-700 tracking-wide">
        Email Address
       </div>
       <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-sky-500" type="email"
        placeholder="name@gmail.com" name="email" v-model="userForm.email" />
      </div>
      <div class="mt-8">
       <div class="text-sm font-bold text-gray-700 tracking-wide">
        name
       </div>
       <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-sky-500" type="text"
        placeholder="eg. bambang" name="email" v-model="userForm.name" />
      </div>
      <div class="mt-8">
       <div class="flex justify-between items-center">
        <div class="text-sm font-bold text-gray-700 tracking-wide">
         Password
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
        Register
       </button>
      </div>
     </form>
     <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
      Already have an account ?
      <a @click.prevent="$router.push('/login')" class="cursor-pointer text-sky-600 hover:text-sky-800">Sign
      </a>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>