<script>
import { mapWritableState, mapActions } from 'pinia';
import { usePoemStore } from '@/stores/poem'
import PerLetter from '../components/PerLetter.vue';
export default {
    components: {
        PerLetter
    },
    computed: {
        ...mapWritableState(usePoemStore, ['myLetters'])
    },
    methods: {
        ...mapActions(usePoemStore, ['fetchMyLetter', 'poetryById']),
        handleById() {
            this.poetryById()
        }
    },
    created() {
        this.fetchMyLetter()
    }
}
</script>

<template>
    <div class="flex gap-x-16 gap-y-10 m-20 flex-wrap text-center ml-[25vh]">

        <PerLetter v-for="letter in this.myLetters" :key="letter.id" :letter="letter" />


    </div>
</template>
