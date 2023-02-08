<script>
import { useAppStore } from "../stores/appStore";
import { mapActions, mapState } from "pinia";
import Navbar from "../components/Navbar.vue";
export default {
  data() {
    return {
      formMeme: {},
    };
  },
  components: {
    Navbar,
  },
  computed: {
    ...mapState(useAppStore, ["memeDataDetail", "boxCount", "memeImage"]),
  },

  methods: {
    ...mapActions(useAppStore, ["fetchMemeDetail", "generateMeme", "postMeme"]),

    async submitMeme() {
      console.log(this.formMeme);
      this.formMeme.template_id = this.$route.params.id;
      this.generateMeme(this.formMeme);
    },

    async postMemeHandler() {
      this.formMeme.title = this.formMeme.title;
      this.formMeme.imgUrl = this.memeImage;
      this.postMeme(this.formMeme);
    },
  },

  created() {
    this.fetchMemeDetail(this.$route.params.id);
  },
};
</script>

<template>
  <Navbar />
  <section>
    <div class="row mb-5">
      <div class="col-12 mb-3 mx-auto d-block mt-5" style="max-width: 1500px">
        <div class="row justify-content-center">
          <div class="card" style="width: 30rem">
            <img :src="memeImage" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text" style="font-weight: bold">{{ memeDataDetail.name }}</p>
            </div>
          </div>

          <!-- Form -->
          <div class="col-6">
            <div class="text-center mt-3 mb-3">
              <div class="p-3">
                <h1 class="text-center mt-1">Create Meme</h1>
                <form @submit.prevent="submitMeme">
                  <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="type title here" required v-model="formMeme.title" />
                  </div>
                  <div class="mb-3">
                    <label for="text1" class="form-label">Text 1</label>
                    <input type="text" class="form-control" id="text1" placeholder="type text here" required v-model="formMeme.text0" />
                  </div>
                  <div v-if="boxCount >= 2" class="mb-3">
                    <label for="text2" class="form-label">Text 2</label>
                    <input type="text" class="form-control" id="text2" placeholder="type text here" v-model="formMeme.text1" />
                  </div>
                  <div v-if="boxCount >= 3" class="mb-3">
                    <label for="text3" class="form-label">Text 3</label>
                    <input type="text" class="form-control" id="text3" placeholder="type text here" v-model="formMeme.text2" />
                  </div>
                  <div v-if="boxCount >= 4" class="mb-3">
                    <label for="text4" class="form-label">Text 4</label>
                    <input type="text" class="form-control" id="text4" placeholder="type text here" v-model="formMeme.text3" />
                  </div>
                  <div v-if="boxCount >= 5" class="mb-3">
                    <label for="text5" class="form-label">Text 5</label>
                    <input type="text" class="form-control" id="text5" placeholder="type text here" v-model="formMeme.text4" />
                  </div>
                  <div v-if="boxCount >= 6" class="mb-3">
                    <label for="text6" class="form-label">Text 6</label>
                    <input type="text" class="form-control" id="text6" placeholder="type text here" v-model="formMeme.text5" />
                  </div>
                  <button type="submit" class="btn btn-secondary mb-2">Generate Meme</button>
                </form>
                <button @click.prevent="postMemeHandler" type="" class="mx-5 btn btn-secondary mb-2">Post Meme</button>
              </div>
            </div>
          </div>
          <!-- end form -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
