<script>
import { mapActions } from "pinia";
import { useAppStore } from "../stores/app";
export default {
  props: ["event"],
  methods: {
    ...mapActions(useAppStore, ["fetchEvent", "getEventById",'deleteEvent']),
    getDetails(id) {
      this.getEventById(id);
    },
    destroyeTheEvent(id){
      this.deleteEvent(id)
    }
  },
  created() {
    this.fetchEvent();
  },
};
</script>

<template>
  <div class="group">
    <div class="relative">
      <div class="w-100 d-flex justify-content-center">
        <img
          :src="event.imageUrl"
          class="
            object-center object-cover
            opacity-70
            group-hover:opacity-100
          "
          style="height:350px; height: 290px; object-fit: cover; cursor: pointer;"
        />
        <div
          class="
            absolute
            bottom-0
            px-2
            py-9
            h-16
            flex
            items-center
            bg-gradient-to-t
            from-black
            w-full
          "
        >
          <p
            class="
              text-lg text-white
              uppercase
              inline-block
              align-start
              text-left
              pl-2
            "
          >
            {{ event.title }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center h-16">
      <button
        @click.prevent="getDetails(event.id)"
        class="
          px-3
          py-2
          text-gray-900
          bg-gray-100
          rounded-sm
          focus:outline-none focus:ring focus:ring-gray-500
          uppercase
          tracking-widest
        "
      >
        Event Details
      </button>
    </div>
    <div class="flex justify-center items-center h-16">
      <button
        @click.prevent="destroyeTheEvent(event.id)"
        class="
          px-3
          py-2
          text-gray-900
          bg-gray-100
          rounded-sm
          focus:outline-none focus:ring focus:ring-gray-500
          uppercase
          tracking-widest
        "
      >
        Shut down Event
      </button>
    </div>
  </div>
</template>