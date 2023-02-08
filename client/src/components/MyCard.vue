<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCardStore } from '../stores/card';

export default {
    props: ['card'],
    methods: {
        ...mapActions(useCardStore, ['deleteCard', 'fetchMyDeck']),
        removeCard(id){
            this.deleteCard(id)
            this.fetchMyDeck()
        }
    }
}

</script>
<template>

    <!-- Card 1 -->
    <div class="card pt-3 shadow p-3 mb-5 rounded" style="width: 18rem;">
        <div class="card-header fst-italic">
            <img src="https://www.pngkey.com/png/full/362-3629652_5-elixir-de-clash-of-clans.png" style="width: 35px" />
            Elixir Cost: {{ card.Card.elixir }}
        </div>
        <img :src="card.Card.iconUrl"
            class="card-img-top border-bottom border-2 pb-2 pt-2" :alt="card.Card.name">
        <div class="card-body">
            <h3 class="card-title d-flex justify-content-center pt-3">{{ card.Card.name }}</h3>
            <div
            @click.prevent="removeCard(card.CardId)"
             class="btn btn-warning mt-4 d-flex justify-content-center">
                Remove
            </div>
        </div>
    </div>

</template>