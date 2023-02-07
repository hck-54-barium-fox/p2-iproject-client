<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue"
import CardContent from "../components/CardContent.vue"
export default {
  components: {
    Navbar,
    Sidebar, 
    CardContent

  },
};
</script>

<template>
    <Navbar />

    <div class="flex">
        <Sidebar />
        <div class="container flex-wrap grid grid-cols">
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-4xl tracking-widest text-white text-center uppercase">
        <span class="block">Choose your Hero</span>
      </h2>
      <div class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <!-- HeroesCard -->
       <CardContent/>
      </div>
    </div>

        </div>
        
    </div>
    <div>

    </div>
</template>

<!-- v-for="post in allData.post" :key="post.id" :post="post" -->
