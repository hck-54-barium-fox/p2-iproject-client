<script>
import { mapActions, mapState} from 'pinia';
import { useAppStore } from '../stores/app';

export default {
  methods : {
    ...mapActions(useAppStore,['logout']),
    handleLogout() {
      this.logout()
    },
    checkLogin() {
      this.isLogin = localStorage.access_token
    }
  },
  computed : {
    ...mapState(useAppStore,['isLogin'])
  },
  created() {
    this.isLogin = localStorage.access_token
    this.checkLogin()
  }
}
</script>
<template>
  <pre>{{ localStorage }}</pre>
 <header class=" text-white header sticky bg-gray-800 hover:bg-gray-900 stiky top-0 z-[50]">
    <div
      class="text-white mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
    >
      <div class="flex items-center">
        <button type="button" class="p-2 sm:mr-4 font-bold hover:border-current hover:text-white hover:transition-colors border-b-4 border-transparent">
        RIFOLD
        </button>
      </div>
     <router-link to="/">
      <div class="flex items-center">
        <button type="button" class="p-2 sm:mr-4 font-bold hover:border-current hover:text-white hover:transition-colors border-b-4 border-transparent">
       HOME
        </button>
      </div>
     </router-link>
  
      <div class="flex flex-1 items-center justify-end">
        <nav
          aria-label="Site Nav"
          class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-white"
        >  
          <a
          v-if="isLogin"
          @click.prevent="handleLogout"
            href="/contact"
            class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-white"
          >
          Logout
          </a>
        </nav>
  
        <div class="ml-8 flex items-center">
          <div
            class="flex items-center divide-x divide-gray-100 border-x border-gray-100"
          >
            <router-link to="/myproduct">
              <span>
              <a
                href="/cart"
                class="block border-b-4 border-transparent p-6 hover:border-white"
              >
                <svg

                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
  
                <span class="sr-only">Cart</span>
              </a>
            </span>
            </router-link>
  
           <router-link v-if="!isLogin" to="/login">
            <span>
              <a
                href="/account"
                class="block border-b-4 border-transparent p-6 hover:border-white"
              >
                <svg
                  class="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
  
                <span class="sr-only"> Account </span>
              </a>
            </span>
           </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>