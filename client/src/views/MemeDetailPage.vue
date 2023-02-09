<script>
import { useAppStore } from "../stores/appStore";
import { mapActions, mapState } from "pinia";
import Navbar from "../components/Navbar.vue";
export default {
  data() {
    return {
      formMeme: {},
      image: null,
    };
  },
  components: {
    Navbar,
  },
  computed: {
    ...mapState(useAppStore, ["memeDataDetail", "boxCount", "memeImage"]),
  },

  methods: {
    ...mapActions(useAppStore, ["fetchMemeDetail", "generateMeme", "postMeme", "uploadFile"]),

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

    onFileSelected(event) {
      // this.image = event.target.files[0];

      if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
        preview.style.display = "block";
        // this.memeImage = preview.src;
        this.image = event.target.files[0];
      }
    },

    uploadImage() {
      const fd = new FormData();
      fd.append("meme", this.image, this.image.name);
      this.uploadFile(fd);
      this.uploadImgShow();
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
          <div class="mt-5" style="width: 30rem">
            <img :src="memeImage" class="card-img-top mt-5 memeImgCustom" alt="..." />
            <div class="card-body mt-2">
              <p class="card-text" style="font-weight: bold; font-size: 25px">{{ memeDataDetail.name }}</p>
            </div>
          </div>

          <!-- Form -->
          <div class="col-6">
            <div class="text-center mt-3 mb-3">
              <div class="p-3">
                <h1 class="text-center mt-1">Generate Meme</h1>
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
                  <button @click.prevent="postMemeHandler" type="" class="mx-5 btn btn-secondary mb-2">Post Meme</button>
                </form>
                <div class="mt-2">
                  <h3>Do you have your own meme creation? upload it here</h3>
                  <p>Your filename will be the title for your meme</p>
                  <div class="preview mb-4 mt-1">
                    <img id="file-ip-1-preview" class="mx-auto" style="max-width: 200px; max-height: 200px" />
                  </div>
                  <input type="file" name="meme" @change="onFileSelected" />
                  <button @click.prevent="uploadImage" class="btn btn-primary">Upload</button>
                </div>
              </div>
            </div>
          </div>
          <!-- end form -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vertical-center-card {
  display: flex;
  align-items: center;
  /* height: 600px; */
  border: 2px solid #006100;
}
</style>
