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
    <div class='contactPage App-header'>
        <a href='https://www.tiktok.com/@cppcpw' target='_blank' rel='noreferrer'>
          <div id='tiktok' class='flex gap-3 border-2 border-white rounded-md w-80 my-2 hover:bg-tiktok ease-in-out duration-700 hover:duration-700 transition-all'>
            <img src='../assets/tiktok.png' alt="tiktok" class='w-9 h-9 m-2'/>
            <p class='py-1 text-3xl'>@cppcpw</p>
          </div>
        </a>
        <a href='https://www.instagram.com/cpp.cpw/' target='_blank' rel='noreferrer'>
          <div id='ig' class='flex gap-3 border-2 border-white rounded-md w-80 m-2 hover:bg-gradient-to-r from-ig1 via-ig2 to-ig3 hover:ease-in-out duration-700 hover:duration-700 transition-all'>            
            <img src='../assets/ig.png' alt="instagram" class='w-9 h-9 m-2'/>
            <p class='py-1 text-3xl'>@cpp.cpw</p>            
          </div>
        </a>
        <a href='https://twitter.com/CppCpw' target='_blank' rel='noreferrer'>
          <div id='twitter' class='flex gap-3 border-2 border-white rounded-md w-80 m-2 hover:bg-twitter ease-in-out duration-700 hover:duration-700 transition-all'>
            <img src='../assets/twitter.png' alt="instagram" class='w-9 h-9 m-2'/>
            <p class='py-1 text-3xl'>@cppcpw</p>
          </div>
        </a>
        <a href='https://api.whatsapp.com/send?phone=6281291106224&text=Hi%20kak,%20aku%20mau%20tanya%20tentang%20undangannya%20dong' target='_blank' rel='noreferrer'>
          <div id="wa" class='flex gap-3 border-2 border-white rounded w-80 m-2 hover:bg-wa ease-in-out duration-700 hover:duration-700 transition-all'>
            <img src='../assets/wa.png' alt="instagram" class='w-9 h-9 m-2'/>
            <p class='py-1 text-3xl'>Customer Service</p>
          </div>
        </a>
      </div>
</template>