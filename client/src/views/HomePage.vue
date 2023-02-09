<template>
    <div class="banner">
			<div class="intro">
				<h1>{{ usersBmi.name }}</h1>
				<h1>BMI: {{ usersBmi.info.bmi }}</h1>
				<h1>Health:{{ usersBmi.info.health }}</h1>
				<h1>Recomendation:{{ usersBmi.info.healthy_bmi_range }}</h1>
				<h1>Perfect Shape</h1>
                <a @click="this.$router.push('/exercise')" href="" class="btn btn-primary">Get our exercise</a>
			</div>
			<img src="../assets/img/bg.png">
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

.banner{
	height: 80vh;
	background: black;
	position: relative;
}
.banner .intro{
	position: absolute;
	left: 15%;
	top: 20%;
}
.banner .intro h1{
	color: #fff;
	font-size: 40px;
	text-transform: uppercase;
	letter-spacing: 2px;
}
.banner img{
	position: absolute;
	right: 15%;
	bottom: 0;
	height: 95%;
}
.banner form{
	margin-top: 1rem;
}

</style>