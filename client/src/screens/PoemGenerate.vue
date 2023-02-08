<script>
import { mapActions, mapWritableState } from 'pinia';
import { usePoemStore } from '../stores/poem';

export default {
    computed: {
        ...mapWritableState(usePoemStore, ['poemId', 'search'])
    },
    methods: {
        ...mapActions(usePoemStore, ['searchPoem']),
        async handleSearchPoem() {
            await this.searchPoem(this.search)
            if (this.poemId) {

                this.$router.push('/resultpoem')
            } else {
                console.log('Data not Found')
            }
        }
    }
}
</script>

<template>
    <!-- search page  -->
    <section>
        <h2 class="text-2xl text-center mt-[28vh] font-bold">Search a keyword for the poem that you are generating.</h2>
        <form method="submit" @submit.prevent="handleSearchPoem">
            <div class="container my-[4vh] pl-[68vh] flex flex-col gap-y-5">

                <input type="text" placeholder="Type something here..."
                    class="input input-bordered border-neutral-700 w-full max-w-sm text-center" v-model="search" />
                <h2 class="ml-14 text-sm">* try only searching one keyword at a time</h2>
                <button class="btn max-w-xs ml-10 mt-5 bg-gray-800" type="submit">Generate Poem</button>
            </div>
        </form>
    </section>
</template>