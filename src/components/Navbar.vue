<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";

export default {
  name: "NavBar",
  computed: {
    ...mapState(useCounterStore, ["isLogin"]),
  },
};
</script>

<template>
  <!-- follow me on twitter @asad_codes -->

  <div class="z-50 relative" style="position: sticky; top: 0; overflow: ">
    <section class="relative mx-auto">
      <!-- navbar -->
      <nav class="flex justify-center bg-gray-900 text-white w-screen">
        <div class="px-5 xl:px-10 py-2 flex w-full items-center">
          <RouterLink to="/" class="text-3xl font-bold font-heading" href="#">
            <!-- <img class="h-9" src="logo.png" alt="logo"> -->
            <img
              style=""
              class="h-16"
              src="https://cdn.discordapp.com/attachments/1062975881905184830/1070772408753070140/Header_Markaz.jpg"
              alt="" />
          </RouterLink>
          <!-- Nav Links -->

          <!-- Header Icons -->
          <div class="hidden xl:flex items-center space-x-5 items-center">
            <!-- Sign In / Register      -->
          </div>
        </div>
        <!-- Responsive navbar -->
        <a class="xl:hidden flex mr-6 items-center" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="flex absolute -mt-5 ml-4">
            <span
              class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
            </span>
          </span>
        </a>
        <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </a>
      </nav>
    </section>
  </div>
  <!-- Does this resource worth a follow? -->
</template>
