<script></script>

<template>
  <div class=" bg-theme_red h-[100vh] p-[3rem] flex ">
    <div class="login bg-theme_red h-full w-[40%] p-[3rem] flex flex-col justify-center items-center">
      <div class="title font-bold text-[3rem] text-white">Login</div>
      <div class="login-form w-full">
        <form>
          <div class="form-content flex flex-col py-4">
            <label class="font-bold text-[1.5rem] text-white">Email</label>
            <input type="text" class="h-12 px-4 mt-2 rounded-3xl shadow-xl"/>
          </div>
          <div class="form-content flex flex-col pb-4">
            <label class="font-bold text-[1.5rem] text-white">Password</label>
            <input type="password" class="h-12 px-4 mt-2 rounded-3xl shadow-xl"/>
          </div>
          <div class="form-content flex justify-center items-center pb-6">
            <p class="text-white">Don't have an account? <a href="#" class="font-bold text-blue-300 hover:text-[1.3rem] transition-all">sign up</a> here!</p>
          </div>
          <div class="form-content flex justify-center items-center gap-8">
            <button class="bg-theme_red px-4 py-2 w-[8rem] rounded-3xl text-white font-semibold shadow-xl hover:scale-110 hover:bg-red-300 transition-all">Login</button>
          </div>
        </form>
      </div>
    </div>
    <div class="banners bg-theme_red h-full w-[60%] flex justify-center items-center">
      <img class="" src="../assets/images/CHILLCLOUDs.png"/>
    </div>
  </div>
</template>

<style scoped>
</style>