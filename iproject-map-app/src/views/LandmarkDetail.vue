<script>
import { mapActions, mapState } from 'pinia';
import WeatherColumn from '../components/WeatherColumn.vue'
import { useAppStore } from '../stores/app';

export default {
  components: {
    WeatherColumn
  },
  data(){
    return {
      userRole: localStorage.getItem('role')
    }
  },
  computed: {
    ...mapState(useAppStore, ['landmarkById', 'landmarkByIdWeather'])
  },
  methods: {
    ...mapActions(useAppStore, ['getLandmarkById', 'getLandmarkWeather', 'addBookmark', 'deleteLandmark']),
    handleAddBookmark(){
      this.addBookmark(this.$route.params.id)
    },
    handleDeleteLandmark(){
      this.deleteLandmark(this.$route.params.id)
    }
  },
  created(){
    this.getLandmarkById(this.$route.params.id)
  },
  mounted(){
    this.getLandmarkWeather(this.landmarkById.latitude, this.landmarkById.longitude)
  }
}
</script>

<template>
    <section class="position-relative" id="landmark-detail-section">
        <div class="container-fluid">
            <div class="row d-flex align-items-center justify-content-center">
                <div class="col-lg-6 col-md-6 header-left">
                    <div class>
                        <img class="img-fluid w-100" :src="this.landmarkById.imageUrl" alt="">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 header-right">
                    <router-link to="/map" tag="button">
                      <a href="#" class="main-btn mb-3">Back</a>
                    </router-link>
                    <a @click.prevent="handleAddBookmark" v-if="userRole !== 'Admin'" href="#" class="btn btn-outline-info float-end mx-2">
                        <i class="material-symbols-outlined">bookmark</i>
                    </a>
                    <router-link :to="`/landmarks/edit/${this.landmarkById.id}`" tag="button">
                      <a v-if="userRole === 'Admin'" href="#" class="btn btn-outline-warning float-end mx-2">
                          <i class="material-symbols-outlined">edit</i>
                      </a>
                    </router-link>
                    <a @click.prevent="handleDeleteLandmark" v-if="userRole === 'Admin'" href="#" class="btn btn-outline-danger float-end mx-2">
                        <i class="material-symbols-outlined">delete</i>
                    </a>
                    <h1>{{ this.landmarkById.name }}</h1>
                    <p class="pt-20 overflow-y-hidden" id="landmark-info">
                      {{ this.landmarkById.content }}
                    </p>
                    <div class="row" id="weather">
                      <WeatherColumn v-for="weather in this.landmarkByIdWeather" :key="weather.id" :weather="weather" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>