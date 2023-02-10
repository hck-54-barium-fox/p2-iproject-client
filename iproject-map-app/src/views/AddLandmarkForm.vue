<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    data(){
        return {
            addForm: {
                latitude: '',
                longitude: '',
                content: ''
            },
            imageUrl: ''
        }
    },
    methods: {
        ...mapActions(useAppStore, ['addLandmark']),
        changeImageUrl(event){
            this.imageUrl = event.target.files[0]
        },
        handleAddLandmark(){
            const fd = new FormData()
            fd.append("landmarkImg", this.imageUrl, this.imageUrl.name)
            this.addLandmark(this.addForm, fd)
        }
    }
}
</script>

<template>
    <section class="container-fluid" id="add-landmark-section">
        <div class="row d-flex align-content-center justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                <router-link to="/map" tag="button">
                    <a href="#" class="main-btn mb-3">Back</a>
                </router-link>
                <h3 class="text-center">Add Landmark</h3>
                <form @submit.prevent="handleAddLandmark" class="form-card" enctype="multipart/form-data">
                    <div class="row justify-content-between text-left mb-3">
                        <div class="form-group col-sm-6 flex-column d-flex">
                            <label class="form-control-label px-3 mb-1">Latitude<span class="text-danger"> *</span></label>
                            <input v-model="addForm.latitude" class="form-control" type="text" id="latitude" name="latitude" placeholder="Enter latitude coordinate" required>
                        </div>
                        <div class="form-group col-sm-6 flex-column d-flex">
                            <label class="form-control-label px-3 mb-1">Longitude<span class="text-danger"> *</span></label>
                            <input v-model="addForm.longitude" class="form-control" type="text" id="longitude" name="longitude" placeholder="Enter latitude coordinate" required>
                        </div>
                    </div>
                    <div class="row justify-content-between text-left mb-3">
                        <div class="form-group col-12 flex-column d-flex">
                            <label class="form-control-label px-3 mb-1">Image<span class="text-danger"> *</span></label>
                            <input @change="changeImageUrl" class="form-control" type="file" name="imageUrl" id="imageUrl" accept="image/*" placeholder="Enter landmark image" required>
                        </div>
                    </div>
                    <div class="row justify-content-between text-left mb-3">
                        <div class="form-group col-12 flex-column d-flex">
                            <label class="form-control-label px-3 mb-1">Article</label>
                            <textarea v-model="addForm.content" class="form-control" name="content" id="content" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div class="row justify-content-center mb-3">
                        <div class="form-group col-sm-6">
                            <button type="submit" class="form-control btn btn-primary rounded submit px-3">Add landmark</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>