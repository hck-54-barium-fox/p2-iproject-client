<script>
import { mapState, mapActions } from 'pinia'
import { useAppStore } from '../stores/app';
export default {
    computed: {
        ...mapState(useAppStore, ['detail'])
    },
    methods: {
        ...mapActions(useAppStore, ['weaponDetail', 'addweapon']),
        handleAdd(id){
            this.addweapon(id)
        }
    },
    created(){
        this.weaponDetail(this.$route.params.id)
    }
  
}

</script>

<template>
  <div class="card mb-3 text-center" >
        <img :src="detail.imageUrl" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ detail.name }}</h5>
          <p class="card-text">{{ detail.tagline }}</p>
          <p class="card-text">{{ detail.category }}</p>
          <p class="card-text">{{ detail.price.toLocaleString("id-ID", {style:"currency", currency:"IDR"}) }}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          <button @click.prevent="handleAdd(detail.id)" type="button" class="btn btn-dark">+ Add My Weapon</button>
        </div>
      </div>
      
</template>

<style scoped>

</style>
