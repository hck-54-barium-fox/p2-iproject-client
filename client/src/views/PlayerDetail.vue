<script>
import PlayerCard from '../components/PlayerCard.vue';
import { mapActions, mapState } from 'pinia'
import { useCardStore } from '../stores/card';
export default {
    components: {
        PlayerCard
    },
    data() {
        return {
            tag: ''
        }
    },
    methods: {
        ...mapActions(useCardStore, ['findPlayer']),
        getDetailPlayer(){
            this.findPlayer(this.tag)
        }
    },
    computed: {
        ...mapState(useCardStore, ['dataPlayer'])
    },
}
</script>

<template>
    <div class="d-flex justify-content-center fs-1 mt-5 pt-5 border-bottom">
        <div class="mb-3">
            Player
        </div>
    </div>
    <div class="d-flex justify-content-center text-secondary pt-2">
        Search for Player
    </div>
    <div class="d-flex justify-content-center pt-3 grid gap-3">
        <form @submit.prevent="getDetailPlayer">
            <label for="email-login" class="form-label"></label>
            <input v-model="tag" type="text" class="form-control" id="email-login" placeholder="Insert your ID" style="width: 200px">
        </form>

    </div>
    <div class="row row-cols-3 pt-5 pb-5 ps-4 grid gap-4 d-flex justify-content-center">
        <PlayerCard :player="dataPlayer"/>
    </div>
</template>