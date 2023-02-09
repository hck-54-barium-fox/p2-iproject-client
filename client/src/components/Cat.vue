<script>
import { mapState } from 'pinia';
import { useAppStore } from '../stores/app';
import { mapActions } from 'pinia';
export default {
    computed:{
        ...mapState(useAppStore, ['cat']),
    },
    methods:{
        ...mapActions(useAppStore, ['searchCat']),
        findCat(){
            this.searchCat(this.name)
        }
    },
    data(){
        return {
            name:''
        }
    }
}
</script>
<template >
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio">
        <div class="container">
            <div class="section-title" data-aos="fade-in" data-aos-delay="100">
                <h2>Find Your Cat</h2>
                <hr>    
                <h4>You can find any race of cat around the world</h4>
            </div>


            <div class="row portfolio-container" data-aos="fade-up">

                <!-- Search form -->
            <form @submit.prevent="findCat" class="form-inline d-flex justify-content-center md-form form-sm active-pink active-pink-2 mt-2">     
                <input v-model="name" class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                aria-label="Search"> 
                <button class="btn btn-danger" type="submit">Go! <i class="bi bi-search" aria-hidden="true"></i></button>             
            </form>

            </div>

        </div>
    </section><!-- End Portfolio Section -->
        <section class="py-5" v-if="cat.length">
          <div class="container px-4 px-lg-5 my-5">
              <div class="row gx-4 gx-lg-5 align-items-center">
                  <div class="col-md-6"> 
                    <img class="card-img-top mb-5 mb-md-0" :src="cat[0].image_link" alt="..." /></div>
                  <div class="col-md-6">
                      <h1 class="display-5 fw-bolder">{{ cat[0].name }}</h1>
                      <div class="fs-5 mb-5">
                          <span>Origin: {{ cat[0].origin }}</span><br>
                          <span>Length: {{ cat[0].length }}</span><br>
                          <span>Max Life Expectancy: {{ cat[0].max_life_expectancy }} year</span><br>
                          <span>Max Weigth: {{ cat[0].max_weight }} Kg</span>
                      </div>
                      <div class="fs-5 mb-5">
                          
                      </div>
                      <div class="fs-5 mb-5">
                          <span>Origin: {{ cat[0].origin }}</span>
                      </div>
                      <p class="lead">purrr purrrr meowww!!!</p>
                      
                  </div>
              </div>
          </div>
      </section>
    


</template>
<style scoped>
.active-pink input.form-control[type=text] {
    border-bottom: 1px solid #f48fb1;
    box-shadow: 0 1px 0 0 #f48fb1;
  }
</style>