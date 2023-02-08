<script>
import EventCard from "../components/EventCard.vue"
import {mapActions,mapState} from 'pinia'
import {useAppStore} from "../stores/app"
export default {
    components:{
        EventCard
    },
    methods:{
        ...mapActions(useAppStore,['fetchEvent'])
    },
    computed:{
        ...mapState(useAppStore,['eventList'])
    },
    created(){
        this.fetchEvent()
    }
}
</script>

<template>
      <div
    class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <h2 class="text-4xl tracking-widest text-white text-center uppercase">
      <span class="block">Lets Join The Party</span>
    </h2>
    <div
      class="
        mt-10
        grid grid-cols-1
        gap-y-10 gap-x-6
        sm:grid-cols-2
        lg:grid-cols-4
        xl:gap-x-8
      "
    >
      <EventCard v-for="event in eventList" :key="event.id" :event="event" />
    </div>
  </div>
</template>