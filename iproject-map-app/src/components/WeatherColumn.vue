<script>
export default {
    props: ['weather'],
    data(){
        return {
            weatherData: {
                temperature: '',
                weatherImg: '',
                day: '',
                weatherDetail: ''
            }
        }
    },
    created(){
        this.weatherData.temperature = this.weather.temperature
        this.weatherData.day = this.weather.day
        
        if(this.weather.weather === 0 || this.weather.weather === 1){
            this.weatherData.weatherImg = '/Weather icons by iconixar/sun.png'

            if(this.weather.weather === 0){
                this.weatherData.weatherDetail = 'Clear Sky'
            } else {
                this.weatherData.weatherDetail = 'Mainly Clear'
            }
        } else if(this.weather.weather === 2){
            this.weatherData.weatherImg = '/Weather icons by iconixar/cloudy.png'
            this.weatherData.weatherDetail = 'Partialy Cloudy'
        } else if(this.weather.weather === 3){
            this.weatherData.weatherImg = '/Weather icons by iconixar/cloud.png'
            this.weatherData.weatherDetail = 'Overcast'
        } else if(this.weather.weather === 45 || this.weather.weather === 48){
            this.weatherData.weatherImg = '/Weather icons by iconixar/foog.png'

            if(this.weather.weather === 45){
                this.weatherData.weatherDetail = 'Fog'
            } else {
                this.weatherData.weatherDetail = 'Rime Fog'
            }
        } else if(this.weather.weather === 51 || this.weather.weather === 53 || this.weather.weather === 55 || this.weather.weather === 56 || this.weather.weather === 57){
            this.weatherData.weatherImg = '/Weather icons by iconixar/drizzle.png'
            
            if(this.weather.weather === 51){
                this.weatherData.weatherDetail = 'Light Drizzle'
            } else if(this.weather.weather === 53){
                this.weatherData.weatherDetail = 'Moderate Drizzle'
            } else if(this.weather.weather === 55){
                this.weatherData.weatherDetail = 'Dense Drizzle'
            } else {
                this.weatherData.weatherDetail = 'Freezing Drizzle'
            }
        } else if(this.weather.weather === 61 || this.weather.weather === 63 || this.weather.weather === 65 || this.weather.weather === 66 || this.weather.weather === 67){
            this.weatherData.weatherImg = '/Weather icons by iconixar/rainy.png'
            
            if(this.weather.weather === 61){
                this.weatherData.weatherDetail = 'Slight Rain'
            } else if(this.weather.weather === 63){
                this.weatherData.weatherDetail = 'Moderate Rain'
            } else if(this.weather.weather === 65){
                this.weatherData.weatherDetail = 'Heavy Rain'
            } else {
                this.weatherData.weatherDetail = 'Freezing Rain'
            }
        } else if(this.weather.weather === 71 || this.weather.weather === 73 || this.weather.weather === 75){
            this.weatherData.weatherImg = '/Weather icons by iconixar/snowy.png'
            
            if(this.weather.weather === 71){
                this.weatherData.weatherDetail = 'Slight Snow Fall'
            } else if(this.weather.weather === 73){
                this.weatherData.weatherDetail = 'Moderate Snow Fall'
            } else {
                this.weatherData.weatherDetail = 'Heavy Snow Fall'
            }
        } else if(this.weather.weather === 77){
            this.weatherData.weatherImg = '/Weather icons by iconixar/snowflake.png'
            this.weatherData.weatherDetail = 'Snow Grains'
        } else if(this.weather.weather === 80 || this.weather.weather === 81 || this.weather.weather === 82){
            this.weatherData.weatherImg = '/Weather icons by iconixar/rainy-dense.png'
            
            if(this.weather.weather === 80){
                this.weatherData.weatherDetail = 'Slight Rain Showers'
            } else if(this.weather.weather === 81){
                this.weatherData.weatherDetail = 'Moderate Rain Showers'
            } else {
                this.weatherData.weatherDetail = 'Heavy Rain Showers'
            }
        } else if(this.weather.weather === 85 || this.weather.weather === 86){
            this.weatherData.weatherImg = '/Weather icons by iconixar/snowy-hail.png'

            if(this.weather.weather === 85){
                this.weatherData.weatherDetail = 'Slight Snow Showers'
            } else {
                this.weatherData.weatherDetail = 'Heavy Snow Showers'
            }
        } else if(this.weather.weather === 95){
            this.weatherData.weatherImg = '/Weather icons by iconixar/storm.png'
            this.weatherData.weatherDetail = 'ThunderStorm'
        } else if(this.weather.weather === 96 || this.weather.weather === 99){
            this.weatherData.weatherImg = '/Weather icons by iconixar/storm-hail.png'

            if(this.weather.weather === 96){
                this.weatherData.weatherDetail = 'Slight Snowstorm'
            } else {
                this.weatherData.weatherDetail = 'Heavy Snowstorm'
            }
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="row temperature">{{ weatherData.temperature }}&deg;</div>
        <div class="row weather-img"><img :src="weatherData.weatherImg"/></div>
        <div class="row day">{{ weatherData.day }}</div>
        <div class="row weather-detail">{{ weatherData.weatherDetail }}</div>
    </div>
</template>