<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/app";
export default {
  data() {
    return {
      
    };
  },
  methods: {
    ...mapActions(useAppStore, ['calculateTobbaco', 'calculateEmission']),
  },
  computed : {
    ...mapState(useAppStore, ['tree', 'carbon'])
  },
  created(){
        // this.calculateTobbaco(),
        // this.calculateEmission()
        this.tree,
        this.carbon
    }

};
</script>

<template>
<body>
<div class="center">
  <div>
    <div class="card md-5 my-3">
      <div class="card-header text-center mt-2">
        <h3>Result ....</h3>
      </div>
      <div class="card-body text-left">
        <!-- <h5> Welcome back !! Let's Continue Your Journey</h5> -->
        <span>Here's the result  </span>
        <p>Your carbon footprint is {{carbon}}  kg and you need to plant {{tree}} tree for reduce your carbon footprint</p>
        
          <!-- BUTTON LOG IN -->
          <router-link to="/products"> <button class="btn btn-success btn-lg" type="submit">Whats the solution ??</button> </router-link>
          
      </div>
    </div>
  </div>
</div>
</body>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: monospace;
  height: 100vh;
  overflow: hidden;
  justify-content: space-between;
}
.center {
  position: absolute;
  /* margin-top: 200px; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border-radius: 10px;
}
</style>
