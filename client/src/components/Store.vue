<script>
import CardProduct from './CardProduct.vue';
import { mapState } from 'pinia';
import { useAppStore } from '../stores/app';
import { mapActions } from 'pinia';
export default {
    computed:{
        ...mapState(useAppStore, ['products']),
    },
    methods:{
        ...mapActions(useAppStore, ['fetchProduct']),
    },
    components:{
        CardProduct
    },
    created(){
        this.fetchProduct()
    }
}
</script>
<template >
    
            <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio">
        <div class="container">
  
          <div class="section-title" data-aos="fade-in" data-aos-delay="100">
            <h2>Product</h2>
            <p></p>
          </div>
  
 
  
          <div class="row portfolio-container" data-aos="fade-up">
  
            <CardProduct v-for="product in products" :product="product"/>
  
          </div>
  
        </div>
      </section><!-- End Portfolio Section -->
</template>
<style >
    
</style>