<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
export default {
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<template>
  <div>
    <Navbar />
    <div class="grid grid-cols-8 min-h-screen">
      <!-- Sidebar -->
      <Sidebar />
      <!-- Content -->
      <div class="col-span-6 p-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
