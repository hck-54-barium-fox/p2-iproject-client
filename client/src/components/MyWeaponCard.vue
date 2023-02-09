<script>
import { mapActions, mapState } from 'pinia'
import { useAppStore } from '../stores/app';
export default {
    props: ['weapons'],
    methods: {
      ...mapActions(useAppStore, ['removeWeapon', 'payment']),
      deletedWeapon(id){
        this.removeWeapon(id)
      },
      handlePayment(id){
        this.payment(id)
      }
    }, 
    computed: {
      formatPrice(){
        return this.weapons.Weapon.price
      }
    }
    
}

</script>

<template>
            <div  class="col-md-3 pb-5 d-flex justify-content-center">
                <div class="card cb1 text-center" style="width: 18rem;">
                    <img :src="weapons.Weapon.imageUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">{{ weapons.Weapon.name }}</h5>
                      <p>rifles</p>
                      <p class="card-text">{{ formatPrice.toLocaleString("id-ID", {style:"currency", currency:"IDR"}) }}</p>
                        <p style="margin-top: 50px;" v-if="weapons.status === 'Played'">Upcoming . . .</p>
                        <a v-else-if="weapons.status === 'Unplayed'" href="#" @click.prevent="handlePayment(weapons.id)" class="btn btn-dark">Buy Weapon</a>
                      <div style="margin-top: 20px;">
                        <button @click.prevent="deletedWeapon(weapons.id)" type="button" class="btn btn-danger">Remove</button>
                      </div>
                    </div>
                  </div>
            </div>
</template>

<style scoped>

</style>
