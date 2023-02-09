<template>
   <div class="row">
        <div class="col-md-4" v-for="exercise in myExercise">
            <div class="card p">
                <img class="card-img-top" :src="exercise.gifUrl" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ exercise.name }}</h5>
                    <p class="card-text">Target: {{ exercise.target }}</p>
                    <p class="card-text">Equipment {{ exercise.equipment }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app'
export default {
    methods: {
        ...mapActions(useAppStore, ['fetchMyExercise'])
    },
    computed: {
        ...mapState(useAppStore, ['myExercise'])
    },
    created() {
        this.fetchMyExercise()
    }
}
</script>

<style lang="css" scoped>
.p {
    width: 25rem;
    margin-top: 25px;
    margin-bottom: 25px;
    margin-right: 50px;
    margin-left: 50px;
    max-height: 600px;
}
</style>