<script>
import MyCartDetail from "../components/MyCartDetail.vue";
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";

export default {
  name: "MyCartView",
  components: {
    MyCartDetail,
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<template>
  <div class="d-flex flex-column justify-content-between">
    <NavbarComponent />
    <main class="my-3">
      <div class="container-xxl">
        <div class="row m-auto d-flex flex-column">
          <MyCartDetail />
        </div>
      </div>
    </main>
    <FooterComponent />
  </div>
</template>
