<script>
  import Navbar from '../components/Navbar.vue'

  export default{
    components: {
      Navbar
    },
  }
</script>

<template>
  <Navbar/>
    <div class='App'>
        <header class="App-header z-0 relative">          
          <div class='md:flex md:grid-cols-2 md:gap-7 md:mr-36 md:flex-row-reverse mx-16 mt-7'>
            <img src='../assets/CPWCPP.png' alt="CPPCPW" class='md:w-80 md:h-80 w-72 h-72'/>
            <div class='md:text-right md:max-w-md md:py-20'>
              <h1 class='md:text-5xl text-5xl font-semibold'>Wedding Invitation</h1>
              <p class='font-light leading-7'>
                Lorem bubur sumsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div class='flex text-slate-200 text-center md:text-base md:text-right md:justify-end justify-center gap-3 mt-5'>
                <a href='https://www.tiktok.com/@cppcpw' target='_blank' rel='noreferrer'>
                  <div class='bg-merah hover:bg-merahTua rounded-lg max-w-lg max-h-11'>
                    <p class='px-2 py-2'>Tiktok</p>
                  </div>
                </a>
                <a href='https://www.instagram.com/cpp.cpw/' target='_blank' rel='noreferrer'>
                  <div class='bg-merah hover:bg-merahTua rounded-lg max-w-lg max-h-11'>
                    <p class='px-3 py-2'>Instagram</p>
                  </div>
                </a>
                <a href='https://twitter.com/CppCpw' target='_blank' rel='noreferrer'>
                  <div class='bg-merah hover:bg-merahTua rounded-lg max-w-lg max-h-11'>
                    <p class='px-2 py-2'>Twitter</p>
                  </div>
                </a>
              </div>
            </div>            
          </div>
        </header>
      </div>
</template>