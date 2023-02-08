<script>

import TableDataRowMyCart from '../components/TableDataRowMyCart.vue';
import { useAppStore } from '../stores/app';
import { mapActions , mapState} from 'pinia';

export default {
    computed: {
      ...mapState(useAppStore,['myCart'])
    }, 
    components: {
      TableDataRowMyCart
    },
    methods: {
      ...mapActions(useAppStore,['fetchCart','paymentMidtrans']),
      goToMidtrans(){
        this.paymentMidtrans()
      }
    },
    created() {
      this.fetchCart()
    },
}
</script>

<template>
    <div class="container mt-4">
      <div class="my-3 p-3 bg-body rounded shadow-sm">
        <h1 class="border-bottom pb-2 mb-0 mt text text-center">My Chart</h1>
        <!-- Table Head-->
        <div class="container">
          <div class="table-responsive">
            <table class="table table-striped table-xl">
                <thead>
                    <tr>
                        <th scope="col-2">No</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col-2">Quantity</th>
                    </tr>
                </thead>
              <tbody>
                  <TableDataRowMyCart v-for="(cart, index) in myCart" :key="cart.id" :cart="cart" :index="index"/>
              </tbody>
            </table>
          </div>
          <div class="d-flex justify-content-center">
            <button @click.prevent="goToMidtrans" class="btn btn-primary">Calculate & CheckOut</button>
          </div>
        </div>
        <!-- Table-Head-End -->
      </div>
    </div>
</template>