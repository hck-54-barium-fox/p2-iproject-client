<script>
import CardNews from '../components/CardNews.vue'
import { mapActions, mapState } from 'pinia'
import { useCardStore } from '../stores/card';
export default {
    components: {
        CardNews,
    },
    data() {
        return {
        }
    },
    created(){
        this.fetchYoutube()
    },
    methods: {
        ...mapActions(useCardStore, ['fetchYoutube'])
    },
    computed: {
        ...mapState(useCardStore, ['dataYoutube'])
    },

}
</script>

<template>
    <div class="d-flex justify-content-center fs-1 mt-5 pt-5 border-bottom">
        <div class="mb-3">
            News
        </div>
    </div>
    <div class="d-flex justify-content-center text-secondary pt-2">
        Checkout Our Latest Video!
    </div>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="d-block w-100 shadow p-5 mb-5 rounded d-flex justify-content-center">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/TMDFP3cukFk"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                </div>
            </div>
            <div v-for="news in dataYoutube" class="carousel-item">
                <div class="d-block w-100 shadow p-5 mb-5 rounded d-flex justify-content-center">
                    <iframe width="1280" height="720" :src="`https://www.youtube.com/embed/${news}`"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>