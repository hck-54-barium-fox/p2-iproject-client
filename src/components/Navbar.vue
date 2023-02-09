<script>
import { mapState } from 'pinia';
import { useBookingStore } from '../stores/counter';


export default {
  computed: {
    ...mapState(useBookingStore, ['isLogin'])
  },
  methods: {
    handleLog() {
      if (this.isLogin) {
        localStorage.removeItem('access_token')
        this.$router.push('/login')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<template>
  <nav class="bg-sky-500 flex justify-center items-center shadow-xl">
    <div class="container-navbar flex w-[90vw] max-w-[1200px] justify-between items-center h-[4rem] ">
      <h1 class="text-[2rem] text-sky-900 cursor-pointer" @click="$router.push('/')">Ya <span
          class="text-white">Booking</span></h1>
      <div class="flex gap-4">
        <button class="px-6 py-2 cursor-pointer text-[1.2rem] bg-slate-200 rounded" @click="$router.push('/register')">
          Register
        </button>
        <button class="px-6 py-2 cursor-pointer text-[1.2rem] bg-slate-200 rounded text-black" @click="handleLog"
          v-if="!isLogin">
          Login
        </button>
        <button class="px-6 py-2 cursor-pointer text-[1.2rem] bg-slate-200 rounded text-black" @click="handleLog"
          v-if="isLogin">
          Log Out
        </button>
      </div>
    </div>
  </nav>
</template>