<script>
import leaflet from 'leaflet'

export default {
    mounted(){
        let map = leaflet.map('map').setView([51.505, -0.09], 4)

        leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map)
    }
}
</script>

<template>
    <div class="container-fluid" id="map"></div>
</template>