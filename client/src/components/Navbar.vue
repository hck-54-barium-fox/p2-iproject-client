<script>
import { mapActions } from "pinia";
import { useAppStore } from "../stores/app";
export default {
  methods: {
    ...mapActions(useAppStore, ["doLogout"]),
    logout() {
      this.doLogout();
    },
  },
};
</script>

<template>
  <nav class="py-3 bg-gray-900 navbar-color">
    <div class="flex-1 flex items-center justify-center">
      <div class="flex-shrink-0 flex items-center">
        <span class="text-white opacity-80 text-2xl uppercase"
          >Lets have Fun</span
        >
      </div>
      <div class="hidden sm:block sm:ml-6">
        <div class="flex space-x-4 align-middle">
            <a
              href="#"
              class="
                text-white
                opacity-80
                text-md
                uppercase
                hover:opacity-100
                px-3
                py-2
              "
              >Home</a
            >
         
            <a
              class="
                text-white
                opacity-80
                text-md
                uppercase
                hover:opacity-100
                px-3
                py-2
              "
              >My Heroes</a
            >
          
          <a
            @click.prevent="logout"
            class="
              text-white
              opacity-80
              text-md
              uppercase
              hover:opacity-100
              px-3
              py-2
            "
            >Logout</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>
