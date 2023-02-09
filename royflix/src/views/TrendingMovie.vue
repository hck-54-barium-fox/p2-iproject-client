<script>
import { useCustomerStore } from '../stores/customer'
import { mapActions, mapState } from 'pinia';
export default{
    methods : {
        ...mapActions(useCustomerStore, ['fecthMoviesTrend'])
    },
    computed : {
        ...mapState(useCustomerStore, ['trending'])
    },
    created(){
        console.log('masuk');
        this.fecthMoviesTrend()
    }
}
</script>
<template>
      <div class="container">
    
    <main>
        <section class="movies">
          <h1 style="color: white; font-weight: bold; font-size: 100px; border-radius: 30px; margin-top: 20px; margin-bottom: 20px;">Top Movie Trending</h1>

        <div class="movies-grid" id="contentFilm">
          <div class="movie-card" @click.prevent="$router.push(`/detail/${movie.id}`)" v-for="movie in trending">
            <div class="card-head">
              <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" alt="" class="card-img" />

              <div class="card-overlay">
                <div class="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div class="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>{{ movie.vote_average }}</span>
                </div>


              </div>
            </div>

            <div class="card-body">
              <h3 class="card-title">{{movie.original_title || movie.original_name}}</h3>

              <div class="card-info">
                <span class="year">{{ movie.release_date || movie.first_air_date }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    
   
  </div>
</template>