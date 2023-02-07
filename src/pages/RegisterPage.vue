<script></script>

<template>
  <div class=" bg-theme_red h-[100vh] p-[3rem] flex ">
    <div class="login bg-theme_red h-full w-[40%] p-[3rem] flex flex-col justify-center items-center">
      <div class="title font-bold text-[3rem] text-white">Join us today!</div>
      <div class="login-form w-full">
        <form>
          <div class="form-content flex flex-col py-4">
            <label class="font-bold text-[1.5rem] text-white">Username</label>
            <input type="text" class="h-12 px-4 mt-2 rounded-3xl shadow-xl"/>
          </div>
          <div class="form-content flex flex-col py-4">
            <label class="font-bold text-[1.5rem] text-white">Email</label>
            <input type="text" class="h-12 px-4 mt-2 rounded-3xl shadow-xl"/>
          </div>
          <div class="form-content flex flex-col py-4">
            <label class="font-bold text-[1.5rem] text-white">Password</label>
            <input type="password" class="h-12 px-4 mt-2 rounded-3xl shadow-xl"/>
          </div>
          <div class="form-content flex justify-center items-center gap-8 mt-6">
            <button class=" bg-theme_red px-4 py-2 w-[8rem] rounded-3xl text-white font-semibold shadow-xl hover:scale-110 hover:bg-red-300 transition-all">Cancel</button>
            <button class="bg-theme_red px-4 py-2 w-[8rem] rounded-3xl text-white font-semibold shadow-xl hover:scale-110 hover:bg-red-300 transition-all">Login</button>
          </div>
        </form>
      </div>
    </div>
    <div class="banners bg-theme_red h-full w-[60%] flex justify-center items-center">
      <img src="../assets/images/CHILLCLOUDs.png"/>
    </div>
  </div>
</template>