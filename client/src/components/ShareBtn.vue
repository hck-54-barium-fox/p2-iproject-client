<script>
import { mapState } from 'pinia';
import { useCardStore } from '../stores/card';

export default {
    data(){
        return {
            text: ''

        }
    },
    created(){
        for (let i = 0; i < this.dataDeck.length; i++) {
                 this.text += `${i+1}. Name: ${this.dataDeck[i].Card.name} || Elixir Cost: ${this.dataDeck[i].Card.elixir} \n`
            }
    },
    computed: {
        ...mapState(useCardStore, ['dataDeck']),
    }
}
</script>

<template>
    <div class="text-secondary d-flex justify-content-center">
        <div class="pe-2">
            Share your deck!
        </div>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" :data-text="text + 'from this cool website'" data-lang="id" data-show-count="false">Tweet</a>
    </div>
</template>