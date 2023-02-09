<script>
import {useAppStore} from '../stores/app'
import {mapActions, mapState} from 'pinia'
export default {
    data(){
        return {
            payload : {
                price : 0
            },
            distance : 0
        }
    },
    computed : {
        ...mapState(useAppStore, ['result'])
    },
   methods : {
    ...mapActions(useAppStore, ['calculateTobbaco', 'calculateEmission']),
    generateTobbaco(){
        this.calculateTobbaco(this.payload)
    },
    generateEmission(){
        this.calculateEmission(this.distance)
    }
   } 
    
}
</script>

<template>
<section>

    <div class="center">
            <!-- CALCULATENYAA -->
            <div class="container">
                <div class="typewriter">
                <h2 style="text-align:center;">Did you know how many carbon you produce while </h2>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <img src="https://i.pinimg.com/236x/29/b6/a7/29b6a7ee373e6452981952c9de0e6835.jpg"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Smooking</h5>
                                <p class="card-text">
                                    Let's calculate your carbon footprint when you smooking, by input your cigarette price
                                </p>
                                <form @submit.prevent="generateTobbaco" style="margin-top: 50px;">
                                    <div class="form-outline my-4">
                                        <input
                                        v-model="payload.price"
                                        type="number"
                                          class="form-control"
                                          autocomplete="off"
                                          placeholder="Price"
                                          required
                                        />
                                      </div>
                                    <button type="submit" class="btn btn-success">Calculate now</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <!-- DISTANCE  -->
                    <div class="col-sm-6">
                        <div class="card">
                            <img src="https://i.pinimg.com/236x/d7/f6/ce/d7f6ce09166084c309eb8118a0221fbf.jpg"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Transportation</h5>
                                <p class="card-text">
                                    Let's calculate your carbon footprint when you travelling, by input your distance 
                                </p>
                                <form @submit.prevent="generateEmission" style="margin-top: 50px;">
                                    <div class="form-outline my-4">
                                        <input
                                        v-model="distance"
                                        type="number"
                                          class="form-control"
                                          autocomplete="off"
                                          placeholder="km"
                                          required
                                        />
                                      </div>
                                    <button type="submit" class="btn btn-success">Calculate now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <!-- RESULTNYA -->
            
        </div>
</section>

</template>

<style scoped>
section{
    /* background-image: url('./greendiant.jpg'); */
    /* background-position: 0; */
    margin: 0;
    padding: 0;
    font-family: monospace;
    justify-content: space-between;
    /* backface-visibility: visible; */
     /* background-color: #c8d4c6; */
    /* padding-bottom: 2rem;
    padding-top: 2rem; */
}

.center{
    position: absolute;
    margin-top: 200px;
    top: 50%;
    left:  50%;
    transform: translate(-50%, -50%);
    /* width: 400px; */
    border-radius: 10px;
    margin-left: 20px;
}
</style>