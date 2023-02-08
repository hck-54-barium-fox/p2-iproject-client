<script>
import LoginForm from "../components/LoginForm.vue";
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";

export default {
  name: "LoginView",
  components: {
    LoginForm,
    FooterComponent,
    NavbarComponent,
  },
};
</script>

<template>
  <div class="d-flex flex-column justify-content-between">
    <NavbarComponent />
    <main class="my-3 py-3">
      <div class="container-xxl">
        <div class="row m-auto">
          <LoginForm />
        </div>
      </div>
    </main>
    <FooterComponent />
  </div>
</template>
