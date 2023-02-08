<script>
import Navbar from '../components/Navbar.vue'
import axios from 'axios'
import CardLocation from '../components/CardLocation.vue'
import CardProperty from '../components/CardProperty.vue'
import { mapActions, mapState } from 'pinia'
import { useBookingStore } from '../stores/counter'
export default {
  data() {
    return {
      searchForm: {
        destination: '',
        checkInDate: '',
        checkOutDate: ''
      }
    }
  },
  components: {
    Navbar,
    CardLocation,
    CardProperty
  },
  methods: {
    ...mapActions(useBookingStore, ['fetchHotelByLocation', 'fetchHotel']),
    handleSearch() {
      let query = {}
      if (this.$route.query) {
        query = {
          destination: this.searchForm.destination,
          checkIn: this.searchForm.checkInDate,
          checkOut: this.searchForm.checkOutDate
          ,
          ... this.$route.query
        }
      }
      console.log(query, 'ke push gak?')
      this.$router.push({ query })
    }
  }
  ,
  created() {
    this.fetchHotelByLocation()
    this.fetchHotel()
    // console.log(this.hotelByLocation)
    // this.getDetailHotel(this.$route.params.id, this.s)

  },
  computed: {
    ...mapState(useBookingStore, ['hotelByLocation', 'hotelsData'])
  },
  watch: {
    '$route.query'() {
      this.fetchHotelByLocation(this.$route.query.checkIn, this.$route.query.checkOut)
      this.fetchHotel(this.$route.query.destination)
    },


  }
}
</script>

<template>
  <!-- Navbar -->
  <Navbar />
  <!-- header -->
  <div class="bg-sky-500 flex justify-center items-center shadow-xl ">
    <div class="w-[90vw] max-w-[1200px]">
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
    <h2 class="my-8 text-[2rem] text-sky-900">The Wonderful {{ hotelByLocation[0]?.country }}</h2>
    <div class="flex gap-6 justify-center items-start flex-wrap ">
      <CardLocation v-for="(location, i) in hotelByLocation" :key="i" :location="location" />
    </div>
  </div>

  <!-- property -->
  <div class="w-[90vw] max-w-[1200px] m-auto my-[4rem] flex gap-1">
    <div class="bg-yellow-400 w-[25rem] h-fit sticky top-0 p-4 rounded shadow-lg">
      <h4 class="text-[1.5rem] text-slate-50">Search</h4>
      <form @submit.prevent="handleSearch">
        <div class="w-full my-6">
          <label for="" class="font-light">destination</label>
          <input v-model="searchForm.destination" type="text" class="w-full h-[2.3rem] rounded outline-none px-4 py-2">
        </div>
        <div class="w-full my-6">
          <label for="" class="font-light">check in date</label>
          <input v-model="searchForm.checkInDate" type="date" class="w-full h-[2.3rem] rounded outline-none px-4 py-2">
        </div>
        <div class="w-full my-6">
          <label for="" class="font-light">check out date</label>
          <input v-model="searchForm.checkOutDate" type="date" class="w-full h-[2.3rem] rounded outline-none px-4 py-2">
        </div>
        <button class="w-full bg-sky-500 px-4 py-2 rounded text-white">Search</button>

      </form>
    </div>
    <div class="flex-1 flex flex-col gap-8">
      <CardProperty v-for="hotel in hotelsData.hotels" :key="hotel.hotelId" :hotel="hotel"
        :searchId="hotelsData.searchId" />
    </div>
  </div>


  <!-- Footer -->
  <div class="bg-sky-500">
    <div class=" w-[90vw] max-w-[1200px] m-auto mt-[5rem] h-[20rem] flex items-center justify-center">

    </div>

  </div>

</template>