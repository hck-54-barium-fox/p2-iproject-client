<script>
  import { mapActions, mapState } from 'pinia';
  import { useCounterStore } from '../stores/counter';
  import Navbar from '../components/Navbar.vue'
  
  export default{
    components: {
      Navbar
    },
    methods: {
      ...mapActions(useCounterStore, ['buy'])
    }
  }
</script>

<template>
    <Navbar/>
    <div class='samplePage App-header'>
      <a @click="buy" rel="noreferrer" href='#' class='border-2 border-white rounded-md'>
        <span class='px-2'>BUY</span>
      </a>
    </div>
    <!-- <div class='samplePage App-header'>
      <a target='_blank' rel="noreferrer" href='https://rizcahelmi.com/' class='border-2 border-white rounded-md'>
        <span class='px-2'>rizcahelmi.com</span>
      </a>
    </div> -->
</template>