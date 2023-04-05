<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
    props: ['quote'],
    data() {
        return {
            isLoading: false,
            name: '',
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

    methods: {
        /**
         * React to speech events
         */
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
            this.greetingSpeech.text = `${this.quote.quote}`

            this.greetingSpeech.voice = this.voiceList[this.selectedVoice]

            this.synth.speak(this.greetingSpeech)
        }
    }

}
</script>

<template>
    <div>
        <h1 class="text-xl font-bold">{{ this.quote.movie }}</h1>
        <p class="mt-5 max-w-[50vh]">{{ this.quote.quote }}</p>
        <div class="mt-5">

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

                        <button class="btn btn-outline shadow-md" type="submit">Listen To The Quote</button>
                        <!-- <button type="submit" class="btn btn-success">Greet</button> -->
                        <!-- <button class="btn max-w-xs ml-10 bg-neutral-800 shadow-md mt-5" type="submit">Send Email</button> -->
                    </form>

                </div>
            </transition>
        </div>
    </div>
</template>