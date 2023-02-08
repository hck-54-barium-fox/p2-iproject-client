<script>
import { mapActions, mapState } from 'pinia';
import { usePoemStore } from '../stores/poem';

export default {
    computed: {
        ...mapState(usePoemStore, ['poem', 'poemId', 'search', 'paymentlink', 'isviewing'])
    },
    methods: {
        ...mapActions(usePoemStore, ['paymentPoem'])
    },
    async created() {
        if (!this.isviewing) {

            await this.paymentPoem(this.poemId)
        }
    }
}
</script>

<template>
    <!-- poem result section  -->
    <section>
        <a v-if="this.isviewing === false" class="place-items-center mt-10 mb-10 btn max-w-xs ml-[101vh] btn-primary" :href="this.paymentlink">Send
            To Email for only IDR
            78.000,00</a>
        <div class="card bg-base-300 rounded-box place-items-center mt-10 p-16 mb-20 mx-80 text-xl">
            <h1 class="text-2xl font-bold pb-5">{{ this.search }}</h1>
            <p>
                {{ this.poem }}
            </p>
        </div>
    </section>
</template>