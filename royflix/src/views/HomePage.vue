<script>
import { useCustomerStore } from '../stores/customer'
import { mapActions, mapState, mapWritableState } from 'pinia';
import { watch } from 'vue';
export default {
    data(){
        return {
            currentPage : 1,
            limit: 5,
            payload : {
                page : '',
                search : ''
            },
            runtimeTranscription_: "",
            transcription_: [],
            lang_: "en",
            
        }
    },
    methods : {
        ...mapActions(useCustomerStore, ['fecthMovies', 'fecthMoviesTrend']),
        startSpeechToTxt() {
    
            window.SpeechRecognition =
            window.SpeechRecognition || 
            window.webkitSpeechRecognition;
            const recognition = new window.SpeechRecognition();
            recognition.lang = this.lang_;
            recognition.interimResults = true;

            // event current voice reco word
            recognition.addEventListener("result", event => {      
            var text = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join("");
            this.runtimeTranscription_ = text;
            });
            // end of transcription
            recognition.addEventListener("end", () => {
            this.transcription_.push(this.runtimeTranscription_);
            this.runtimeTranscription_ = "";
            recognition.stop();
            });
            recognition.start();
        },
        hendleSearch(){
            this.textSearch = this.transcription_[transcription_.length - 1]
        }
    },
    computed : {
        ...mapState(useCustomerStore, ['movies','totalPage']),
        ...mapWritableState(useCustomerStore, ['totalPage', 'moviesThend'])
    },
    created(){
        this.fecthMovies(this.payload)
        this.fecthMoviesTrend()
        // console.log(this.runtimeTranscription_ );
        console.log(this.runtimeTranscription_, '<<<<<<<typcriprt');
    },
    watch : {
        ['$route.query.page'](){
      if(this.$route.query.page){
        console.log(this.$route.query.page);
            this.payload.page = this.$route.query.page
            // console.log(this.$route.query.page,'<<<<<');
            this.payload.search = ''
            this.currentPage = +this.$route.query.page
            this.fecthMovies(this.payload)
            
        }
        },
        ['$route.query.search'](){
            if(this.$route.query.search){
                console.log(this.$route.query.search, '<<<<<');
            this.payload.search = this.$route.query.search
            // this.currentPage = +this.$route.query.page
            this.fecthMovies(this.payload)
            
        }
    } 
    },
    // watch : {
    //     ['$route.query.search'](){
    //         if(this.$route.query.search){
    //             console.log(this.$route.query.search, '<<<<<');
    //         this.payload.search = this.$route.query.search
    //         // this.currentPage = +this.$route.query.page
    //         this.fecthMovies(this.payload)
            
    //     }
    // }
    // }
}
</script>
<template>
      <div class="container">
    
     <main>

       <section class="banner">
         <div class="container">
           <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
             <div class="carousel-indicators">
             </div>
             <div class="carousel-inner carousel_content" id="carousel_content">
               <div class="carousel-item banner-card active">
                 <img :src="`https://image.tmdb.org/t/p/original${moviesThend.backdrop_path}`" class="banner-img" alt="" />
                 <div class="carousel-caption card-content">
                   <div class="card-info">
                     <div class="year">
                       <ion-icon name="calendar"></ion-icon>
                       <span>{{ moviesThend.release_date }}</span>
                     </div>
                     <div class="duration">
                       <ion-icon name="time"></ion-icon>
                       <span>Movies</span>
                     </div>
                     <div class="quality">4K</div>
                   </div>
                   <h2 class="card-title">{{moviesThend.original_title}}</h2>
                   <p class="card-desc">{{ moviesThend.overview }}</p>
                 </div>
               </div> 
               
             </div>
           </div>
         </div>
        
       </section>
       <!-- SEARCH -->
      



        <div  style="display:flex; justify-content:center; margin-bottom: 10px; flex-direction : row ">
            <div class="voice">
                <div style="background-color: #f93208;  width: 1188px;" class="speech-to-txt btn rounded" @click="startSpeechToTxt">
                    <svg style="width: 100px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
                    <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
                    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </div>        
            </div>
        </div>

        <div style="display: flex; justify-content:space-between; margin-bottom: 50px; ">

            <p style="margin-left: 115px;">{{transcription_[transcription_.length - 1]}}</p>
           <button @click="$router.push(`/?search=${transcription_[transcription_.length - 1]}`)" style="background-color: #f93208;margin-right: 115px;" class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart-fill" viewBox="0 0 16 16">
                <path d="M6.5 13a6.474 6.474 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.008 1.008 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
            </svg>
           </button>
        </div>
        <!-- SEARCH -->



       <section class="movies">

         <div class="movies-grid" id="contentFilm">
           <div class="movie-card" @click.prevent="$router.push(`/detail/${movie.id}`)" v-for="movie in movies">
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
               <h3 class="card-title">{{movie.original_title}}</h3>

               <div class="card-info">
                 <span class="year">{{ movie.release_date.split('-')[0] }}</span>
               </div>
             </div>
           </div>


         </div>

         <!--
         - load more button
       -->
        
       </section>
     </main>
     <div id=pagination class="pagination:container" style="display: flex; justify-content: center; margin-top: 30px; margin-bottom: 30px;">
    <div v-for="num in limit" v-show="num + currentPage - 3 > 0" @click="$router.push(`?page=${num + currentPage - 3}`)"  class="pagination:number">
    {{ num + currentPage - 3  }}
    </div>
  
    </div>
    
   </div>
</template>