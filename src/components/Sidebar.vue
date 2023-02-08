<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import CardSholat from "./CardSholat.vue";

export default {
  components: {
    CardSholat,
  },

  methods: {
    ...mapActions(useCounterStore, ["jadwalSholat"]),
  },
  computed: {
    ...mapState(useCounterStore, ["data"]),
  },
};
</script>

<template>
  <!-- component -->
  <div class="">
    <div class="fixed flex flex-col left-0 w-64 bg-gray-900 h-full shadow-lg">
      <div class="flex items-center pl-6 h-20 border-b border-gray-800">
        <img
          src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.0-9/117334168_2606581056324669_4951020710334194218_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFo4bRKc5SfTQvzhwotnTaOfj1P6rO41HF-PU_qs7jUcU1pCerqu3HUsOB0yKyJQwnrgz8Au7GZADcpedo6WgM4&_nc_ohc=DWpkI3p4RSUAX_hKF_Y&_nc_ht=scontent.fmnl13-1.fna&oh=c13c63ee952123b14f0da72b99ccecc8&oe=6087FEC5"
          alt=""
          class="rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-blue-500" />
        <div class="ml-1">
          <p
            class="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">
            JED DYLAN LEE
          </p>
          <div class="badge">
            <span
              class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full"
              >Admin</span
            >
          </div>
        </div>
      </div>
      <div class="flex-grow">
        <ul class="flex flex-col py-6 space-y-1">
          <li class="px-5">
            <div class="flex flex-row items-center h-8">
              <div
                class="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">
                Dashboard
              </div>
            </div>
          </li>

          <li>
            <CardSholat :data="this.data" />
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6">
              <span
                class="inline-flex justify-center items-center ml-4 text-red-400">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
              </span>
              <span
                class="ml-2 font-semibold text-sm tracking-wide truncate font-sans"
                >Logout</span
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
