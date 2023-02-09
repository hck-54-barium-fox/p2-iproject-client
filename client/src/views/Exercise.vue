<template>
    <div class="btn-group">
        <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Choose body part
        </button>
        <ul class="dropdown-menu">
            <li v-for="bodyPart in bodyPartList"><a @click.prevent="handleExerciseByBodyPart(bodyPart)"
                    class="dropdown-item" href="">{{ bodyPart }}</a></li>
        </ul>
        <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Choose your equipment
        </button>
        <ul class="dropdown-menu">
            <li v-for="equipment in equipmentList"><a @click.prevent="handleExerciseByEquipment(equipment)"
                    class="dropdown-item" href="">{{ equipment }}</a></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-4" v-for="exercise in exerciseByBodyPart">
            <div class="card p">
                <img class="card-img-top" :src="exercise.gifUrl" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ exercise.name }}</h5>
                    <p class="card-text">Target: {{ exercise.target }}</p>
                    <p class="card-text">Equipment {{ exercise.equipment }}</p>
                    <button @click.prevent="handleAddToMyExercise(exercise)" type="button" class="btn btn-danger">Add to My exercise</button>
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
        ...mapActions(useAppStore, ['getBodyPart', 'getEquipment', 'fetchByBodyPart', 'fetchByBodyEquipment', 'addToMyExercise']),

        handleExerciseByBodyPart(bodyPart) {
            this.fetchByBodyPart(bodyPart)
        },
        handleExerciseByEquipment(equipment) {
            this.fetchByBodyEquipment(equipment)
        },
        handleAddToMyExercise(exercise) {
            this.addToMyExercise(exercise)
        }   
    },
    computed: {
        ...mapState(useAppStore, ['bodyPartList', 'exerciseByBodyPart', 'equipmentList', 'exerciseByEquipment'])
    },
    created() {
        this.getBodyPart()
        this.getEquipment()
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
.btn-group {
    display: flex;
}
</style>