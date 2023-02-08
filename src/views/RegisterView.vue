<script>
import RegisterForm from "../components/RegisterForm.vue";
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";

export default {
  name: "RegisterView",
  components: {
    RegisterForm,
    FooterComponent,
    NavbarComponent,
  },
};
</script>

<template>
  <div class="d-flex flex-column justify-content-between">
    <NavbarComponent />
    <main class="my-3">
      <div class="container-xxl">
        <div class="row m-auto">
          <RegisterForm />
        </div>
      </div>
    </main>
    <FooterComponent />
  </div>
</template>
