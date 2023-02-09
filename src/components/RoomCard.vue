<script>
import axios from 'axios'
import { mapActions } from 'pinia';
import { useBookingStore } from '../stores/counter';
export default {
  props: ['room'],
  methods: {
    handleCheckIn(price) {
      this.doCheckIn()
    }
    ,
    ...mapActions(useBookingStore, ['doCheckIn'])
  },

}
</script>

<template>

  <div
    class="cursor-pointer  hover:shadow-xl flex flex-row w-full gap-10 h-[250px] bg-slate-50  rounded-sm shadow-lg transition-all duration-300 ease-in relative">
    <img :src="room?.detail?.photos[0]?.url_original" alt="" class="w-[300px] h-full flex-shrink rounded-sm">
    <div class="flex-1">
      <h3 class="text-[2rem] tracking-wider text-sky-900 mt-8">{{ room?.roomName }}</h3>
      <div class="flex gap-4 items-start">
        <div class="flex-1">
          <p class="text-gray-500 mt-6">{{
            room?.detail?.description.length > 100 ? room?.detail?.description.substring(0,
              200) + '...' : room?.detail?.description
          }}</p>
        </div>

        <div class=" flex flex-col mr-5">
          <p class="text-[1.4rem] text-orange-600 "> {{
            room?.priceBreakDown?.all_inclusive_amount.value.toLocaleString(
              'en-US',
              { style: 'currency', currency: 'USD' })
          }}
          </p>
          <button class="bg-orange-600 px-4 py-2 rounded-md text-white mt-[1rem]"
            @click="handleCheckIn(room?.priceBreakDown?.all_inclusive_amount.value)">Book
            Now</button>

        </div>
      </div>
    </div>

  </div>

</template>