<script>
import leaflet from 'leaflet'
import { mapActions, mapState } from 'pinia'
import { useAppStore } from '../stores/app'
import MarkerCard from '../components/MarkerCard.vue'

export default {
    components: {
        MarkerCard
    },
    methods: {
        ...mapActions(useAppStore, ['getLandmarks'])
    },
    computed: {
        ...mapState(useAppStore, ['landmarkList'])
    },
    mounted(){
        let mainMap = leaflet.map('map').setView([51.505, -0.09], 4)

        leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mainMap)
        
        let markers

        this.getLandmarks()
            .then(() => {
                markers = this.landmarkList.map(el => {
                    return leaflet.marker([el.latitude, el.longitude]).addTo(mainMap)
                })

                for(let i in markers){
                    markers[i].bindPopup(`<div class="card" style="width: 18rem;">
                        <img src="${this.landmarkList[i].imageUrl}" class="card-img-top" alt="${this.landmarkList[i].name}">
                        <div class="card-body">
                            <h5 class="card-title">${this.landmarkList[i].name}</h5>
                            <h6 class="card-subtitle">${this.landmarkList[i].country}</h6>
                            <p class="card-text">${this.landmarkList[i].content.substring(0, 100) + '...'}</p>
                            <a href="/landmarks/${this.landmarkList[i].id}" class="btn btn-primary">See Detail</a>
                        </div>
                    </div>
                    `).openPopup()
                }
            })
    }
}
</script>

<template>
    <div class="container-fluid" id="map"></div>
</template>