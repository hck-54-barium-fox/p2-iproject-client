<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        // The configuration of the editor.
      },
      form: {
        title: "",
        content: "",
        eventDate: "",
        imageUrl: "",
      },
    };
  },
  mounted() {
    // ClassicEditor.create(document.querySelector("#editor"))
    //   .then((editor) => {
    //     console.log(editor);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  },
};
</script>

<template>
  <section class="ms-sm-auto px-md-4" id="new-product-section">
    <div
      class="
        d-flex
        justify-content-center
        flex-wrap flex-md-nowrap
        align-items-center
        pt-3
        pb-2
        mb-3
        border-bottom
      "
    >
      <h1 class="di splay-2">Make your Event</h1>
    </div>
    <div class="row">
      <div class="col-6 col-offset-3 col-md-6">
        <form @submit.prevent="submitType">
          <div class="mb-3">
            <label for="product-title"
              >Title<span class="text-danger fw-bold">*</span></label
            >
            <input
              type="text"
              class="form-control"
              id="product-title"
              placeholder="Enter Event title"
              autocomplete="off"
              required
              v-model="form.title"
            />
          </div>
          <div class="mb-3">
            <label for="product-content"
              >Content <span class="text-danger fw-bold">*</span></label
            >
            <ckeditor
              :editor="editor"
              v-model="form.content"
              :config="editorConfig"
            ></ckeditor>
            <!-- <div id="editor">Describe your content Event, place of Event, and message for the Guest here</div> -->
          </div>
          <div class="mb-3">
            <label>Image<span class="text-danger fw-bold">*</span></label>
            <input
              v-model="form.imageUrl"
              type="text"
              class="form-control"
              id="product-image"
              placeholder="Enter Event image url"
              autocomplete="off"
              required
            />
          </div>
          <div class="mb-3">
            <label>Event Date<span class="text-danger fw-bold">*</span></label>
            <input
              v-model="form.eventDate"
              type="date"
              class="form-control"
              placeholder="Enter Event Date"
              required
            />
          </div>
          <div class="row mt-5 mb-3">
            <router-link to="/">
              <div class="col-6">
                <a class="btn btn-lg btn-light rounded-pill w-100 p-2"
                  >Cancel</a
                >
              </div>
            </router-link>
            <div class="col-6">
              <button
                class="btn btn-lg btn-primary rounded-pill w-100 p-2"
                id="create-product"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>