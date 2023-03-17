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
          <section class="comments mt-4" style="max-width: 800px" aria-labelledby="comment">
            <h2 id="comment">Comments</h2>
            <Disqus />
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
