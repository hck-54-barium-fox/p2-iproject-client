<script>
</script>
<template>
 <!-- Navbar -->
 <nav class="bg-sky-500 flex justify-center items-center shadow-xl">
  <div class="container-navbar flex w-[90vw] max-w-[1200px] justify-between items-center h-[4rem] ">
   <h1 class="text-[2rem]">Ya <span class="text-white">Booking</span></h1>
   <div class="flex gap-4">
    <button class="px-6 py-2 cursor-pointer text-[1.2rem] bg-slate-200 rounded">
     Register
    </button>
    <button class=" px-6 py-2 cursor-pointer text-[1.2rem] bg-slate-200 rounded text-black">
     Login
    </button>
   </div>
  </div>
 </nav>
 <!-- header -->
 <div class="bg-sky-500 flex justify-center items-center shadow-xl ">
  <div class="w-[90vw] max-w-[1200px]">
   <div class="flex mt-4 gap-x-6 h-[10rem]">
    <div class="flex items-center">
     <span class="material-symbols-outlined text-[2.4rem]">
      hotel
     </span>
     <p class="ml-2 text-lg">Stays</p>
    </div>
    <div class="flex items-center">
     <span class="material-symbols-outlined text-[2.4rem]">
      flight
     </span>
     <p class="ml-2 text-lg">Flight</p>
    </div>
    <div class="flex items-center">
     <span class="material-symbols-outlined text-[2.4rem]">
      flight
     </span>
     <p class="ml-2 text-lg">Flight</p>
    </div>
    <div class="flex items-center">
     <span class="material-symbols-outlined text-[2.4rem]">
      flight
     </span>
     <p class="ml-2 text-lg">Flight</p>
    </div>
    <div class="flex items-center">
     <span class="material-symbols-outlined text-[2.4rem]">
      flight
     </span>
     <p class="ml-2 text-lg">Flight</p>
    </div>


   </div>

  </div>
 </div>
 <!-- List Boking -->

 <div class="w-[90vw] max-w-[1200px] m-auto my-[4rem] flex gap-1">
  <div class="bg-yellow-400 w-[25rem] h-fit sticky top-0 p-4 rounded shadow-lg">
   <h4 class="text-[1.5rem] text-slate-50">Search</h4>
   <form>
    <div class="w-full my-6">
     <label for="" class="font-light">destination</label>
     <input type="text" class="w-full h-[2.3rem] rounded outline-none px-4 py-2">
    </div>
    <div class="w-full my-6">
     <label for="" class="font-light">check in date</label>
     <input type="text" class="w-full h-[2.3rem] rounded outline-none px-4 py-2">
    </div>
    <div class="w-full my-6">
     <label for="" class="font-light">check out date</label>
     <input type="text" class="w-full h-[2.3rem] rounded outline-none px-4 py-2">
    </div>
    <div class="w-full my-6">
     <label for="" class="font-light">15-night stay</label>
     <input type="text" class="w-full h-[2.3rem] rounded outline-none px-4 py-2">
    </div>

    <button class="w-full bg-sky-500 px-4 py-2 rounded text-white">Search</button>

   </form>
  </div>
  <div class="flex-1 flex flex-col gap-8">
   <div
    class="cursor-pointer hover:bg-slate-100 hover:shadow-xl flex flex-row w-full gap-10 h-[250px] bg-slate-50  rounded-sm shadow-lg transition-all duration-300 ease-in ">
    <img src="https://www.holidify.com/images/bgImages/BALI.jpg" alt="" class="w-[300px] h-full flex-shrink rounded-sm">
    <div class="flex-1 ">
     <h3 class="text-[2rem] tracking-wider text-sky-900">The Bista Hotels</h3>
     <p>country: konoha</p>
     <p class="my-1">City : Malang</p>
     <p class=" my-1">Address : 185 Remedios Street, Andria Village, Cavite</p>
     <p>Score : <span>80</span></p>
     <p>Price: 50 jute</p>
    </div>

   </div>
   <div
    class="cursor-pointer hover:bg-slate-100 hover:shadow-xl flex flex-row w-full gap-10 h-[250px] bg-slate-50  rounded-sm shadow-lg transition-all duration-300 ease-in ">
    <img src="https://www.holidify.com/images/bgImages/BALI.jpg" alt="" class="w-[300px] h-full flex-shrink rounded-sm">
    <div class="flex-1 ">
     <h3 class="text-[2rem] tracking-wider text-sky-900">The Bista Hotels</h3>
     <p>country: konoha</p>
     <p class="my-1">City : Malang</p>
     <p class=" my-1">Address : 185 Remedios Street, Andria Village, Cavite</p>
     <p>Score : <span>80</span></p>
     <p>Price: 50 jute</p>
    </div>

   </div>
   <div
    class="cursor-pointer hover:bg-slate-100 hover:shadow-xl flex flex-row w-full gap-10 h-[250px] bg-slate-50  rounded-sm shadow-lg transition-all duration-300 ease-in ">
    <img src="https://www.holidify.com/images/bgImages/BALI.jpg" alt="" class="w-[300px] h-full flex-shrink rounded-sm">
    <div class="flex-1 ">
     <h3 class="text-[2rem] tracking-wider text-sky-900">The Bista Hotels</h3>
     <p>country: konoha</p>
     <p class="my-1">City : Malang</p>
     <p class=" my-1">Address : 185 Remedios Street, Andria Village, Cavite</p>
     <p>Score : <span>80</span></p>
     <p>Price: 50 jute</p>
    </div>

   </div>
  </div>
 </div>



</template>