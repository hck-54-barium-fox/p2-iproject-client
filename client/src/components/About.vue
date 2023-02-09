<script>
import Hero from './Hero.vue';
export default {
    components:{
        Hero
    }
}
</script>
<template >
    <Hero/>
            <!-- ======= About Section ======= -->
    <section id="about" class="about">
        <div class="container">
  
          <div class="row no-gutters">
            <div class="content col-xl-5 d-flex align-items-stretch" data-aos="fade-up">
              <div class="content">
                <h3>Animal World</h3>
                <div>
                    <a href="#" class="about-btn">Search any Animal around the World <i class="bx bx-chevron-right"></i></a>
                    <a href="#"  class="about-btn" style="margin-top:20px;">Search any race of Cat <i class="bx bx-chevron-right"></i></a>
                    
                </div>
                <a href="#" style="margin-top:20px;" class="about-btn">Go to Store<i class="bx bx-chevron-right"></i></a>
            </div>
            </div>
            <div class="col-xl-7 d-flex align-items-stretch">
              <div class="icon-boxes d-flex flex-column justify-content-center">
                <div class="row">
                  <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                    <i class="bi bi-globe-asia-australia"></i>
                    <h4>You can search any animal around the World</h4>
                    <!-- <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p> -->
                  </div>
                  <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                    <i class="bi bi-arrow-through-heart-fill"></i>
                    <h4>You can find any race of cat around the World</h4>
                    <!-- <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p> -->
                  </div>
                  <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                    <i class="bi bi-cart4"></i>
                    <h4>Pet Store</h4>
                    <p>Don't forget to give your pet the best meal!</p>
                  </div>
                  
                </div>
              </div><!-- End .content-->
            </div>
          </div>
  
        </div>
      </section><!-- End About Section -->
  

</template>
<style >
    
</style>