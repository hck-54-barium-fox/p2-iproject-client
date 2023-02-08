<script>
import { useAppStore } from "../stores/appStore";
import { mapActions, mapState } from "pinia";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapState(useAppStore, ["postDataDetail"]),
  },

  methods: {
    ...mapActions(useAppStore, ["fetchPostDetail"]),
  },

  created() {
    this.fetchPostDetail(this.$route.params.id);
  },

  mounted() {
    (function () {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script");
      s.src = "https://https-bukan9gag-dbeda-web-app.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  },
};
</script>

<template>
  <Navbar />
  <section>
    <div class="row mb-5">
      <div class="mb-3 col-12 mb-3 mx-auto d-block mt-5" style="max-width: 1200px">
        <div class="row g-0 justify-content-center">
          <div class="card" style="width: 30rem">
            <img :src="postDataDetail.imgUrl" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text" style="font-weight: bold">{{ postDataDetail.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="disqus_thread"></div>
  </section>
</template>

<style lang="scss" scoped></style>
