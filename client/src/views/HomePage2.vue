<script>
export default {
  
};
</script>

<template>
  <div>
    <div class="green-bg">
      <h1>Home Page</h1>
      <div class="container">
        <div class="row g-5 justify-content-evenly">
          <div class="col-lg-6">
            <div class="card">
              <div class="row g-0">
                <div class="col-6 col-md-5">
                  <img
                    src="../assets/smoking.jpeg"
                    class="card-img img-fluid rounded-start"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="col-6 col-md-7">
                  <div class="card-body d-flex flex-column">
                    <div class="h-100">
                      <h3 class="card-header text-center">Did you know?</h3>
                      <h5 class="card-title">How many...</h5>
                      <form >
                        <div class="form-outline my-4">
                          <input
                            type="number"
                            class="form-control"
                            autocomplete="off"
                            placeholder="Price"
                            required
                          />
                        </div>
                        <button type="submit" class="btn btn-secondary">
                          Lets calculate
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .form{
    margin-top: 50px;
} */
.green-bg{
    background-color: #e6f3e3;
    /* padding-bottom: 2rem;
    padding-top: 2rem; */

}
.card-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom-right-radius: 0px ;
}
</style>
