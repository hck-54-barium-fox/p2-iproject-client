<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(useAppStore, ['gamesById'])
    },
    methods: {
        ...mapActions(useAppStore, ['fetchGamesById'])
    },
    created() {
        // console.log(this.$route.params.steam_appid,"siniii");
        this.fetchGamesById(this.$route.params.steam_appid)
    }
}
</script>
<template >

    <div class="container-card">

        <div class="row mt-5">
            <div class="col-md-2 ">
                <div class="pro-img-details">

                </div>
            </div>
            <div class="col-md-4 ">
                <div class="pro-img-details">
                    <img :src="gamesById.image" alt="">
                </div>
            </div>

            <div class="col-md-6 card-detail">
                <h4>
                    <!-- {{ detailNews.title }} -->
                    {{ gamesById.name }}
                </h4>
                <p>
                    <b>   Harga Game </b>
                    {{ gamesById.price }}

                </p>
                <p> detailed description {{ gamesById.detailed_description }}</p>
                <p> platforms
                     <!-- {{ gamesById.platforms }} -->
                </p>

                <div  class="platform">

                    <div v-if="gamesById.platforms.linux === true" class="ubuntu m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-ubuntu" viewBox="0 0 16 16">
                        <path
                            d="M2.273 9.53a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.547Zm9.467-4.984a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546ZM7.4 13.108a5.535 5.535 0 0 1-3.775-2.88 3.273 3.273 0 0 1-1.944.24 7.4 7.4 0 0 0 5.328 4.465c.53.113 1.072.169 1.614.166a3.253 3.253 0 0 1-.666-1.9 5.639 5.639 0 0 1-.557-.091Zm3.828 2.285a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546Zm3.163-3.108a7.436 7.436 0 0 0 .373-8.726 3.276 3.276 0 0 1-1.278 1.498 5.573 5.573 0 0 1-.183 5.535 3.26 3.26 0 0 1 1.088 1.693ZM2.098 3.998a3.28 3.28 0 0 1 1.897.486 5.544 5.544 0 0 1 4.464-2.388c.037-.67.277-1.313.69-1.843a7.472 7.472 0 0 0-7.051 3.745Z" />
                    </svg>
                </div>

                <div v-if="gamesById.platforms.windows === true" class="m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-windows" viewBox="0 0 16 16">
                        <path
                            d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z" />
                    </svg>
                </div>

                <div v-if="gamesById.platforms.mac === true" class="m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-apple" viewBox="0 0 16 16">
                        <path
                            d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                        <path
                            d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                        </svg>
                    </div>
                </div>
                    
                    
                <h3> Scan Here </h3>
                <img :src="`https://api.qrserver.com/v1/create-qr-code/?data=http://localhost:5173/detailGames/${gamesById.steam_appid}&size=300x300`"
                    alt="" title="" />
                <!-- <img :src="`https://api.qrserver.com/v1/create-qr-code/?data=https://phase-2-challlange-3.web.app/detailNews/${detailNews.id}&size=300x300`" alt="" title="" /> -->

            </div>


        </div>

    </div>
</template>

<style scoped>
body {
    height: 100%;
    background-image: url(https://img.freepik.com/free-vector/minimal-geometric-stripe-shape-background_1409-1014.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

}

.container-card {
    width: 100%;
    height: 90vh;
    overflow: scroll
}

.card-detail {
    background-color: aliceblue;
    width: 48%;
    height: 280vh;
}

.platform{
    display: flex;
    align-items: flex-start;
}

</style>