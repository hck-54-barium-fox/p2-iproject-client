<script>
import { mapActions, mapState } from 'pinia';
import { usePoemStore } from '../stores/poem';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
    computed: {
        ...mapState(usePoemStore, ['poem', 'poemId', 'search', 'paymentlink', 'isviewing'])
    },
    methods: {
        ...mapActions(usePoemStore, ['paymentPoem']),
        listenForSpeechEvents() {
            this.greetingSpeech.onstart = () => {
                this.isLoading = true
            }

            this.greetingSpeech.onend = () => {
                this.isLoading = false
            }
        },

        /**
         * Shout at the user
         */
        greet() {
            // it should be 'craic', but it doesn't sound right
            this.greetingSpeech.text = `${this.poem}`

            this.greetingSpeech.voice = this.voiceList[this.selectedVoice]

            this.synth.speak(this.greetingSpeech)
        }
    },
    async created() {
        if (!this.isviewing) {

            await this.paymentPoem(this.poemId)
        }
    },
    data() {
        return {
            isLoading: false,
            selectedVoice: 0,
            synth: window.speechSynthesis,
            voiceList: [],
            greetingSpeech: new window.SpeechSynthesisUtterance()
        }
    },

    components: {
        PulseLoader
    },

    mounted() {
        // wait for voices to load
        // I can't get FF to work without calling this first
        // Chrome works on the onvoiceschanged function
        this.voiceList = this.synth.getVoices()

        if (this.voiceList.length) {
            this.isLoading = false
        }

        this.synth.onvoiceschanged = () => {
            this.voiceList = this.synth.getVoices()
            // give a bit of delay to show loading screen
            // just for the sake of it, I suppose. Not the best reason
            setTimeout(() => {
                this.isLoading = false
            }, 800)
        }

        this.listenForSpeechEvents()
    },



}
</script>

<template>
    <!-- poem result section  -->
    <section>
        <a v-if="this.isviewing === false" class="place-items-center mt-10 mb-10 btn max-w-xs ml-[50vh] btn-primary"
            :href="this.paymentlink">Send
            To Email for only IDR
            78.000,00</a>
        <div class="ml-[50vh]">

            <transition name="fade" v-if="isLoading">
                <pulse-loader></pulse-loader>
            </transition>
    
            <transition name="fade" v-if="!isLoading">
                <div class="container flex flex-col gap-y-5">
    
                    <form @submit.prevent="greet">
    
                        <div class="form-group" v-if="voiceList.length">
                            <label for="voices">Select a voice</label>
                            <select class="select w-full max-w-xs" id="voices" v-model="selectedVoice">
                                <option v-for="(voice, index) in voiceList" :data-lang="voice.lang" :value="index">
                                    {{ voice.name }} ({{ voice.lang }})
                                </option>
                            </select>
                        </div>
    
                        <button class="btn btn-outline ml-10 shadow-md" type="submit">Listen
                            To The Poem</button>
                        <!-- <button type="submit" class="btn btn-success">Greet</button> -->
                        <!-- <button class="btn max-w-xs ml-10 bg-neutral-800 shadow-md mt-5" type="submit">Send Email</button> -->
                    </form>
    
                </div>
            </transition>
        </div>
        <div class="card bg-base-300 rounded-box place-items-center mt-10 p-16 mb-20 mx-80 text-xl">
            <h1 class="text-2xl font-bold pb-5">{{ this.search }}</h1>
            <p>
                {{ this.poem }}
            </p>
        </div>
    </section>
</template>