<script>
import MyProfileDetail from "../components/MyProfileDetail.vue";
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import { mapState } from "pinia";
import { useAppStore } from "../stores/app";

export default {
  name: "MyProfile",
  components: {
    MyProfileDetail,
    NavbarComponent,
    FooterComponent,
  },
  computed: {
    ...mapState(useAppStore, ["myProfile"]),
  },
};
</script>

<template>
  <div class="d-flex flex-column justify-content-between">
    <NavbarComponent />
    <main class="my-3">
      <div class="container-xxl">
        <div class="row m-auto">
          <MyProfileDetail :profile="myProfile" />
        </div>
      </div>
    </main>
    <FooterComponent />
  </div>
</template>
