<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    data(){
        return {
            editForm: {
                latitude: '',
                longitude: '',
                content: ''
            },
            imageUrl: ''
        }
    },
    computed: {
        ...mapState(useAppStore, ['landmarkById'])
    },
    methods: {
        ...mapActions(useAppStore, ['getLandmarkById', 'editLandmark']),
        changeImageUrl(event){
            this.imageUrl = event.target.files[0]
        },
        handleEditLandmark(){
            const fd = new FormData()
            fd.append("landmarkImg", this.imageUrl, this.imageUrl.name)
            this.editLandmark(this.$route.params.id, this.editForm, fd)
        }
    },
    created(){
        this.getLandmarkById(this.$route.params.id)
    },
    mounted(){
        this.editForm.latitude = this.landmarkById.latitude
        this.editForm.longitude = this.landmarkById.longitude
        this.editForm.content = this.landmarkById.content
    }
}
</script>

<template>
    <section class="container-fluid" id="edit-landmark-section">
        <div class="row d-flex align-content-center justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                <router-link :to="`/landmarks/${this.$route.params.id}`" tag="button">
                    <a href="#" class="main-btn mb-3">Back</a>
                </router-link>
                <h3 class="text-center">Edit Landmark</h3>
                <form class="form-card" enctype="multipart/form-data" @submit.prevent="handleEditLandmark">
                    <div class="row justify-content-between text-left mb-3">
                        <div class="form-group col-sm-6 flex-column d-flex">
                            <label class="form-control-label px-3 mb-1">Latitude<span class="text-danger"> *</span></label>
                            <input v-model="editForm.latitude" class="form-control" type="text" id="latitude" name="latitude" placeholder="Enter latitude coordinate" required>
                        </div>
                        <div class="form-group col-sm-6 flex-column d-flex">
                            <label class="form-control-label px-3 mb-1">Longitude<span class="text-danger"> *</span></label>
                            <input v-model="editForm.longitude" class="form-control" type="text" id="longitude" name="longitude" placeholder="Enter latitude coordinate" required>
                        </div>
                    </div>
                    <div class="row justify-content-between text-left mb-3">
                        <div class="form-group col-12 flex-column d-flex">
                            <label class="form-control-label px-3 mb-1">Image<span class="text-danger"> *</span></label>
                            <input @change="changeImageUrl" class="form-control" type="file" name="imageUrl" id="imageUrl" placeholder="Enter landmark image" required>
                        </div>
                    </div>
                    <div class="row justify-content-between text-left mb-3">
                        <div class="form-group col-12 flex-column d-flex">
                            <label class="form-control-label px-3 mb-1">Article</label>
                            <textarea class="form-control" name="content" id="content" cols="30" rows="10">{{ editForm.content }}</textarea>
                        </div>
                    </div>
                    <div class="row justify-content-center mb-3">
                        <div class="form-group col-sm-6">
                            <button type="submit" class="form-control btn btn-primary rounded submit px-3">Edit landmark</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>