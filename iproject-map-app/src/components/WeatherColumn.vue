<script>
export default {
    data(){
        return {
            weatherData: {
                temperature: '',
                weatherImg: '',
                day: '',
                weatherDetail: ''
            }
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="row temperature">21&deg;</div>
        <div class="row weather-img"><img  src="../assets/Weather_icons_by_iconixar/sun.png"/></div>
        <div class="row day">Mon</div>
        <div class="row weather-detail">Sunny</div>
    </div>
</template>