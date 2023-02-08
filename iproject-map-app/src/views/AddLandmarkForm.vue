<script>
export default {

}
</script>

<template>
    <section class="container-fluid" id="add-landmark-section">
        <div class="row d-flex align-content-center justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                <a href="#" class="main-btn mb-3">Back</a>
                <h3 class="text-center">Add Landmark</h3>
                <form class="form-card">
                    <div class="row justify-content-between text-left mb-3">
                        <div class="form-group col-sm-6 flex-column d-flex">
                            <label class="form-control-label px-3 mb-1">Latitude<span class="text-danger"> *</span></label>
                            <input class="form-control" type="number" id="latitude" name="latitude" placeholder="Enter latitude coordinate" required>
                        </div>
                        <div class="form-group col-sm-6 flex-column d-flex">
                            <label class="form-control-label px-3 mb-1">Longitude<span class="text-danger"> *</span></label>
                            <input class="form-control" type="number" id="longitude" name="longitude" placeholder="Enter latitude coordinate" required>
                        </div>
                    </div>
                    <div class="row justify-content-between text-left mb-3">
                        <div class="form-group col-12 flex-column d-flex">
                            <label class="form-control-label px-3 mb-1">Image<span class="text-danger"> *</span></label>
                            <input class="form-control" type="file" name="imageUrl" id="imageUrl" placeholder="Enter landmark image" required>
                        </div>
                    </div>
                    <div class="row justify-content-between text-left mb-3">
                        <div class="form-group col-12 flex-column d-flex">
                            <label class="form-control-label px-3 mb-1">Article</label>
                            <textarea class="form-control" name="content" id="content" cols="30" rows="10"></textarea>
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