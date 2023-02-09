<script>
import MyWeaponCard from '../components/MyWeaponCard.vue';
import { useAppStore } from '../stores/app';
import { mapActions, mapState } from 'pinia';
export default {
  components: {
    MyWeaponCard
  },
  computed: {
    ...mapState(useAppStore, ['myWeapon'])
  },
  methods: {
    ...mapActions(useAppStore, ['fetchMyWeapon'])
  },
  created(){
    this.fetchMyWeapon()
  }
}

</script>

<template>
  <div class="container">
    <h1 class="title text-center py-4">My Weapon</h1>
    <hr>
    <div class="row">
      <MyWeaponCard v-for="weapons in myWeapon" :key="weapons.id" :weapons="weapons" />
    </div>
  </div>
</template>

<style scoped>

</style>
