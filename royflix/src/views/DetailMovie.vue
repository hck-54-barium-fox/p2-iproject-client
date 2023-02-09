<script>
import { useCustomerStore } from '../stores/customer'
import { mapActions, mapState, mapWritableState } from 'pinia';
export default {
    data(){
        return{
            trailerMovie : ''
        }
    },
    methods : {
        ...mapActions(useCustomerStore, ['geMoviesById','getMovieTrailer']),
    },
    computed : {
        ...mapState(useCustomerStore, ['detailMovie','trailer']),
        
    },
    created(){
        const id = this.$route.params.id
        this.geMoviesById(id)
        // this.getMovieTrailer(this.detailMovie.original_title)
    },
    watch : {
        ['$route.params.id'](){
      if(this.$route.params.id){
        // console.log(this.$route.params.id, "<<<< di watcher");
        this.trailerMovie = this.detailMovie.original_title
        }
        } 
    }
    
}
</script>
<template>
    
    <div style="display:flex; justify-content:center; flex-direction:column; align-items: center;">
        <iframe class="rounded" width="1500" height="510" :src="`https://www.youtube.com/embed/P91D2Tm5adY`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div class="card mb-3" style="max-width: 1500px; margin-top:10px; background-color: black;">
  <div class="row g-0" >
    <div class="col-md-4">
      <img :src="`https://image.tmdb.org/t/p/original${detailMovie.poster_path}`" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div style="margin-left: 40px; margin-left: 40px; margin-top: 40px;" class="card-body">
        <h1 class="card-title" style="font-size:75px; color: hsl(0, 79%, 63%); font-family:Georgia, 'Times New Roman', Times, serif; margin-bottom: 50px;" >{{ detailMovie.original_title }}</h1>
        <p style="font-size:35px" class="card-text">{{ detailMovie.overview }}</p>
        <p style="font-size:20px">Release Date : {{ detailMovie.release_date }}</p>
        <p style="font-size:20px">Status : {{ detailMovie.status }}</p>
        <p style="font-size:20px">Vote Average: {{ detailMovie.vote_average }}</p>
        <p style="font-size:20px">Popularty: {{ detailMovie.popularity}}</p>
       
       
      </div>
    </div>
  </div>
</div>
  </div>
</template>