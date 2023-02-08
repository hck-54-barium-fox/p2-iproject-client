<script>
import { GoogleMap, Marker } from "vue3-google-map";


export default {
    components: {
        GoogleMap,
        Marker,
    },
    methods: {

    },
    props: ['geolocation', 'listHotels'],
};
</script>

<template>
  <GoogleMap
    api-key="AIzaSyByNd-VYwlzk0AYwx4Oe7ExViq9fNSJRwE"
    style="width: 100%; height: 85vh"
    :center="{lat: geolocation.latitude, lng: geolocation.longitude}"
    :zoom="14"
  >
    <Marker :options="{ position: {lat: geolocation.latitude, lng: geolocation.longitude} }" />
    <Marker 
    v-for="hotel in listHotels" 
    :key="hotel.id" 
    :options="{
        position: {lat: hotel.geoCode.latitude, lng: hotel.geoCode.longitude},
        title: hotel.name,
        icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
    }"/>

  </GoogleMap>
</template>
