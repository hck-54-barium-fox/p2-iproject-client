<script>
    import Button from './components/Button.vue';
    export default{
        components: {
            Button
        }
    }
</script>

<template>
    <div class="App">
      <header id="sampul" class="App-header-sampul">
        <img src="./assets/flower-cover.png" alt="logo" class='h-72 mb-9 md:h-96'/>
        <h1 class='font-secondary text-secondary opacity-75 font-light text-lg mb-9'>You are Invited to Our Wedding</h1>
        <Button/>
      </header>
      <div id="undangan" class='hidden'>
        <!-- <Undangan/> -->
      </div> 
    </div>
</template>