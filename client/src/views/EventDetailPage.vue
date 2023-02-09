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
    const baseUrl = "https://partylist-c358a.web.app"
  //  const baseUrl = 'https://iprojectapi-production.up.railway.app'
    const options = {
      method: "POST",
      url: "https://qrcode3.p.rapidapi.com/qrcode/text",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "c3f6c10d1cmshe95233043f8ec7cp164e6bjsn71d6b4db2f23",
        "X-RapidAPI-Host": "qrcode3.p.rapidapi.com",
      },
      responseType: "arraybuffer",
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
    const response = await axios.request(options);
    let blob = new Blob([response.data], {
      type: response.headers["content-type"],
    });
    const qr = URL.createObjectURL(blob);
    console.log(qr);
    this.imgQr = qr;

    // this.getQrCode();
    this.eventDetails;
    this.getEventById(this.$route.params.eventId);
  },
};
</script>

<template>
  <div class="blog-single gray-bg">
    <div class="container">
      <div class="bg-white rounded-xl overflow-hidden">
        <div class="row align-items-start">
          <div class="col-6 offset-3  ">
            <div class="article-title">
              <h1>{{ this.eventDetails.title }}</h1>
              <div class="media">
                <div class="avatar">
                  <img
                    :src="this.eventDetails.imageUrl"
                    class="rounded-xl"
                    alt="no pict"
                  />
                </div>
              </div>
            </div>
            <div class="">
              <p v-html="eventDetails.content"></p>
            </div>
            <div><img :src="imgQr" alt="" width="200" /></div>
            <div>
              <p>{{ getDate }}</p>
            </div>
            <div class="contact-form article-comment">
              <h4>Leave a Reply</h4>
              <form id="contact-form" method="POST">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        name="Name"
                        id="name"
                        placeholder="Name *"
                        class="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your message *"
                        rows="4"
                        class="form-control"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="send">
                      <button class="px-btn theme">
                        <span>Submit</span> <i class="arrow"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* h1 {
    font-size: 100px
} */
</style>