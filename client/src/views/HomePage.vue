<template>
    <div class="header_sec">
        <div class="logo">
            <h2><span class="primary_color">My</span>GYM</h2>
        </div>
        <ul class="nav_menu">
            <li><a href="#">Programs</a></li>
            <li><a href="#">Schedule</a></li>
            <li><a href="#">Instructors</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ usersBmi.name }}</h5>
            <p class="card-text">Class: {{ usersBmi.info.health }}</p>
            <p class="card-text">pls consider to move your ass a bit</p>
            <a @click="this.$router.push('/exercise')" href="" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app'
export default {
    methods: {
        ...mapActions(useAppStore, ['getBmi']),
    },
    computed: {
        ...mapState(useAppStore, ['usersBmi'])
    },
    created() {
        this.getBmi()
    }
}
</script>

<style lang="css" scoped>
.card {
    width: 400px;
    background: rgba(0, 0, 0 / 10%);
    display: flex;
    position: absolute;
    justify-content: center;
    right: 35%;
    top: 20%;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
    border-radius: 20px;
}
</style>