<script>
import axios from "axios";
import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/app";
export default {
  data() {
    return {
      imgQr: null,
    };
  },
  methods: {
    ...mapActions(useAppStore, ["getEventById", "getQrCode"]),
  },
  computed: {
    ...mapState(useAppStore, ["eventDetails"]),
    getDate() {
      return new Date(this.eventDetails.eventDate).toISOString().slice(0, 10);
    },
  },
  async created() {
    const baseUrl = "https://partylist-c358a.web.app";
    //  const baseUrl = 'https://iprojectapi-production.up.railway.app'
    const options = {
      method: "POST",
      url: "https://qrcode3.p.rapidapi.com/qrcode/text",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "c3f6c10d1cmshe95233043f8ec7cp164e6bjsn71d6b4db2f23",
        "X-RapidAPI-Host": "qrcode3.p.rapidapi.com",
      },
      // responseType: "  arraybuffer",
      data: {
        data: `${baseUrl}${this.$route.path}`,
        image: {
          uri: "icon://appstore",
          modules: true,
        },
        style: {
          module: {
            color: "black",
            shape: "default",
          },
          inner_eye: {
            shape: "default",
          },
          outer_eye: {
            shape: "default",
          },
          background: {},
        },
        size: {
          width: 200,
          quiet_zone: 4,
          error_correction: "M",
        },
        output: {
          filename: "qrcode",
          format: "png",
        },
      },
    };
    // const response = await axios.request(options);
    // let blob = new Blob([response.data], {
    //   type: response.headers["content-type"],
    // });
    // const qr = URL.createObjectURL(blob);
    // console.log(qr);
    // this.imgQr = qr;

    // this.getQrCode();
    // this.eventDetails;
    this.getEventById(this.$route.params.eventId);
  },
};
</script>

<template>
  <div
    class="
      w-full
      px-6
      py-6
      mx-auto
      mt-20
      mb-20
      border border-gray-100
      rounded-lg
      sm:px-8
      md:px-12
      sm:py-8 sm:shadow
      lg:w-5/6
      xl:w-2/3
    "
    style="background-color:#1e1e24"
  >
    <h1 class="text-lg font-bold text-white sm:text-xl md:text-2xl my-5">
      {{ eventDetails.title }}
    </h1>
    <div class="flex">
      <div class="w-full px-4 mb-4 md:mb-0">
        <img :src="eventDetails.imageUrl" class="rounded-xl" style="width:300px; height:300px; object-fit:cover" />
      </div>
      <div class="w-full px-4 mb-4 md:mb-0 flex items-center" style="">
        <div class="text-white text-left">
          <p v-html="eventDetails.content"></p>
        </div>
      </div>
    </div>
      <div class="d-flex justify-content-center">
        <p class="text-white mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
          {{ getDate }}
        </p>
      </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 60px;
}
</style>