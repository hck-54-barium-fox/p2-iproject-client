<script>
export default {};
</script>

<template>
  <div class="flex flex-col px-[35%] gap-[20px] min-h-screen justify-center">
    <div class="flex flex-col gap-3">
      <span class="text-3xl font-bold text-center italic">hafood</span>
      <span class="text-center text-primaryColor text-sm"
        >Please login here</span
      >
    </div>
    <input
      type="text"
      name="email"
      id="email"
      class="rounded-lg placeholder:text-sm"
      placeholder="Type email here"
    />
    <input
      type="password"
      name="password"
      id="password"
      class="rounded-lg placeholder:text-sm"
      placeholder="Type password here"
    />
    <button class="bg-primaryColor py-[10px] rounded-lg text-white font-bold">
      Sign In
    </button>
  </div>
</template>
