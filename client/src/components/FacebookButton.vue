<script>
import { mapActions } from "pinia";
import { useAppStore } from "../stores/app";
export default {
  methods: {
    //mapactions disini
    ...mapActions(useAppStore, ["doLoginFacebook"]),

    checkLoginState() {
      // Called when a person is finished with the Login Button.
      FB.getLoginStatus(function (response) {
        // See the onlogin handler
        this.statusChangeCallback(response);
      });
    },
    statusChangeCallback(response) {
      // Called with the results from FB.getLoginStatus().
      // console.log("statusChangeCallback");
      console.log(response, `ini respnoseee 111111111111111111111111`); // The current login status of the person.
      if (response.status === "connected") {
        // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
        console.log("Welcome!  Fetching your information.... ");
        const loginFb = this.doLoginFacebook;
        FB.api("/me?fields=name,email", function (response) {
          console.log(response, `ini response API`);
          console.log("Successful login for: " + response.name);
          // Logged into your webpage and Facebook
          loginFb(response);
          // document.getElementById("status").innerHTML =
          //   "Thanks for logging in, " + response.name + "!";
        });
      } else {
        // Not logged into your webpage or we are unable to tell.
        document.getElementById("status").innerHTML =
          "Please log " + "into this webpage.";
      }
    },
    testAPI() {
      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
      console.log("Welcome!  Fetching your information.... ");
      FB.api("/me?fields=name,email", function (response) {
        console.log(response, `ini respnose API`);
        console.log("Successful login for: " + response.name);
        document.getElementById("status").innerHTML =
          "Thanks for logging in, " + response.name + "!";
      });
    },
  },
  mounted() {
    window.statusChangeCallback = this.statusChangeCallback;
    FB.init({
      appId: "1280754636157430",
      cookie: true, // Enable cookies to allow the server to access the session.
      xfbml: true, // Parse social plugins on this webpage.
      version: "v3.2", // Use this Graph API version for this call.
    });

    FB.getLoginStatus(function (response) {
      // Called after the JS SDK has been initialized.
      // console.log(response, `iniii response`);
      // console.log(this);

      window.statusChangeCallback(response); // Returns the login status.
    });
  },
};
</script>

<template>
  <div>
    <fb:login-button scope="public_profile,email" :onlogin="checkLoginState">
    </fb:login-button>
    <div id="status"></div>
  </div>
</template>