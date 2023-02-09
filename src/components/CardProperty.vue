<script>
import { mapActions } from 'pinia';
import { useBookingStore } from '../stores/counter';

export default {
  props: ['hotel', 'searchId'],
  methods: {
    toDetail(id) {
      this.$router.push(`/detail/${id}?search_id=${this.searchId}`)
      this.getHotelRooms(id)
      this.getDetailHotel(id, this.searchId)
    },
    ...mapActions(useBookingStore, ['getHotelRooms', 'getDetailHotel'])
  }
}
</script>

<template>
  <div
    class="cursor-pointer hover:bg-slate-100 hover:shadow-xl flex flex-row w-full gap-10 h-[250px] bg-slate-50  rounded-sm shadow-lg transition-all duration-300 ease-in items-start"
    @click="toDetail(hotel.hotelId)">
    <img :src="hotel.mainImgUrl" alt="" class="w-[300px] h-full flex-shrink rounded-sm">
    <div class="flex-1 relative">
      <h3 class="text-[1.5rem] tracking-wider text-sky-600">{{ hotel.hotelName }}</h3>
      <p class="my-1 text-[1.2rem]">country: <span class="text-black">{{ hotel.country }}</span></p>
      <p class="my-1 text-[1.2rem]">City : {{ hotel.city }}</p>
      <p class=" my-1 text-[1.2rem]">Address : {{ hotel.address }}</p>
      <p class="text-[1.2rem]">Price: <span>{{
        hotel.price.gross_price.toLocaleString(
          'en-US',
          { style: 'currency', currency: 'USD' })
      }}</span></p>
      <p class="absolute top-0 right-0 text-xl bg-orange-500 px-4 py-2 rounded text-white"><span>{{
        hotel.score
      }}</span></p>
    </div>

  </div>
</template>