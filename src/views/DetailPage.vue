<script>
import Navbar from '../components/Navbar.vue'
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
} from "@vue-leaflet/vue-leaflet";
import { mapActions, mapState } from 'pinia'
import { useBookingStore } from '../stores/counter'
import CardRoom from '../components/RoomCard.vue'
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    Navbar,
    CardRoom
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        ' <a target="_blank" >Bista MAp</a>',
      zoom: 5,
      center: [-8.786085, 115.13978],
      customText: 'Foobar',
      iconSize: 64,
      // url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    };
  },

  methods: {
    ...mapActions(useBookingStore, ['getHotelRooms'])
  }
  ,
  created() {
    this.getHotelRooms(this.$route.params.id)
    // console.log(this.roomsHotel, 'ini data dah jadi')
  },
  computed: {
    ...mapState(useBookingStore, ['roomsHotel'])
  }
}
</script>

<template>
  <Navbar />
  <!-- main information -->
  <div class="w-[90vw] max-w-[1200px] m-auto mt-[5rem]">
    <div class="p-4 bg-white shadow-lg rounded">
      <h1 class="text-[1.4rem]">The Bista Hotels</h1>
      <div class="flex text-yellow-600 ">
        <span class="material-symbols-outlined ">
          grade
        </span>
        <span class="material-symbols-outlined">
          grade
        </span>
        <span class="material-symbols-outlined">
          grade
        </span>
        <span class="material-symbols-outlined">
          grade
        </span>
        <span class="material-symbols-outlined">
          grade
        </span>
      </div>
      <p class="my-2 text-gray-400">Jambi, Muara bungo kuamang kuning spa</p>
      <div class="w-full h-[.1rem] bg-gray-100 my-5"></div>
      <div>
        <div class="flex gap-4 h-[450px]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWMPreXboMoHMjXm_FoynvJKtpquk45kvnw&usqp=CAU"
            class="w-full h-full  object-cover rounded flex-1" alt="">
          <div class="flex flex-col gap-5 justify-between items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWMPreXboMoHMjXm_FoynvJKtpquk45kvnw&usqp=CAU "
              class="w-full object-cover rounded  h-[45%]" alt="">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWMPreXboMoHMjXm_FoynvJKtpquk45kvnw&usqp=CAU "
              class="w-full object-cover rounded  h-[45%] brightness-50" alt="">
          </div>
        </div>

      </div>
      <h2>Padang</h2>
      <h4 class="my-4">Facelities</h4>
      <div class="flex gap-5 mt-2 text-sky-600">
        <span class="material-symbols-outlined ">
          wifi
        </span>
        <span class="material-symbols-outlined ">
          wifi
        </span>
        <span class="material-symbols-outlined ">
          wifi
        </span>
        <span class="material-symbols-outlined ">
          wifi
        </span>
        <span class="material-symbols-outlined ">
          wifi
        </span>
        <span class="material-symbols-outlined ">
          wifi
        </span>
        <span class="material-symbols-outlined ">
          wifi
        </span>
        <span class="material-symbols-outlined ">
          wifi
        </span>
        <span class="material-symbols-outlined ">
          wifi
        </span>
        <span class="material-symbols-outlined ">
          wifi
        </span>
      </div>

      <div class="my-8">
        <h4>Information</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ullam, sed neque voluptatem consectetur id
          praesentium voluptate fuga molestias recusandae aliquam quia fugiat, iure ipsum. Quia voluptatem sed
          distinctio
          tenetur similique id quaerat maxime! Enim fugit, placeat facilis, quos doloremque minima molestias est
          pariatur
          voluptas ad iusto, explicabo sequi consequuntur.</p>

      </div>

    </div>
  </div>
  <!-- weather and map -->
  <div class="my-[5rem] w-[90vw] max-w-[1200px] m-auto">
    <div class="p-4 bg-white shadow-lg rounded">

      <p>Location Info</p>
      <p class="text-gray-500">
        jl meranging kuamang kuning pelepat ilir bungo jambi Indonesia
      </p>
      <p class="my-4">The weather in jl meranging kuamang kuning pelepat ilir bungo jambi Indonesia</p>
      <div class="my-4">
        <div class="w-full">
          <div class="mt-[6rem] rounded-lg overflow-hidden flex justify-center items-center">
            <l-map style="height: 30rem; width: 900px;border-radius: .25rem;" :zoom="zoom" :center="center">
              <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
              <l-marker :lat-lng="[-8.694587, 115.168175]"> </l-marker>
            </l-map>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Rooms Hotel -->
  <div class="w-[90vw] max-w-[1200px] m-auto my-[4rem] flex gap-1 flex-wrap">
    <div class="flex-1 flex flex-col gap-8">
      <CardRoom v-for="(room, i) in roomsHotel" :key="i" :room="room" />
    </div>
  </div>

  <div class="bg-sky-500">
    <div class=" w-[90vw] max-w-[1200px] m-auto mt-[5rem] h-[20rem] flex items-center justify-center">
    </div>
  </div>
</template>


