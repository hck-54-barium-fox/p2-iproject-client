<script></script>

<template>
  <!-- Navbar -->
  <nav class="bg-sky-500 flex justify-center items-center shadow-xl">
    <div class="container-navbar flex w-[90vw] max-w-[1200px] justify-between items-center h-[4rem] ">
      <h1 class="text-[2rem]">Ya <span class="text-white">Booking</span></h1>
      <div class="flex gap-4">
        <button class="px-6 py-2 cursor-pointer text-[1.2rem] bg-slate-200 rounded">
          Register
        </button>
        <button class="px-6 py-2 cursor-pointer text-[1.2rem] bg-slate-200 rounded text-black">
          Login
        </button>
      </div>
    </div>
  </nav>
  <!-- header -->
  <div class="bg-sky-500 flex justify-center items-center shadow-xl ">
    <div class="w-[90vw] max-w-[1200px]">
      <div class="flex mt-4 gap-x-6 text-white">
        <button class="flex items-center">
          <span class="material-symbols-outlined text-[2.4rem] text-white">
            hotel
          </span>
          <span class="ml-2 text-lg">Stays</span>
        </button>

        <button class="flex items-center">
          <span class="material-symbols-outlined text-[2.4rem]">
            flight
          </span>
          <span class="ml-2 text-lg">Flight</span>
        </button>




      </div>
      <h2 class="text-[3rem] text-white mt-[5rem]">Bingung Cari Singgahan Ketika Liburan?</h2>
      <h2 class="text-[2rem] text-white mt-2">Ya <span class="text-white">Boking</span> Solusi nya</h2>
      <div class=" w-full mt-[7rem] relative">
        <div class="absolute bottom-[-1.5rem] w-full">
          <form>
            <div class="h-[4rem] rounded-md flex bg-white  py-[.5rem] px-2 gap-2 shadow-xl">
              <div class="bg-white flex items-center">
                <label for="destination" class="material-symbols-outlined text-[2.4rem]">
                  hotel
                </label>
                <input class="h-full w-[100%] outline-none px-2 py-1 rounded-sm" type="text" id="destination"
                  placeholder="Where are Ya Going">

              </div>
              <div class="bg-white flex items-center">
                <label for="date" class="material-symbols-outlined text-[2.4rem]">
                  date_range
                </label>
                <input class="h-full w-[100%] outline-none px-2 py-1 rounded-sm" type="text" id="date"
                  placeholder="Where are Ya Going">

              </div>
              <div class="bg-white flex items-center">
                <label for="date" class="material-symbols-outlined text-[2.4rem]">
                  flight
                </label>
                <input class="h-full w-[100%] outline-none px-2 py-1 rounded-sm" type="text" id="date"
                  placeholder="Where are Ya Going">

              </div>


              <button class="bg-sky-600 px-4 py-2 rounded-md ">Search</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
  <!-- popular -->

  <div class=" w-[90vw] max-w-[1200px] m-auto mt-[5rem]">
    <div class="flex gap-x-6 justify-center items-start">
      <div
        class="bg-[url('https://asianwanderlust.com/wp-content/uploads/2018/08/7-Bali-Resorts-RIMBA-1.jpg')] w-[360px] h-[300px] relative rounded-md shadow-xl ">
        <div class="bottom-0 absolute left-0   text-white">
          <p class="text-[4rem]">Bali</p>
          <p class="text-[2rem]">200 property</p>
        </div>
      </div>
      <div
        class="bg-[url('https://asianwanderlust.com/wp-content/uploads/2018/08/7-Bali-Resorts-RIMBA-1.jpg')] w-[360px] h-[300px] relative rounded-md shadow-xl ">
        <div class="bottom-0 absolute left-0 p-2 text-white">
          <p class="text-[4rem]">Bali</p>
          <p class="text-[2rem]">200 property</p>
        </div>
      </div>
      <div
        class="bg-[url('https://asianwanderlust.com/wp-content/uploads/2018/08/7-Bali-Resorts-RIMBA-1.jpg')] w-[360px] h-[300px] relative rounded-md shadow-xl ">
        <div class="bottom-0 absolute left-0 p-2 text-white">
          <p class="text-[4rem]">Bali</p>
          <p class="text-[2rem]">200 property</p>
        </div>
      </div>
    </div>
  </div>

  <!-- property -->
  <div class=" w-[90vw] max-w-[1200px] m-auto mt-[5rem]">
    <h2 class="my-8 text-[2rem]">Browse by property</h2>
    <div class="flex justify-center gap-4 items-start flex-wrap">
      <div class="w-[300px] shadow-lg">
        <img src="https://www.holidify.com/images/bgImages/BALI.jpg" class="w-full rounded h-[200px]" alt="">
        <div class="p-4">
          <h3 class="font-semibold text-[1.5rem] tracking-widest">Hotels</h3>
          <p class="font-light">223 hotels</p>
        </div>
      </div>
      <div class="w-[300px] shadow-lg">
        <img src="https://www.holidify.com/images/bgImages/BALI.jpg" class="w-full rounded h-[200px]" alt="">
        <div class="p-4">
          <h3 class="font-semibold text-[1.5rem] tracking-widest">Hotels</h3>
          <p class="font-light">223 hotels</p>
        </div>
      </div>
      <div class="w-[300px] shadow-lg">
        <img src="https://www.holidify.com/images/bgImages/BALI.jpg" class="w-full rounded h-[200px]" alt="">
        <div class="p-4">
          <h3 class="font-semibold text-[1.5rem] tracking-widest">Hotels</h3>
          <p class="font-light">223 hotels</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Home Guest -->
  <div class=" w-[90vw] max-w-[1200px] m-auto mt-[5rem]">
    <h2 class="my-8 text-[2rem]">Browse by property</h2>
    <div class="flex justify-center gap-4 items-start flex-wrap">
      <div class="w-[300px] shadow-lg">
        <img src="https://www.holidify.com/images/bgImages/BALI.jpg" class="w-full rounded h-[400px]" alt="">
        <div class="p-4">
          <h3 class="font-semibold text-[1.5rem] tracking-widest my-3">The Bista Hotels</h3>
          <p class="font-light my-3">Indonesia</p>
          <p class="font-medium my-3">Starting from $99</p>
          <p class="my-3">
            <span class="bg-sky-500 px-2 py-1 text-white rounded">98</span>
            super execlent
          </p>
        </div>
      </div>
      <div class="w-[300px] shadow-lg">
        <img src="https://www.holidify.com/images/bgImages/BALI.jpg" class="w-full rounded h-[400px]" alt="">
        <div class="p-4">
          <h3 class="font-semibold text-[1.5rem] tracking-widest my-3">The Bista Hotels</h3>
          <p class="font-light my-3">Indonesia</p>
          <p class="font-medium my-3">Starting from $99</p>
          <p class="my-3">
            <span class="bg-sky-500 px-2 py-1 text-white rounded">98</span>
            super execlent
          </p>
        </div>
      </div>
      <div class="w-[300px] shadow-lg">
        <img src="https://www.holidify.com/images/bgImages/BALI.jpg" class="w-full rounded h-[400px]" alt="">
        <div class="p-4">
          <h3 class="font-semibold text-[1.5rem] tracking-widest my-3">The Bista Hotels</h3>
          <p class="font-light my-3">Indonesia</p>
          <p class="font-medium my-3">Starting from $99</p>
          <p class="my-3">
            <span class="bg-sky-500 px-2 py-1 text-white rounded">98</span>
            super execlent
          </p>
        </div>
      </div>
      <div class="w-[300px] shadow-lg">
        <img src="https://www.holidify.com/images/bgImages/BALI.jpg" class="w-full rounded h-[400px]" alt="">
        <div class="p-4">
          <h3 class="font-semibold text-[1.5rem] tracking-widest my-3">The Bista Hotels</h3>
          <p class="font-light my-3">Indonesia</p>
          <p class="font-medium my-3">Starting from $99</p>
          <p class="my-3">
            <span class="bg-sky-500 px-2 py-1 text-white rounded">98</span>
            super execlent
          </p>
        </div>
      </div>
      <div class="w-[300px] shadow-lg">
        <img src="https://www.holidify.com/images/bgImages/BALI.jpg" class="w-full rounded h-[400px]" alt="">
        <div class="p-4">
          <h3 class="font-semibold text-[1.5rem] tracking-widest my-3">The Bista Hotels</h3>
          <p class="font-light my-3">Indonesia</p>
          <p class="font-medium my-3">Starting from $99</p>
          <p class="my-3">
            <span class="bg-sky-500 px-2 py-1 text-white rounded">98</span>
            super execlent
          </p>
        </div>
      </div>


    </div>
  </div>
  <!-- Footer -->
  <div class="bg-sky-500">
    <div class=" w-[90vw] max-w-[1200px] m-auto mt-[5rem] h-[20rem] flex items-center justify-center">

    </div>

  </div>

</template>