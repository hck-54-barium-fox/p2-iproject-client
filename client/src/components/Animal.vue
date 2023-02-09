<script>
import { mapState } from 'pinia';
import { useAppStore } from '../stores/app';
import { mapActions } from 'pinia';
export default {
    computed:{
        ...mapState(useAppStore, ['animals']),
    },
    methods:{
        ...mapActions(useAppStore, ['searchAnimal']),
        findAnimal(){
            this.searchAnimal(this.name)
        }
    },
    data(){
        return {
            name:'',
            item:[]
        }
    },
    created(){
        this.item=this.animals
        console.log(this.item, this.item.length);
    }
}
</script>
<template >
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio">
        <div class="container">
           
            <div class="section-title" data-aos="fade-in" data-aos-delay="100">
                <h2>Find Your Animal</h2>
                <h5>You can find any animal Here!!!!!!</h5>
            </div>


            <div class="row portfolio-container" data-aos="fade-up">

                <!-- Search form -->
            <form @submit.prevent="findAnimal" class="form-inline d-flex justify-content-center md-form form-sm active-pink active-pink-2 mt-2">     
                <input v-model="name" class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                aria-label="Search"> 
                <button class="btn btn-danger" type="submit">Go! <i class="bi bi-search" aria-hidden="true"></i></button>             
            </form>
            </div>

        </div>
    </section><!-- End Portfolio Section -->

        <section class="py-5" v-if="animals.data" >
    
          <div class="container px-4 px-lg-5 my-5">
              <div class="row gx-4 gx-lg-5 align-items-center">
                  <div class="col-md-6"> 
                    <img class="card-img-top mb-5 mb-md-0" :src="animals.image" alt="..." />
                    
                </div>
                  <div class="col-md-6">

                      <h1 class="display-5 fw-bolder">{{ animals.data[0].name }}</h1>
                      <h1 class="lead">Kingdom :{{ animals.data[0].taxonomy.kingdom }}</h1>
                      <h1 class="lead">Location :{{animals.data[0].locations  }}</h1>
                      <h1 class="lead">Habitat :{{animals.data[0].characteristics.habitat}}</h1>
                      <h1 class="lead">Lifespan :{{animals.data[0].characteristics.lifespan}}</h1>
                      <h1 class="lead">Length :{{animals.data[0].characteristics.length}}</h1>
                      <h1 class="lead">Slogan :{{animals.data[0].characteristics.slogan}}</h1>
                      <h1 class="lead">Skin type :{{animals.data[0].characteristics.skin_type}}</h1>

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