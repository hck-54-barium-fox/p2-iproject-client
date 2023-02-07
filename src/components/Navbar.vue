<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';

export default {
  methods: {
    ...mapActions(useMainStore, ['doLogout']),
    logout() {
      this.doLogout()
    }
  }
}
</script>

<template>
  <div class="navbar h-[5vh] bg-transparent flex justify-end items-center px-8  gap-4">
    <a @click.prevent="$router.push('/')" class="right text-[1.3rem] pt-4 font-bold text-white hover:text-[1.5rem] transition-all" href="#" >Home</a>
    <a @click.prevent="logout" class="right text-[1.3rem] pt-4 font-bold text-white hover:text-[1.5rem] transition-all" href="#" >Logout</a>
  </div>
</template>