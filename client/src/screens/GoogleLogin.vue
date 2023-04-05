<script>
import { mapActions } from 'pinia'
import {usePoemStore} from '@/stores/poem'

export default {
    methods: {
        ...mapActions( usePoemStore, ['googleLogin']),
        callback(response){
            this.googleLogin(response)
        }

    }
}
</script>

<template>
    <div class="mt-[30vh]">
        <h1 class="text-4xl text-center font-bold mt-[25vh]">Start Generating The Best Letter You Could Ever Make By Logging In</h1>
    </div>
    <div class=" mt-20 ml-[75vh]">

    <GoogleLogin :callback="callback" />
    </div>
</template>