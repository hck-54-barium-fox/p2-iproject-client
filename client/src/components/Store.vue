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
            <h2>Portfolio</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
  
          <div class="row" data-aos="fade-in">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
  
          <div class="row portfolio-container" data-aos="fade-up">
  
            <CardProduct v-for="product in products" :product="product"/>
  
          </div>
  
        </div>
      </section><!-- End Portfolio Section -->
</template>
<style >
    
</style>