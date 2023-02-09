<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    computed: {
        ...mapState(useAppStore, ['gamesNewsById'])
    },
    methods: {
        ...mapActions(useAppStore, ['fetchNewsTechnlogiesById'])
    },
    created() {
        // console.log('sini button ke klik',$this.route.params.id);
        // this.fetchGamesById(this.$route.params.steam_appid)
        console.log($this.route.params);
        this.fetchNewsTechnlogiesById($this.route.params.id)
    }
}
</script>
<template >
    <div class="container bootdey">
        <section class="panel">
            <div class="row">
                <div class="col-md-6 mt-3">
                    <div class="pro-img-details">
                        <!-- <img :src="detailNews.imgUrl" alt=""> -->
                    </div>
                </div>
                {{ gamesNewsById.id }}
                <div class="col-md-6">
                    <h4 class="pro-d-title mt-3">
                        <!-- {{ detailNews.title }} -->
                    </h4>
                    <p>
                        <!-- {{ detailNews.content }} -->
                    </p>
                    <h3> Scan Here </h3>
                    <!-- <img :src="`https://api.qrserver.com/v1/create-qr-code/?data=http://localhost:5173/detailNews/${detailNews.id}&size=300x300`" alt="" title="" /> -->
                    <!-- <img :src="`https://api.qrserver.com/v1/create-qr-code/?data=https://phase-2-challlange-3.web.app/detailNews/${detailNews.id}&size=300x300`" alt="" title="" /> -->

                </div>


            </div>
        </section>
    </div>
</template>