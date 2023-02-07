<script>
import Navbar from '../components/Navbar.vue'
import axios from 'axios'
import CardLocation from '../components/CardLocation.vue'
import CardProperty from '../components/CardProperty.vue'
import { mapActions, mapState } from 'pinia'
import { useBookingStore } from '../stores/counter'
export default {
  components: {
    Navbar,
    CardLocation,
    CardProperty
  },
  methods: {
    ...mapActions(useBookingStore, ['fetchHotelByLocation', 'fetchHotel'])
  }
  ,
  created() {
    this.fetchHotelByLocation()
    this.fetchHotel()
    console.log(this.hotelByLocation)
  },
  computed: {
    ...mapState(useBookingStore, ['hotelByLocation', 'hotelsData'])
  }
}
</script>

<template>
  <!-- Navbar -->
  <Navbar />
  <!-- header -->
  <div class="bg-sky-500 flex justify-center items-center shadow-xl ">
    <div class="w-[90vw] max-w-[1200px]">
      <div class="flex mt-4 gap-x-6 text-white">
        <button class="flex items-center">
          <span class="material-symbols-outlined text-[2.4rem] text-white">
            hotel
          </span>
          <span class="ml-2 text-lg">Stays</span>
        </button>

        <button class="flex items-center">
          <span class="material-symbols-outlined text-[2.4rem]">
            flight
          </span>
          <span class="ml-2 text-lg">Flight</span>
        </button>




      </div>
      <h2 class="text-[3rem] text-white mt-[5rem]">Bingung Cari Singgahan Ketika Liburan?</h2>
      <h2 class="text-[2rem] text-white mt-2">Ya <span class="text-white">Boking</span> Solusi nya</h2>
      <div class=" w-full mt-[7rem] relative">
        <div class="absolute bottom-[-1.5rem] w-full">
          <form>
            <div class="h-[4rem] rounded-md flex bg-white  py-[.5rem] px-2 gap-2 shadow-xl">
              <div class="bg-white flex items-center">
                <label for="destination" class="material-symbols-outlined text-[2.4rem]">
                  hotel
                </label>
                <input class="h-full w-[100%] outline-none px-2 py-1 rounded-sm" type="text" id="destination"
                  placeholder="Where are Ya Going">

              </div>
              <div class="bg-white flex items-center">
                <label for="date" class="material-symbols-outlined text-[2.4rem]">
                  date_range
                </label>
                <input class="h-full w-[100%] outline-none px-2 py-1 rounded-sm" type="text" id="date"
                  placeholder="Where are Ya Going">

              </div>
              <div class="bg-white flex items-center">
                <label for="date" class="material-symbols-outlined text-[2.4rem]">
                  flight
                </label>
                <input class="h-full w-[100%] outline-none px-2 py-1 rounded-sm" type="text" id="date"
                  placeholder="Where are Ya Going">

              </div>


              <button class="bg-sky-600 px-4 py-2 rounded-md ">Search</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
  <!-- popular -->

  <div class=" w-[90vw] max-w-[1200px] m-auto mt-[5rem]">
    <div class="flex gap-6 justify-center items-start flex-wrap ">
      <CardLocation v-for="(location, i) in hotelByLocation" :key="i" :location="location" />
    </div>
  </div>

  <!-- property -->
  <div class=" w-[90vw] max-w-[1200px] m-auto mt-[5rem]">
    <h2 class="my-8 text-[2rem]">Browse by property</h2>
    <div class="flex justify-center gap-4 items-start flex-wrap">
      <CardProperty v-for="hotel in hotelsData.hotels" :key="hotel.hotelId" :hotel="hotel" />
    </div>
  </div>


  <!-- Footer -->
  <div class="bg-sky-500">
    <div class=" w-[90vw] max-w-[1200px] m-auto mt-[5rem] h-[20rem] flex items-center justify-center">

    </div>

  </div>

</template>