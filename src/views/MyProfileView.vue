<script>
import MyProfileDetail from "../components/MyProfileDetail.vue";
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";

export default {
  name: "MyProfile",
  components: {
    MyProfileDetail,
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
        <div class="row m-auto">
          <MyProfileDetail />
        </div>
      </div>
    </main>
    <FooterComponent />
  </div>
</template>
