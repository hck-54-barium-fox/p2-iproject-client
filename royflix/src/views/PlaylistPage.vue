<script>
import { useCustomerStore } from '../stores/customer'
import { mapActions } from 'pinia';

export default {
    data(){
        return {
            log : ''
        }
    },
    methods : {
        ...mapActions(useCustomerStore, ['addGoogleCalendar','googleLogin']),
        hnedleGoogleCalendar(){
            this.addGoogleCalendar()
            // console.log('<<<<< masuk');
        },
        callback(response) {
            console.log("masuk");
            this.googleLogin(response) 
        }
    }
}
</script>
<template>
    <GoogleLogin :callback="callback" />
    <button @click="hnedleGoogleCalendar" class="btn btn-primary"> calendar</button>
   

   
</template>